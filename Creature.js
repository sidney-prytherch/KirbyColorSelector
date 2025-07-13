class Creature {

    /**
     * @param {String[][][]} animationImages - array of images, where each image is a 2D array of colors
     * @param {{ color: String }[]} colorObjects - array of colors as Color Object
     * @param {{ color: String }[]} defaultColors - array of default colors as Color Object
     * @param {HTMLCanvasElement} canvas 
     * @param {*} context 
     * @param {Number[][]} colorsGroups - array of color groups, where each color group is a list of indices of the colors array
     * @param {{color: String, input: HTMLInputElement, span: HTMLSpanElement, colorIndex: Number}[]} tableRows - 
     * @param {String} yamlKey 
     * @param {String} backgroundColor - string as hex with #
     * @param {HTMLTextAreaElement} textarea 
     * @param {() => {}} resetSliders 
     * @param {Number[]} mainColorsPerGroup - index of the main color for each group, following order of colorGroups
     * @param {Number} firstColorIndex - in the yaml, the first color has this index
     * @param {Number} maxPixelSize - max pixel size
     */

    constructor(
        htmlElements,
        pixelData,
        animationMSPerFrame, 
        characterData
    ) {
        this.maxPixelHeight = pixelData.maxPixelHeight;
        this.maxPixelWidth = pixelData.maxPixelWidth;
        this.maxPixelSize = pixelData.maxPixelSize;
        this.animationMSPerFrame = animationMSPerFrame;
        this.colorObjects = characterData.characterColors;
        this.canvas = htmlElements.canvas;
        this.ctx = htmlElements.ctx;
        this.defaultColors = characterData.defaultColors;
        this.currentColors = this.defaultColors.map(it => it);
        this.currentImageIndex = 0;
        this.currentAnimationIndex = characterData.currentAnimationIndex;
        this.animationImages = characterData.animations[this.currentAnimationIndex].animationImages;
        this.tableRows = htmlElements.creatureTableRows;
        this.pixelSizeSlider = htmlElements.pixelSizeSlider;
        // this.colorGroupAIndices = colorGroupAIndices;
        this.colorGroups = characterData.colorGroupData.map(group => group.colorIndices);
        this.yamlKey = characterData.yamlOptionName;
        this.isAnimating = false;
        this.animationInterval = null;
        this.pixelSize = 10;
        this.backgroundColor = characterData.backgroundColorInCanvas;
        this.textarea = htmlElements.textarea;
        this.mediaRecorder = null;
        this.recordedChunks = null;
        this.gifFrame = -1;
        this.resetSliders = htmlElements.resetSliders;
        this.mainColorsPerGroup = characterData.colorGroupData.map(group => group.indexOfMainColor);
        this.firstColorIndex = characterData.firstColorIndexInYamlOption;
        this.characterData = characterData;
    }

    setAnimationSpeed(animationMSPerFrame) {
        this.animationMSPerFrame = animationMSPerFrame;
    }

    setDefaultColors(defaultColors) {
        this.defaultColors = defaultColors;
        this.resetAllColorsToDefault();
    }

    setPixelSize(newPixelSize) {
        this.pixelSize = newPixelSize;
        this.draw();
    }

    saveCurrentColors() {
        for (let colorData of this.tableRows) {
            this.currentColors[colorData.colorIndex] = colorData.input.value
        }
        this.resetSliders();
    }

    setColor(colorData, newColor) {
        if (!colorData.isLocked) {
            colorData.input.value = newColor
        }
    }

    setAllColorsRelativeHue(changeInHue) {
        for (let colorData of this.tableRows) {
            this.setColor(colorData, ColorModifiers.shiftColorHueByDegree(this.currentColors[colorData.colorIndex], changeInHue))
        }
        this.draw();
    }

    changeAllBrightness(changeInBrightness) {
        for (let colorData of this.tableRows) {
            this.setColor(colorData, ColorModifiers.shiftColorBrightnessByDegree(this.currentColors[colorData.colorIndex], changeInBrightness))
        }
        this.draw();
    }

    changeAllSaturation(changeInSaturation) {
        for (let colorData of this.tableRows) {
            this.setColor(colorData, ColorModifiers.shiftColorSaturationByDegree(this.currentColors[colorData.colorIndex], changeInSaturation))
        }
        this.draw();
    }

    uniformHuesOfGroup(colorGroupIndex) {
        if (colorGroupIndex === this.colorGroups.length - 1) {
            for (let i = 0; i < this.colorGroups.length - 1; i++) {
                this.uniformHuesOfGroup(i);
            }
            return;
        }
        let colorIndex = this.mainColorsPerGroup[colorGroupIndex];
        let color = this.currentColors[colorIndex];
        for (let colorData of this.tableRows) {
            if (this.isColorOfGroup(colorData.colorIndex, colorGroupIndex)) {
                this.setColor(colorData, ColorModifiers.setHueFromColor(colorData.input.value, color))
            }
        }
        this.saveCurrentColors();
        this.draw();
    }

    uniformColorGroupAHues() {
        this.uniformHuesOfGroup(0)
    }

    uniformColorGroupBHues() {
        this.uniformHuesOfGroup(1)
    }

    isColorOfGroup(colorIndex, colorGroupIndex) {
        return this.colorGroups[colorGroupIndex].includes(colorIndex)
    }

    setColorGroupRelativeHues(hueDegree, colorGroupIndex) {
        for (let colorData of this.tableRows) {
            if (this.isColorOfGroup(colorData.colorIndex, colorGroupIndex)) {
                this.setColor(colorData, ColorModifiers.shiftColorHueByDegree(this.currentColors[colorData.colorIndex], hueDegree))
            }
        }
        this.draw();
    }

    setColorGroupRelativeBrightness(brightnessDegree, colorGroupIndex) {
        for (let colorData of this.tableRows) {
            if (this.isColorOfGroup(colorData.colorIndex, colorGroupIndex)) {
                this.setColor(colorData, ColorModifiers.shiftColorBrightnessByDegree(this.currentColors[colorData.colorIndex], brightnessDegree))
            }
        }
        this.draw();
    }

    setColorGroupRelativeSaturation(saturationDegree, colorGroupIndex) {
        for (let colorData of this.tableRows) {
            if (this.isColorOfGroup(colorData.colorIndex, colorGroupIndex)) {
                this.setColor(colorData, ColorModifiers.shiftColorSaturationByDegree(this.currentColors[colorData.colorIndex], saturationDegree))
            }
        }
        this.draw();
    }

    setColorGroupARelativeHues(hueDegree) {
        setColorGroupRelativeHues(hueDegree, 0)
    }

    setColorGroupARelativeBrightness(brightnessDegree) {
        setColorGroupRelativeBrightness(brightnessDegree, 0)
    }

    setColorGroupARelativeSaturation(saturationDegree) {
        setColorGroupRelativeSaturation(saturationDegree, 0)
    }

    setColorGroupBRelativeHue(hueDegree) {
        setColorGroupRelativeHues(hueDegree, 1)
    }

    setColorGroupBRelativeSaturation(saturationDegree) {
        setColorGroupRelativeSaturation(saturationDegree, 1)
    }

    setColorGroupBRelativeBrightness(brightnessDegree) {
        setColorGroupRelativeBrightness(brightnessDegree, 1)
    }

    updateAnimation(animation) {
        this.stopAnimation();
        this.animationImages = animation;
        this.currentImageIndex = 0;
        this.startAnimation();
    }

    updateMaxPixelSize(maxPixelSize, maxPixelHeight, maxPixelWidth) {
        this.maxPixelSize = maxPixelSize;
        this.maxPixelHeight = maxPixelHeight;
        this.maxPixelWidth = maxPixelWidth;
        // this.leftPadding = (this.canvas.width - maxPixelWidth) / 2
        // this.topPadding = (this.canvas.height - maxPixelHeight) / 2
    }

    updateCtx(ctx) {
        this.ctx = ctx;
    }

    updateCanvas(canvas) {
        this.canvas = canvas;
    }

    randomizeHues() {
        for (let colorGroupIndex = 0; colorGroupIndex < this.colorGroups.length - 1; colorGroupIndex++) {
            let randomHueDegree = Math.random() * 360;
            for (let colorData of this.tableRows) {
                if (this.isColorOfGroup(colorData.colorIndex, colorGroupIndex)) {
                    this.setColor(colorData, ColorModifiers.shiftColorHueByDegree(colorData.input.value, randomHueDegree))
                }
            }
        }
        this.saveCurrentColors()
        this.draw()
    }

    randomizeHueOfGroup(colorGroupIndex) {
        let randomHueDegree = Math.random() * 360;
        for (let colorData of this.tableRows) {
            if (this.isColorOfGroup(colorData.colorIndex, colorGroupIndex)) {
                this.setColor(colorData, ColorModifiers.shiftColorHueByDegree(colorData.input.value, randomHueDegree))
            }
        }
        this.saveCurrentColors()
        this.draw()
    }

    randomizeGroupAHues() {
        randomizeHueOfGroup(0)
    }

    randomizeGroupBHues() {
        randomizeHueOfGroup(1)
    }

    reverseSaturationOfAllColorGroups() {
        for (let colorData of this.tableRows) {
            this.setColor(colorData, ColorModifiers.reverseSaturation(colorData.input.value))
        }
    }

    reverseSaturationOfColorGroup(colorGroupIndex) {
        for (let colorData of this.tableRows) {
            if (this.isColorOfGroup(colorData.colorIndex, colorGroupIndex)) {
                this.setColor(colorData, ColorModifiers.reverseSaturation(colorData.input.value))
            }
        }
    }

    reverseColorGroupASaturation() {
        reverseSaturationOfColorGroup(0)
    }

    reverseColorGroupBSaturation() {
        reverseSaturationOfColorGroup(1)
    }

    reverseBrightnessOfAllColorGroups() {
        for (let colorData of this.tableRows) {
            this.setColor(colorData, ColorModifiers.reverseBrightness(colorData.input.value))
        }
    }

    reverseBrightnessOfColorGroup(colorGroupIndex) {
        for (let colorData of this.tableRows) {
            if (this.isColorOfGroup(colorData.colorIndex, colorGroupIndex)) {
                this.setColor(colorData, ColorModifiers.reverseBrightness(colorData.input.value))
            }
        }
    }

    reverseColorGroupABrightness() {
        reverseBrightnessOfColorGroup(0)
    }

    reverseColorGroupBBrightness() {
        reverseBrightnessOfColorGroup(1)
    }

    chaosButton() {
        let random = Math.floor(Math.random() * 3 * this.colorGroups.length);
        if (random % 3 === 0) { //saturation
            let groupIndex = Math.floor(random / 3)
            if (groupIndex === this.colorGroups.length - 1) {
                this.reverseSaturationOfAllColorGroups()
            } else {
                this.reverseSaturationOfColorGroup(groupIndex)
            }
        } else if (random % 3 === 1) { //brightness
            let groupIndex = Math.floor(random / 3)
            if (groupIndex === this.colorGroups.length - 1) {
                this.reverseBrightnessOfAllColorGroups()
            } else {
                this.reverseBrightnessOfColorGroup(groupIndex)
            }

        } else { //hues, but do all color groups
            for (let groupIndex = 0; groupIndex < this.colorGroups.length; groupIndex++) {
                this.uniformHuesOfGroup(groupIndex)
            }
        }
        this.saveCurrentColors()
        this.draw()
    }

    randomizeAllColorQualities() {
        let probabilityOfResettingAnyColors = .9
        if (Math.random() < probabilityOfResettingAnyColors) {
            let probabilityOfResettingAllColors = .9
            if (Math.random() < probabilityOfResettingAllColors) {
                this.resetAllColorsToDefault()
            } else {
                let colorGroupIndex = Math.floor(Math.random() * (this.colorGroups.length - 1))
                this.resetColorGroupToDefault(colorGroupIndex)
            }
        }

        for (let colorGroupIndex = 0; colorGroupIndex < this.colorGroups.length - 1; colorGroupIndex++) {
            let randomHueDegree = Math.random() * 360;

            // let saturationPercentChange = ((Math.random() < .5 ? 1 : -1) * Math.random());
            // let brightnessPercentChange = ((Math.random() < .5 ? 1 : -1) * Math.random());

            let saturationPercentChange = 8 * Math.pow(Math.random() - .5, 3)
            let brightnessPercentChange = 8 * Math.pow(Math.random() - .5, 3)

            // let saturationRange =  this.randomizationModifiers[colorGroupIndex].maxSaturationChange - this.randomizationModifiers[colorGroupIndex].minSaturationChange;
            // let randomSaturationChange = Math.random() * saturationRange + this.randomizationModifiers[colorGroupIndex].minSaturationChange;
            // let brightnessRange =  this.randomizationModifiers[colorGroupIndex].maxBrightnessChange - this.randomizationModifiers[colorGroupIndex].minBrightnessChange;
            // let randomBrightnessChange = Math.random() * brightnessRange + this.randomizationModifiers[colorGroupIndex].minBrightnessChange;

            for (let colorData of this.tableRows) {
                if (this.isColorOfGroup(colorData.colorIndex, colorGroupIndex)) {
                    let currentSaturation = ColorModifiers.getAverageSaturation([colorData.input.value])
                    let newSaturation = (saturationPercentChange < 0) ? currentSaturation * (1 + saturationPercentChange) :
                        saturationPercentChange * (1 - currentSaturation) + currentSaturation
                    let currentBrightness = ColorModifiers.getAverageBrightness([colorData.input.value])
                    let newBrightness = (brightnessPercentChange < 0) ? currentBrightness * (1 + brightnessPercentChange) :
                        brightnessPercentChange * (1 - currentBrightness) + currentBrightness
                    this.setColor(colorData, ColorModifiers.setBrightness(colorData.input.value, newBrightness))
                    this.setColor(colorData, ColorModifiers.setSaturation(colorData.input.value, newSaturation))
                    this.setColor(colorData, ColorModifiers.shiftColorHueByDegree(colorData.input.value, randomHueDegree))

                }

            }
        }
        this.saveCurrentColors()

        // let probabilityOfUniformingHues = .9;
        // if (Math.random() < probabilityOfUniformingHues) {

        // }

        // let randomUniform = Math.random() * 10;
        // if (this.tableRows.length === 15 && randomUniform < 9) {
        //     this.tableRows[1].input.value = ColorModifiers.shiftColorSaturationByDegree(ColorModifiers.shiftColorBrightnessByDegree(this.tableRows[13].input.value, Math.random() * .3 - .05), Math.random() * .3 - .05)
        //     if (randomUniform < 3) {
        //         this.uniformColorGroupAHues()
        //     } else if (randomUniform < 6) {
        //         this.tableRows[1].input.value = ColorModifiers.setHueFromColor(this.tableRows[13].input.value, this.tableRows[1].input.value)
        //     }
        //     this.saveCurrentColors()
        // }
        // if (this.tableRows.length === 9 && randomUniform < 9) {
        //     this.tableRows[0].input.value = ColorModifiers.shiftColorSaturationByDegree(ColorModifiers.shiftColorBrightnessByDegree(this.tableRows[1].input.value, Math.random() * .15 - .18), Math.random() * .25 - .28)
        //     if (randomUniform < 3) {
        //         this.uniformColorGroupAHues()
        //     } else if (randomUniform < 8) {
        //         this.tableRows[0].input.value = ColorModifiers.setHueFromColor(this.tableRows[1].input.value, this.tableRows[0].input.value)
        //     }
        //     this.saveCurrentColors()
        // }
        this.draw()
    }

    randomizeGroupColorQualities(colorGroupIndex) {
        let probabilityOfResettingColors = .8
        if (Math.random() < probabilityOfResettingColors) {
            this.resetColorGroupToDefault(colorGroupIndex)
        }
        let randomHueDegree = Math.random() * 360;
        let saturationPercentChange = 8 * Math.pow(Math.random() - .5, 3)
        let brightnessPercentChange = 8 * Math.pow(Math.random() - .5, 3)
        for (let colorData of this.tableRows) {
            if (this.isColorOfGroup(colorData.colorIndex, colorGroupIndex)) {
                    let currentSaturation = ColorModifiers.getAverageSaturation([colorData.input.value])
                    let newSaturation = (saturationPercentChange < 0) ? currentSaturation * (1 + saturationPercentChange) :
                        saturationPercentChange * (1 - currentSaturation) + currentSaturation
                    let currentBrightness = ColorModifiers.getAverageBrightness([colorData.input.value])
                    let newBrightness = (brightnessPercentChange < 0) ? currentBrightness * (1 + brightnessPercentChange) :
                        brightnessPercentChange * (1 - currentBrightness) + currentBrightness
                    this.setColor(colorData, ColorModifiers.setBrightness(colorData.input.value, newBrightness))
                    this.setColor(colorData, ColorModifiers.setSaturation(colorData.input.value, newSaturation))
                    this.setColor(colorData, ColorModifiers.shiftColorHueByDegree(colorData.input.value, randomHueDegree))

            }
        }
        this.saveCurrentColors()

        // let randomUniform = Math.random() * 10;
        // if (this.tableRows.length === 15 && randomUniform < 9) {
        //     this.tableRows[1].input.value = ColorModifiers.shiftColorSaturationByDegree(ColorModifiers.shiftColorBrightnessByDegree(this.tableRows[13].input.value, Math.random() * .3 - .05), Math.random() * .3 - .05)
        //     if (randomUniform < 3) {
        //         this.uniformColorGroupAHues()
        //     } else if (randomUniform < 6) {
        //         this.tableRows[1].input.value = ColorModifiers.setHueFromColor(this.tableRows[13].input.value, this.tableRows[1].input.value)
        //     }
        //     this.saveCurrentColors()
        // }
        // if (this.tableRows.length === 9 && randomUniform < 9) {
        //     this.tableRows[0].input.value = ColorModifiers.shiftColorSaturationByDegree(ColorModifiers.shiftColorBrightnessByDegree(this.tableRows[1].input.value, Math.random() * .15 - .18), Math.random() * .25 - .28)
        //     if (randomUniform < 3) {
        //         this.uniformColorGroupAHues()
        //     } else if (randomUniform < 8) {
        //         this.tableRows[0].input.value = ColorModifiers.setHueFromColor(this.tableRows[1].input.value, this.tableRows[0].input.value)
        //     }
        //     this.saveCurrentColors()
        // }
        this.draw()
    }

    randomizeGroupAColorQualities() {
        this.randomizeGroupColorQualities(0)
    }

    randomizeGroupBColorQualities() {
        this.randomizeGroupColorQualities(1)
    }

    
    resetColorGroupToDefault(colorGroupIndex) {
        for (let colorData of this.tableRows) {
            if (this.isColorOfGroup(colorData.colorIndex, colorGroupIndex)) {
                this.setColor(colorData, this.defaultColors[colorData.colorIndex])
            }
        }
        this.saveCurrentColors()
        this.draw()
    }


    resetAllColorsToDefault() {
        for (let colorData of this.tableRows) {
            this.setColor(colorData, this.defaultColors[colorData.colorIndex])
        }
        this.saveCurrentColors()
        this.draw()
    }

    draw() {
        this.updateColorTableDisplay();

        let currentImage = this.animationImages[this.currentImageIndex];

        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.beginPath(); // Start a new path
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height); // Add a rectangle to the current path
        this.ctx.fill(); // Render the path

        // let topSpace = 20 + (this.maxPixelSize - this.pixelSize) * currentImage.length
        // let topSpace = Math.floor((this.canvas.height - (this.pixelSize * currentImage.length)) / 2)
        // let leftSpace = Math.floor((this.canvas.width - (this.pixelSize * currentImage[0].length)) / 2)

        let topSpace = Math.floor((this.canvas.height - (this.pixelSize * this.maxPixelHeight)) / 2)
        let leftSpace = Math.floor((this.canvas.width - (this.pixelSize * this.maxPixelWidth)) / 2)

        for (let y = 0; y < currentImage.length; y++) {
            for (let x = 0; x < currentImage[y].length; x++) {
                let color = currentImage[y] && currentImage[y][x] && currentImage[y][x].color ? currentImage[y][x].color : this.backgroundColor;

                this.ctx.fillStyle = color;
                this.ctx.beginPath(); // Start a new path
                this.ctx.rect(x * this.pixelSize + leftSpace, y * this.pixelSize + topSpace, this.pixelSize, this.pixelSize); // Add a rectangle to the current path
                this.ctx.fill(); // Render the path
            }
        }
    }

    updateColorTableDisplay() {
        for (let colorData of this.tableRows) {
            this.colorObjects[colorData.colorIndex].color = colorData.input.value;
            colorData.span.innerHTML = `${colorData.colorIndex + this.firstColorIndex}: ${colorData.input.value}`;
        }

        let string = `  ${this.yamlKey}:`
        // for (let i = this.tableRows.length - 1; i >= 0; i--) {
        for (let colorData of this.tableRows) {
            string += `\n    '${colorData.colorIndex + this.firstColorIndex}': '${colorData.input.value.replace("#", "")}'`
        }
        this.textarea.value = string;
    }

    startAnimation() {
        this.animationInterval = setInterval(() => {
            this.currentImageIndex = ((this.currentImageIndex + 1) % this.animationImages.length);
            this.draw();
            if (this.gifFrame >= 0) {
                this.gifFrame++;
                if (this.gifFrame >= this.animationImages.length + 1) {
                    this.saveGifHelper();
                }
            }
        }, this.animationMSPerFrame);
        this.isAnimating = true;
    }

    stopAnimation() {
        if (this.gifFrame === -1) {
            clearInterval(this.animationInterval)
            this.isAnimating = false;
        }
    }

    changeAnimation() {
        if (this.isAnimating) {
            this.stopAnimation()
        } else {
            this.startAnimation();
        }
    }

    saveGif(maxPixelSize) {
        if (!this.isAnimating) {
            this.startAnimation()
        }
        this.setPixelSize(maxPixelSize)
        this.gifFrame = -1;
        this.saveGifHelper()
    }

    saveGifHelper() {
        if (this.gifFrame === -1) {
            this.gifFrame = 0;
            const stream = this.canvas.captureStream(this.animationMSPerFrame);
            this.mediaRecorder = new MediaRecorder(stream, {
                mimeType: 'video/webm;codecs=vp9',
                ignoreMutedMedia: true
            });
            this.recordedChunks = [];
            this.mediaRecorder.ondataavailable = e => {
                if (e.data.size > 0) {
                    this.recordedChunks.push(e.data);
                }
            };
            this.mediaRecorder.start();
        } else {
            this.gifFrame = -1;
            this.mediaRecorder.stop();
            setTimeout(() => {
                const blob = new Blob(this.recordedChunks, {
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

}