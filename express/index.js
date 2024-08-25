const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<p>Express app</p>');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`);
});
