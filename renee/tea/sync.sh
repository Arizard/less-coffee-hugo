#!/bin/bash

# Tea Collection Data Updater
# Fetches CSV from Google Sheets and updates index.html with new tea data

# Google Sheets published CSV URL
CSV_URL="https://docs.google.com/spreadsheets/d/e/2PACX-1vR4DLqysu3rYpdYuH9T_hRtpmPK6QysEePyWhUyLuVMBWiPqw2JkNHvIHiOOMElEIpovo-abGg2g4r1/pub?gid=0&single=true&output=csv"

# File paths
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
HTML_FILE="$SCRIPT_DIR/index.html"
CSV_FILE="$SCRIPT_DIR/tea-data.csv"

echo "🍵 Tea Collection Data Updater"
echo "=============================="

# Check if index.html exists
if [ ! -f "$HTML_FILE" ]; then
    echo "❌ Error: index.html not found in $SCRIPT_DIR"
    exit 1
fi

# Fetch CSV from Google Sheets
echo "📥 Fetching CSV from Google Sheets..."
if ! curl -sL "$CSV_URL" -o "$CSV_FILE"; then
    echo "❌ Error: Failed to fetch CSV"
    exit 1
fi

echo "✅ CSV downloaded successfully"
echo "🔄 Parsing CSV and updating HTML..."

# Create backup
cp "$HTML_FILE" "$HTML_FILE.bak"

# Use Python for CSV parsing and HTML updating (Python 3 is pre-installed on macOS)
python3 << 'EOF'
import csv
import json
import sys
import os

script_dir = os.path.dirname(os.path.abspath('tea-data.csv'))
csv_file = 'tea-data.csv'
html_file = 'index.html'

# Parse CSV
teas = []
with open(csv_file, 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for i, row in enumerate(reader, 1):
        name = row.get('Tea name', '').strip()
        if not name:
            continue
        
        # Parse flavours into array
        flavours_str = row.get('Tea flavours', '')
        flavours = [f.strip() for f in flavours_str.split(',') if f.strip()]
        
        # Parse favourite rating
        fav = row.get("Renee's favourites", '0').strip()
        try:
            favourite = int(fav) if fav else 0
        except ValueError:
            favourite = 0
        
        tea = {
            'id': i,
            'name': name,
            'brand': row.get('Brand', '').strip(),
            'type': row.get('Type', '').strip(),
            'flavours': flavours,
            'ingredients': row.get('Ingredients', '').strip().replace('\n', ' '),
            'favourite': favourite,
            'website': row.get('Website link', '').strip(),
            'picture': row.get('Picture file path', '').strip()
        }
        teas.append(tea)

# Generate JavaScript
lines = []
lines.append("    // Tea data embedded from CSV")
lines.append("    const teaData = [")
for i, tea in enumerate(teas):
    comma = "," if i < len(teas) - 1 else ""
    flavours_js = json.dumps(tea['flavours'])
    
    # Escape for JS string
    def js_escape(s):
        return s.replace('\\', '\\\\').replace('"', '\\"')
    
    line = f'      {{id:{tea["id"]},name:"{js_escape(tea["name"])}",brand:"{js_escape(tea["brand"])}",type:"{js_escape(tea["type"])}",flavours:{flavours_js},ingredients:"{js_escape(tea["ingredients"])}",favourite:{tea["favourite"]},website:"{js_escape(tea["website"])}",picture:"{js_escape(tea["picture"])}"}}{comma}'
    lines.append(line)

lines.append("    ];")
new_data = '\n'.join(lines)

# Read HTML
with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

# Find and replace tea data block
start_marker = '    // Tea data embedded from CSV'
end_marker = '    ];'

start_idx = html.find(start_marker)
if start_idx == -1:
    print("❌ Error: Could not find tea data marker in HTML", file=sys.stderr)
    sys.exit(1)

# Find the closing ]; after the teaData array
search_start = start_idx + len(start_marker)
end_idx = html.find(end_marker, search_start)
if end_idx == -1:
    print("❌ Error: Could not find end of tea data in HTML", file=sys.stderr)
    sys.exit(1)
end_idx += len(end_marker)

# Replace
new_html = html[:start_idx] + new_data + html[end_idx:]

# Write updated HTML
with open(html_file, 'w', encoding='utf-8') as f:
    f.write(new_html)

print(f"📊 Total teas in collection: {len(teas)}")
EOF

# Check result
if [ $? -eq 0 ]; then
    rm -f "$CSV_FILE"
    echo "✅ index.html updated successfully"
    echo "💾 Backup saved to index.html.bak"
    echo "=============================="
    echo "🎉 Update complete!"
else
    echo "❌ Error: Update failed"
    mv "$HTML_FILE.bak" "$HTML_FILE"
    rm -f "$CSV_FILE"
    exit 1
fi

cp index.html ../../static/renee-tea-catalogue/index.html

