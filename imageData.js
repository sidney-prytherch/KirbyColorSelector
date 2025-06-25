let colors = [
    "#B01810", //1
    "#F0E0E8", //10 body -> 7
    "#C8A0A8", //14
    "#A87070", //2
    "#E02018", //3
    "#F0A0B8", //8 body -> 11
    "#D07880", //6
    "#A85048", //13
    "#E8D0D0", //11 body -> 14
    "#E85048", //4 
    "#D0C0C0", //12 body -> 2
    "#B08888", //15
    "#E87880", //7
    "#F8F8F8", //9 body -> 5
    "#B03830", //5
]

let image0 = [
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[2],  colors[2],  colors[2],  colors[2],  colors[2],  colors[2],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined, colors[11], colors[11], colors[10], colors[13], colors[13], colors[13],  colors[1], colors[10],  colors[2],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined, colors[11],  colors[2],  colors[8],  colors[8],  colors[1], colors[13], colors[13], colors[13], colors[13],  colors[1], colors[11],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined, colors[11],  colors[2],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[13],  colors[1], colors[11],  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined, colors[11],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[13], colors[11],  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined, colors[11],  colors[2],  colors[8],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[7],  colors[1], colors[11],  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined, colors[11],  colors[5],  colors[8],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[11],  colors[1],  colors[3],  undefined,  undefined,  undefined,  undefined,],
    [undefined, colors[11],  colors[2],  colors[5],  colors[5],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[7],  colors[1],  colors[3],  undefined,  undefined,  undefined,  undefined,],
    [undefined,  colors[7],  colors[2],  colors[5],  colors[5],  colors[8],  colors[1],  colors[8],  colors[1],  colors[1],  colors[1], colors[11], colors[12], colors[12],  colors[7],  colors[1], colors[10],  colors[3],  undefined,  undefined,  undefined,],
    [undefined,  colors[7],  colors[6],  colors[5],  colors[5],  colors[1],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[11],  colors[1],  colors[1],  colors[1], colors[13],  colors[3],  undefined,  undefined,  undefined,],
    [undefined,  colors[7],  colors[6], colors[12],  colors[5],  colors[2],  colors[5],  colors[8],  colors[8],  colors[1],  colors[1],  colors[8], colors[11],  colors[1],  colors[1],  colors[7],  colors[1],  colors[7],  undefined,  undefined,  undefined,],
    [undefined,  colors[7],  colors[7], colors[12],  colors[5],  colors[3],  colors[6],  colors[5],  colors[5],  colors[8],  colors[1], colors[10], colors[11],  colors[1], colors[13],  colors[7],  colors[1],  colors[7],  undefined,  undefined,  undefined,],
    [colors[7], colors[14], colors[14],  colors[3],  colors[5],  colors[5],  colors[7],  colors[6],  colors[6],  colors[5],  colors[8],  colors[3], colors[10],  colors[1],  colors[1],  colors[8], colors[10],  colors[7],  colors[7],  colors[3],  undefined,],
    [colors[7],  colors[4],  colors[9],  colors[7],  colors[3],  colors[5],  colors[5],  colors[6],  colors[3],  colors[3], colors[11],  colors[2],  colors[8],  colors[8],  colors[8], colors[10],  colors[7],  colors[3], colors[12], colors[12],  colors[3],],
    [colors[7], colors[14],  colors[4],  colors[9],  colors[7],  colors[7],  colors[6],  colors[5],  colors[5],  colors[5],  colors[5],  colors[5],  colors[5],  colors[5],  colors[7],  colors[3],  colors[6],  colors[6],  colors[5], colors[12],  colors[3],],
    [undefined,  colors[7],  colors[4],  colors[4],  colors[9],  colors[9],  colors[7],  colors[7],  colors[6],  colors[6],  colors[5],  colors[5],  colors[5],  colors[2],  colors[6],  colors[7], colors[14], colors[12],  colors[9],  colors[7],  undefined,],
    [undefined,  colors[7], colors[14],  colors[4],  colors[4],  colors[9], colors[14], colors[14], colors[14], colors[14], colors[14], colors[14], colors[14],  colors[0],  colors[4],  colors[4],  colors[4],  colors[4],  colors[7],  colors[7],  undefined,],
    [undefined,  undefined,  colors[7], colors[14],  colors[0],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined, colors[14], colors[14],  colors[4], colors[14], colors[14],  colors[7],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined, colors[14], colors[14],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
];
let image1 = [
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined, colors[11],  colors[2],  colors[2],  colors[2], colors[11],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined, colors[11],  colors[2],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1], colors[11], colors[11],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined, colors[11],  colors[2], colors[10], colors[13],  colors[1],  colors[1], colors[13], colors[13], colors[13], colors[13], colors[11],  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined, colors[11],  colors[2], colors[10], colors[13],  colors[1],  colors[1],  colors[1],  colors[1], colors[13], colors[13], colors[13], colors[13], colors[11],  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined, colors[11],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[13], colors[13], colors[13], colors[13], colors[13], colors[11],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined, colors[11],  colors[2],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[13], colors[13],  colors[1], colors[13], colors[13], colors[11],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined, colors[11],  colors[8],  colors[8],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[3],  colors[1],  colors[3], colors[11],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  colors[3],  colors[2],  colors[8],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[11],  colors[1], colors[11], colors[11],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  colors[7],  colors[5],  colors[5],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[7],  colors[1],  colors[7],  colors[2], colors[11],  undefined,  undefined,],
    [undefined,  undefined,  colors[3], colors[12],  colors[5],  colors[5],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1],  colors[5], colors[12], colors[12],  colors[7],  colors[1],  colors[7],  colors[6], colors[11],  undefined,  undefined,],
    [undefined,  undefined,  colors[7], colors[12],  colors[5],  colors[5],  colors[5],  colors[8],  colors[8],  colors[5],  colors[1],  colors[1],  colors[1],  colors[1],  colors[8],  colors[1],  colors[8],  colors[5],  colors[7],  undefined,  undefined,],
    [undefined,  undefined,  colors[7],  colors[3], colors[12],  colors[5],  colors[5],  colors[5],  colors[5],  colors[3],  colors[1],  colors[1], colors[13],  colors[1],  colors[1],  colors[7],  colors[8], colors[13],  colors[7],  undefined,  undefined,],
    [undefined,  undefined,  undefined,  colors[7],  colors[7],  colors[9], colors[12],  colors[6],  colors[7],  colors[3],  colors[8],  colors[1],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1], colors[13],  colors[7],  undefined,  undefined,],
    [undefined,  undefined,  undefined,  colors[7],  colors[3], colors[14],  colors[7],  colors[7],  colors[6],  colors[5],  colors[8],  colors[8],  colors[8],  colors[8],  colors[8],  colors[8],  colors[8],  colors[7],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  colors[7], colors[14],  colors[4], colors[14],  colors[9],  colors[5],  colors[5],  colors[5],  colors[5],  colors[5],  colors[5],  colors[5],  colors[7],  colors[7],  colors[7],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  colors[7],  colors[0],  colors[4],  colors[9], colors[14], colors[14],  colors[7], colors[14],  colors[7],  colors[7],  colors[7],  colors[7],  colors[9],  colors[9], colors[14],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  colors[7],  colors[7],  colors[4],  colors[9],  colors[9],  colors[9],  colors[9], colors[14],  colors[0],  colors[4],  colors[4],  colors[9],  colors[9],  colors[9],  colors[7],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined, colors[14], colors[14],  colors[0],  colors[4],  colors[4],  colors[7],  undefined,  colors[7],  colors[7],  colors[4],  colors[4],  colors[4], colors[14],  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined, colors[14], colors[14],  colors[7],  colors[3],  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[7],  colors[7],  undefined,  undefined,  undefined,  undefined,  undefined,],
];
let image2 = [
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined, colors[11], colors[11],  colors[2],  colors[2],  colors[2], colors[11], colors[11],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[3], colors[11],  colors[8], colors[13], colors[13], colors[13], colors[13],  colors[1], colors[10], colors[11],  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  colors[3],  colors[8],  colors[1], colors[13],  colors[1], colors[13], colors[13], colors[13], colors[13], colors[13], colors[10],  colors[3],  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  colors[3],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1], colors[13],  colors[1], colors[13], colors[13], colors[13], colors[13],  colors[8],  colors[3],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  colors[7],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[13], colors[13], colors[13], colors[13],  colors[3],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  colors[3],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[13],  colors[1],  colors[1], colors[13],  colors[8],  colors[3],  undefined,  undefined,],
    [undefined,  undefined,  undefined,  colors[7],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[13],  colors[1],  colors[3],  colors[1],  colors[7], colors[10],  colors[7],  undefined,  undefined,],
    [undefined,  undefined,  colors[7],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[11],  colors[1], colors[11],  colors[2],  colors[7],  undefined,  undefined,],
    [undefined,  colors[7],  colors[5],  colors[8],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1], colors[13], colors[13], colors[13],  colors[1],  colors[7],  colors[1],  colors[7], colors[11],  colors[1],  colors[3],  undefined,],
    [undefined,  colors[7],  colors[5],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[12],  colors[9], colors[12],  colors[1],  colors[7],  colors[1],  colors[7],  colors[6], colors[12],  colors[7],  undefined,],
    [undefined,  colors[7],  colors[2],  colors[8],  colors[8],  colors[8],  colors[1],  colors[1],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[13],  colors[1],  colors[1],  colors[7],  undefined,],
    [undefined,  colors[7], colors[11],  colors[5],  colors[8],  colors[8],  colors[8],  colors[5],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[8],  colors[8], colors[13],  colors[1],  colors[7],  undefined,],
    [undefined,  undefined,  colors[7], colors[11], colors[12], colors[12],  colors[7],  colors[2],  colors[5],  colors[5],  colors[5],  colors[8],  colors[1],  colors[1],  colors[1],  colors[7],  colors[8],  colors[1],  colors[7],  undefined,  undefined,],
    [undefined,  undefined,  undefined,  colors[7],  colors[7],  colors[7],  colors[7], colors[12], colors[12],  colors[5],  colors[5],  colors[8],  colors[8],  colors[8],  colors[8],  colors[8],  colors[5],  colors[7],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  colors[4], colors[14], colors[14],  colors[7],  colors[9],  colors[2],  colors[5],  colors[5],  colors[5],  colors[5],  colors[6],  colors[7],  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[4],  colors[4],  colors[4], colors[14],  colors[7],  colors[7],  colors[6],  colors[7], colors[14],  colors[9],  colors[7],  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[0],  colors[4],  colors[4],  colors[4],  colors[4],  colors[9], colors[14],  colors[0],  colors[9],  colors[7],  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[6],  colors[7],  colors[7],  colors[7],  colors[6],  colors[2],  colors[6],  colors[7],  undefined,  undefined,  undefined,  undefined,  undefined,],
];
let image3 = [
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined, colors[11],  colors[2],  colors[2],  colors[2],  colors[2], colors[11],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined, colors[11], colors[11], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[11], colors[11],  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined, colors[11], colors[11], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13],  colors[1], colors[11],  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined, colors[11],  colors[8], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[10],  colors[3],  undefined,  undefined,  undefined,],
    [undefined,  undefined, colors[11],  colors[8], colors[13], colors[13],  colors[1], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13],  colors[3],  colors[3],  undefined,  undefined,],
    [undefined,  undefined,  colors[3], colors[13],  colors[1],  colors[1],  colors[1], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13],  colors[7], colors[13],  colors[7], colors[13],  colors[3], colors[10],  colors[3],  undefined,],
    [undefined, colors[11],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[11], colors[13], colors[11],  colors[1],  colors[2],  colors[3],  colors[3],  undefined,],
    [undefined,  colors[3],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1], colors[13], colors[13], colors[13], colors[13], colors[13],  colors[7], colors[13],  colors[7],  colors[1], colors[13],  colors[3], colors[10],  colors[3],],
    [undefined,  colors[7],  colors[5],  colors[8],  colors[1],  colors[8],  colors[8],  colors[1],  colors[1], colors[13], colors[13], colors[13], colors[13],  colors[7], colors[13],  colors[7],  colors[1], colors[13],  colors[3], colors[10],  colors[7],],
    [undefined,  colors[7],  colors[3],  colors[5],  colors[5],  colors[5],  colors[8],  colors[1], colors[13],  colors[1],  colors[5], colors[12],  colors[1], colors[11],  colors[1], colors[11], colors[12],  colors[1], colors[10],  colors[3],  colors[3],],
    [undefined,  undefined,  colors[7],  colors[3],  colors[6],  colors[5], colors[10],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1],  colors[1], colors[13],  colors[1],  colors[1],  colors[1],  colors[1], colors[10],  colors[7],  undefined,],
    [undefined,  undefined,  undefined,  colors[7],  colors[7],  colors[7],  colors[2],  colors[5],  colors[8],  colors[8],  colors[1], colors[13], colors[13], colors[13],  colors[7],  colors[1], colors[13], colors[13],  colors[3],  colors[7],  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[6],  colors[5],  colors[5],  colors[8],  colors[8],  colors[1],  colors[8], colors[10], colors[10],  colors[8],  colors[1],  colors[8],  colors[7],  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[3],  colors[6],  colors[5],  colors[5],  colors[5],  colors[6],  colors[6],  colors[7],  colors[3],  colors[7], colors[12],  colors[7],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[7], colors[14], colors[14],  colors[7],  colors[7],  colors[7], colors[12], colors[12],  colors[5],  colors[6],  colors[3],  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[4],  colors[9],  colors[9], colors[14],  colors[9],  colors[9],  colors[9],  colors[9],  colors[3],  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[3],  colors[7],  colors[4],  colors[0],  colors[4],  colors[4],  colors[4],  colors[9],  colors[3],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[0],  colors[7],  colors[0],  colors[4],  colors[4],  colors[3],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[3],  colors[7],  colors[3],  colors[6],  colors[3],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
];
let image4 = [
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined, colors[11],  colors[2],  colors[2],  colors[2],  colors[2], colors[11],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined, colors[11], colors[11], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[11], colors[11],  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  colors[3], colors[11], colors[11], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13],  colors[1], colors[11],  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  colors[3], colors[13], colors[13],  colors[1], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13],  colors[2],  colors[3],  colors[3],  undefined,  undefined,],
    [undefined,  colors[3],  colors[1],  colors[1],  colors[1], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13],  colors[1],  colors[8],  colors[3], colors[13],  colors[3],  undefined,],
    [undefined,  colors[7],  colors[1],  colors[1], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13],  colors[3], colors[13],  colors[3], colors[13],  colors[8],  colors[8], colors[13], colors[13],  colors[3],],
    [undefined,  colors[3],  colors[5],  colors[8],  colors[1], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[13], colors[11], colors[13], colors[11], colors[13],  colors[8],  colors[8],  colors[8], colors[13],  colors[3],],
    [undefined,  colors[7],  colors[5],  colors[5],  colors[8],  colors[1], colors[13], colors[13],  colors[1],  colors[1],  colors[1], colors[13],  colors[7], colors[13],  colors[7], colors[13],  colors[8],  colors[8],  colors[3], colors[13],  colors[3],],
    [undefined,  colors[7],  colors[6],  colors[5],  colors[5],  colors[8],  colors[8],  colors[1],  colors[1], colors[12],  colors[9], colors[13],  colors[7], colors[13],  colors[7], colors[13], colors[12],  colors[9],  colors[7],  colors[8],  colors[3],],
    [undefined,  undefined,  colors[7],  colors[7], colors[11],  colors[5],  colors[8],  colors[1], colors[13], colors[13],  colors[1],  colors[1], colors[13],  colors[1],  colors[1], colors[13], colors[13],  colors[1],  colors[7],  colors[3],  undefined,],
    [undefined,  undefined,  undefined,  undefined,  colors[7],  colors[5],  colors[8],  colors[1],  colors[1],  colors[1], colors[13], colors[13], colors[13],  colors[8],  colors[7], colors[13], colors[13],  colors[8],  colors[7],  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  colors[7],  colors[3],  colors[5],  colors[8],  colors[8],  colors[8],  colors[1],  colors[1],  colors[1],  colors[1],  colors[7],  colors[8],  colors[5],  colors[2],  colors[7],  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[6],  colors[5],  colors[5],  colors[8],  colors[8],  colors[8],  colors[8],  colors[2],  colors[2],  colors[7],  colors[7],  colors[7],  colors[7],  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[7],  colors[6],  colors[5],  colors[5],  colors[5],  colors[2],  colors[2],  colors[7],  colors[7], colors[12], colors[12],  colors[7],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[7],  colors[7],  colors[7],  colors[6], colors[14],  colors[7], colors[12],  colors[9],  colors[4],  colors[4],  colors[6],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  colors[3],  colors[4],  colors[9],  colors[9],  colors[7],  colors[0],  colors[0],  colors[4],  colors[4],  colors[4],  colors[9],  colors[6],  colors[3],  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[0],  colors[4],  colors[4],  colors[9],  colors[3],  colors[3], colors[14],  colors[4],  colors[7],  colors[6],  colors[3],  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[0], colors[14],  colors[3],  undefined,  undefined,  colors[3],  colors[6],  colors[3],  colors[3],  undefined,  undefined,  undefined,  undefined,  undefined,],
    [undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  colors[7],  colors[7],  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,  undefined,],
];



// animation frames - some frames are repeated for the animation:
let creatureImages = [image2, image3, image4, image3, image2, image1, image0, image1];

// colors in the colors array are part of color group A, selected by index in colors array:
let colorGroupAIndices = [13, 10, 8, 5, 1];
