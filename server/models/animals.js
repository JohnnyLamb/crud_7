var mongoose = require('mongoose');

var Schema = Schema.mongoose;

var Animal = new Schema ({
  name:String,
  age:Number
});

mongoose.connect(process.env.MOGOLAB_URI||'mongodb://localhost/animals');

module.exports = mongoose.model('animals',Animal);
