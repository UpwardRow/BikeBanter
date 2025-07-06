export async function getUserLocation(): Promise<google.maps.LatLng> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject(new Error(
        'Geolocation is not supported by this browser. Please enable location services or use a different browser.'));
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latLng = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        resolve(latLng);
      },
      (error) => {
        reject(error);
      }
    );
  });
}