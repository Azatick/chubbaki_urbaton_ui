export async function getGeolocation(): Promise<{
  latitude: number;
  longitude: number;
}> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { coords } = position;
        const { latitude, longitude } = coords;
        resolve({
          latitude,
          longitude
        });
      });
    } else reject(new Error("Геолокация не поддерживается данным браузером."));
  });
}
