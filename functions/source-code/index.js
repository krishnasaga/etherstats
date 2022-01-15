const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY = '';

exports.handler = async (event, context) => {
  try {

    const id = event.queryStringParameters['id'];

    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`);
    const data = await response.json();
    const { repos_url } = data;

      return { statusCode: 200, body: JSON.stringify(repos_url.gitHub) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
