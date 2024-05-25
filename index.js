let canvas;
let ctx;
let textarea;
let hueSlider;
let primaryColorsSlider;
let secondaryColorsSlider;
let saturationSlider;
let saturationPrimaryColorsSlider;
let saturationSecondaryColorsSlider;
let brightnessSlider;
let brightnessPrimaryColorsSlider;
let brightnessSecondaryColorsSlider;
let pixelSizeSlider;
let table;
let kirbyTableRows;


window.addEventListener("load", loadValues);

function loadValues() {

    let maxPixelSize = 20;

    canvas = document.getElementById("canvasKirby")
    ctx = canvas.getContext("2d");
    textarea = document.getElementById("textareaKirby")
    hueSlider = document.getElementById("hueSliderKirby")
    primaryColorsSlider = document.getElementById("primaryColorsSliderKirby")
    secondaryColorsSlider = document.getElementById("secondaryColorsSliderKirby")
    saturationSlider = document.getElementById("saturationSliderKirby")
    saturationPrimaryColorsSlider = document.getElementById("saturationPrimaryColorsSliderKirby")
    saturationSecondaryColorsSlider = document.getElementById("saturationSecondaryColorsSliderKirby")
    brightnessSlider = document.getElementById("brightnessSliderKirby")
    brightnessPrimaryColorsSlider = document.getElementById("brightnessPrimaryColorsSliderKirby")
    brightnessSecondaryColorsSlider = document.getElementById("brightnessSecondaryColorsSliderKirby")
    pixelSizeSlider = document.getElementById("pixelSizeSliderKirby")
    table = document.getElementById("tableKirby");

    let randomizeKirbyColorsButton = document.getElementById("randomizeKirbyColors");
    let uniformFeetHuesButton = document.getElementById("uniformFeetHues");
    let uniformBodyHuesButton = document.getElementById("uniformBodyHues");
    let chaosKirbyButton = document.getElementById("chaosKirbyButton");
    let randomizeKirbyEverythingButton = document.getElementById("randomizeKirbyEverything");
    let resetKirbyBodyColorsButton = document.getElementById("resetKirbyBodyColors");
    let resetKirbyFeetColorsButton = document.getElementById("resetKirbyFeetColors");
    let resetKirbyColorsButton = document.getElementById("resetKirbyColors");
    let saveGifKirbyButton = document.getElementById("saveGifKirby");

    let resetSliders = () => {
        hueSlider.value = 0;
        secondaryColorsSlider.value = 0;
        primaryColorsSlider.value = 0;
        saturationSlider.value = 0;
        saturationSecondaryColorsSlider.value = 0;
        saturationPrimaryColorsSlider.value = 0;
        brightnessSlider.value = 0;
        brightnessSecondaryColorsSlider.value = 0;
        brightnessPrimaryColorsSlider.value = 0;
    }


    let kirbyColors = [];
    let defaultKirbyColors = [];
    let currentKirbyColors = [];

    colors.forEach(value => {
        if (!!value) {
            kirbyColors.push({ color: value });
            defaultKirbyColors.push(value)
            currentKirbyColors.push(value)
        }
    });

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

    kirbyTableRows = [];
    for (let i = 0; i < kirbyColors.length; i++) {

        let color = kirbyColors[i]
        let row = table.insertRow(0);
        let cell = row.insertCell(0);
        let cell2 = row.insertCell(1);

        var span = document.createElement("span");
        span.innerHTML = `${15 - i}: ${kirbyColors[i].color}`;

        cell2.appendChild(span)

        var input = document.createElement("input");
        input.type = "color";
        cell.appendChild(input); // put it into the DOM
        input.value = color.color

        kirbyTableRows.push(
            {
                color: color,
                input: input,
                number: colors.length - i,
                span: span
            }
        );
    }

    // console.log("kirbyImages", kirbyImages);
    // console.log("defaultKirbyColors", defaultKirbyColors);
    // console.log("canvas", canvas);
    // console.log("ctx", ctx);
    // console.log("primaryColorIndices", primaryColorIndices);
    // console.log("kirbyTableRows", kirbyTableRows);
    // console.log("specialHueFixIndices", specialHueFixIndices);
    // console.log("textarea", textarea);

    let kirby = new Creature(kirbyImages, kirbyColors, defaultKirbyColors, canvas, ctx, primaryColorIndices, kirbyTableRows, 'kirby_flavor', "#d6eaf2", textarea, resetSliders);

    for (let i = 0; i < kirbyTableRows.length; i++) {
        kirbyTableRows[i].input.addEventListener("input", () => { kirby.draw() });
        kirbyTableRows[i].input.addEventListener("change", () => { kirby.saveCurrentColors() })
    }

    canvas.addEventListener("click", () => { kirby.changeAnimation(/*saveGifHelper*/) }, false);

    hueSlider.addEventListener("input", () => { kirby.setAllColorsRelativeHue(Number.parseInt(hueSlider.value)) })
    primaryColorsSlider.addEventListener("input", () => { kirby.setPrimaryColorsRelativeHues(Number.parseInt(primaryColorsSlider.value)) })
    secondaryColorsSlider.addEventListener("input", () => { kirby.setSecondaryColorsRelativeHue(Number.parseInt(secondaryColorsSlider.value)) })

    saturationSlider.addEventListener("input", () => { kirby.changeAllSaturation(Number.parseFloat(saturationSlider.value)) })
    saturationSecondaryColorsSlider.addEventListener("input", () => { kirby.setSecondaryColorsRelativeSaturation(Number.parseFloat(saturationSecondaryColorsSlider.value)) })
    saturationPrimaryColorsSlider.addEventListener("input", () => { kirby.setPrimaryColorsRelativeSaturation(Number.parseFloat(saturationPrimaryColorsSlider.value)) })

    brightnessSlider.addEventListener("input", () => { kirby.changeAllBrightness(Number.parseFloat(brightnessSlider.value)) })
    brightnessSecondaryColorsSlider.addEventListener("input", () => { kirby.setSecondaryColorsRelativeBrightness(Number.parseFloat(brightnessSecondaryColorsSlider.value)) })
    brightnessPrimaryColorsSlider.addEventListener("input", () => { kirby.setPrimaryColorsRelativeBrightness(Number.parseFloat(brightnessPrimaryColorsSlider.value)) })

    pixelSizeSlider.addEventListener("input", () => { kirby.setPixelSize(pixelSizeSlider.value) })

    hueSlider.addEventListener("change", () => { kirby.saveCurrentColors() })
    secondaryColorsSlider.addEventListener("change", () => { kirby.saveCurrentColors() })
    primaryColorsSlider.addEventListener("change", () => { kirby.saveCurrentColors() })
    saturationSlider.addEventListener("change", () => { kirby.saveCurrentColors() })
    saturationSecondaryColorsSlider.addEventListener("change", () => { kirby.saveCurrentColors() })
    saturationPrimaryColorsSlider.addEventListener("change", () => { kirby.saveCurrentColors() })
    brightnessSlider.addEventListener("change", () => { kirby.saveCurrentColors() })
    brightnessSecondaryColorsSlider.addEventListener("change", () => { kirby.saveCurrentColors() })
    brightnessPrimaryColorsSlider.addEventListener("change", () => { kirby.saveCurrentColors() })

    randomizeKirbyColorsButton.addEventListener("click", () => { kirby.randomizeColors() });
    uniformFeetHuesButton.addEventListener("click", () => { kirby.uniformSecondaryColorsHues() });
    uniformBodyHuesButton.addEventListener("click", () => { kirby.uniformPrimaryColorsHues() });
    chaosKirbyButton.addEventListener("click", () => { kirby.chaosButton() });
    randomizeKirbyEverythingButton.addEventListener("click", () => { kirby.randomizeAllColorQualities() });
    resetKirbyBodyColorsButton.addEventListener("click", () => { kirby.resetPrimaryColorsToDefault() });
    resetKirbyFeetColorsButton.addEventListener("click", () => { kirby.resetSecondaryColorsToDefault() });
    resetKirbyColorsButton.addEventListener("click", () => { kirby.resetAllColorsToDefault() });

    saveGifKirbyButton.addEventListener("click", () => { kirby.saveGif(maxPixelSize) })

    

    resetSliders();

    kirby.changeAnimation();
    // canvas.addEventListener("click", () => {console.log(kirby, kirbyColors)})
}
