import axios from "axios";

export const getPlacesData = async (type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
      {
        params: {
          latitude: "16.8409",
          longitude: "96.1735",
          limit: "30",
          currency: "USD",
          distance: "2",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "2f6f581b26msh62189312f511da9p137602jsn2bca03d5e6a5",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
