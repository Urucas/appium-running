import request from 'request';

const ar = {
  url: (port) => {
    port = isNaN(port) ? 4723 : parseInt(port);
    return `http://127.0.0.1:${port}/wd/hub/status`;
  },
  default: (port) => {
    return new Promise( (res, rej) => {
      let appiumURL = ar.url(port);
      try {
        request.get({url:appiumURL,timeout: 2000}, (error, response, body) => {
      		if(error || response.statusCode != 200) return res(false);
      		res(true);
        });
      }catch(e) { rej(e); }
    });
  }
}

export { ar }

export default function(port) {
  return ar.default(port);
}
