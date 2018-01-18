
      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
     /* var map;
      var infoWindow;
      var service;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 43.604978, lng : 1.447580},
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        service = new google.maps.places.PlacesService(map);
        infoWindow = new google.maps.InfoWindow({map: map});
        getCurrentPosition();
        
        }

      	
         function getCurrentPosition(){
           if (navigator.geolocation){
          var watchId = navigator.geolocation.watchPosition(successCallback,
                            null,
                            {enableHighAccuracy:true});
        }

           else{
                     alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
        }
        }


        function successCallback(position){   
          map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
          var marker = new google.maps.Marker({
          watchPosition : new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          map: map,
          title: "Vous êtes ici"
      });
          google.maps.event.addListenerOnce(map, 'bounds_changed', performSearch);

         }

     function performSearch(){
      var request ={ 
        bounds: map.getBounds(),
        keyword: 'best view',
        map: map

      };
      service.radarSearch(request, callback);
     }

       function callback(results, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }
        for (var i = 0, result; result = results[i]; i++) {
          addMarker(result);
        }
      }


      var iconBase = './img/';
	    var icons = {
	  			Bar: {
    					icon: iconBase + 'Beer-icon.png'  
    				},
  				night_club: {
    					icon: iconBase + 'Night_club.png'
  					}
			};

    function addMarker(place) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon: {
            url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(10, 17)
          }
        });

        google.maps.event.addListener(marker, 'click', function() {
          service.getDetails(place, function(result, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              console.error(status);
              return;
            }
            infoWindow.setContent(result.name);
            infoWindow.open(map, marker);
          });
        });
      }  */
     /* var map;
      var infoWindow;
      var service;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 43.605865,lng: 1.448880},
          zoom: 17,
           mapTypeId: google.maps.MapTypeId.ROADMAP
          
        });

        infoWindow = new google.maps.InfoWindow();
        service = new google.maps.places.PlacesService(map);

        // The idle event is a debounced event, so we can query & listen without
        // throwing too many requests at the server.
        map.addListener('idle', performSearch);
      }   

      function performSearch() {
        var request = {
          bounds: map.getBounds(),
          keyword: 'best view'
        };
        service.radarSearch(request, callback);
      }

      function callback(results, status) {
        console.log(results);
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }
        for (var i = 0, result; result = results[i]; i++) {
          addMarker(result);
        }
      }

      function addMarker(place) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon: {
            url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(10, 17)
          }
        });

        google.maps.event.addListener(marker, 'click', function() {
          service.getDetails(place, function(result, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              console.error(status);
              return;
            }
            infoWindow.setContent(result.name);
            infoWindow.open(map, marker);
          });
        });
      } */
      var map;
      var position;
      var currentPosition;
      var directionsDisplay;
      var directionsService;


      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
          {
            elementType : 'labels',
            stylers :[
                  {visibility : 'off'}
            ]
          }
          ]
        });
        var infoWindow = new google.maps.InfoWindow({map: map});
        google.maps.event.addListenerOnce(map, 'bounds_changed', getCurrentBar);
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsService = new google.maps.DirectionsService();
        directionsDisplay.setMap(map);

        // Try HTML5 geolocation.
       if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            currentPosition = pos;



            



            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } 
        else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
    }
        function successCallback(position){
          map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
          var marker = new google.maps.Marker({
          watchPosition : new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          map: map,
          title: "Vous êtes ici"
      });
          
    }

    function getCurrentBar(position){
      var pyrmont = {lat: 43.605528, lng: 1.450276};
    infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
               location: map.center,
               radius: 500,
               type: ['bar']
            }, callback);
            service.nearbySearch({
               location: map.center,
               radius: 500,
               type: ['night_club']
            }, callback);
    }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);   
            console.log(results);
          }
        }
      }
      var iconBase = './img/';
    var icons = {
          Bar: {
              icon: iconBase + 'Beer-icon.png'  
            },
          night_club: {
              icon: iconBase + 'Night_club.png'
            }
      };


      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker;
        if(place.types[0] =="night_club"){
          marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon : icons["night_club"].icon
        });
        }
        else{
          marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon : icons["Bar"].icon
        });
        }
        google.maps.event.addListener(marker, 'click', function() {
          var contentString =
            '<div class="col-md">'+   
          '<div class="card card-01 height-fix">'+
          '<img class="card-img-top" src="http://res.cloudinary.com/amritvirk23/image/upload/v1506061057/poc.jpg" alt="Card image cap">'+
          '<div class="card-img-overlay">'+
            '<h4 class="card-title"><strong>'+place.name+'</strong></h4>'+
            '<p class="card-text">Captain Jack Sparrow searches for the trident of Poseidon.</p>'+
            '<p class="card-text"><a href="#" class="fa fa-bookmark-o"></a><a class="fa fa-heart-o" href="#"></a></p>'+
          '</div>'+
        '</div>'+
        '</div>';
          var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
          infowindow.open(map, this);
          calculedRoute(marker,currentPosition);




        });
      }



      function calculedRoute(marker,currentPosition){
        console.log(currentPosition);

        var request = {
          origin : currentPosition ,
          destination: marker.position,
          travelMode : 'WALKING'
        };

            directionsService.route(request, function(result, status){
                if(status == "OK"){
                  directionsDisplay.setDirections(result);
                }
            });


      }
        setInterval(getCurrentBar,2000);
      




      



	