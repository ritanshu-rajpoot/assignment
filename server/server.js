const express = require('express');
const app = express();
const cors = require('cors');
const axios = require("axios")
// configure cors
app.use(cors());

const hostname = '127.0.0.1';
const port = 5000;
// basic request

app.get('/', (request , response) => {
    response.send(`Welcome to assignments`);
});

// router configuration
app.get('/users',async (request,response)=>{
    try {
        let config = {
            method: 'get',
            url: 'http://jsonstub.com/orgs/1234/users',
            headers: {
                'Content-Type': 'application/json',
                'JsonStub-User-Key': 'a11dea59-1923-4e45-83a8-6676bc896d75',
                'JsonStub-Project-Key': 'fd7f1136-86f3-4c0e-b3c4-627c73493a4e'
            }
        };
        let result = await axios(config)
        console.log(result.data.data)
        response.status(200).json({usersinfo : result.data});
    }catch (e) {
        response.status(200).json({error : e.message});
    }
});

app.listen(port, hostname, () => {
    console.log(`Express Server is started at http://${hostname}:${port}`)
})