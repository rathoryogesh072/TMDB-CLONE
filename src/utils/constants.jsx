export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + import.meta.env.VITE_REACT_APP_TMDB_KEY,
    },
  };
  export const IMG_CDN_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
