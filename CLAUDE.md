# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run serve`: Start Hugo development server with drafts (`hugo serve -D`)
- `npm run serve-prod`: Start production server without drafts (`hugo serve`)
- `hugo new posts/post-name/index.md`: Create new blog post using archetype

### Build
- `hugo`: Build the static site to `public/` directory

## Architecture

### Hugo Static Site
This is a Hugo-based personal blog and portfolio website with the following structure:

- **Theme**: Uses custom theme `etch-less-coffee` (a fork of the `etch` theme)
- **Content**: Blog posts in `/content/posts/`, each in its own directory with `index.md` and assets
- **Gallery**: Photography gallery with image processing and multiple sizes
- **Resume**: Static resume page at `/resume/`

### Site Configuration
- **baseURL**: https://less.coffee/
- **Permalinks**: Blog posts use title-based URLs (`/:title/`)
- **Markup**: Goldmark with unsafe HTML enabled for rich content
- **Syntax Highlighting**: Pygments with CSS classes

### Content Structure
- Posts follow Hugo's page bundle structure (each post in its own directory)
- Default archetype includes frontmatter for title, subtitle, hero image, date, author, and draft status
- Images and assets are co-located with content
- Gallery uses Hugo's image processing for responsive images

### Lambda@Edge Function
The `less-coffee-lambda-at-edge/` directory contains AWS Lambda@Edge functions for URL rewriting:
- Adds trailing slashes to URLs
- Resolves directory paths to `index.html`
- Used for CloudFront distribution routing

### Deployment
- Static files built to `public/` directory
- Deployed automatically to an S3 bucket via GitHub Actions
- AWS CloudFront distribution with Lambda@Edge URL rewriting
- note that for tags, technical: related to programming, has code snippets and examples. career: soft skills which applies outside of engineering, and analysis of workplace relationships. creative: visual stuff, focused on creating images, words or audio.
- you should use the {{< figure shortcode
- all svg that gets inlined should have viewbox for proper css scaling

## Writing Style Guidelines

Based on analysis of the author's writing preferences:

### Voice and Tone
- **Direct and punchy**: Working towards using a consistent "active voice"--refer to _Writing Science in Plain English_. Prefers concise sentences over verbose explanations
- **Conversational and personal**: Uses "I" frequently, shares personal anecdotes and experiences
- **Professional but relatable**: Discusses technical topics with accessible language

### Language Preferences
- **Eliminate filler words**: Remove "actually," "really," "all," and other unnecessary intensifiers
- **Tighten verbose phrases**: "claims to have worked" → "worked", "I reckon that's" → "that's"
- **Vary vocabulary**: Avoid repetition of "work/working," "hour/hours," "code/coding"
- **Strong, specific verbs**: "dedicate" over "put," "hanging back" over "staying," "smash out" over "write"

### Structure
- **Clear paragraph breaks**: Each paragraph focuses on a single idea
- **Smooth transitions**: Uses phrases like "Despite this warning" to connect contrasting ideas
- **Context for visuals**: Charts and graphics should have brief explanatory text
- **Cohesive flow**: Personal anecdotes support the main argument rather than standing alone

### Content Style
- **Uses humor strategically**: "woke deadline" as workplace terminology
- **Balances perspectives**: Acknowledges counter-arguments (burnout warnings) while presenting personal view
- **Concrete examples**: References specific projects (multi-factor authentication) and companies
- **Ends with actionable advice**: Concludes with clear guidance for readers

## Writing Science in Plain English - Key Principles

Based on Anne E. Greene's guide for clear scientific writing:

### Sentence Structure
- **Active voice**: "We measured the temperature" not "The temperature was measured"
- **Subject-verb-object order**: Put the actor first, action second, object last
- **Short sentences**: Average 15-20 words per sentence
- **One main idea per sentence**: Don't pack multiple concepts into a single sentence

### Word Choice
- **Concrete nouns**: "The algorithm" not "the implementation"
- **Strong verbs**: "demonstrates" not "shows evidence of"
- **Eliminate nominalizations**: "We analyzed" not "An analysis was performed"
- **Avoid hedge words**: "possibly," "perhaps," "might" weaken your message

### Paragraph Structure
- **Topic sentences**: Lead with the main point
- **Supporting details follow**: Evidence and examples come after the claim
- **Logical flow**: Each sentence connects to the next
- **Transitions**: Use connecting words to guide readers

### Clarity Techniques
- **Define technical terms**: Don't assume readers know jargon
- **Use parallel structure**: "We tested, analyzed, and documented" not "We tested, performed analysis, and documentation was created"
- **Cut unnecessary words**: "In order to" becomes "to"
- **Specific over general**: "Reduced response time by 40%" not "improved performance"
