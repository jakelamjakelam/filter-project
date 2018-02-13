var img;


function preload() {
  //img = loadImage("Taipei-Street-1129x752.jpg");
  //img = loadImage ("https://makezine.com/wp-content/uploads/2016/08/china-world-trade-center-beijing.jpg");
  img = loadImage(link.input);
}

//blue : dark(58,96,110), mid (130,142,130)
//pink : dark(211,152,146), mid(237,186,177)
function setup() {

  var link = createInput('');

  //img = loadImage(link.input);

  createCanvas(img.width, img.height);

  image(img, 0, 0, img.width, img.height);

  loadPixels();
  for(var i=0;i<4*pixels.length;i+=4) {
    if(pixels[i]+pixels[i+1]+pixels[i+2] >= 510) {
      //light
       pixels[i] = 255; //red
       pixels[i+1] = 255; //green
       pixels[i+2] = 255; //blue
     } else if (pixels[i]+pixels[i+1]+pixels[i+2] < 255) {
       //dark
          pixels[i] = 211; //63 85 119
          pixels[i+1] = 152; //226 176 167/ 211, 152, 146
          pixels[i+2] = 146; //27 86 181
      }else if (255 <= pixels[i]+pixels[i+1]+pixels[i+2]<510) {
        //mid
        pixels[i] = 237; //63 85 119
        pixels[i+1] = 186; //226 176 167/ 211, 152, 146
        pixels[i+2] = 177; //27 86 181
      }
    }

  updatePixels();

console.log ("bing bing bong bing bong");

}
