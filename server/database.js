const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud'

mongoose.connect(URI, {useNewUrlParser: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

module.exports = mongoose;