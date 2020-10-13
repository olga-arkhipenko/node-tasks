const https = require('https');

const get = url => new Promise((resolve, reject) => {
  https.get(url, { headers: { Accept: 'application/json' } }, res => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;

    if (statusCode < 200 || statusCode >= 300) {
      error = new Error(`Request Failed. Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error(`Invalid content-type. Expected application/json but received ${contentType}`);
    }

    if (error) {
      reject(error.message);
      res.resume();
      return;
    }

    res.setEncoding('utf8');

    let rawData = '';

    res.on('data', chunk => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        resolve(parsedData);
      } catch (e) {
        reject(e.message);
      }
    });
  }).on('error', e => {
    reject(e.message);
  });
});

module.exports = { get };
