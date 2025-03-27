const request = require('supertest');
const app = require('../server'); 

describe('POST /submitVote', () => {
  it('should submit a valid vote and return status 200', async () => {
    const response = await request(app)
      .post('/submitVote')
      .send({ vote: 'Raining', name: 'Aaron Quinn' })
      .expect(200);

    expect(response.body.message).toBe('Vote submitted successfully');
  });

  it('should return an error if the vote or name is missing', async () => {
    const response = await request(app)
      .post('/submitVote')
      .send({ vote: '', name: '' })
      .expect(400);

    expect(response.body.error).toBe('Vote and name are required');
  });
});
