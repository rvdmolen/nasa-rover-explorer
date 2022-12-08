const API_KEY = "T6TA2IoZfucUrdZJAxgfMNiAixi017pgbx4rtrAs";
const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers";

async function fetchPhotos(rover, camera) {
  try {
    const response = await fetch(`${BASE_URL}/${rover}/photos?earth_date=2022-12-5&camera=${camera}&api_key=${API_KEY}`);
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
