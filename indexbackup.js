let loaded = false
let kirbyTable;

let image1, image0, image2, image3, image4;

let kirbyImages;
let currentImage;
let intervalActive;

let kirbyColorz;
let kirbyColors;
let defaultKirbyColors;
let currentKirbyColors;
let textarea;

let body;
let table;
let tableRows;
let hueSlider;
let bodySlider;
let feetSlider;
let saturationSlider;
let saturationBodySlider;
let saturationFeetSlider;
let brightnessSlider;
let brightnessBodySlider;
let brightnessFeetSlider;


let canvas, ctx;

let pixelSize = 20;


function saveCurrentColors() {
    for (let i = 0; i < tableRows.length; i++) {
        currentKirbyColors[i] = tableRows[i].input.value
    }
}

function changeKirbyHue() {
    let num = Number.parseInt(hueSlider.value);
    for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].input.value = changeHue(currentKirbyColors[i], num)
    }
    doStuff();
}

function changeKirbyBrightness() {
    let num = Number.parseFloat(brightnessSlider.value);
    for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].input.value = changeBrightness(currentKirbyColors[i], num)
    }
    doStuff();
}

function changeKirbySaturation() {
    let num = Number.parseFloat(saturationSlider.value);
    for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].input.value = changeSaturation(currentKirbyColors[i], num)
    }
    doStuff();
}

function uniformBodyHues() {
    let color = -1;
    for (let i = 0; i < tableRows.length; i++) {
        if (body.indexOf(i) !== -1) {
            if (color == -1) {
                color = currentKirbyColors[i]
            }
            tableRows[i].input.value = setHue(tableRows[i].input.value, color)
        }
    }
    saveCurrentColors()
    doStuff();
}

function uniformFeetHues() {
    let color = -1;
    for (let i = 0; i < tableRows.length; i++) {
        if (body.indexOf(i) === -1) {
            if (color == -1) {
                color = currentKirbyColors[i]
            }
            tableRows[i].input.value = setHue(tableRows[i].input.value, color)
        }
    }
    saveCurrentColors()
    doStuff();
}


function changeKirbyBodyHue() {
    let num = Number.parseInt(bodySlider.value);
    for (let i = 0; i < tableRows.length; i++) {
        if (body.indexOf(i) !== -1) {
            tableRows[i].input.value = changeHue(currentKirbyColors[i], num)
        }
    }
    doStuff();
}

function changeKirbyBodyBrightness() {
    let num = Number.parseFloat(brightnessBodySlider.value);
    for (let i = 0; i < tableRows.length; i++) {
        if (body.indexOf(i) !== -1) {
            tableRows[i].input.value = changeBrightness(currentKirbyColors[i], num)
        }
    }
    doStuff();
}

function changeKirbyBodySaturation() {
    let num = Number.parseFloat(saturationBodySlider.value);
    for (let i = 0; i < tableRows.length; i++) {
        if (body.indexOf(i) !== -1) {
            tableRows[i].input.value = changeSaturation(currentKirbyColors[i], num)
        }
    }
    doStuff();
}

function changeKirbyFeetHue() {
    let num = Number.parseInt(feetSlider.value);
    for (let i = 0; i < tableRows.length; i++) {

        if (body.indexOf(i) === -1) {
            tableRows[i].input.value = changeHue(currentKirbyColors[i], num)
        }
    }
    doStuff();
}

function changeKirbyFeetSaturation() {
    let num = Number.parseFloat(saturationFeetSlider.value);
    for (let i = 0; i < tableRows.length; i++) {

        if (body.indexOf(i) === -1) {
            tableRows[i].input.value = changeSaturation(currentKirbyColors[i], num)
        }
    }
    doStuff();
}

function changeKirbyFeetBrightness() {
    let num = Number.parseFloat(brightnessFeetSlider.value);
    for (let i = 0; i < tableRows.length; i++) {

        if (body.indexOf(i) === -1) {
            tableRows[i].input.value = changeBrightness(currentKirbyColors[i], num)
        }
    }
    doStuff();
}

function randomizeKirbyColors() {
    let randomNumFeet = Math.random() * 360;
    let randomNumBody = Math.random() * 360;

    for (let i = 0; i < tableRows.length; i++) {
        if (body.indexOf(i) === -1) {
            tableRows[i].input.value = changeHue(tableRows[i].input.value, randomNumFeet)
        } else {
            tableRows[i].input.value = changeHue(tableRows[i].input.value, randomNumBody)
        }
    }
    saveCurrentColors()
    doStuff()
}

function reverseSaturationAll() {
    for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].input.value = reverseSaturation(tableRows[i].input.value)
    }
}

function reverseFeetSaturation() {
    for (let i = 0; i < tableRows.length; i++) {
        if (body.indexOf(i) === -1) {
            tableRows[i].input.value = reverseSaturation(tableRows[i].input.value)
        }
    }
}

function reverseBodySaturation() {
    for (let i = 0; i < tableRows.length; i++) {
        if (body.indexOf(i) !== -1) {
            tableRows[i].input.value = reverseSaturation(tableRows[i].input.value)
        }
    }
}

function reverseBrightnessAll() {
    for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].input.value = reverseBrightness(tableRows[i].input.value)
    }
}

function reverseFeetBrightness() {
    for (let i = 0; i < tableRows.length; i++) {
        if (body.indexOf(i) === -1) {
            tableRows[i].input.value = reverseBrightness(tableRows[i].input.value)
        }
    }
}

