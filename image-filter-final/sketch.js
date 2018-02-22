//https://makezine.com/wp-content/uploads/2016/08/china-world-trade-center-beijing.jpg
//Taipei-Street-1129x752.jpg


var pink = {darkR:211, darkG:152, darkB:146, midR:237, midG:186, midB:177};
//var blue = {darkR:58, darkG:96, darkB:110, midR:127, midG:174, midB:224};

function setup() {

  link = createInput('');
  link.position(5,110);

  pinkB = createButton('Load Pink');
  pinkB.position(5,135);
  pinkB.mousePressed(colorPink);

  blueB = createButton('Load Blue');
  blueB.position(75,135);
  blueB.mousePressed(colorBlue);

  grayB = createButton('Load Gray');
  grayB.position(147,135);
  grayB.mousePressed(colorGray);

  purpleB = createButton('Load Purple');
  purpleB.position(220,135);
  purpleB.mousePressed(colorPurple);


}

function colorPink() {
  inp = link.value();
  loadImage(inp, function(img) {

cnv = createCanvas(img.width,img.height);
cnv.position(0,250);

    image(img, 0, 0, img.width,img.height);
    loadPixels();
    for(var i=0;i<4*pixels.length;i+=4) {
      if(pixels[i]+pixels[i+1]+pixels[i+2] >= 510) {
        //light
         pixels[i] = 255; //red
         pixels[i+1] = 255; //green
         pixels[i+2] = 255; //blue
       } else if (pixels[i]+pixels[i+1]+pixels[i+2] < 255) {
         //dark
            pixels[i] = pink.darkR; //63 85 119
            pixels[i+1] = pink.darkG; //226 176 167/ 211, 152, 146
            pixels[i+2] = pink.darkB; //27 86 181
        }else if (255 <= pixels[i]+pixels[i+1]+pixels[i+2]<510) {
          //mid
          pixels[i] = pink.midR; //63 85 119
          pixels[i+1] = pink.midG; //226 176 167/ 211, 152, 146
          pixels[i+2] = pink.midB; //27 86 181
        }
      }
    updatePixels();
  })

}


function colorBlue() {
  inp = link.value();
  loadImage(inp, function(img) {

cnv = createCanvas(img.width,img.height);
cnv.position(0,250);

    image(img, 0, 0, img.width,img.height);
    loadPixels();
    for(var i=0;i<4*pixels.length;i+=4) {
      if(pixels[i]+pixels[i+1]+pixels[i+2] >= 510) {
        //light
         pixels[i] = 255; //red
         pixels[i+1] = 255; //green
         pixels[i+2] = 255; //blue
       } else if (pixels[i]+pixels[i+1]+pixels[i+2] < 255) {
         //dark
            pixels[i] = 63; //63 85 119 / 58 96 110
            pixels[i+1] = 85; //226 176 167/ 211, 152, 146
            pixels[i+2] = 119; //27 86 181
        }else if (255 <= pixels[i]+pixels[i+1]+pixels[i+2]<510) {
          //mid
          pixels[i] = 127; //63 85 119
          pixels[i+1] = 174; //226 176 167/ 211, 152, 146
          pixels[i+2] = 224; //27 86 181
        }
      }
    updatePixels();
  })
}


function colorGray() {
  inp = link.value();
  loadImage(inp, function(img) {

cnv = createCanvas(img.width,img.height);
cnv.position(0,250);

    image(img, 0, 0, img.width,img.height);
    loadPixels();
    for(var i=0;i<4*pixels.length;i+=4) {
      if(pixels[i]+pixels[i+1]+pixels[i+2] >= 510) {
        //light
         pixels[i] = 255; //red
         pixels[i+1] = 255; //green
         pixels[i+2] = 255; //blue
       } else if (pixels[i]+pixels[i+1]+pixels[i+2] < 255) {
         //dark
            pixels[i] = 120; //63 85 119
            pixels[i+1] = 120; //226 176 167/ 211, 152, 146
            pixels[i+2] = 120; //27 86 181
        }else if (255 <= pixels[i]+pixels[i+1]+pixels[i+2]<510) {
          //mid
          pixels[i] = 190; //63 85 119
          pixels[i+1] = 190; //226 176 167/ 211, 152, 146
          pixels[i+2] = 190; //27 86 181
        }
      }
    updatePixels();
  })
}


function colorPurple() {
  inp = link.value();
  loadImage(inp, function(img) {

cnv = createCanvas(img.width,img.height);
cnv.position(0,250);

    image(img, 0, 0, img.width,img.height);
    loadPixels();
    for(var i=0;i<4*pixels.length;i+=4) {
      if(pixels[i]+pixels[i+1]+pixels[i+2] >= 510) {
        //light
         pixels[i] = 255; //red
         pixels[i+1] = 255; //green
         pixels[i+2] = 255; //blue
       } else if (pixels[i]+pixels[i+1]+pixels[i+2] < 255) {
         //dark
            pixels[i] = 107; //63 85 119
            pixels[i+1] = 78; //226 176 167/ 211, 152, 146
            pixels[i+2] = 144; //27 86 181
        }else if (255 <= pixels[i]+pixels[i+1]+pixels[i+2]<510) {
          //mid
          pixels[i] = 143; //63 85 119
          pixels[i+1] = 120; //226 176 167/ 211, 152, 146
          pixels[i+2] = 173; //27 86 181
        }
      }
    updatePixels();
  })
}
