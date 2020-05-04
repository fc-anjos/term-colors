$(init);


scale = chroma.scale(['#fafa6e','#2A4858'])
    .mode('lch').colors(7);

console.log(scale);

function init() {
  for (var i = 0; i < 7; i++) {
    class_selector = '.color'+i;
    $(class_selector).css("backgroundColor", scale[i]);
  }
}
