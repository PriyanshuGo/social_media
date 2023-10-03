const express = require('express');
const routes = require("./routes/routes");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const cors = require("cors");
const app = express();
const port = 8000;

const store = new MongoDBStore({
    uri: 'mongodb://127.0.0.1:27017/', // MongoDB connection URI
    databaseName: "internDb",
    collection: 'sessions', // Collection name for storing sessions
});

app.use(
    session({
        secret: 'super-secret', // Replace with a secret key for session encryption
        resave: false,
        saveUninitialized: false,
        store: store, // Use the MongoDB session store
    })
);


app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from the client
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
