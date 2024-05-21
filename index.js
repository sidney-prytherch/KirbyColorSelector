let kirbyTable = Array.from(Array(18), _ => Array(20).fill(0));

function draw() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      for (let y = 0; y < kirbyTable.length; y++) {
        for (let x = 0; x < kirbyTable[y].length; x++) {
            const pixel = ctx.getImageData(x, y, 1, 1);
            console.log(pixel)
            const data = pixel.data;
            kirbyTable[y][x] = {r: data[0], g: data[1], b:data[2]}
        }
    }
    };
    img.src = "kirby.png";
    img.crossOrigin="anonymous"

    

    console.log(kirbyTable)

  }

  document.addEventListener("click", draw)