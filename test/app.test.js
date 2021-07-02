const supertest = require('supertest');
const app = require('../app');

let toBeDeleted = ""

describe('Testing the user API', () => {

    it('GET (all user) testing...', async () => {
        const response = await supertest(app).get('/api/v1/users/')
        expect(response.status).toBe(200)
        expect(response.body.success).toBe(true)
    })

    it('POST testing...', async () => {
        const data = {
            firstName:'mihir',
            lastName:'patel',
            password:'mihir123',
            address:'mahesana',
            age:20,
        }

        const response = await supertest(app).post('/api/v1/users/').send(data)
        expect(response.status).toBe(201)
        expect(response.body.success).toBe(true)

        toBeDeleted = response.body.user._id
        // console.log(toBeDeleted);
    })

    it ('GET (one user) testing...', async () => {
        const response = await supertest(app).get(`/api/v1/users/${toBeDeleted}`)
        expect(response.status).toBe(200)
        expect(response.body.success).toBe(true)
    })

    it ('PATCH testing...', async () => {
        const newData = {
            firstName : "testname1",
            lastName : "testname2",
            password : '123456gah',
            age : 21
        }

        const response = await supertest(app).patch(`/api/v1/users/${toBeDeleted}`).send(newData)
        expect(response.status).toBe(200)
        expect(response.body.success).toBe(true)
    })

    it ('DELET testing...', async () => {
        const response = await supertest(app).delete(`/api/v1/users/${toBeDeleted}`)
        expect(response.status).toBe(200)
        expect(response.body.success).toBe(true)
    })

})
