const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let nameConverted = '';

app.get('/get', (request, response) => {
  return response.json({ name: nameConverted });
});

app.post('/insert', (request, response) => {
  const { name } = request.body;

  if(name.toLowerCase().includes('l')) {
    nameConverted = name.split('').reverse().join('');
  } else {
    nameConverted = name.toLowerCase();
  }

  return response.status(200).json({ name: nameConverted });
}); 

app.listen(3333, () => {
  console.log('🚀 Server running on http://localhost:3333/');
})