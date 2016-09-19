
$(window).mousemove(function() {
  var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

  $('body').css('background-color', color);

  $(window).click(function(){

    var myresult = [];

    myresult = color.match(/\d+/g);
    hexString1 = parseInt(myresult[0]).toString(16); //Red
    hexString2 = parseInt(myresult[1]).toString(16); //Green
    hexString3 = parseInt(myresult[2]).toString(16); //Blue
    hexcode = '#'+hexString1+hexString2+hexString3;

    function rgb2hsl(r, g, b) {
    var max, min, h, s, l, d;
    r /= 255;
    g /= 255;
    b /= 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;
    if (max == min) {
        h = s = 0;
    } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    h = Math.floor(h * 360);
    s = Math.floor(s * 100);
    l = Math.floor(l * 100);
    return { h: h, s: s, l: l };
}

    var hsl = rgb2hsl(myresult[0], myresult[1], myresult[2]);
    // console.log(hsl);
    var displayVal = "Hexcode is: "+hexcode + ", HSL is: " + "hsl("+hsl.h+","+hsl.s+","+hsl.l+")";
    $(".contentText").text(displayVal);

  });

});
