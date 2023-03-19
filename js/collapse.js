$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        if ($("#sidebar").hasClass('active')) {
            $('#sidebarCollapse').css('bottom', '305px');
            $('#sidebar i').css('display', 'block');
            $('.footer').css('display', 'flex');
        } else {
            $('#sidebarCollapse').css('bottom', '25px');
            $('#sidebar i').css('display', 'none');
            $('.footer').css('display', 'none');
        }
    });
});

function collapse() {
    if ($(".collapse").hasClass('show')) {
        $('.collapsable').css('display', 'flex');
        $('#pageSubmenu').css('display', 'none');
    } else {
        $('.collapsable').css('display', 'block');
        $('#pageSubmenu').css('display', 'contents');
        $('#pageSubmenu a').css('display', 'contents');
        $('#pageSubmenu li a').css('padding', '10px');
    }
}

/*---------------------------------
    SIDEBAR COLORS
---------------------------------*/

var doc = document.querySelector('#sidebar ul')
for (var i = 0; i < doc.childNodes.length; i++) {
    if (doc.childNodes[i].className == "activated") {
        var num = i / 2;
        $('.activated').css(`border-right`, `3px solid var(--b-highlight${num})`)
        break;
    }
}

/*---------------------------------
    FOOTER
---------------------------------*/

var queue_number = 7;
$('.queue-number').text(queue_number);

var footerCR = $('.footer-copyright').text();
var currentYear = new Date().getFullYear();
$('.footer-copyright').text(footerCR.replaceAll('2022', "2021-"+currentYear));

/*---------------------------------
    CONSOLE TEXT
---------------------------------*/

var styles = [
    'color: white',
    'background: #2A2D3E',
    'font-size: 30px',
    'font-family: Poppins',
    'text-shadow: 2px 2px black',
    'padding: 10px',
].join(';');
console.log('%cHi there !', styles);

var styles2 = [
    'color: #eee',
    'background: #3C4054',
    'font-size: 24px',
    'font-family: Poppins',
    'text-shadow: 2px 2px black',
    'padding: 10px',
].join(';');
console.log('%cI would appreciate if you didnt dig around that much', styles2);

var styles3 = [
    'color: #eee',
    'background: #3C4054',
    'font-size: 22px',
    'font-family: Poppins',
    'text-shadow: 2px 2px black',
    'padding: 10px',
].join(';');
console.log('%cAnyways if you are seeing this, might as well order an artwork ? :)', styles3);