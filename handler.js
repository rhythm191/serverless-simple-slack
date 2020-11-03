"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      response_type: "in_channel",
      text: "Hello world!",
    }),
  };
};
