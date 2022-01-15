const faunadb = require('faunadb');


exports.handler = async (event, context) => {
    try {
        return { statusCode: 200, body: JSON.stringify({}) }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({}),
        };
    }
};
