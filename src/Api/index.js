import axios from "axios";

const apikey = process.env.VITE_ENV_API_KEY;
export async function getPopularArticles() {
  const res = await axios.get(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apikey}`
  );
  const data = res.data;
  return data;
}

export async function getSearchResults(str) {
  const res = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${str}&api-key=${apikey}`
  );
  const data = res.data;
  return data.response.docs;
}
