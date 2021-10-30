const axios = require('axios');

exports.handler = async function (event) {
  try {
    const { queryStringParameters } = event;
    const { name } = queryStringParameters;
    const url = `https://api.github.com/users/${name}/gists`;
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data,
      }),
    };
  } catch (e) {
    return {
      body: JSON.stringify({
        message: e.message,
      }),
    };
  }
};

//https://api.github.com/users/khriztianmoreno/gists
