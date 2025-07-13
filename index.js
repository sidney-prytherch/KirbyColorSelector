


window.addEventListener("load", loadValues);

let body;
let characterContainerOriginalElement;
let characterContainers = [];
let characterButtons = [];
let currentCharacterIndex = 0;

function createCreature(character) {
    let isGooey = character.characterName === "Gooey"

    let characterContainerElement = characterContainerOriginalElement.cloneNode(true);
    characterContainers.push(characterContainerElement);
    
    let switchToCharacterButton = document.createElement("button");
    let switchToCharacterButtonText = document.createElement("h3")
    switchToCharacterButtonText.innerHTML = `View ${character.characterName}`
    switchToCharacterButton.style.margin = "8px"
    switchToCharacterButton.style.borderColor = character.buttonOutline;
    switchToCharacterButton.style.background = character.buttonColor;
    switchToCharacterButton.style.color = character.buttonFontColor;
    switchToCharacterButton.appendChild(switchToCharacterButtonText);
    characterButtons.push(switchToCharacterButton);


    //this will get rewritten automatically now
    let maxPixelSize = 20;
    let maxPixelHeight = 0;
    let maxPixelWidth = 0;

    characterContainerElement.querySelector("#span-instructions").innerHTML = `Click ${character.characterName} to pause/continue animation`
    characterContainerElement.querySelector("#additional-info").innerHTML = `${character.additionalInfoOrInstructions}`
    let animations = character.animations;
    let defaultPalettes = character.palettes;

    let canvas = characterContainerElement.querySelector("#creatureCanvas")
    let ctx = canvas.getContext("2d");
    let textarea = characterContainerElement.querySelector("#textarea")
    let pixelSizeSlider = characterContainerElement.querySelector("#pixelSizeSlider")
    let canvasSizeSlider = characterContainerElement.querySelector("#canvasSizeSlider")
    let secondsPerAnimationLoop = characterContainerElement.querySelector("#secondsPerAnimationLoop")
    let colorHexTable = characterContainerElement.querySelector("#colorHexTable");
    let saveGifButton = characterContainerElement.querySelector("#saveGif");
    let randomizeCreatureEverythingButton = characterContainerElement.querySelector("#randomizeCreatureEverything")
    let animationDropDown = characterContainerElement.querySelector("#animation-dropdown");
    let defaultPaletteDropdown = characterContainerElement.querySelector("#default-palette-dropdown");

    if (isGooey) {
        pixelSizeSlider.classList.add("gooey-slider")
        canvasSizeSlider.classList.add("gooey-slider")
        secondsPerAnimationLoop.classList.add("gooey-slider")
    }

    for (let animation of animations) {
        let option = document.createElement("option");
        option.value = animation.animationName;
        option.innerHTML = animation.animationName;
        animationDropDown.appendChild(option);
    }

    if (animations.length === 1) {
        animationDropDown.parentNode.style.display = "none"
    }

    for (let defaultPalette of defaultPalettes) {
        let option = document.createElement("option");
        option.value = defaultPalette.name;
        option.innerHTML = defaultPalette.name;
        defaultPaletteDropdown.appendChild(option);
    }

    maxPixelHeight = 0;
    maxPixelWidth = 0;
    let animation = animations[0].animationImages;
    for (let image of animation) {
        let pixelHeight = image.length;
        let pixelWidth = image.length > 0 ? image[0].length : 0;
        maxPixelHeight = Math.max(maxPixelHeight, pixelHeight);
        maxPixelWidth = Math.max(maxPixelWidth, pixelWidth);
    }

    let maxPixelSizeByHeight = Math.floor((canvas.height - 10) / maxPixelHeight);
    let maxPixelSizeByWidth = Math.floor((canvas.width - 10) / maxPixelWidth);
    maxPixelSize = Math.min(maxPixelSizeByHeight, maxPixelSizeByWidth);

    let newCanvasHeight = maxPixelSize * maxPixelHeight + 10
    let newCanvasWidth = maxPixelSize * maxPixelWidth + 10

    canvas.height = newCanvasHeight
    canvas.width = newCanvasWidth

    let randomizeCreatureColorsButton = characterContainerElement.querySelector("#randomizeCreatureColors");

    let colorModTable = characterContainerElement.querySelector("#color-modding-table");
    let colorModTableHeaderRow = document.createElement("tr");
    let colorModTableHueSliderRow = document.createElement("tr");
    let colorModTableSaturationSliderRow = document.createElement("tr");
    let colorModTableBrightnessliderRow = document.createElement("tr");
    let colorModTableRandomizeColorButtonRow = document.createElement("tr");
    let colorModTableRandomizeHueButtonRow = document.createElement("tr");
    let colorModTableResetHueButtonRow = document.createElement("tr");
    let colorModTableUniformHueButtonRow = document.createElement("tr");

    colorModTableHeaderRow.appendChild(document.createElement("th"))
    colorModTable.appendChild(colorModTableHeaderRow)

    let td = document.createElement("td")
    td.innerHTML = "Hue Sliders:"
    colorModTableHueSliderRow.appendChild(td)
    colorModTable.appendChild(colorModTableHueSliderRow)

    td = document.createElement("td")
    td.innerHTML = "Saturation Sliders:"
    colorModTableSaturationSliderRow.appendChild(td)
    colorModTable.appendChild(colorModTableSaturationSliderRow)

    td = document.createElement("td")
    td.innerHTML = "Brightness Sliders:"
    colorModTableBrightnessliderRow.appendChild(td)
    colorModTable.appendChild(colorModTableBrightnessliderRow)

    td = document.createElement("td")
    td.innerHTML = "Randomize Colors:"
    colorModTableRandomizeColorButtonRow.appendChild(td)
    colorModTable.appendChild(colorModTableRandomizeColorButtonRow)

    td = document.createElement("td")
    td.innerHTML = "Randomize Hues:"
    colorModTableRandomizeHueButtonRow.appendChild(td)
    colorModTable.appendChild(colorModTableRandomizeHueButtonRow)

    td = document.createElement("td")
    td.innerHTML = "Reset Colors:"
    colorModTableResetHueButtonRow.appendChild(td)
    colorModTable.appendChild(colorModTableResetHueButtonRow)

    td = document.createElement("td")
    td.innerHTML = "Uniform Hues:"
    colorModTableUniformHueButtonRow.appendChild(td)
    colorModTable.appendChild(colorModTableUniformHueButtonRow)

    character.colorGroupData.push(
        {
            colorGroupName: "All",
            colorIndices: defaultPalettes[0].colors.map((color, index) => index),
            indexOfMainColor: character.colorGroupData[0].indexOfMainColor
        }
    )

    let hueSliders = []
    let saturationSliders = []
    let brightnessSliders = []
    let uniformHueButtons = []
    let resetColorButtons = []
    let randomizeColorButtons = []
    let randomizeHueButtons = []

    for (let colorGroup of character.colorGroupData) {


            let uniqueID = `${character.characterName}${colorGroup.colorGroupName}`
            let colorGroupID = colorGroup.colorGroupName
            let td = document.createElement("th")
            td.innerHTML = `${colorGroup.colorGroupName} Colors`
            colorModTableHeaderRow.appendChild(td)

            let hueSlider = document.createElement("input");
            hueSlider.id = `hueSliderGroup${uniqueID}`
            hueSlider.classList.add('slider')
            hueSlider.classList.add('slider-hue')
            hueSlider.type = "range"
            hueSlider.min = "-180"
            hueSlider.max = "180"
            if (isGooey) hueSlider.classList.add("gooey-slider")
            td = document.createElement("td")
            td.appendChild(hueSlider)
            colorModTableHueSliderRow.appendChild(td)
            hueSliders.push(hueSlider)

            let saturationSlider = document.createElement("input");
            saturationSlider.id = `saturationSliderGroup${uniqueID}`
            saturationSlider.classList.add('slider')
            saturationSlider.classList.add('slider-saturation')
            saturationSlider.type = "range"
            saturationSlider.min = "-100"
            saturationSlider.max = "100"
            if (isGooey) saturationSlider.classList.add("gooey-slider")
            td = document.createElement("td")
            td.appendChild(saturationSlider)
            saturationSliders.push(saturationSlider)
            colorModTableSaturationSliderRow.appendChild(td)

            let brightnessSlider = document.createElement("input");
            brightnessSlider.id = `brightnessSliderGroup${uniqueID}`
            brightnessSlider.classList.add('slider')
            brightnessSlider.classList.add('slider-brightness')
            brightnessSlider.type = "range"
            brightnessSlider.min = "-100"
            brightnessSlider.max = "100"
            if (isGooey) brightnessSlider.classList.add("gooey-slider")
            td = document.createElement("td")
            td.appendChild(brightnessSlider)
            brightnessSliders.push(brightnessSlider)
            colorModTableBrightnessliderRow.appendChild(td)

            let uniformHueButton = document.createElement("button");
            uniformHueButton.innerHTML = `Remove outlier colors in ${colorGroupID}`
            uniformHueButton.title = `Set all ${colorGroupID} colors to the same hue`
            td = document.createElement("td")
            td.appendChild(uniformHueButton)
            colorModTableUniformHueButtonRow.appendChild(td)
            uniformHueButtons.push(uniformHueButton);

            let resetColorButton = document.createElement("button");
            resetColorButton.innerHTML = `Reset Colors (${colorGroupID})`
            resetColorButton.title = `Reset ${colorGroupID} colors to their original color`
            td = document.createElement("td")
            td.appendChild(resetColorButton)
            colorModTableResetHueButtonRow.appendChild(td)
            resetColorButtons.push(resetColorButton);

            let randomizeColorButton = document.createElement("button");
            randomizeColorButton.innerHTML = `Randomize Colors (${colorGroupID})`
            randomizeColorButton.title = `Randomize Saturation, Brightness and Hue of ${colorGroupID} colors`
            td = document.createElement("td")
            td.appendChild(randomizeColorButton)
            colorModTableRandomizeColorButtonRow.appendChild(td)
            randomizeColorButtons.push(randomizeColorButton)

            let randomizeHueButton = document.createElement("button");
            randomizeHueButton.innerHTML = `Randomize Hues (${colorGroupID})`
            randomizeHueButton.title = `Randomize Hue of ${colorGroupID} colors (keep saturation and brightness as is)`
            td = document.createElement("td")
            td.appendChild(randomizeHueButton)
            colorModTableRandomizeHueButtonRow.appendChild(td)
            randomizeHueButtons.push(randomizeHueButton)
    }

        

    let resetSliders = () => {
        for (let slider of hueSliders) {
            slider.value = 0;
        }
        for (let slider of brightnessSliders) {
            slider.value = 0;
        }
        for (let slider of saturationSliders) {
            slider.value = 0;
        }
    }

    character.characterColors = []
    character.defaultColors = []
    let creatureColors = character.characterColors;
    let defaultCreatureColors = character.defaultColors;
    let colorPalette = defaultPalettes[0];

    colorPalette.colors.forEach(value => {
        if (!!value) {
            creatureColors.push({ color: value });
            defaultCreatureColors.push(value)
        }
    });


    for (let animationData of animations) {
        let anim = animationData.animationImages;
        for (let i = 0; i < anim.length; i++) {
            let table = anim[i];
            for (let y = 0; y < table.length; y++) {
                for (let x = 0; x < table[y].length; x++) {
                    for (let color of creatureColors) {
                        if (table[y][x] === color.color) {
                            table[y][x] = color;
                        }
                    }
                }
            }
        }
    }


    let creatureTableRows = [];
    for (let i = 0; i < creatureColors.length; i++) {

        let color = creatureColors[i]
        let row = colorHexTable.insertRow(i);
        let cell = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        let span = document.createElement("span");
        span.innerHTML = `${i + 1}:~ ${creatureColors[i].color}`;

        cell3.appendChild(span)

        let input = document.createElement("input");
        input.type = "color";
        cell2.appendChild(input); // put it into the DOM
        input.value = color.color
        
        let lockButton = document.createElement("button");
        let lockIcon = document.createElement("i");
        lockIcon.classList.add("unlock-icon")
        let unlockIcon = document.createElement("i");
        unlockIcon.classList.add("lock-icon")
        unlockIcon.classList.add("hidden")
        lockButton.classList.add("lock-button");
        lockButton.appendChild(lockIcon)
        lockButton.appendChild(unlockIcon)
        lockButton.append()
        lockButton.addEventListener("click", () => {
            creatureTableRows[i].isLocked = !creatureTableRows[i].isLocked
            if (creatureTableRows[i].isLocked) {
                lockIcon.classList.add("hidden")
                unlockIcon.classList.remove("hidden")
                input.disabled = true;
            } else {
                unlockIcon.classList.add("hidden")
                lockIcon.classList.remove("hidden")
                input.disabled = false;
            }
        })
        cell.appendChild(lockButton);

        creatureTableRows.push(
            {
                color: color,
                input: input,
                span: span,
                colorIndex: i,
                isLocked: false
            }
        );
    }

    let selectedAnimation = animations[0];
    secondsPerAnimationLoop.value = selectedAnimation.animationSeconds;
    let animationMSPerFrame;
    getMSPerFrame(selectedAnimation.animationSeconds);

    function getMSPerFrame(animationSeconds) {
        animationMSPerFrame = animationSeconds * 1000 / (selectedAnimation.animationImages.length);
    }

    let htmlElements = {
        canvas,
        ctx,
        textarea, 
        creatureTableRows, 
        resetSliders, 
        pixelSizeSlider
    }

    let pixelData = {
        maxPixelSize, maxPixelHeight, maxPixelWidth
    }

    let creature = new Creature(
        htmlElements,
        pixelData, 
        animationMSPerFrame, 
        character
    );


    animationDropDown.addEventListener("change", () => {
        setAnimation(animationDropDown.value);
    })

    defaultPaletteDropdown.addEventListener("change", () => {
        let selectedPalette = defaultPalettes.find(it => it.name == defaultPaletteDropdown.value);
        defaultCreatureColors = [];
        selectedPalette.colors.forEach(value => {
            if (!!value) {
                defaultCreatureColors.push(value)
            }
        });
        creature.setDefaultColors(defaultCreatureColors)
    })




    for (let i = 0; i < creatureTableRows.length; i++) {
        creatureTableRows[i].input.addEventListener("input", () => { creature.draw() });
        creatureTableRows[i].input.addEventListener("change", () => { creature.saveCurrentColors() })
    }

    canvas.addEventListener("click", () => { creature.changeAnimation(/*saveGifHelper*/) }, false);


    for (let colorGroupIndex = 0; colorGroupIndex < hueSliders.length; colorGroupIndex++) {
        let hueSlider = hueSliders[colorGroupIndex]
        if (colorGroupIndex === hueSliders.length - 1) {
            hueSlider.addEventListener("input", () => { creature.setAllColorsRelativeHue(Number.parseInt(hueSlider.value)) })
        } else {
            hueSlider.addEventListener("input", () => { creature.setColorGroupRelativeHues(Number.parseInt(hueSlider.value), colorGroupIndex) })
        }
        hueSlider.addEventListener("change", () => { creature.saveCurrentColors() })

        let saturationSlider = saturationSliders[colorGroupIndex]
        if (colorGroupIndex === saturationSliders.length - 1) {
            saturationSlider.addEventListener("input", () => { creature.changeAllSaturation(Number.parseFloat(saturationSlider.value / 100)) })
        } else {
            saturationSlider.addEventListener("input", () => { creature.setColorGroupRelativeSaturation(Number.parseFloat(saturationSlider.value / 100), colorGroupIndex) })
        }
        saturationSlider.addEventListener("change", () => { creature.saveCurrentColors() })

        let brightnessSlider = brightnessSliders[colorGroupIndex]
        if (colorGroupIndex === brightnessSliders.length - 1) {
            brightnessSlider.addEventListener("input", () => { creature.changeAllBrightness(Number.parseFloat(brightnessSlider.value / 100)) })
        } else {
            brightnessSlider.addEventListener("input", () => { creature.setColorGroupRelativeBrightness(Number.parseFloat(brightnessSlider.value / 100), colorGroupIndex) })
        }
        brightnessSlider.addEventListener("change", () => { creature.saveCurrentColors() })

        let uniformHueButton = uniformHueButtons[colorGroupIndex];
        uniformHueButton.addEventListener("click", () => { creature.uniformHuesOfGroup(colorGroupIndex) });
        let resetColorButton = resetColorButtons[colorGroupIndex];
        resetColorButton.addEventListener("click", () => { creature.resetColorGroupToDefault(colorGroupIndex) });
        let randomizeColorButton = randomizeColorButtons[colorGroupIndex];
        if (colorGroupIndex === hueSliders.length - 1) {
            randomizeColorButton.addEventListener("click", () => { creature.randomizeAllColorQualities() });
        } else {
            randomizeColorButton.addEventListener("click", () => { creature.randomizeGroupColorQualities(colorGroupIndex) });
        }
        let randomizeHueButton = randomizeHueButtons[colorGroupIndex];
        if (colorGroupIndex === hueSliders.length - 1) {
            randomizeHueButton.addEventListener("click", () => { creature.randomizeHues() });
        } else {
            randomizeHueButton.addEventListener("click", () => { creature.randomizeHueOfGroup(colorGroupIndex) });
        }
    }

    pixelSizeSlider.max = `${maxPixelSize}`
    pixelSizeSlider.addEventListener("input", () => { creature.setPixelSize(pixelSizeSlider.value) })

    function getMaxPixelSize(optionalCanvasLength) {
        maxPixelHeight = 0;
        maxPixelWidth = 0;
        let animation = selectedAnimation.animationImages;
        for (let image of animation) {
            let pixelHeight = image.length;
            let pixelWidth = image.length > 0 ? image[0].length : 0;
            maxPixelHeight = Math.max(maxPixelHeight, pixelHeight);
            maxPixelWidth = Math.max(maxPixelWidth, pixelWidth);
        }

        let height = optionalCanvasLength ? optionalCanvasLength : canvas.height;
        let width = optionalCanvasLength ? optionalCanvasLength : canvas.width;
        let maxPixelSizeByHeight = Math.floor((height - 10) / maxPixelHeight);
        let maxPixelSizeByWidth = Math.floor((width - 10) / maxPixelWidth);
        maxPixelSize = Math.min(maxPixelSizeByHeight, maxPixelSizeByWidth);
    }


    function setAnimation(animationName, speed) {
        if (selectedAnimation.animationName !== animationName) {
            selectedAnimation = animations.find(it => it.animationName == animationName);
            secondsPerAnimationLoop.value = selectedAnimation.animationSeconds;

            getMaxPixelSize()

            creature.updateAnimation(selectedAnimation.animationImages);
            creature.updateMaxPixelSize(maxPixelSize, maxPixelHeight, maxPixelWidth);
        }
        if (!speed) {
            speed = selectedAnimation.animationSeconds;
        }
        getMSPerFrame(speed)
        creature.setAnimationSpeed(animationMSPerFrame);
        creature.stopAnimation();
        pixelSizeSlider.max = `${maxPixelSize}`
        pixelSizeSlider.value = `${Math.min(maxPixelSize, pixelSizeSlider.value)}`
        creature.setPixelSize(pixelSizeSlider.value)
        creature.startAnimation();

    }

    secondsPerAnimationLoop.addEventListener("input", () => {
        setAnimation(selectedAnimation.animationName, secondsPerAnimationLoop.value)
    })

    canvasSizeSlider.addEventListener("change", () => {
        let ctx = canvas.getContext("2d");

        selectedAnimation = animations.find(it => it.animationName == animationDropDown.value);

        getMaxPixelSize(canvasSizeSlider.value);

        let newCanvasHeight = maxPixelSize * maxPixelHeight + 10
        let newCanvasWidth = maxPixelSize * maxPixelWidth + 10

        canvas.height = newCanvasHeight
        canvas.width = newCanvasWidth

        pixelSizeSlider.max = `${maxPixelSize}`
        pixelSizeSlider.value = `${Math.min(maxPixelSize, pixelSizeSlider.value)}`
        creature.setPixelSize(pixelSizeSlider.value)


        creature.updateAnimation(selectedAnimation.animationImages);
        creature.updateMaxPixelSize(maxPixelSize, maxPixelHeight, maxPixelWidth);
        creature.updateCtx(ctx)
        creature.updateCanvas(canvas)
    })



    randomizeCreatureColorsButton.addEventListener("click", () => { creature.randomizeHues() });
    // chaosCreatureButton.addEventListener("click", () => { creature.chaosButton() });
    randomizeCreatureEverythingButton.addEventListener("click", () => { creature.randomizeAllColorQualities() });

    saveGifButton.addEventListener("click", () => { creature.saveGif(maxPixelSize) })




    resetSliders();

    creature.changeAnimation();
    creature.setPixelSize(maxPixelSize);
    pixelSizeSlider.value = maxPixelSize;

}

