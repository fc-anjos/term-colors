$(init);

var n_of_colors = 8


scale = chroma.scale(['#fafa6e','#2A4858'])
    .mode('lch').colors(n_of_colors);

term_colors = []

double_colors = n_of_colors*2
for (var i = 0; i < double_colors; i++) {
  if (i < 8) {
    term_colors.push(scale[i]);
  } else {
    term_colors.push(chroma(scale[i-8]).darken(-1).saturate(1).hex())
    }
}

function init() {
  for (var i = 0; i < term_colors.length; i++) {
    color_class = 'color'+i;
    var element=$(`<div class="${color_class} boxes"></div>`);
    $('.container').append(element);
    $('.' + color_class).css("backgroundColor", term_colors[i]);
  }
}
