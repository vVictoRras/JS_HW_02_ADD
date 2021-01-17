// Написати ф-ю <strong>rgbToHex</strong> яка приймає колір в форматі
// rgb і повертає колір в форматі hex

function rgbToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1) {
      r = "0" + r;
    } else {
      r = r;
    }
    if (g.length == 1) {
      g = "0" + g;
    } else {
      g = g;
    }
    if (b.length == 1) {
      b = "0" + b;
    } else {
      b = b;
    }
    return ("#" + r + g + b).toUpperCase();
  }
  
  console.log(rgbToHex(0, 0, 0));