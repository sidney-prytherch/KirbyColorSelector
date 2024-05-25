class Creature {

    constructor(animationImages, colorObjects, defaultColors, canvas, context, primaryColorIndices, tableRows, yamlKey, backgroundColor, textarea) {
        this.animationMSPerFrame = 100;
        this.colorObjects = colorObjects;
        this.canvas = canvas;
        this.ctx = context;
        this.defaultColors = defaultColors;
        this.currentColors = defaultColors.map(it => it);
        this.currentImageIndex = 0;
        this.animationImages = animationImages;
        this.tableRows = tableRows;
        this.primaryColorIndices = primaryColorIndices;
        this.yamlKey = yamlKey;
        this.isAnimating = false;
        this.animationInterval = null;
        this.pixelSize = 10;
        this.backgroundColor = backgroundColor;
        this.textarea = textarea;
        this.mediaRecorder = null;
        this.recordedChunks = null;
        this.gifFrame = -1;

        // this.startAnimation();
    }

    setPixelSize(newPixelSize) {
        this.pixelSize = newPixelSize;
        this.draw();
    }

    saveCurrentColors() {
        for (let i = 0; i < this.tableRows.length; i++) {
            this.currentColors[i] = this.tableRows[i].input.value
        }
    }

    setAllColorsRelativeHue(newHueInt) {
        // let newHueInt = Number.parseInt(hueSlider.value);
        for (let i = 0; i < this.tableRows.length; i++) {
            this.tableRows[i].input.value = ColorModifiers.shiftColorHueByDegree(this.currentColors[i], newHueInt)
        }
        this.draw();
    }

    changeAllBrightness(newBrightnessValue) {
        // let newBrightnessValue = Number.parseFloat(brightnessSlider.value);
        for (let i = 0; i < this.tableRows.length; i++) {
            this.tableRows[i].input.value = ColorModifiers.shiftColorBrightnessByDegree(this.currentColors[i], newBrightnessValue)
        }
        this.draw();
    }

    changeAllSaturation(newSaturationValue) {
        // let newSaturationValue = Number.parseFloat(saturationSlider.value);
        for (let i = 0; i < this.tableRows.length; i++) {
            this.tableRows[i].input.value = ColorModifiers.shiftColorSaturationByDegree(this.currentColors[i], newSaturationValue)
        }
        this.draw();
    }

    uniformPrimaryColorsHues() {
        let color = -1;
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isPrimaryColor(i)) {
                if (color == -1) {
                    color = this.currentColors[i]
                }
                this.tableRows[i].input.value = ColorModifiers.setHueFromColor(this.tableRows[i].input.value, color);
            }
        }
        this.saveCurrentColors()
        this.draw();
    }

    uniformSecondaryColorsHues() {
        let color = -1;
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isSecondaryColor(i)) {
                if (color == -1) {
                    color = this.currentColors[i]
                }
                this.tableRows[i].input.value = ColorModifiers.setHueFromColor(this.tableRows[i].input.value, color)
            }
        }
        this.saveCurrentColors()
        this.draw();
    }

    isPrimaryColor(i) {
        return this.primaryColorIndices.indexOf(i) !== -1;
    }

    isSecondaryColor(i) {
        return !this.isPrimaryColor(i);
    }

    setPrimaryColorsRelativeHues(hueDegree) {
        // let hueDegree = Number.parseInt(bodySlider.value);
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isPrimaryColor(i)) {
                this.tableRows[i].input.value = ColorModifiers.shiftColorHueByDegree(this.currentColors[i], hueDegree)
            }
        }
        this.draw();
    }

    setPrimaryColorsRelativeBrightness(brightnessDegree) {
        // let brightnessDegree = Number.parseFloat(brightnessPrimaryColorsSlider.value);
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isPrimaryColor(i)) {
                this.tableRows[i].input.value = ColorModifiers.shiftColorBrightnessByDegree(this.currentColors[i], brightnessDegree)
            }
        }
        this.draw();
    }

    setPrimaryColorsRelativeSaturation(saturationDegree) {
        // let saturationDegree = Number.parseFloat(saturationPrimaryColorsSlider.value);
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isPrimaryColor(i)) {
                this.tableRows[i].input.value = ColorModifiers.shiftColorSaturationByDegree(this.currentColors[i], saturationDegree)
            }
        }
        this.draw();
    }

    setSecondaryColorsRelativeHue(hueDegree) {
        // let num = Number.parseInt(feetSlider.value);
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isSecondaryColor(i)) {
                this.tableRows[i].input.value = ColorModifiers.shiftColorHueByDegree(this.currentColors[i], hueDegree)
            }
        }
        this.draw();
    }

    setSecondaryColorsRelativeSaturation(saturationDegree) {
        // let saturationDegree = Number.parseFloat(saturationSecondaryColorsSlider.value);
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isSecondaryColor(i)) {
                this.tableRows[i].input.value = ColorModifiers.shiftColorSaturationByDegree(this.currentColors[i], saturationDegree)
            }
        }
        this.draw();
    }

    setSecondaryColorsRelativeBrightness(brightnessDegree) {
        // let brightnessDegree = Number.parseFloat(brightnessSecondaryColorsSlider.value);
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isSecondaryColor(i)) {
                this.tableRows[i].input.value = ColorModifiers.shiftColorBrightnessByDegree(this.currentColors[i], brightnessDegree)
            }
        }
        this.draw();
    }

    randomizeColors() {
        let randomRelativeSecondaryColorHueDegree = Math.random() * 360;
        let randomRelativePrimaryColorHueDegree = Math.random() * 360;

        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isPrimaryColor(i)) {
                this.tableRows[i].input.value = ColorModifiers.shiftColorHueByDegree(this.tableRows[i].input.value, randomRelativePrimaryColorHueDegree)
            } else {
                this.tableRows[i].input.value = ColorModifiers.shiftColorHueByDegree(this.tableRows[i].input.value, randomRelativeSecondaryColorHueDegree)
            }
        }
        this.saveCurrentColors()
        this.draw()
    }

    reverseSaturationOfPrimaryAndSecondaryColors() {
        for (let i = 0; i < this.tableRows.length; i++) {
            this.tableRows[i].input.value = ColorModifiers.reverseSaturation(this.tableRows[i].input.value)
        }
    }

    reverseSecondaryColorsSaturation() {
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isSecondaryColor(i)) {
                this.tableRows[i].input.value = ColorModifiers.reverseSaturation(this.tableRows[i].input.value)
            }
        }
    }

    reversePrimaryColorsSaturation() {
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isPrimaryColor(i)) {
                this.tableRows[i].input.value = ColorModifiers.reverseSaturation(this.tableRows[i].input.value)
            }
        }
    }

    reverseBrightnessOfPrimaryAndSecondaryColors() {
        for (let i = 0; i < this.tableRows.length; i++) {
            this.tableRows[i].input.value = ColorModifiers.reverseBrightness(this.tableRows[i].input.value)
        }
    }

    reverseSecondaryColorsBrightness() {
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isSecondaryColor(i)) {
                this.tableRows[i].input.value = ColorModifiers.reverseBrightness(this.tableRows[i].input.value)
            }
        }
    }

    reversePrimaryColorsBrightness() {
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isPrimaryColor(i)) {
                this.tableRows[i].input.value = ColorModifiers.reverseBrightness(this.tableRows[i].input.value)
            }
        }
    }

    chaosButton() {
        let random = Math.random() * 8;
        // randomizeKirbyEverything();
        if (random < 1) {
            this.reverseSaturationOfPrimaryAndSecondaryColors()
        }
        else if (random < 2) {
            this.reverseBrightnessOfPrimaryAndSecondaryColors()
        }
        else if (random < 3) {
            this.reversePrimaryColorsBrightness()
        }
        else if (random < 4) {
            this.reverseSecondaryColorsBrightness()
        }
        else if (random < 5) {
            this.reversePrimaryColorsSaturation()
        }
        else if (random < 6) {
            this.reverseSecondaryColorsSaturation()
        } else if (random < 8) {
            this.uniformPrimaryColorsHues();
            this.uniformSecondaryColorsHues();
        }
        this.saveCurrentColors()
        this.draw()
    }

    randomizeAllColorQualities() {
        let randomReset = Math.random() * 10;
        if (randomReset < 5) {
            this.resetAllColorsToDefault()
        } else if (randomReset < 6) {
            this.resetPrimaryColorsToDefault()
        } else if (randomReset < 7) {
            this.resetSecondaryColorsToDefault()
        }
        let randomUniform = Math.random() * 4;
        if (randomUniform < 1) {
            this.uniformPrimaryColorsHues()
        } else if (randomUniform < 2) {
            this.uniformSecondaryColorsHues()
        } else if (randomUniform < 3) {
            this.uniformPrimaryColorsHues()
            this.uniformSecondaryColorsHues()
        }

        let randomSecondaryColorsHueDegree = Math.random() * 360;
        let randomPrimaryColorsHueDegree = Math.random() * 360;
        let randomSecondaryColorsSaturation = Math.random() * 1.2 - .6;
        let randomPrimaryColorsSaturation = Math.random() * 1.2 - .5;
        let randomSecondaryColorsBrightness = Math.random() * .6 - .5;
        let randomPrimaryColorsBrightness = Math.random() * .5 - .4;

        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isSecondaryColor(i)) {
                this.tableRows[i].input.value = ColorModifiers.shiftColorHueByDegree(this.tableRows[i].input.value, randomSecondaryColorsHueDegree)
                this.tableRows[i].input.value = ColorModifiers.shiftColorSaturationByDegree(this.tableRows[i].input.value, randomSecondaryColorsSaturation)
                this.tableRows[i].input.value = ColorModifiers.shiftColorBrightnessByDegree(this.tableRows[i].input.value, randomSecondaryColorsBrightness)
            } else {
                this.tableRows[i].input.value = ColorModifiers.shiftColorHueByDegree(this.tableRows[i].input.value, randomPrimaryColorsHueDegree)
                this.tableRows[i].input.value = ColorModifiers.shiftColorSaturationByDegree(this.tableRows[i].input.value, randomPrimaryColorsSaturation)
                this.tableRows[i].input.value = ColorModifiers.shiftColorBrightnessByDegree(this.tableRows[i].input.value, randomPrimaryColorsBrightness)
            }
        }
        this.saveCurrentColors()
        this.draw()
    }

    resetPrimaryColorsToDefault() {
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isPrimaryColor(i)) {
                this.tableRows[i].input.value = this.defaultColors[i]
            }
        }
        this.saveCurrentColors()
        this.draw()
    }

    resetSecondaryColorsToDefault() {
        for (let i = 0; i < this.tableRows.length; i++) {
            if (this.isSecondaryColor(i)) {
                this.tableRows[i].input.value = this.defaultColors[i]
            }
        }
        this.saveCurrentColors()
        this.draw()

    }

    resetAllColorsToDefault() {
        for (let i = 0; i < this.tableRows.length; i++) {
            this.tableRows[i].input.value = this.defaultColors[i]
        }
        this.saveCurrentColors()
        this.draw()
    }

    draw() {
        this.updateColorTableDisplay();

        let currentImageOfKirby = this.animationImages[this.currentImageIndex];

        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.beginPath(); // Start a new path
        this.ctx.rect(0, 0, 420, 420); // Add a rectangle to the current path
        this.ctx.fill(); // Render the path

        for (let y = 0; y < currentImageOfKirby.length; y++) {
            for (let x = 0; x < currentImageOfKirby[y].length; x++) {
                let color = currentImageOfKirby[y] && currentImageOfKirby[y][x] && currentImageOfKirby[y][x].color ? currentImageOfKirby[y][x].color : this.backgroundColor;

                this.ctx.fillStyle = color;
                this.ctx.beginPath(); // Start a new path
                this.ctx.rect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize); // Add a rectangle to the current path
                this.ctx.fill(); // Render the path
            }
        }
    }

    updateColorTableDisplay() {
        for (let i = 0; i < this.tableRows.length; i++) {
            this.colorObjects[i].color = this.tableRows[i].input.value;
            this.tableRows[i].span.innerHTML = `${this.tableRows[i].number}: ${this.tableRows[i].input.value}`;
        }

        let string = `  ${this.yamlKey}:`
        for (let i = this.tableRows.length - 1; i >= 0; i--) {
            string += `\n    '${this.tableRows[i].number}': '${this.tableRows[i].input.value.replace("#", "")}'`
        }
        this.textarea.value = string;
    }

    // startAnimation(saveGifHelper) {
    //     this.animationInterval = setInterval(() => {
    //         this.currentImageIndex = ((this.currentImageIndex + 1) % this.animationImages.length);
    //         this.draw();
    //         if (this.isGifRecording) {
    //             this.currentRelativeFrame++;
    //             if (this.currentRelativeFrame > this.animationImages.length) {
    //                 saveGifHelper();
    //             }
    //         }
    //     }, this.animationMSPerFrame);
    //     this.isAnimating = true;
    // }

    startAnimation() {
        this.animationInterval = setInterval(() => {
            this.currentImageIndex = ((this.currentImageIndex + 1) % this.animationImages.length);
            this.draw();
            if (this.gifFrame >= 0) {
                this.gifFrame++;
                if (this.gifFrame >= this.animationImages.length ) {
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
            console.log("start")
            this.gifFrame = 0;
            const stream = canvas.captureStream(this.animationMSPerFrame);
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
            console.log("end")
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