window.addEventListener('load', (event) => {
    initPlot();
});

function initPlot() {
    const exerciseNames = ['Burpees','Lunges','Pushups','Sit Ups','Skip Rope<br>Jumps','Squats','Star<br>Jumps','Tuck<br>Jumps','V-Sits','High<br>Knees'];
    const studentScoreByName = {
        'Aiden L': [null, null, null, null, null, null, 91, null, null, null],
        'Alyssa': [11, null, null, null, null, null, null, null, null, null],
        'Andrew K': [null, null, null, null, null, null, null, null, 12, null],
        'Ariana': [18, null, 25, null, null, 39, 65, null, null, null],
        'Arvind': [25, null, null, null, null, null, 75, null, null, null],
        'Bernard': [null, 60, 99, null, null, null, null, null, null, null],
        'Emily': [39, 103, null, null, null, 96, 62, 73, null, 127],
        'Ethan T': [null, null, null, null, null, null, 145, null, null, null],
        'Heidi': [null, null, null, 46, null, null, null, null, null, null],
        'Hubert': [20, null, null, null, null, null, 80, null, null, null],
        'Jaime': [null, null, null, null, null, null, 65, null, null, null],
        'Jeffery': [7, 28, null, null, 72, 60, 104, 27, 12, null],
        'Justin': [null, null, 76, null, null, null, null, null, null, null],
        'Leonardo': [null, null, null, null, null, null, 80, null, null, null],
        'Olivia': [null, null, null, null, null, null, 15, null, null, null],
        'Phillip': [null, null, null, null, null, null, 76, 32, null, null],
        'Pieter': [null, null, null, null, null, null, 150, null, null, null],
        'Raf': [10, null, null, null, null, null, null, null, null, null],
        'Shriya': [null, null, null, 15, null, null, 60, null, null, null],
        'Vanessa': [29, null, null, null, null, null, null, null, null, null],
        'Yumi': [29, null, null, 35, null, 66, null, null, 20, null],
    };
    const data = [];

    const studentNames = Object.keys(studentScoreByName);
    const studentColorByName = studentNames.reduce(
        (previousValue, currentValue, currentIndex) => {
            previousValue[`${currentValue}`] = `hsl(${(currentIndex / studentNames.length) * 360}, 100%, 60%)`;
            return previousValue
        },
        {});

    console.log(studentColorByName);

    for (let studentName in studentScoreByName) {
        const studentScore = studentScoreByName[studentName];
        const trace = {
            type: 'scatter',
            x: studentScore,
            y: exerciseNames,
            mode: 'markers',
            name: `${studentName}`,
            text: `by <b>${studentName}</b>`,
            marker: {
                color: studentColorByName[studentName],
                symbol: 'circle',
                size: 16
            },
            hoverinfo: 'x+y+text',
        };
        data.push(trace);
    }

    const layout = {
        title: 'Number of Exercises Completed <br> by Students in 1 Minute',
        font: {
            family: 'Inter',
            weight: 600,
        },
        hoverlabel: { bgcolor: "#FFF" },
        xaxis: {
            fixedrange: true,
            title: 'Number of Exercises<br>Completed in 1 Minute',
            showgrid: false,
            showline: true,
            linecolor: 'rgb(102, 102, 102)',
            titlefont: {
                font: {
                    family: 'Inter',
                    color: 'rgb(204, 204, 204)',
                    weight: 'bold',
                }
            },
            tickfont: {
                font: {
                    family: 'Inter',
                    color: 'rgb(102, 102, 102)'
                }
            },
            autotick: false,
            dtick: 10,
            ticks: 'outside',
            tickcolor: 'rgb(102, 102, 102)'
        },
        yaxis: {
            fixedrange: true,
        },
        margin: {
            l: 60,
            r: 20,
            b: 80,
            t: 80
        },
        legend: {
            font: {
                size: 10,
            },
            yanchor: 'top',
            xanchor: 'left',
        },
        height: 600,
        paper_bgcolor: 'white',
        plot_bgcolor: 'white',
        hovermode: 'closest',
        annotations: [{
            xref: 'paper',
            yref: 'paper',
            x: 127,
            xanchor: 'right',
            y: "High<br>Knees",
            yanchor: 'bottom',
            text: 'X axis label',
            showarrow: false
        }]
    };

    const config = {
        displayModeBar: false,
        responsive: true,
        scrollZoom: false,
    };

    Plotly.newPlot('plot01', data, layout, config);
}
