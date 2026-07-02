export async function getWeather() {
  const url =
    "https://api.open-meteo.com/v1/forecast?" +
    "latitude=45.7640&longitude=4.8357" +
    "&daily=weathercode,temperature_2m_max,temperature_2m_min" +
    "&timezone=auto";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error loading weather");
  }

  const data = await response.json();

  return data.daily;
}