function loadValues() {

    characterContainerOriginalElement = document.querySelector("#characterContainer");
    body = characterContainerOriginalElement.parentNode;

    for (let character of characters) {
        createCreature(character);
    }

    for (let characterContainer of characterContainers) {
        let buttonContainer = characterContainer.querySelector("#characterButtons")
        console.log(buttonContainer);
        buttonContainer.innerHTML = "";
        characterButtons.forEach((button, index) => {
            let buttonClone = button.cloneNode(true)
            buttonContainer.appendChild(buttonClone);
            buttonClone.addEventListener("click", () => {
                let previousCharacterIndex = currentCharacterIndex;
                currentCharacterIndex = index;
                switchCharacterByIndex(previousCharacterIndex, currentCharacterIndex);
            })
        })
    }

    currentCharacterIndex = 0;

    body.removeChild(characterContainerOriginalElement);
    body.appendChild(characterContainers[currentCharacterIndex]);
    switchCharacterByIndex(0, 0);
   
}

function switchCharacterByIndex(previousIndex, currentIndex) {
    body.replaceChild(characterContainers[currentIndex], characterContainers[previousIndex]);
    document.documentElement.style.setProperty('--buttonFontColor', characters[currentIndex].buttonFontColor);
    document.documentElement.style.setProperty('--background', characters[currentIndex].backgroundColor);
    document.documentElement.style.setProperty('--buttonGroupA', characters[currentIndex].buttonColor);
    document.documentElement.style.setProperty('--buttonGroupB', characters[currentIndex].buttonOutline);
    document.documentElement.style.setProperty('--buttonGroupASemiTransparent', characters[currentIndex].buttonColor + "c2");
    document.documentElement.style.setProperty('--buttonGroupBSemiTransparent', characters[currentIndex].buttonOutline + "c2");
}