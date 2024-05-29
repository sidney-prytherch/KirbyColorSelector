


window.addEventListener("load", loadValues);

function loadValues() {

    let maxPixelSize = 20;

    //kirby stuff:
    let canvas = document.getElementById("canvasKirby")
    let ctx = canvas.getContext("2d");
    let textarea = document.getElementById("textareaKirby")
    let hueSlider = document.getElementById("hueSliderKirby")
    let primaryColorsSlider = document.getElementById("primaryColorsSliderKirby")
    let secondaryColorsSlider = document.getElementById("secondaryColorsSliderKirby")
    let saturationSlider = document.getElementById("saturationSliderKirby")
    let saturationPrimaryColorsSlider = document.getElementById("saturationPrimaryColorsSliderKirby")
    let saturationSecondaryColorsSlider = document.getElementById("saturationSecondaryColorsSliderKirby")
    let brightnessSlider = document.getElementById("brightnessSliderKirby")
    let brightnessPrimaryColorsSlider = document.getElementById("brightnessPrimaryColorsSliderKirby")
    let brightnessSecondaryColorsSlider = document.getElementById("brightnessSecondaryColorsSliderKirby")
    let pixelSizeSlider = document.getElementById("pixelSizeSliderKirby")
    let table = document.getElementById("tableKirby");
    let randomizeKirbyColorsButton = document.getElementById("randomizeKirbyColors");
    let uniformFeetHuesButton = document.getElementById("uniformFeetHues");
    let uniformBodyHuesButton = document.getElementById("uniformBodyHues");
    let chaosKirbyButton = document.getElementById("chaosKirbyButton");
    let randomizeKirbyEverythingButton = document.getElementById("randomizeKirbyEverything");
    let resetKirbyBodyColorsButton = document.getElementById("resetKirbyBodyColors");
    let resetKirbyFeetColorsButton = document.getElementById("resetKirbyFeetColors");
    let resetKirbyColorsButton = document.getElementById("resetKirbyColors");
    let saveGifKirbyButton = document.getElementById("saveGifKirby");

    let randomizeKirbyBodyColorsButton = document.getElementById("randomizeKirbyBodyColors");
    let randomizeKirbyFeetColorsButton = document.getElementById("randomizeKirbyFeetColors");
    let randomizeKirbyColorsTableButton = document.getElementById("randomizeKirbyColorsTable");
    let randomizeKirbyBodyHuesButton = document.getElementById("randomizeKirbyBodyHues");
    let randomizeKirbyFeetHuesButton = document.getElementById("randomizeKirbyFeetHues");
    let randomizeKirbyHuesButton = document.getElementById("randomizeKirbyHues");

    //gooey stuff:
    let canvasGooey = document.getElementById("canvasGooey")
    let ctxGooey = canvasGooey.getContext("2d");
    let textareaGooey = document.getElementById("textareaGooey")
    let hueSliderGooey = document.getElementById("hueSliderGooey")
    let primaryColorsSliderGooey = document.getElementById("primaryColorsSliderGooey")
    let secondaryColorsSliderGooey = document.getElementById("secondaryColorsSliderGooey")
    let saturationSliderGooey = document.getElementById("saturationSliderGooey")
    let saturationPrimaryColorsSliderGooey = document.getElementById("saturationPrimaryColorsSliderGooey")
    let saturationSecondaryColorsSliderGooey = document.getElementById("saturationSecondaryColorsSliderGooey")
    let brightnessSliderGooey = document.getElementById("brightnessSliderGooey")
    let brightnessPrimaryColorsSliderGooey = document.getElementById("brightnessPrimaryColorsSliderGooey")
    let brightnessSecondaryColorsSliderGooey = document.getElementById("brightnessSecondaryColorsSliderGooey")
    let pixelSizeSliderGooey = document.getElementById("pixelSizeSliderGooey")
    let tableGooey = document.getElementById("tableGooey");

    let randomizeGooeyColorsButton = document.getElementById("randomizeGooeyColors");
    let uniformFeetHuesButtonGooey = document.getElementById("uniformFeetHuesGooey");
    let uniformBodyHuesButtonGooey = document.getElementById("uniformBodyHuesGooey");
    let chaosGooeyButton = document.getElementById("chaosGooeyButton");
    let randomizeGooeyEverythingButton = document.getElementById("randomizeGooeyEverything");
    let resetGooeyBodyColorsButton = document.getElementById("resetGooeyBodyColors");
    let resetGooeyFeetColorsButton = document.getElementById("resetGooeyFeetColors");
    let resetGooeyColorsButton = document.getElementById("resetGooeyColors");
    let saveGifGooeyButton = document.getElementById("saveGifGooey");

    let randomizeGooeyBodyColorsButton = document.getElementById("randomizeGooeyBodyColors");
    let randomizeGooeyFeetColorsButton = document.getElementById("randomizeGooeyFeetColors");
    let randomizeGooeyColorsTableButton = document.getElementById("randomizeGooeyColorsTable");
    let randomizeGooeyBodyHuesButton = document.getElementById("randomizeGooeyBodyHues");
    let randomizeGooeyFeetHuesButton = document.getElementById("randomizeGooeyFeetHues");
    let randomizeGooeyHuesButton = document.getElementById("randomizeGooeyHues");

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

    let kirbyModifiers = {
        saturationPrimaryRange: 1.2, 
        saturationPrimaryStart: -.6,
        saturationSecondaryRange: 1.2, 
        saturationSecondaryStart: -.5,
        brightnessPrimaryRange: .5, 
        brightnessPrimaryStart: -.4,
        brightnessSecondaryRange: .6, 
        brightnessSecondaryStart: -.5,
    }

    let gooeyModifiers = {
        saturationPrimaryRange: 1.2, 
        saturationPrimaryStart: -.75,
        saturationSecondaryRange: 1.1, 
        saturationSecondaryStart: -.8,
        brightnessPrimaryRange: .6, 
        brightnessPrimaryStart: -.1,
        brightnessSecondaryRange: .7,
        brightnessSecondaryStart: -.4,
    }

    let resetSlidersGooey = () => {
        hueSliderGooey.value = 0;
        primaryColorsSliderGooey.value = 0;
        secondaryColorsSliderGooey.value = 0;
        saturationSliderGooey.value = 0;
        saturationPrimaryColorsSliderGooey.value = 0;
        saturationSecondaryColorsSliderGooey.value = 0;
        brightnessSliderGooey.value = 0;
        brightnessPrimaryColorsSliderGooey.value = 0;
        brightnessSecondaryColorsSliderGooey.value = 0;
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


    let kirbyTableRows = [];
    for (let i = 0; i < kirbyColors.length; i++) {

        let color = kirbyColors[i]
        let row = table.insertRow(i);
        let cell = row.insertCell(0);
        let cell2 = row.insertCell(1);

        var span = document.createElement("span");
        span.innerHTML = `${i + 1}: ${kirbyColors[i].color}`;

        cell2.appendChild(span)

        var input = document.createElement("input");
        input.type = "color";
        cell.appendChild(input); // put it into the DOM
        input.value = color.color

        kirbyTableRows.push(
            {
                color: color,
                input: input,
                span: span
            }
        );
    }

    let kirby = new Creature(kirbyImages, kirbyColors, defaultKirbyColors, canvas, ctx, primaryColorIndices, kirbyTableRows, 'kirby_flavor', "#d6eaf2", textarea, resetSliders, kirbyModifiers);

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

    randomizeKirbyBodyColorsButton.addEventListener("click", () => {kirby.randomizePrimaryColorQualities()});
    randomizeKirbyFeetColorsButton.addEventListener("click", () => {kirby.randomizeSecondaryColorQualities()});
    randomizeKirbyColorsTableButton.addEventListener("click", () => {kirby.randomizeAllColorQualities()});
    randomizeKirbyBodyHuesButton.addEventListener("click", () => {kirby.randomizePrimaryHues()});
    randomizeKirbyFeetHuesButton.addEventListener("click", () => {kirby.randomizeSecondaryHues()});
    randomizeKirbyHuesButton.addEventListener("click", () => {kirby.randomizeColors()});

    

    resetSliders();

    kirby.changeAnimation();
    // canvas.addEventListener("click", () => {console.log(kirby, kirbyColors)})



    //gooey stuff:

    let gooeyColors = [];
    let defaultGooeyColors = [];
    let currentGooeyColors = [];

    gooeyColorsData.forEach(value => {
        if (!!value) {
            gooeyColors.push({ color: value });
            defaultGooeyColors.push(value)
            currentGooeyColors.push(value)
        }
    });

    for (let i = 0; i < gooeyImages.length; i++) {
        let table = gooeyImages[i];
        for (let y = 0; y < table.length; y++) {
            for (let x = 0; x < table[y].length; x++) {
                for (let color of gooeyColors) {
                    if (table[y][x] === color.color) {
                        table[y][x] = color;
                    }
                }
            }
        }
    }

    let gooeyTableRows = [];
    for (let i = 0; i < gooeyColors.length; i++) {

        let color = gooeyColors[i]
        let row = tableGooey.insertRow(i);
        let cell = row.insertCell(0);
        let cell2 = row.insertCell(1);

        var span = document.createElement("span");
        span.innerHTML = `${i + 1}: ${gooeyColors[i].color}`;

        cell2.appendChild(span)

        var input = document.createElement("input");
        input.type = "color";
        cell.appendChild(input); // put it into the DOM
        input.value = color.color

        gooeyTableRows.push(
            {
                color: color,
                input: input,
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

    let gooey = new Creature(gooeyImages, gooeyColors, defaultGooeyColors, canvasGooey, ctxGooey, primaryColorIndicesGooey, gooeyTableRows, 'gooey_flavor', "#d6eaf2", textareaGooey, resetSlidersGooey, gooeyModifiers);

    for (let i = 0; i < gooeyTableRows.length; i++) {
        gooeyTableRows[i].input.addEventListener("input", () => { gooey.draw() });
        gooeyTableRows[i].input.addEventListener("change", () => { gooey.saveCurrentColors() })
    }

    canvasGooey.addEventListener("click", () => { gooey.changeAnimation(/*saveGifHelper*/) }, false);

    hueSliderGooey.addEventListener("input", () => { gooey.setAllColorsRelativeHue(Number.parseInt(hueSliderGooey.value)) })
    primaryColorsSliderGooey.addEventListener("input", () => { gooey.setPrimaryColorsRelativeHues(Number.parseInt(primaryColorsSliderGooey.value)) })
    secondaryColorsSliderGooey.addEventListener("input", () => { gooey.setSecondaryColorsRelativeHue(Number.parseInt(secondaryColorsSliderGooey.value)) })

    saturationSliderGooey.addEventListener("input", () => { gooey.changeAllSaturation(Number.parseFloat(saturationSliderGooey.value)) })
    saturationSecondaryColorsSliderGooey.addEventListener("input", () => { gooey.setSecondaryColorsRelativeSaturation(Number.parseFloat(saturationSecondaryColorsSliderGooey.value)) })
    saturationPrimaryColorsSliderGooey.addEventListener("input", () => { gooey.setPrimaryColorsRelativeSaturation(Number.parseFloat(saturationPrimaryColorsSliderGooey.value)) })

    brightnessSliderGooey.addEventListener("input", () => { gooey.changeAllBrightness(Number.parseFloat(brightnessSliderGooey.value)) })
    brightnessSecondaryColorsSliderGooey.addEventListener("input", () => { gooey.setSecondaryColorsRelativeBrightness(Number.parseFloat(brightnessSecondaryColorsSliderGooey.value)) })
    brightnessPrimaryColorsSliderGooey.addEventListener("input", () => { gooey.setPrimaryColorsRelativeBrightness(Number.parseFloat(brightnessPrimaryColorsSliderGooey.value)) })

    pixelSizeSliderGooey.addEventListener("input", () => { gooey.setPixelSize(pixelSizeSliderGooey.value) })

    hueSliderGooey.addEventListener("change", () => { gooey.saveCurrentColors() })
    secondaryColorsSliderGooey.addEventListener("change", () => { gooey.saveCurrentColors() })
    primaryColorsSliderGooey.addEventListener("change", () => { gooey.saveCurrentColors() })
    saturationSliderGooey.addEventListener("change", () => { gooey.saveCurrentColors() })
    saturationSecondaryColorsSliderGooey.addEventListener("change", () => { gooey.saveCurrentColors() })
    saturationPrimaryColorsSliderGooey.addEventListener("change", () => { gooey.saveCurrentColors() })
    brightnessSliderGooey.addEventListener("change", () => { gooey.saveCurrentColors() })
    brightnessSecondaryColorsSliderGooey.addEventListener("change", () => { gooey.saveCurrentColors() })
    brightnessPrimaryColorsSliderGooey.addEventListener("change", () => { gooey.saveCurrentColors() })

    randomizeGooeyColorsButton.addEventListener("click", () => { gooey.randomizeColors() });
    uniformFeetHuesButtonGooey.addEventListener("click", () => { gooey.uniformSecondaryColorsHues() });
    uniformBodyHuesButtonGooey.addEventListener("click", () => { gooey.uniformPrimaryColorsHues() });
    chaosGooeyButton.addEventListener("click", () => { gooey.chaosButton() });
    randomizeGooeyEverythingButton.addEventListener("click", () => { gooey.randomizeAllColorQualities() });
    resetGooeyBodyColorsButton.addEventListener("click", () => { gooey.resetPrimaryColorsToDefault() });
    resetGooeyFeetColorsButton.addEventListener("click", () => { gooey.resetSecondaryColorsToDefault() });
    resetGooeyColorsButton.addEventListener("click", () => { gooey.resetAllColorsToDefault() });

    saveGifGooeyButton.addEventListener("click", () => { gooey.saveGif(10) })

    randomizeGooeyBodyColorsButton.addEventListener("click", () => {gooey.randomizePrimaryColorQualities()});
    randomizeGooeyFeetColorsButton.addEventListener("click", () => {gooey.randomizeSecondaryColorQualities()});
    randomizeGooeyColorsTableButton.addEventListener("click", () => {gooey.randomizeAllColorQualities()});
    randomizeGooeyBodyHuesButton.addEventListener("click", () => {gooey.randomizePrimaryHues()});
    randomizeGooeyFeetHuesButton.addEventListener("click", () => {gooey.randomizeSecondaryHues()});
    randomizeGooeyHuesButton.addEventListener("click", () => {gooey.randomizeColors()});


    

    resetSliders();

    gooey.changeAnimation();
    // canvas.addEventListener("click", () => {console.log(kirby, kirbyColors)})
}
