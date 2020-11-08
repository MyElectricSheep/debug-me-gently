const express = require('express');
const upload = require('./utils/imageUploader')
const path = require('path')

const app = express();
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '/public')));

app.post('/upload-profile-pic', upload.single('profile_pic'), (req, res) => {
    const {file, fileValidationError} = req
    if (!file) {
      return res.status(400).send('Please include a file to upload') // 400 Bad Request
    }
    if (fileValidationError) {
      return res.status(400).send(fileValidationError);
    }
    res.send({pathToImage: `/uploads/${file.filename}`});
  })

app.listen(port, () => console.log(`Listening on port ${port}...`));