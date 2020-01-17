export function getLocation() {
    if (navigator.geolocation) {
      return [navigator.geolocation.getCurrentPosition().coords.latitude, navigator.geolocation.getCurrentPosition().coords.longitude]
    } else { 
     console.log("Geolocation is not supported by this browser.");
     return []
    }
  }