const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY = '';

exports.handler = async (event, context) => {
  try {

      const id = event.queryStringParameters['id'];

      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`);
      const data = await response.json();
      const circulating_supply = data.market_data.circulating_supply;
      const market_cap = data.market_data.market_cap['usd'];
      const description = data.description.en.replace(/<[^>]*>/g, ' ');
      const short_description = data.ico_data ? data.ico_data.short_desc : '';
      const image = data.image;
      const name = data.name;

      return { statusCode: 200, body: JSON.stringify({ name,image,description,short_description, circulating_supply: {
        number: circulating_supply,
        mantissa: circulating_supply,
        scaleName: 'M',
        scaleSymbol: 'M',
        unit: data.symbol.toUpperCase()
      },market_cap: {
        number: market_cap,
        mantissa: market_cap,
        scaleName: 'M',
        scaleSymbol: 'M',
        unit: 'USD'
      } }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
