function getLocation() {
    if (navigator.geolocation) {
        try{
            navigator.geolocation.getCurrentPosition(getPosition);
        } catch(e) {
            //console.log(e)
        }
    } else {
        //console.log('Ihr Browser unterstützt keine Geolocation.');
    }
}

export function getPosition(position) {
    if(position === null) {
        getLocation();
    }else{
        return {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
    }
}