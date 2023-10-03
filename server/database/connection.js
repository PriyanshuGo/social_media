const mongoose = require('mongoose');

// Define the MongoDB connection URL
const dbURL = 'mongodb://127.0.0.1:27017/internDb';

// Establish the connection to the MongoDB database
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Export the Mongoose instance to be used in other parts of your application
module.exports = mongoose;
