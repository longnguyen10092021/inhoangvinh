/*----------------
    SEARCH BAR
-----------------*/

jQuery.expr[':'].icontains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
  };
  
  $('#searchbar').on('input',function(e){
    var search = $('#searchbar').val()
    $('.artwork-image').css('display','none');
    $(`.artwork-image:icontains("${search}")`).css('display','block');
    $(`.artwork-image#${search}`).css('display','block');
  });
  
  /*----------------
      GALLERY
  -----------------*/
  
  var x = new XMLHttpRequest();
  x.open("GET", "https://backend.deviantart.com/rss.xml?type=deviation&q=by%3Amentalost+sort%3Atime+meta%3Aall", true);
  x.onreadystatechange = function () {
    if (x.readyState == 4 && x.status == 200)
    {
      var doc = x.responseXML;
          var items = doc.getElementsByTagName("item");
          for (var i=0, max=items.length; i < max; i++) {
              var title = doc.getElementsByTagName("item")[i].getElementsByTagName("title")[0].firstChild.nodeValue.replaceAll("'", "");
              var link = doc.getElementsByTagName("item")[i].getElementsByTagName("link")[0].firstChild.nodeValue;
              var img = doc.getElementsByTagName("item")[i].getElementsByTagName("media:content")[0].getAttribute('url');
              var desc = doc.getElementsByTagName("item")[i].getElementsByTagName("media:description")[0];
              var price = desc.textContent.replace(/\D/g, "").substring(0, 2);
  
              if (!title.includes('Animated')) {
                title = "Animated "+title;
              }
              /*if (price > 20) {
                price = 20;
              }*/
  
              /*var iterations = [];
              iterations.push(i);*/
              //console.log(title.replaceAll(" ", "")+iterations.slice())
              var short_title = title.replace("Steam Profile ", "");
              $('.artwork-container').append(`
              
              <div class="artwork-image col-12 col-md-12 col-lg-6 mb-6">
                <a class="" target="_blank" href="${link}">
                <img src="../img/loading.gif" data-src="${gif_array[i]}" class="artwork-animated-image lazyload" alt="Loading Image..."></a>
                <div class="artwork-data">
                  <span class="artwork-title">${title}</span>
                  
                  <button 
                    onclick="$('#inputTitle').val('${short_title}');$('#inputURL').val('${link}');$('.modal-title').text('Artwork Request')"
                    type="button" data-toggle="modal"data-target="#myModal" 
                    class="artwork-buy">Request</button>
                </div>
              </div>
              
              `)
          }
    }
  }
  x.send(null);
  
  x.addEventListener("load", transferComplete);
  
  function transferComplete() {
    var y = new XMLHttpRequest();
    y.open("GET", "https://backend.deviantart.com/rss.xml?type=deviation&q=by%3Amentalost+sort%3Atime+meta%3Aall&offset=60", true);
    y.onreadystatechange = function () {
      if (y.readyState == 4 && y.status == 200)
      {
        var doc = y.responseXML;
        var items = doc.getElementsByTagName("item");
        for (var i=0, max=items.length; i < max; i++) {
                var title = doc.getElementsByTagName("item")[i].getElementsByTagName("title")[0].firstChild.nodeValue.replaceAll("'", "");
                var link = doc.getElementsByTagName("item")[i].getElementsByTagName("link")[0].firstChild.nodeValue;
                var img = doc.getElementsByTagName("item")[i].getElementsByTagName("media:content")[0].getAttribute('url');
                var desc = doc.getElementsByTagName("item")[i].getElementsByTagName("media:description")[0];
                var price = desc.textContent.replace(/\D/g, "").substring(0, 2);
  
                if (!title.includes('Animated')) {
                  title = "Animated "+title;
                }
  
                /*if (price > 20) {
                  price = 20;
                }*/
                /*var iterations = [];
                iterations.push(i);*/
                //console.log(title.replaceAll(" ", "")+iterations.slice())
  
                var offseti = i+60;
                var short_title = title.replace("Steam Profile ", "");
                $('.artwork-container').append(`
                
                <div class="artwork-image col-12 col-md-12 col-lg-6 mb-6">
                  <a class="" target="_blank" href="${link}">
                  <img src="../img/loading.png" data-src="${gif_array[offseti]}" class="artwork-animated-image lazyload" alt="Loading Image..."></a>
                  <div class="artwork-data">
                    <span class="artwork-title">${title}</span>
                    
                    <button 
                      onclick="$('#inputTitle').val('${short_title}');$('#inputURL').val('${link}');$('.modal-title').text('Artwork Request')"
                      type="button" data-toggle="modal"data-target="#myModal" 
                      class="artwork-buy">Request</button>
                  </div>
                </div>
                
                `)
        }
      }
    }
    y.send(null);
    y.addEventListener("load", artworksLoaded);
    function artworksLoaded() {
      $($(".artwork-image").get().reverse()).each(function(i, obj) { 
        $(obj).attr('id',`SPA${i+1}`);
      });
      
      if (location.href.includes('?AID')) {
        var search = $('#searchbar').val()
        console.log(search)
        $('.artwork-image').css('display','none');
        $(`.artwork-image#${search}`).css('display','block');
      }
  
      if (location.href.includes('?q')) {
        var search = $('#searchbar').val()
        console.log(search)
        $('.artwork-image').css('display','none');
        $(`.artwork-image:icontains("${search}")`).css('display','block');
        $(`.artwork-image#${search}`).css('display','block');
      }
    }
  
  }
  
  
  
  /*----------------
      FOOTER
  -----------------*/
  
  $('#content').append(`
  <div style="position:inherit" class="footer">
    <span class="footer-socials">
        <a href="https://steamcommunity.com/id/mentalost" target="_blank"><i class="fab fa-steam"></i></a>
        <a href="https://www.deviantart.com/mentalost" target="_blank"><i class="fab fa-deviantart"></i></a>
    </span>
    <span class="footer-queue">Current queue: <span class="queue-number"></span></span>
    <span class="footer-cookies">This site uses cookies to enhance your experience.</span>
    <span class="footer-copyright">2022 &copy; <span>mentalost</span></span>
  </div>
  `);
  $('.footer-socials').css('margin-left','0px');
  $('.footer-copyright').css('margin-left','0px');
  $('.footer-queue').css('margin-left','0px');
  $('.footer-cookies').css('margin-left','0px');
  
  
  
  
  
  
  
  
  