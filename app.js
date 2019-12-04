let jimp = require('jimp');

let temp = [
    " ", ".",  "\`", "\'", ",", 
    ":", "-", "_", ";", "\"", 
    "~", "\\", "/", "^", ">", 
    "<", "+", "=", "|", "!", 
    "i", "r", "t", "*", "c", 
    "?", "l", "s", "{", "}", 
    "v", "j", "7", "f", "(", 
    ")", "e", "[", "1", "z", 
    "]", "x", "J", "I", "o", 
    "a", "y", "u", "2", "3", 
    "5", "n", "L", "C", "T", 
    "w", "#", "4", "k", "b", 
    "V", "F", "q", "h", "S", "d", 
    "6", "9", "p", "Y", "0", "Z", 
    "A", "G", "U", "8", "P", "E", 
    "$", "X", "O", "%", "K", "D", 
    "B", "H", "&", "W", "@", "M"
];

let pixelColor = [
    " ", ":", "~", "+", "r", "l", "7", "[", "J", "2", "C", "k", "S", "0", "P", "D", "M", 
];

let print = ""

console.log('Array length: '+pixelColor.length);

jimp.read('b.jpg', function(err, image){
    if(err){
        console.log(err);
        return;
    }
    image.resize(200,100);
    for(let y=0; y<100; y++){
        for(let x=0; x<200; x++){
            let hexColor = image.getPixelColor(x, y); // e.g. 0xFFFFFFFF
            let color = jimp.intToRGBA(hexColor); // e.g. {r: 255, g: 255, b: 255, a:255}
            let avg = (color.r+color.g+color.b)/3;
            let index = parseInt(pixelColor.length-(avg/pixelColor.length));
            print += pixelColor[index];
        }
        print += "\n";
    }
    console.log(print);

});