function reverseBodyBrightness() {
    for (let i = 0; i < tableRows.length; i++) {
        if (body.indexOf(i) !== -1) {
            tableRows[i].input.value = reverseBrightness(tableRows[i].input.value)
        }
    }
}

function choasButton() {
    let random = Math.random() * 6;
    // randomizeKirbyEverything();
    if (random < 1) {
        reverseSaturationAll()
    }
    else if (random < 2) {
        reverseBrightnessAll()
    }
    else if (random < 3) {
        reverseBodyBrightness()
    }
    else if (random < 4) {
        reverseFeetBrightness()
    }
    else if (random < 5) {
        reverseBodySaturation()
    }
    else if (random < 6) {
        reverseFeetSaturation()
    }
    if (Math.random() * 10 < 7) {
        foreheadFix()
    }
    saveCurrentColors()
    doStuff()
}

let recording;
let mediaRecorder;
let recordedChunks;

function saveGif() {
    if (!intervalActive) {
        startAnimation()
    }
    recording = false
    pixelSize = 20;
    pixelSizeSlider.value = 20;
    saveGifHelper()
}

let frameToEndOn;
let pixelSizeSlider;

function saveGifHelper() {
    frameToEndOn = 0;
    recording = !recording;
    if (recording) {
        const stream = canvas.captureStream(100);
        mediaRecorder = new MediaRecorder(stream, {
            mimeType: 'video/webm;codecs=vp9',
            ignoreMutedMedia: true
        });
        recordedChunks = [];
        mediaRecorder.ondataavailable = e => {
            if (e.data.size > 0) {
                recordedChunks.push(e.data);
            }
        };
        mediaRecorder.start();
    } else {
        mediaRecorder.stop();
        setTimeout(() => {
            const blob = new Blob(recordedChunks, {
                type: "video/webm"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "recording.webm";
            a.click();
            URL.revokeObjectURL(url);
        }, 0);
    }
}


function randomizeKirbyEverything() {
    // if (Math.random() < .2) {
    //     resetKirbyColors()
    // }
    let randomNumFeet = Math.random() * 360;
    let randomNumBody = Math.random() * 360;
    let randomNumFeetSat = Math.random() * .8 + .1;
    let randomNumBodySat = Math.random() * .8 + .1;
    let randomNumFeetBright = Math.random() * .8 + .1;
    let randomNumBodyBright = Math.random() * .8 + .1;

    for (let i = 0; i < tableRows.length; i++) {
        if (body.indexOf(i) === -1) {
            tableRows[i].input.value = changeHue(tableRows[i].input.value, randomNumFeet)
            tableRows[i].input.value = setSaturation(tableRows[i].input.value, randomNumFeetSat)
            tableRows[i].input.value = setBrightness(tableRows[i].input.value, randomNumFeetBright)
        } else {
            tableRows[i].input.value = changeHue(tableRows[i].input.value, randomNumBody)
            tableRows[i].input.value = setSaturation(tableRows[i].input.value, randomNumBodySat)
            tableRows[i].input.value = setBrightness(tableRows[i].input.value, randomNumBodyBright)
        }
    }
    saveCurrentColors()
    doStuff()
}

function foreheadFix() {
    tableRows[1].input.value = setHue(tableRows[1].input.value, tableRows[13].input.value)
    saveCurrentColors()
    doStuff()

}

function resetKirbyBodyColors() {
    for (let i = 0; i < tableRows.length; i++) {

        if (body.indexOf(i) !== -1) {
            // console.log(rgbToHSL(defaultKirbyColors[i]).h)
            tableRows[i].input.value = defaultKirbyColors[i]
        }
    }
    saveCurrentColors()
    doStuff()
}

function resetKirbyFeetColors() {
    for (let i = 0; i < tableRows.length; i++) {
        if (body.indexOf(i) === -1) {
            // console.log(rgbToHSL(defaultKirbyColors[i]).h)
            tableRows[i].input.value = defaultKirbyColors[i]
        }
    }
    saveCurrentColors()
    doStuff()

}


function resetKirbyColors() {
    for (let i = 0; i < tableRows.length; i++) {
        // console.log(rgbToHSL(defaultKirbyColors[i]).h)
        tableRows[i].input.value = defaultKirbyColors[i]
    }
    saveCurrentColors()
    doStuff()

}


function doStuff() {
    if (!loaded) {
        loadValues();
        loaded = true;
    }


    updateKirbyColors();

    let currentImageOfKirby = kirbyImages[currentImage];

    let color = "#d6eaf2";

    ctx.fillStyle = color;

    ctx.beginPath(); // Start a new path
    ctx.rect(0, 0, 420,420); // Add a rectangle to the current path
    ctx.fill(); // Render the path

    for (let y = 0; y < currentImageOfKirby.length; y++) {
        for (let x = 0; x < currentImageOfKirby[y].length; x++) {
            let color = currentImageOfKirby[y] ? currentImageOfKirby[y][x] ? currentImageOfKirby[y][x].color ? currentImageOfKirby[y][x].color : "#d6eaf2" : "#d6eaf2" : "#d6eaf2";

            ctx.fillStyle = color;

            ctx.beginPath(); // Start a new path
            ctx.rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize); // Add a rectangle to the current path
            ctx.fill(); // Render the path
        }
    }
}

function updateKirbyColors() {
    for (let i = 0; i < tableRows.length; i++) {
        kirbyColors[i].color = tableRows[i].input.value;
        tableRows[i].span.innerHTML = `${tableRows[i].number}: ${tableRows[i].input.value}`;
    }

    let string = "  kirby_flavor:"
    for (let i = tableRows.length - 1; i >= 0; i--) {
        string += `\n    '${tableRows[i].number}': '${tableRows[i].input.value.replace("#", "")}'`
    }
    textarea.value = string;

}
//1, 13, 14, 7, 9, 10, 4

let interval;

function startAnimation() {
    interval = setInterval(function () {
        currentImage = ((currentImage + 1) % kirbyImages.length);
        doStuff();
        if (recording) {
            frameToEndOn++;
            if (frameToEndOn > 8) {
                saveGifHelper();
            }
        }
    }, 100);
    intervalActive = true;
}

function stopAnimation() {
    if (!recording) {
        clearInterval(interval)
        intervalActive = false;
    }
}

function changeAnimation() {
    if (intervalActive) {
        stopAnimation()
    } else {
        startAnimation();
    }
}

function loadValues() {

    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d");

    canvas.addEventListener("click", changeAnimation, false);

    textarea = document.getElementById("textarea")
    hueSlider = document.getElementById("hueSlider")
    hueSlider.addEventListener("input", changeKirbyHue)
    feetSlider = document.getElementById("feetSlider")
    feetSlider.addEventListener("input", changeKirbyFeetHue)
    bodySlider = document.getElementById("bodySlider")
    bodySlider.addEventListener("input", changeKirbyBodyHue)

    saturationSlider = document.getElementById("saturationSlider")
    saturationSlider.addEventListener("input", changeKirbySaturation)
    saturationFeetSlider = document.getElementById("saturationFeetSlider")
    saturationFeetSlider.addEventListener("input", changeKirbyFeetSaturation)
    saturationBodySlider = document.getElementById("saturationBodySlider")
    saturationBodySlider.addEventListener("input", changeKirbyBodySaturation)

    brightnessSlider = document.getElementById("brightnessSlider")
    brightnessSlider.addEventListener("input", changeKirbyBrightness)
    brightnessFeetSlider = document.getElementById("brightnessFeetSlider")
    brightnessFeetSlider.addEventListener("input", changeKirbyFeetBrightness)
    brightnessBodySlider = document.getElementById("brightnessBodySlider")
    brightnessBodySlider.addEventListener("input", changeKirbyBodyBrightness)

    pixelSizeSlider = document.getElementById("pixelSizeSlider")
    pixelSizeSlider.addEventListener("input", () => {pixelSize = pixelSizeSlider.value})

    hueSlider.addEventListener("change", saveCurrentColors)
    feetSlider.addEventListener("change", saveCurrentColors)
    bodySlider.addEventListener("change", saveCurrentColors)

    saturationSlider.addEventListener("change", saveCurrentColors)
    saturationFeetSlider.addEventListener("change", saveCurrentColors)
    saturationBodySlider.addEventListener("change", saveCurrentColors)

    brightnessSlider.addEventListener("change", saveCurrentColors)
    brightnessFeetSlider.addEventListener("change", saveCurrentColors)
    brightnessBodySlider.addEventListener("change", saveCurrentColors)


    kirbyTable = [
        [
            null, null, null,
            null, null, null,
            null, null, '#B08888',
            '#B08888', '#B08888', '#B08888',
            '#C8A0A8', '#C8A0A8', null,
            null, null, null,
            null, null
        ],
        [
            null, null, null,
            null, null, null,
            '#B08888', '#A85048', '#D0C0C0',
            '#E8D0D0', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#D0C0C0', '#C8A0A8',
            '#C8A0A8', null, null,
            null, null
        ],
        [
            null, null, null,
            null, null, '#A85048',
            '#D0C0C0', '#D0C0C0', '#F0E0E8',
            '#F8F8F8', '#F8F8F8', '#F8F8F8',
            '#F8F8F8', '#F8F8F8', '#F8F8F8',
            '#D0C0C0', '#B08888', null,
            null, null
        ],
        [
            null, null, null,
            null, '#A85048', '#D0C0C0',
            '#F0E0E8', '#F0E0E8', '#F8F8F8',
            '#F8F8F8', '#F8F8F8', '#F8F8F8',
            '#F8F8F8', '#F8F8F8', '#F8F8F8',
            '#F8F8F8', '#F0E0E8', '#B08888',
            null, null
        ],
        [
            null, null, null,
            '#B08888', '#D0C0C0', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#F8F8F8', '#F8F8F8', '#F8F8F8',
            '#F8F8F8', '#F8F8F8', '#F8F8F8',
            '#F8F8F8', '#F8F8F8', '#A85048',
            null, null
        ],
        [
            null, null, null,
            '#A85048', '#E8D0D0', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#F8F8F8', '#F8F8F8',
            '#F8F8F8', '#F8F8F8', '#F8F8F8',
            '#F8F8F8', '#F8F8F8', '#F0E0E8',
            '#C8A0A8', null
        ],
        [
            null, null, '#A85048',
            '#D0C0C0', '#E8D0D0', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#F8F8F8', '#F0E0E8', '#F8F8F8',
            '#A85048', '#F8F8F8', '#A85048',
            '#F0E0E8', '#F8F8F8', '#F8F8F8',
            '#A85048', null
        ],
        [
            null, '#A85048', '#D0C0C0',
            '#E8D0D0', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F8F8F8',
            '#B08888', '#F8F8F8', '#B08888',
            '#F0E0E8', '#F8F8F8', '#F8F8F8',
            '#B08888', null
        ],
        [
            null, '#A85048', '#D0C0C0',
            '#E8D0D0', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F8F8F8',
            '#A85048', '#F0E0E8', '#A85048',
            '#F0E0E8', '#F8F8F8', '#F8F8F8',
            '#D0C0C0', '#B08888'
        ],
        [
            '#A85048', '#C8A0A8', '#F0A0B8',
            '#E8D0D0', '#E8D0D0', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#E87880', '#E87880', '#F0E0E8',
            '#A85048', '#F0E0E8', '#A85048',
            '#F0E0E8', '#E87880', '#F0E0E8',
            '#F0E0E8', '#A85048'
        ],
        [
            '#A85048', '#C8A0A8', '#F0A0B8',
            '#D0C0C0', '#E8D0D0', '#E8D0D0',
            '#E8D0D0', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#F8F8F8', '#A85048'
        ],
        [
            '#A85048', '#C8A0A8', '#F0A0B8',
            '#F0A0B8', '#D0C0C0', '#D0C0C0',
            '#E8D0D0', '#E8D0D0', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#A85048', '#E8D0D0',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#F8F8F8', '#A85048'
        ],
        [
            null, '#A85048', '#C8A0A8',
            '#F0A0B8', '#F0A0B8', '#F0A0B8',
            '#C8A0A8', '#F0A0B8', '#E8D0D0',
            '#E8D0D0', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#A85048', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#A85048'
        ],
        [
            null, null, '#A85048',
            '#B08888', '#C8A0A8', '#B08888',
            '#D07880', '#F0A0B8', '#F0A0B8',
            '#E8D0D0', '#E8D0D0', '#E8D0D0',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#F0E0E8', '#F0E0E8', '#F0E0E8',
            '#A85048', null
        ],
        [
            null, null, null,
            '#B03830', '#B03830', '#A85048',
            '#A85048', '#F0A0B8', '#F0A0B8',
            '#F0A0B8', '#F0A0B8', '#E8D0D0',
            '#E8D0D0', '#E8D0D0', '#E8D0D0',
            '#E8D0D0', '#B08888', '#A85048',
            '#A85048', null
        ],
        [
            null, null, '#A85048',
            '#E87880', '#E87880', '#E85048',
            '#E85048', '#B03830', '#B03830',
            '#C8A0A8', '#F0A0B8', '#F0A0B8',
            '#F0A0B8', '#F0A0B8', '#B08888',
            '#B03830', '#B03830', '#E87880',
            '#E87880', '#D07880'
        ],
        [
            null, null, '#A85048',
            '#E85048', '#E85048', '#E02018',
            '#E02018', '#E02018', '#E02018',
            '#A85048', '#A85048', '#A85048',
            '#A87070', '#B03830', '#B03830',
            '#E85048', '#E85048', '#E87880',
            '#E87880', '#B03830'
        ],
        [
            null, null, null,
            '#A85048', '#B01810', '#B01810',
            '#E02018', '#E02018', '#B01810',
            '#A85048', null, null,
            null, '#A85048', '#E02018',
            '#B01810', '#B01810', '#B01810',
            '#B03830', null
        ]
    ]

    image0 = [
        [null, null, null, null, null, null, null, "#C8A0A8", "#C8A0A8", "#C8A0A8", "#C8A0A8", "#C8A0A8", "#C8A0A8", null, null, null, null, null, null, null, null,],
        [null, null, null, null, null, "#B08888", "#B08888", "#D0C0C0", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#D0C0C0", "#C8A0A8", null, null, null, null, null, null, null,],
        [null, null, null, null, "#B08888", "#C8A0A8", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#B08888", null, null, null, null, null, null,],
        [null, null, null, "#B08888", "#C8A0A8", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F0E0E8", "#B08888", null, null, null, null, null,],
        [null, null, null, "#B08888", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#B08888", null, null, null, null, null,],
        [null, null, "#B08888", "#C8A0A8", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#A85048", "#F0E0E8", "#B08888", null, null, null, null,],
        [null, null, "#B08888", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#B08888", "#F0E0E8", "#A87070", null, null, null, null,],
        [null, "#B08888", "#C8A0A8", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#A85048", "#F0E0E8", "#A87070", null, null, null, null,],
        [null, "#A85048", "#C8A0A8", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#F0E0E8", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#B08888", "#E87880", "#E87880", "#A85048", "#F0E0E8", "#D0C0C0", "#A87070", null, null, null,],
        [null, "#A85048", "#D07880", "#F0A0B8", "#F0A0B8", "#F0E0E8", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#B08888", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#A87070", null, null, null,],
        [null, "#A85048", "#D07880", "#E87880", "#F0A0B8", "#C8A0A8", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#E8D0D0", "#B08888", "#F0E0E8", "#F0E0E8", "#A85048", "#F0E0E8", "#A85048", null, null, null,],
        [null, "#A85048", "#A85048", "#E87880", "#F0A0B8", "#A87070", "#D07880", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#F0E0E8", "#D0C0C0", "#B08888", "#F0E0E8", "#F8F8F8", "#A85048", "#F0E0E8", "#A85048", null, null, null,],
        ["#A85048", "#B03830", "#B03830", "#A87070", "#F0A0B8", "#F0A0B8", "#A85048", "#D07880", "#D07880", "#F0A0B8", "#E8D0D0", "#A87070", "#D0C0C0", "#F0E0E8", "#F0E0E8", "#E8D0D0", "#D0C0C0", "#A85048", "#A85048", "#A87070", null,],
        ["#A85048", "#E02018", "#E85048", "#A85048", "#A87070", "#F0A0B8", "#F0A0B8", "#D07880", "#A87070", "#A87070", "#B08888", "#C8A0A8", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#D0C0C0", "#A85048", "#A87070", "#E87880", "#E87880", "#A87070",],
        ["#A85048", "#B03830", "#E02018", "#E85048", "#A85048", "#A85048", "#D07880", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#A85048", "#A87070", "#D07880", "#D07880", "#F0A0B8", "#E87880", "#A87070",],
        [null, "#A85048", "#E02018", "#E02018", "#E85048", "#E85048", "#A85048", "#A85048", "#D07880", "#D07880", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#C8A0A8", "#D07880", "#A85048", "#B03830", "#E87880", "#E85048", "#A85048", null,],
        [null, "#A85048", "#B03830", "#E02018", "#E02018", "#E85048", "#B03830", "#B03830", "#B03830", "#B03830", "#B03830", "#B03830", "#B03830", "#B01810", "#E02018", "#E02018", "#E02018", "#E02018", "#A85048", "#A85048", null,],
        [null, null, "#A85048", "#B03830", "#B01810", null, null, null, null, null, null, null, "#B03830", "#B03830", "#E02018", "#B03830", "#B03830", "#A85048", null, null, null,],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, "#B03830", "#B03830", null, null, null, null, null, null,],
    ];
    image1 = [
        [null, null, null, null, null, null, null, null, "#B08888", "#C8A0A8", "#C8A0A8", "#C8A0A8", "#B08888", null, null, null, null, null, null, null, null,],
        [null, null, null, null, null, null, "#B08888", "#C8A0A8", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#B08888", "#B08888", null, null, null, null, null, null,],
        [null, null, null, null, null, "#B08888", "#C8A0A8", "#D0C0C0", "#F8F8F8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#B08888", null, null, null, null, null,],
        [null, null, null, null, "#B08888", "#C8A0A8", "#D0C0C0", "#F8F8F8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#B08888", null, null, null, null,],
        [null, null, null, null, "#B08888", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#B08888", null, null, null,],
        [null, null, null, "#B08888", "#C8A0A8", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#B08888", null, null, null,],
        [null, null, null, "#B08888", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#A87070", "#F0E0E8", "#A87070", "#B08888", null, null, null,],
        [null, null, "#A87070", "#C8A0A8", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#B08888", "#F0E0E8", "#B08888", "#B08888", null, null, null,],
        [null, null, "#A85048", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#A85048", "#F0E0E8", "#A85048", "#C8A0A8", "#B08888", null, null,],
        [null, null, "#A87070", "#E87880", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0A0B8", "#E87880", "#E87880", "#A85048", "#F0E0E8", "#A85048", "#D07880", "#B08888", null, null,],
        [null, null, "#A85048", "#E87880", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#F0A0B8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#E8D0D0", "#F0E0E8", "#E8D0D0", "#F0A0B8", "#A85048", null, null,],
        [null, null, "#A85048", "#A87070", "#E87880", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#A87070", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F0E0E8", "#F0E0E8", "#A85048", "#E8D0D0", "#F8F8F8", "#A85048", null, null,],
        [null, null, null, "#A85048", "#A85048", "#E85048", "#E87880", "#D07880", "#A85048", "#A87070", "#E8D0D0", "#F0E0E8", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#A85048", null, null,],
        [null, null, null, "#A85048", "#A87070", "#B03830", "#A85048", "#A85048", "#D07880", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#A85048", null, null, null,],
        [null, null, null, "#A85048", "#B03830", "#E02018", "#B03830", "#E85048", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#A85048", "#A85048", "#A85048", null, null, null,],
        [null, null, null, "#A85048", "#B01810", "#E02018", "#E85048", "#B03830", "#B03830", "#A85048", "#B03830", "#A85048", "#A85048", "#A85048", "#A85048", "#E85048", "#E85048", "#B03830", null, null, null,],
        [null, null, null, "#A85048", "#A85048", "#E02018", "#E85048", "#E85048", "#E85048", "#E85048", "#B03830", "#B01810", "#E02018", "#E02018", "#E85048", "#E85048", "#E85048", "#A85048", null, null, null,],
        [null, null, null, null, "#B03830", "#B03830", "#B01810", "#E02018", "#E02018", "#A85048", null, "#A85048", "#A85048", "#E02018", "#E02018", "#E02018", "#B03830", null, null, null, null,],
        [null, null, null, null, null, "#B03830", "#B03830", "#A85048", "#A87070", null, null, null, null, "#A85048", "#A85048", "#A85048", null, null, null, null, null,],
    ];
    image2 = [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,],
        [null, null, null, null, null, null, null, null, "#B08888", "#B08888", "#C8A0A8", "#C8A0A8", "#C8A0A8", "#B08888", "#B08888", null, null, null, null, null, null,],
        [null, null, null, null, null, null, "#A87070", "#B08888", "#E8D0D0", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#D0C0C0", "#B08888", null, null, null, null, null,],
        [null, null, null, null, null, "#A87070", "#E8D0D0", "#F0E0E8", "#F8F8F8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#D0C0C0", "#A87070", null, null, null, null,],
        [null, null, null, null, "#A87070", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#E8D0D0", "#A87070", null, null, null,],
        [null, null, null, null, "#A85048", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#A87070", null, null, null,],
        [null, null, null, "#A87070", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#E8D0D0", "#A87070", null, null,],
        [null, null, null, "#A85048", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F0E0E8", "#A87070", "#F0E0E8", "#A85048", "#D0C0C0", "#A85048", null, null,],
        [null, null, "#A85048", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#B08888", "#F0E0E8", "#B08888", "#C8A0A8", "#A85048", null, null,],
        [null, "#A85048", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#A85048", "#F0E0E8", "#A85048", "#B08888", "#F0E0E8", "#A87070", null,],
        [null, "#A85048", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#E87880", "#E85048", "#E87880", "#F0E0E8", "#A85048", "#F0E0E8", "#A85048", "#D07880", "#E87880", "#A85048", null,],
        [null, "#A85048", "#C8A0A8", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F0E0E8", "#F0E0E8", "#A85048", null,],
        [null, "#A85048", "#B08888", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#E8D0D0", "#E8D0D0", "#F8F8F8", "#F0E0E8", "#A85048", null,],
        [null, null, "#A85048", "#B08888", "#E87880", "#E87880", "#A85048", "#C8A0A8", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#A85048", "#E8D0D0", "#F0E0E8", "#A85048", null, null,],
        [null, null, null, "#A85048", "#A85048", "#A85048", "#A85048", "#E87880", "#E87880", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#F0A0B8", "#A85048", null, null, null,],
        [null, null, null, null, null, "#E02018", "#B03830", "#B03830", "#A85048", "#E85048", "#C8A0A8", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#D07880", "#A85048", null, null, null, null,],
        [null, null, null, null, null, "#A85048", "#E02018", "#E02018", "#E02018", "#B03830", "#A85048", "#A85048", "#D07880", "#A85048", "#B03830", "#E85048", "#A85048", null, null, null, null,],
        [null, null, null, null, null, null, "#A85048", "#B01810", "#E02018", "#E02018", "#E02018", "#E02018", "#E85048", "#B03830", "#B01810", "#E85048", "#A85048", null, null, null, null,],
        [null, null, null, null, null, null, null, "#A85048", "#D07880", "#A85048", "#A85048", "#A85048", "#D07880", "#C8A0A8", "#D07880", "#A85048", null, null, null, null, null,],
    ];
    image3 = [
        [null, null, null, null, null, null, null, null, "#B08888", "#C8A0A8", "#C8A0A8", "#C8A0A8", "#C8A0A8", "#B08888", null, null, null, null, null, null, null,],
        [null, null, null, null, null, null, "#B08888", "#B08888", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#B08888", "#B08888", null, null, null, null, null,],
        [null, null, null, null, "#B08888", "#B08888", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#B08888", null, null, null, null,],
        [null, null, null, "#B08888", "#E8D0D0", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#D0C0C0", "#A87070", null, null, null,],
        [null, null, "#B08888", "#E8D0D0", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#A87070", "#A87070", null, null,],
        [null, null, "#A87070", "#F8F8F8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#A85048", "#F8F8F8", "#A85048", "#F8F8F8", "#A87070", "#D0C0C0", "#A87070", null,],
        [null, "#B08888", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#B08888", "#F8F8F8", "#B08888", "#F0E0E8", "#C8A0A8", "#A87070", "#A87070", null,],
        [null, "#A87070", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#A85048", "#F8F8F8", "#A85048", "#F0E0E8", "#F8F8F8", "#A87070", "#D0C0C0", "#A87070",],
        [null, "#A85048", "#F0A0B8", "#E8D0D0", "#F0E0E8", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#A85048", "#F8F8F8", "#A85048", "#F0E0E8", "#F8F8F8", "#A87070", "#D0C0C0", "#A85048",],
        [null, "#A85048", "#A87070", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#F0E0E8", "#F8F8F8", "#F0E0E8", "#F0A0B8", "#E87880", "#F0E0E8", "#B08888", "#F0E0E8", "#B08888", "#E87880", "#F0E0E8", "#D0C0C0", "#A87070", "#A87070",],
        [null, null, "#A85048", "#A87070", "#D07880", "#F0A0B8", "#D0C0C0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#D0C0C0", "#A85048", null,],
        [null, null, null, "#A85048", "#A85048", "#A85048", "#C8A0A8", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#A85048", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#A87070", "#A85048", null,],
        [null, null, null, null, null, "#A85048", "#D07880", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#E8D0D0", "#D0C0C0", "#D0C0C0", "#E8D0D0", "#F0E0E8", "#E8D0D0", "#A85048", null, null,],
        [null, null, null, null, null, null, "#A87070", "#D07880", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#D07880", "#D07880", "#A85048", "#A87070", "#A85048", "#E87880", "#A85048", null, null, null,],
        [null, null, null, null, null, null, "#A85048", "#B03830", "#B03830", "#A85048", "#A85048", "#A85048", "#E87880", "#E87880", "#F0A0B8", "#D07880", "#A87070", null, null, null, null,],
        [null, null, null, null, null, null, "#A85048", "#E02018", "#E85048", "#E85048", "#B03830", "#E85048", "#E85048", "#E85048", "#E85048", "#A87070", null, null, null, null, null,],
        [null, null, null, null, null, null, "#A87070", "#A85048", "#E02018", "#B01810", "#E02018", "#E02018", "#E02018", "#E85048", "#A87070", null, null, null, null, null, null,],
        [null, null, null, null, null, null, null, "#A85048", "#B01810", "#A85048", "#B01810", "#E02018", "#E02018", "#A87070", null, null, null, null, null, null, null,],
        [null, null, null, null, null, null, null, null, "#A87070", "#A85048", "#A87070", "#D07880", "#A87070", null, null, null, null, null, null, null, null,],
    ];
    image4 = [
        [null, null, null, null, null, null, null, null, "#B08888", "#C8A0A8", "#C8A0A8", "#C8A0A8", "#C8A0A8", "#B08888", null, null, null, null, null, null, null,],
        [null, null, null, null, null, null, "#B08888", "#B08888", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#B08888", "#B08888", null, null, null, null, null,],
        [null, null, null, "#A87070", "#B08888", "#B08888", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#B08888", null, null, null, null,],
        [null, null, "#A87070", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#C8A0A8", "#A87070", "#A87070", null, null,],
        [null, "#A87070", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#E8D0D0", "#A87070", "#F8F8F8", "#A87070", null,],
        [null, "#A85048", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#A87070", "#F8F8F8", "#A87070", "#F8F8F8", "#E8D0D0", "#E8D0D0", "#F8F8F8", "#F8F8F8", "#A87070",],
        [null, "#A87070", "#F0A0B8", "#E8D0D0", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#B08888", "#F8F8F8", "#B08888", "#F8F8F8", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#F8F8F8", "#A87070",],
        [null, "#A85048", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#A85048", "#F8F8F8", "#A85048", "#F8F8F8", "#E8D0D0", "#E8D0D0", "#A87070", "#F8F8F8", "#A87070",],
        [null, "#A85048", "#D07880", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#E87880", "#E85048", "#F8F8F8", "#A85048", "#F8F8F8", "#A85048", "#F8F8F8", "#E87880", "#E85048", "#A85048", "#E8D0D0", "#A87070",],
        [null, null, "#A85048", "#A85048", "#B08888", "#F0A0B8", "#E8D0D0", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F0E0E8", "#A85048", "#A87070", null,],
        [null, null, null, null, "#A85048", "#F0A0B8", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#E8D0D0", "#A85048", "#F8F8F8", "#F8F8F8", "#E8D0D0", "#A85048", null, null,],
        [null, null, null, null, "#A85048", "#A87070", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#F0E0E8", "#A85048", "#E8D0D0", "#F0A0B8", "#C8A0A8", "#A85048", null, null,],
        [null, null, null, null, null, "#A85048", "#D07880", "#F0A0B8", "#F0A0B8", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#E8D0D0", "#C8A0A8", "#C8A0A8", "#A85048", "#A85048", "#A85048", "#A85048", null, null,],
        [null, null, null, null, null, "#A85048", "#A85048", "#D07880", "#F0A0B8", "#F0A0B8", "#F0A0B8", "#C8A0A8", "#C8A0A8", "#A85048", "#A85048", "#E87880", "#E87880", "#A85048", null, null, null,],
        [null, null, null, null, null, null, "#A85048", "#A85048", "#A85048", "#A85048", "#D07880", "#B03830", "#A85048", "#E87880", "#E85048", "#E02018", "#E02018", "#D07880", null, null, null,],
        [null, null, null, null, null, "#A87070", "#E02018", "#E85048", "#E85048", "#A85048", "#B01810", "#B01810", "#E02018", "#E02018", "#E02018", "#E85048", "#D07880", "#A87070", null, null, null,],
        [null, null, null, null, null, "#A85048", "#B01810", "#E02018", "#E02018", "#E85048", "#A87070", "#A87070", "#B03830", "#E02018", "#A85048", "#D07880", "#A87070", null, null, null, null,],
        [null, null, null, null, null, null, "#A85048", "#B01810", "#B03830", "#A87070", null, null, "#A87070", "#D07880", "#A87070", "#A87070", null, null, null, null, null,],
        [null, null, null, null, null, null, null, "#A85048", "#A85048", null, null, null, null, null, null, null, null, null, null, null, null,],
    ];

    kirbyImages = [image2, image3, image4, image3, image2, image1, image0, image1];

    currentImage = 0;
    startAnimation();



    //feet: 0,1,2,8,9,10,11,12,13,14

    let kirbyColorz = [];

    let colors = [
        "#B03830", //5
        "#F8F8F8", //9 body -> 5
        "#E87880", //7
        "#B08888", //15
        "#D0C0C0", //12 body -> 2
        "#E85048", //4 
        "#E8D0D0", //11 body -> 14
        "#A85048", //13
        "#D07880", //6
        "#F0A0B8", //8 body -> 11
        "#E02018", //3
        "#A87070", //2
        "#C8A0A8", //14
        "#F0E0E8", //10 body -> 7
        "#B01810", //1
    ]

    body = [1, 4, 6, 9, 13]

    for (let c of colors) {
        kirbyColorz.push(c);
    }

    // for (let y = 0; y < kirbyTable.length; y++) {
    //     for (let x = 0; x < kirbyTable[y].length; x++) {
    //         kirbyColorz.add(kirbyTable[y][x]);
    //     }
    // }

    // console.log(kirbyColorz)

    kirbyColors = [];
    defaultKirbyColors = [];
    currentKirbyColors = [];

    kirbyColorz.forEach(value => {
        if (!!value) {
            kirbyColors.push({ color: value });
            defaultKirbyColors.push(value)
            currentKirbyColors.push(value)
        }
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

    for (let i = 0; i < kirbyImages.length; i++) {
        let table = kirbyImages[i];
        for (let y = 0; y < table.length; y++) {
            for (let x = 0; x < table[y].length; x++) {
                for (let color of kirbyColors) {
                    if (table[y][x] === color.color) {
                        table[y][x] = color;
                    }
                }
            }
        }
    }



    table = document.getElementById("table");
    tableRows = [];
    for (let i = 0; i < kirbyColors.length; i++) {

        let color = kirbyColors[i]
        // console.log(color)
        let row = table.insertRow(0);
        let cell = row.insertCell(0);
        let cell2 = row.insertCell(1);

        var span = document.createElement("span");
        span.innerHTML = `${15 - i}: ${kirbyColors[i].color}`;

        cell2.appendChild(span)

        var input = document.createElement("input");
        input.type = "color";
        input.addEventListener("input", doStuff);
        input.addEventListener("change", saveCurrentColors)
        cell.appendChild(input); // put it into the DOM
        input.value = color.color

        tableRows.push(
            {
                color: color,
                input: input,
                number: 15 - i,
                span: span
            }
        );
    }
}

//   document.addEventListener("click", draw)

// document.addEventListener("click", doStuff);

window.addEventListener("load", doStuff);


function changeHue(rgb, degree) {
    var hsl = rgbToHSL(rgb);
    hsl.h += degree;
    if (hsl.h > 360) {
        hsl.h -= 360;
    }
    else if (hsl.h < 0) {
        hsl.h += 360;
    }
    return hslToRGB(hsl);
}

function setHue(rgbTo, rgbFrom) {
    var hsl = rgbToHSL(rgbTo);
    var hsl2 = rgbToHSL(rgbFrom).h;
    hsl.h = hsl2;
    if (hsl.h > 360) {
        hsl.h -= 360;
    }
    else if (hsl.h < 0) {
        hsl.h += 360;
    }
    return hslToRGB(hsl);
}

function setSaturation(rgb, degree) {
    var hsl = rgbToHSL(rgb);
    hsl.s = degree;
    if (hsl.s > 1) {
        hsl.s = 1;
    }
    else if (hsl.s < 0) {
        hsl.s = 0;
    }
    return hslToRGB(hsl);
}

function setHue(rgbTo, rgbFrom) {
    var hsl = rgbToHSL(rgbTo);
    var hsl2 = rgbToHSL(rgbFrom).h;
    hsl.h = hsl2;
    if (hsl.h > 360) {
        hsl.h -= 360;
    }
    else if (hsl.h < 0) {
        hsl.h += 360;
    }
    return hslToRGB(hsl);
}

function changeSaturation(rgb, degree) {
    var hsl = rgbToHSL(rgb);
    hsl.s = +degree;
    if (hsl.s > 1) {
        hsl.s = 1;
    }
    else if (hsl.s < 0) {
        hsl.s = 0;
    }
    return hslToRGB(hsl);
}

function setBrightness(rgb, degree) {
    var hsl = rgbToHSL(rgb);
    hsl.l = degree;
    if (hsl.l > 1) {
        hsl.l = 1;
    }
    else if (hsl.l < 0) {
        hsl.l = 0;
    }
    return hslToRGB(hsl);
}

function changeBrightness(rgb, degree) {
    var hsl = rgbToHSL(rgb);
    hsl.l += degree;
    if (hsl.l > 1) {
        hsl.l = 1;
    }
    else if (hsl.l < 0) {
        hsl.l = 0;
    }
    return hslToRGB(hsl);
}

function reverseBrightness(rgb) {
    var hsl = rgbToHSL(rgb);
    hsl.l = -hsl.l + 1;
    if (hsl.l > 1) {
        hsl.l = 1;
    }
    else if (hsl.l < 0) {
        hsl.l = 0;
    }
    return hslToRGB(hsl);
}

function reverseSaturation(rgb) {
    var hsl = rgbToHSL(rgb);
    hsl.s = -hsl.s + 1;
    if (hsl.s > 1) {
        hsl.s = 1;
    }
    else if (hsl.s < 0) {
        hsl.s = 0;
    }
    return hslToRGB(hsl);
}

// exepcts a string and returns an object
function rgbToHSL(rgb) {
    // strip the leading # if it's there
    rgb = rgb.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (rgb.length == 3) {
        rgb = rgb.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(rgb.substr(0, 2), 16) / 255,
        g = parseInt(rgb.substr(2, 2), 16) / 255,
        b = parseInt(rgb.substr(4, 2), 16) / 255,
        cMax = Math.max(r, g, b),
        cMin = Math.min(r, g, b),
        delta = cMax - cMin,
        l = (cMax + cMin) / 2,
        h = 0,
        s = 0;

    if (delta == 0) {
        h = 0;
    }
    else if (cMax == r) {
        h = 60 * (((g - b) / delta) % 6);
    }
    else if (cMax == g) {
        h = 60 * (((b - r) / delta) + 2);
    }
    else {
        h = 60 * (((r - g) / delta) + 4);
    }

    if (delta == 0) {
        s = 0;
    }
    else {
        s = (delta / (1 - Math.abs(2 * l - 1)))
    }

    return {
        h: h,
        s: s,
        l: l
    }
}

// expects an object and returns a string
function hslToRGB(hsl) {
    var h = hsl.h,
        s = hsl.s,
        l = hsl.l,
        c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r, g, b;

    if (h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else {
        r = c;
        g = 0;
        b = x;
    }

    r = normalize_rgb_value(r, m);
    g = normalize_rgb_value(g, m);
    b = normalize_rgb_value(b, m);

    return rgbToHex(r, g, b);
}

function normalize_rgb_value(color, m) {
    color = Math.floor((color + m) * 255);
    if (color < 0) {
        color = 0;
    }
    return color;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}