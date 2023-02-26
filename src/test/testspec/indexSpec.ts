import app from '../../server';
import supertest from 'supertest';
const requests = supertest(app);

describe('our shouldnot work وه', () => {
  it('it works,yay', async () => {
    const repo = await requests.get('/');
    expect(repo.status).toBe(404);
  });
});

describe('our router should (work || !work) ', () => {
  it('it not work =(  not work coz missing parmter وه', async () => {
    const endpoint = 'http://localhost:8124/api?';
    requests.get(endpoint, (error: unknown, response: any) => {
      expect(response.status).toBe(404);
    });
  });
  it('it not working when the get a string instead of number =( وه ', async () => {
    const endpoint =
      'http://localhost:8124/api?name=panthon&width=as&height=as ';
    requests.get(endpoint, (error: unknown, response: unknown) => {
      expect(response).toEqual('the width and height must be a numbers');
    });
  });
  it('it  work and get the img =) وه', async () => {
    const endpoint =
      'http://localhost:8124/api?name=panthon&width=2122&height=12123 ';
    requests.get(endpoint, (error: unknown, response: any) => {
      expect(response.status).toBe(200);
    });
  });
});










