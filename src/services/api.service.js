const API_KEY = "T6TA2IoZfucUrdZJAxgfMNiAixi017pgbx4rtrAs";
const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers";

async function fetchPhotos(rover, camera, date) {
  try {
    const response = await fetch(`${BASE_URL}/${rover}/photos?earth_date=${date}&camera=${camera}&api_key=${API_KEY}`);
    const { photos } = await response.json();
    return photos;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const apiService = {
  fetchPhotos
};
