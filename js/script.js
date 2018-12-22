$(document).ready(function () {
  // init sidenav
  $('.button-collapse').sideNav();

  // scrollspy
  $('.scrollspy').scrollSpy();

  // scrollfire
  const options = [
    {
      selector: '.main-text',
      offset: 0,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.navbar-fixed',
      offset: 1500,
      callback: function() {
        $('nav').removeClass('transparent').addClass('blue-grey darken-3');
      }
    }
  ];
  Materialize.scrollFire(options);

  // google maps api
  const position = [42.361145, -71.057083];
  const centerPosition = [42.377815, -70.981133];

  function showGoogleMaps() {
    // map positions
    const latLng = new google.maps.LatLng(position[0], position[1]);
    const centerLatLng = new google.maps.LatLng(centerPosition[0], centerPosition[1]);

    // map options
    const mapOptions = {
      zoom: 12,
      streetViewControl: false,
      scaleControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: centerLatLng
    }

    // create map
    map = new google.maps.Map(document.getElementById('google-maps'), mapOptions);

    // show marker
    marker = new google.maps.Marker({
      position: latLng,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP
    });
  }

  // maps event
  google.maps.event.addDomListener(window, 'load', showGoogleMaps);
});
