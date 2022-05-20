import axios from "axios";

export async function getPopularArticles() {
  const res = await axios.get(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.VITE_ENV_API_KEY}`
  );
  const data = res.data;
  return data;
}
