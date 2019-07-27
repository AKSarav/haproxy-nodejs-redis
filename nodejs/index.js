const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host:  'redisnode01',
    port: 6379
});
client.set('visits', 0);
app.get('/', (req, res) => {
    client.get('visits', (err, visits) =>
    {
        res.send ("Number of Visits "+ visits);
        console.log("visits"+ visits);
        client.set('visits', parseInt(visits)+1);

    });
});

app.get('/hello', (req, res) => {
    res.send("<html><head></head><body><h1>Test Page</h1></body></html>")
});

app.listen(8081, () => {
    console.log ("Started Server at port 8081");
});
