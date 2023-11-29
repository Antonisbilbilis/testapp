const express = require('express');
const PORT = 8080;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.post('/tshirt', (req, res) => {
console.log(req.body)
return res.sendStatus(200)
});
app.listen(PORT, () => {     console.log(`Server is running on port ${PORT}`); });