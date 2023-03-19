/*----------------
    PRICES ARRAY
-----------------*/

var prices = [
    '3â‚¬ EUR',
    '15â‚¬ EUR',
    '25â‚¬ EUR',
    '30â‚¬ EUR'
]

/*----------------
    PAYMENT OPTION
-----------------*/

$("#inputPayment").change(function(){
    if($(this).val() == 'Paypal'){
      $("#option-paypal").show();
      $('#inputEmail').attr('required','');
      $('.checkboxPrivate').show()
    } else {
      $("#option-paypal").hide();
      $('#inputEmail').removeAttr('required');
      $('.checkboxPrivate').hide()
    }
});

/*----------------
    PRICES IN PRICE LIST
-----------------*/

$('.tab-price').each(function (index) {
    $(this).text(prices[index]);
});

/*----------------
    PRICES IN REQUEST FORM
-----------------*/

$('#inputAnimationType > option').each(function (index) {
    var initial_text = $(this).text();
    $(this).text(`${initial_text} ${prices[index]}`);
    $(this).attr('data-price', prices[index].slice(0, -5));
})

/*----------------
    PRICES WHEN SELECTED
-----------------*/
var staticPrice = null;
var staticPrice2 = null;

document.getElementById("inputAnimationType").onchange = animationTypeChange;
$('#total-price').text(prices[0]);
$('#inputAll').val(prices[0]);
function animationTypeChange() {
    var selection_number = this.value.charAt(0);
    switch (selection_number) {
        case "1":
            var animationPrice = this[0].dataset.price;
            $('#total-price').text(animationPrice + 'â‚¬ EUR');
            $('#inputAll').val(animationPrice + 'â‚¬ EUR');
            break;
        case "2":
            var animationPrice = this[1].dataset.price;
            $('#total-price').text(animationPrice + 'â‚¬ EUR')
            $('#inputAll').val(animationPrice + 'â‚¬ EUR');
            break;
        case "3":
            var animationPrice = this[2].dataset.price;
            $('#total-price').text(animationPrice + 'â‚¬ EUR')
            $('#inputAll').val(animationPrice + 'â‚¬ EUR');
            break;
        case "4":
            var animationPrice = this[3].dataset.price;
            $('#total-price').text(animationPrice + 'â‚¬ EUR')
            $('#inputAll').val(animationPrice + 'â‚¬ EUR');
            break;
    }
    staticPrice = $('#total-price').text().replace(/\D/g, "");
    staticPrice2 = staticPrice;
}

/*----------------
    DELIVERY SELECTION
-----------------*/
staticPrice2 = staticPrice;

document.getElementById("inputDelivery").onchange = deliveryChange;
function deliveryChange() {
    var selection_number = this.value.charAt(0);
    var current_price = staticPrice;
    switch (selection_number) {
        case "1":
            $('#total-price').text(current_price + "â‚¬ EUR");
            $('#inputAll').val(current_price + "â‚¬ EUR");
            staticPrice2 = parseInt($('#total-price').text().replace(/\D/g, ""));
            break;
        case "2":
            parseInt(current_price) + 10;
            $('#total-price').text(parseInt(current_price) + 10 + "â‚¬ EUR");
            $('#inputAll').val(parseInt(current_price) + 10 + "â‚¬ EUR");
            staticPrice2 = parseInt($('#total-price').text().replace(/\D/g, ""));
            break;
        case "3":
            parseInt(current_price) + 20;
            $('#total-price').text(parseInt(current_price) + 20 + "â‚¬ EUR");
            $('#inputAll').val(parseInt(current_price) + 20 + "â‚¬ EUR");
            staticPrice2 = parseInt($('#total-price').text().replace(/\D/g, ""));
            break;
    }
    staticPrice2 = $('#total-price').text().replace(/\D/g, "");
}

/*----------------
    TIPS
-----------------*/

document.getElementById("inputTip").onchange = tipChange;
function tipChange() {
    var current_price = staticPrice2;
    var tip_value = $('#inputTip').val();
    if (tip_value == "") {tip_value = 0};
    parseInt(current_price) + tip_value;
    $('#total-price').text(parseInt(current_price) + parseInt(tip_value) + "â‚¬ EUR");
    $('#inputAll').val(parseInt(current_price) + parseInt(tip_value) + "â‚¬ EUR");
}

/*----------------
    MORE FEATURES
-----------------*/

function chooseImg() {
    staticPrice = $('#total-price').text().replace(/\D/g, "");
    var checkBox = document.getElementById("chooseImgg");

    if (checkBox.checked == true){
        //$('#inputCharacter').removeAttr('required');
        $('#total-price').text(parseInt(staticPrice) + 3 + "â‚¬ EUR");
        $('#inputAll').val(parseInt(staticPrice) + 3 + "â‚¬ EUR");
        staticPrice = parseInt(staticPrice)+3
    } else {
        //$('#inputCharacter').attr('required', '');
        $('#total-price').text(parseInt(staticPrice) - 3 + "â‚¬ EUR");
        $('#inputAll').val(parseInt(staticPrice) - 3 + "â‚¬ EUR");
        staticPrice = parseInt(staticPrice)-3
    }
}

