const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js').default;

chai.should();
chai.use(chaiHttp);
describe('/GET ping', () => {
  it('it should return 200 and message', done => {
    console.log(app);
    chai
      .request(app)
      .get('/auth/logout/')
      .set({ method: 'GET', credentials: 'include' })
      .send({ message: 'hello' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have
          .property('response')
          .eql('Server is running. Message received: hello');
        done();
      });
  });
});
