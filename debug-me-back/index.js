const express = require('express');
const upload = require('utils/imageUploader')

const app = express;
const port = Math.floor(Math.random() * 65535)

app.use('/*', (req, res) => {
  return res.send('Connected successfully to the server')
})

app.use(express.static(path.join(__dirname, '/public/uploads')));

app.post('/upload-profile-pic', upload.single('profile_pic'), (req, res) => {
    const {file, fileValidationError} = res
    if (!file) {
      res.status(400).send('pouet') // 400 Bad Request
    }
    if (fileValidationError) {
      res.status(400).send(fileValidationError);
    }
    res.render({pathToImage: `/uploads/${file.originalname}`});
  })

app.listen(port, () => console.log(`Listening on port 3000...`));