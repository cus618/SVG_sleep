var draw = SVG('drawing');
var count = 8;
for (var index = 0; index < count; index++) {
    var pattern = draw.pattern(277, 160, function(add) {
        add.path('M34.64, 0 l-34.64 20') ;
        add.path('M34.64, 0 l0 40') ;
        add.path('M34.64, 80 l0 -40'); 
        add.path('M34.64, 80 l-34.64 20');
        add.path('M34.64, 160 l-34.64 -20');
        add.path('M34.64, 40 l-34.64 -20');
    })
    pattern.attr('id', `lines-pattern${index + 1}`).attr('x', index * 34.64).attr('y', index * 60);
}
for (var index = 0; index < count; index++){
    draw.rect().attr('x', 0).attr('y', 0).attr('width', '100%').attr('height', '100%').fill(`url(#lines-pattern${index + 1})`)
}
