var i = 0;
$( ".card" ).each(function(index) {
    i++;
    $(this).addClass(`card${i}`);
    $(`.card${i} .card-header`).css('background',`var(--b-highlight${i})`)
    $(`.card${i} .btn-primary`).css('background',`var(--b-highlight${i})`)
});
var j = 0;
$( "#sidebar i" ).each(function(index) {
    j++
    $(this).addClass(`sidebar-icon${j}`);
    $(`.sidebar-icon${j}`).css('color',`var(--b-highlight${j})`)
});

/*var k = 0;
$( ".selection-card" ).each(function(index) {
    k++;
    $(this).addClass(`selection-card${k}`);
    $(`.selection-card${k} .selection-card-icon`).css('background',`var(--b-highlight${k})`)
    $(`.selection-card${k} .btn-primary`).css('background',`var(--b-highlight${k})`)
});*/