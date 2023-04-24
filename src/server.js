const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

app.get('/countries', async (req, res) => {
  const { name } = req.query;
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const countries = response.data;
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});