// 'use strict';

// const supertest = require('supertest');
// const { app } = require('../src/server');
// const { sequelize } = require('../src/models');

// const request = supertest(app);

// beforeAll( async() => {
//   await sequelize.sync();

// });

// afterAll( async() => {
//   await sequelize.drop();
// });

// describe('Auth Routes', (() => {
//   test('allow for user signup', async () => {
//     const response = await request.post('/signup').send({
//       username: 'kaeden',
//       password: 'pass123',
//     });
//     expect(response.status).toEqual(200);
//     expect(response.body.username).toEqual('kaeden');
//   });
//   test('allow for user signin', async () => {
//     const response = await request.post('/signin').set('Authorization', 'Basic');
//   });
// }));

