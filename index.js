let loaded = false
let kirbyTable;

let kirbyColorSet;

let kirbyColors;

let table;
let tableRows;

function doStuff() {
    if (!loaded) {
        loadValues();
        loaded = true;
    }

    updateKirbyColors();


    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d");
    for (let y = 0; y < kirbyTable.length; y++) {
        for (let x = 0; x < kirbyTable[y].length; x++) {
            let color = kirbyTable[y] ? kirbyTable[y][x] ? kirbyTable[y][x].color ? kirbyTable[y][x].color : "#FFFFFF" : "#FFFFFF" : "#FFFFFF";

            ctx.fillStyle = color;

            ctx.beginPath(); // Start a new path
            ctx.rect(x * 20, y * 20, 20, 20); // Add a rectangle to the current path
            ctx.fill(); // Render the path
        }
    }
}

function updateKirbyColors() {
    for (let i = 0; i < tableRows.length; i++) {
        kirbyColors[i].color = tableRows[i].input.value;
        tableRows[i].span.innerHTML = `${tableRows[i].number}: ${tableRows[i].input.value}`;
    }
}


function loadValues() {
    kirbyTable = [
        [
            null, null, null,
            null, null, null,
            null, null, '#b18989',
            '#b18989', '#b18989', '#b18989',
            '#c9a1aa', '#c9a1aa', null,
            null, null, null,
            null, null
        ],
        [
            null, null, null,
            null, null, null,
            '#b18989', '#a94f46', '#d1c1c1',
            '#e9d1d1', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#d1c1c1', '#c9a1aa',
            '#c9a1aa', null, null,
            null, null
        ],
        [
            null, null, null,
            null, null, '#a94f46',
            '#d1c1c1', '#d1c1c1', '#f0e1e9',
            '#f8f8f8', '#f8f8f8', '#f8f8f8',
            '#f8f8f8', '#f8f8f8', '#f8f8f8',
            '#d1c1c1', '#b18989', null,
            null, null
        ],
        [
            null, null, null,
            null, '#a94f46', '#d1c1c1',
            '#f0e1e9', '#f0e1e9', '#f8f8f8',
            '#f8f8f8', '#f8f8f8', '#f8f8f8',
            '#f8f8f8', '#f8f8f8', '#f8f8f8',
            '#f8f8f8', '#f0e1e9', '#b18989',
            null, null
        ],
        [
            null, null, null,
            '#b18989', '#d1c1c1', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#f8f8f8', '#f8f8f8', '#f8f8f8',
            '#f8f8f8', '#f8f8f8', '#f8f8f8',
            '#f8f8f8', '#f8f8f8', '#a94f46',
            null, null
        ],
        [
            null, null, null,
            '#a94f46', '#e9d1d1', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#f8f8f8', '#f8f8f8',
            '#f8f8f8', '#f8f8f8', '#f8f8f8',
            '#f8f8f8', '#f8f8f8', '#f0e1e9',
            '#c9a1aa', null
        ],
        [
            null, null, '#a94f46',
            '#d1c1c1', '#e9d1d1', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#f8f8f8', '#f0e1e9', '#f8f8f8',
            '#a94f46', '#f8f8f8', '#a94f46',
            '#f0e1e9', '#f8f8f8', '#f8f8f8',
            '#a94f46', null
        ],
        [
            null, '#a94f46', '#d1c1c1',
            '#e9d1d1', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f8f8f8',
            '#b18989', '#f8f8f8', '#b18989',
            '#f0e1e9', '#f8f8f8', '#f8f8f8',
            '#b18989', null
        ],
        [
            null, '#a94f46', '#d1c1c1',
            '#e9d1d1', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f8f8f8',
            '#a94f46', '#f0e1e9', '#a94f46',
            '#f0e1e9', '#f8f8f8', '#f8f8f8',
            '#d1c1c1', '#b18989'
        ],
        [
            '#a94f46', '#c9a1aa', '#f0a1b9',
            '#e9d1d1', '#e9d1d1', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#e97981', '#e97981', '#f0e1e9',
            '#a94f46', '#f0e1e9', '#a94f46',
            '#f0e1e9', '#e97981', '#f0e1e9',
            '#f0e1e9', '#a94f46'
        ],
        [
            '#a94f46', '#c9a1aa', '#f0a1b9',
            '#d1c1c1', '#e9d1d1', '#e9d1d1',
            '#e9d1d1', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#f8f8f8', '#a94f46'
        ],
        [
            '#a94f46', '#c9a1aa', '#f0a1b9',
            '#f0a1b9', '#d1c1c1', '#d1c1c1',
            '#e9d1d1', '#e9d1d1', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#a94f46', '#e9d1d1',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#f8f8f8', '#a94f46'
        ],
        [
            null, '#a94f46', '#c9a1aa',
            '#f0a1b9', '#f0a1b9', '#f0a1b9',
            '#c9a1aa', '#f0a1b9', '#e9d1d1',
            '#e9d1d1', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#a94f46', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#a94f46'
        ],
        [
            null, null, '#a94f46',
            '#b18989', '#c9a1aa', '#b18989',
            '#d17981', '#f0a1b9', '#f0a1b9',
            '#e9d1d1', '#e9d1d1', '#e9d1d1',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#f0e1e9', '#f0e1e9', '#f0e1e9',
            '#a94f46', null
        ],
        [
            null, null, null,
            '#b1352c', '#b1352c', '#a94f46',
            '#a94f46', '#f0a1b9', '#f0a1b9',
            '#f0a1b9', '#f0a1b9', '#e9d1d1',
            '#e9d1d1', '#e9d1d1', '#e9d1d1',
            '#e9d1d1', '#b18989', '#a94f46',
            '#a94f46', null
        ],
        [
            null, null, '#a94f46',
            '#e97981', '#e97981', '#e94f46',
            '#e94f46', '#b1352c', '#b1352c',
            '#c9a1aa', '#f0a1b9', '#f0a1b9',
            '#f0a1b9', '#f0a1b9', '#b18989',
            '#b1352c', '#b1352c', '#e97981',
            '#e97981', '#d17981'
        ],
        [
            null, null, '#a94f46',
            '#e94f46', '#e94f46', '#e11a11',
            '#e11a11', '#e11a11', '#e11a11',
            '#a94f46', '#a94f46', '#a94f46',
            '#a97171', '#b1352c', '#b1352c',
            '#e94f46', '#e94f46', '#e97981',
            '#e97981', '#b1352c'
        ],
        [
            null, null, null,
            '#a94f46', '#b11107', '#b11107',
            '#e11a11', '#e11a11', '#b11107',
            '#a94f46', null, null,
            null, '#a94f46', '#e11a11',
            '#b11107', '#b11107', '#b11107',
            '#b1352c', null
        ]
    ]
    
    kirbyColorSet = new Set();
    
    for (let y = 0; y < kirbyTable.length; y++) {
        for (let x = 0; x < kirbyTable[y].length; x++) {
            kirbyColorSet.add(kirbyTable[y][x]);
        }
    }
    
    kirbyColors = [];
    
    kirbyColorSet.forEach(value => {
        if (!!value)
        kirbyColors.push({ color: value });
    })
    
    for (let y = 0; y < kirbyTable.length; y++) {
        for (let x = 0; x < kirbyTable[y].length; x++) {
            for (let color of kirbyColors) {
                if (kirbyTable[y][x] === color.color) {
                    kirbyTable[y][x] = color;
                }
            }
        }
    }

    table = document.getElementById("table");
    tableRows = [];
    for (let i = 0; i < kirbyColors.length ; i++) {

        let color = kirbyColors[i]
        console.log(color)
        let row = table.insertRow(0);
        let cell = row.insertCell(0);
        let cell2 = row.insertCell(1);

        var span = document.createElement("span");
        span.innerHTML = `${15-i}: ${kirbyColors[i].color}`;

        cell2.appendChild(span)

        var input = document.createElement("input");
        input.type = "color";
        input.addEventListener("input", doStuff);
        cell.appendChild(input); // put it into the DOM
        input.value = color.color

        tableRows.push(
            {
                color: color,
                input: input,
                number: 15-i,
                span: span
            }
        );
    }
}

//   document.addEventListener("click", draw)

document.addEventListener("click", doStuff);


