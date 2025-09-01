exports.handler = async function (event, context) {
  const {
    endpoint,
    query = "",
    page = 1,
    type = "movie",
  } = event.queryStringParameters;
  const apiKey = process.env.TMDB_API_KEY;

  let url = `https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}&language=en-US`;

  if (query) url += `&query=${encodeURIComponent(query)}`;
  if (page) url += `&page=${page}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
