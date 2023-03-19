VanillaTilt.init(document.querySelector(".components"), {
    max: 3,
    reverse: true,
    transition: true,
    scale: 1.03
});

var i = 0;
$( ".card .btn-primary" ).each(function(index) {
    i++;
    $(this).addClass(`btn${i}`);
    VanillaTilt.init(document.querySelector(`.card${i} .btn${i}`), {
        max: 5,
        reverse: true,
        transition: true,
        scale: 1.03,
        "mouse-event-element": `.card${i}`
    });
});

let mm = new MagnetMouse({
    follow: {
        element: '.follow', /* Element to magnet */
      }
  });
  
  mm.init();