function moreFeatures() {
    var checkBox = document.getElementById("featuresCheckbox");
    var checkboxes = $('.checkbox-hidden');
  
    if (checkBox.checked == true){
        /*$('.submit-btn').css('margin-top', '32px');
        setTimeout(() => { 
            $('.submit-btn').css('margin-top', '0px');
        }, 700)
        setTimeout(() => { 
            checkboxes.css('display', 'block');
        }, 1000)*/
        checkboxes.css('display', 'block');
    } else {
        //$('.submit-btn').css('margin-top', '0px');
        checkboxes.css('display', 'none');
    }
}

/*function chbTrack() {
    //staticPrice2 = $('#total-price').text().replace(/\D/g, "");
    var checkBoxTrack = document.getElementById("checkboxTrack");
    if (checkBoxTrack.checked == true) {
        //$('#total-price').text(parseInt(staticPrice2) + 5 + "â‚¬ EUR");
        //$('#inputAll').val(parseInt(staticPrice2) + 5 + "â‚¬ EUR");
    } else {
        //$('#total-price').text(parseInt(staticPrice2) - 5 + "â‚¬ EUR");
        //$('#inputAll').val(parseInt(staticPrice2) - 5 + "â‚¬ EUR");
    }
}*/

function chbEyes() {
    staticPrice2 = $('#total-price').text().replace(/\D/g, "");
    var checkBoxEyes = document.getElementById("checkboxMovingEyes");
    if (checkBoxEyes.checked == true) {
        $('#total-price').text(parseInt(staticPrice2) + 5 + "â‚¬ EUR");
        $('#inputAll').val(parseInt(staticPrice2) + 5 + "â‚¬ EUR");
    } else {
        $('#total-price').text(parseInt(staticPrice2) - 5 + "â‚¬ EUR");
        $('#inputAll').val(parseInt(staticPrice2) - 5 + "â‚¬ EUR");
    }
}

function chbMouth() {
    staticPrice2 = $('#total-price').text().replace(/\D/g, "");
    var checkBoxEyes = document.getElementById("checkboxMovingMouth");
    if (checkBoxEyes.checked == true) {
        $('#total-price').text(parseInt(staticPrice2) + 5 + "â‚¬ EUR");
        $('#inputAll').val(parseInt(staticPrice2) + 5 + "â‚¬ EUR");
    } else {
        $('#total-price').text(parseInt(staticPrice2) - 5 + "â‚¬ EUR");
        $('#inputAll').val(parseInt(staticPrice2) - 5 + "â‚¬ EUR");
    }
}

function chbBG() {
    staticPrice2 = $('#total-price').text().replace(/\D/g, "");
    var checkBoxBg = document.getElementById("checkboxMovingBg");
    if (checkBoxBg.checked == true) {
        $('#total-price').text(parseInt(staticPrice2) + 5 + "â‚¬ EUR");
        $('#inputAll').val(parseInt(staticPrice2) + 5 + "â‚¬ EUR");
    } else {
        $('#total-price').text(parseInt(staticPrice2) - 5 + "â‚¬ EUR");
        $('#inputAll').val(parseInt(staticPrice2) - 5 + "â‚¬ EUR");
    }
}

function chbSourceFiles() {
    staticPrice2 = $('#total-price').text().replace(/\D/g, "");
    var checkBoxBg = document.getElementById("checkboxSourceFiles");
    if (checkBoxBg.checked == true) {
        $('#total-price').text(parseInt(staticPrice2) + 50 + "â‚¬ EUR");
        $('#inputAll').val(parseInt(staticPrice2) + 50 + "â‚¬ EUR");
    } else {
        $('#total-price').text(parseInt(staticPrice2) - 50 + "â‚¬ EUR");
        $('#inputAll').val(parseInt(staticPrice2) - 50 + "â‚¬ EUR");
    }
}



/*----------------
    PRIVATE EMAIL
-----------------*/

function privateemail() {
    var checkPriveEmail = document.getElementById("checkboxPrivateEmail");
    if (checkPriveEmail.checked == true) {
        $('#option-paypal label:eq(0), #option-paypal input:eq(0), #option-paypal small:eq(0)').fadeOut(300, function() { $(this).hide(); });;
        $('#inputEmail').removeAttr('required');
    } else {
        $('#option-paypal label:eq(0), #option-paypal input:eq(0), #option-paypal small:eq(0)').fadeIn(300, function() { $(this).show(); });
        $('#inputEmail').attr('required','');
    }
}
