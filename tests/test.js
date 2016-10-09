import { ar } from "../lib/";
import chai from 'chai';
import nock from 'nock';

chai.should();

describe("Test ar module", () => {

  it("Test appium url is correctly created", (done) => {
    let appiumURL = ar.url();
    appiumURL.should.equal("http://127.0.0.1:4723/wd/hub/status");
    appiumURL = ar.url("4724");
    appiumURL.should.equal("http://127.0.0.1:4724/wd/hub/status");
    appiumURL = ar.url(4725);
    appiumURL.should.equal("http://127.0.0.1:4725/wd/hub/status");
    done();
  });

  it("Test appium running return true", (done) => {
    nock('http://127.0.0.1:4723')
      .get('/wd/hub/status')
      .reply(200);
    ar.default().then((success) => {
      success.should.equal(true);
      done();
    });
  });

  it("Test appium running return true", (done) => {
    nock('http://127.0.0.1:4723')
      .get('/wd/hub/status')
      .reply(404);
    ar.default().then((success) => {
      success.should.equal(false);
      done();
    });
  });
});
