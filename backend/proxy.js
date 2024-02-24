const express = require('express');

import('node-fetch').then((nodeFetch) => {
    const fetch = nodeFetch.default;


const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.get('/proxy-video', async (req, res) => {
    const videoUrl = req.query.url;
    const response = await fetch(videoUrl);
    const videoBlob = await response.blob();
    res.setHeader('Content-Type', 'video/mp4');
    res.send(videoBlob);
});

app.listen(3002, () => {
    console.log('proxy on 3002');
});
});