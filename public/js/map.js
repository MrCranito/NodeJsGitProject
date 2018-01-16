
      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map;
      var position;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation){
  				var watchId = navigator.geolocation.watchPosition(successCallback,
                            null,
                            {enableHighAccuracy:true});
  			}
		else{
 				 alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");}
 		}
      	function successCallback(position){
  				map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
  				var marker = new google.maps.Marker({
    			watchPosition	: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    			map: map,
    			title: "Vous êtes ici"
  		});
  				var previousPosition = null;
  		if (previousPosition){
   				 var newLineCoordinates =
   		 [
    			  new google.maps.LatLng(previousPosition.coords.latitude, previousPosition.coords.longitude),
      			  new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
    	];

    		var newLine = new google.maps.Polyline({
     				 path: newLineCoordinates,
     				 strokeColor: "#FF0000",
      				 strokeOpacity: 1.0,
      				 strokeWeight: 2
    		});
    		newLine.setMap(map);
  		}
  previousPosition = position;

}

	  function getCurrentBar(position){
	  	var pyrmont = {lat: 43.605528, lng: 1.450276};
 		infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        		service.nearbySearch({
         			 location: pyrmont,
         			 radius: 500,
         			 type: ['bar']
        		}, callback);
        		service.nearbySearch({
         			 location: pyrmont,
         			 radius: 500,
         			 type: ['night_club']
        		}, callback);
	  }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);		
            
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


      function createMarker(place,position) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: position,
          icon : ""
        });

        if(place.types =="bar" && place.types!= "night_club"){
        	marker.icon = icons["Bar"].icon;
        }
        else if(place.types =="night_club"){
        	marker.icon = icons["night_club"].icon;
        		}
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
        setInterval(getCurrentBar,2000);




	