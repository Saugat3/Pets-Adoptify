const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  image: Buffer  
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
