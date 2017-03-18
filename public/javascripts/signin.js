
    function getLocation() {
        
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Your browser does not support GeoLocation, please upgrade to a current one");
        }

    }

    function showPosition(position) {
        document.forms['output']['geolocation'].value = "Longitude: " + position.coords.longitude + " \n"
                                                        + "Latitude: " + position.coords.latitude
    }

    getLocation();
