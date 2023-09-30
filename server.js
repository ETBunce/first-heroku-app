const express = require("express");
const app = express();
const session = require('express-session');
const cors = require("cors");
const routes = require('./routes');
const bodyParser = require("body-parser");
// const configDatabase = require("./database.js");
const dotenv = require("dotenv");
// const MongoDBStore = require('connect-mongodb-session')(session);

// ... other imports 
const path = require("path")



// Config
const PORT = process.env.PORT || 5000;

// Middleware
dotenv.config();
// configDatabase();

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());


//Session setup
// const store = new MongoDBStore({
//     uri: 'mongodb+srv://jzdegrey:cs3750@sandbox.t6lzk2q.mongodb.net/gridWordFinder',
//     databaseName: 'grid-game-sessions',
// });

// store.on('error', function(error) {
//     console.log('mongo session store error: ' + error);
// });

// app.use(session({
//     secret: 'kitty cat',
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 6 // 1 week
//     },
//     store: store,
//     resave: true,
//     saveUninitialized: true
// }));

// Routes
app.use('/', routes);


// Listen

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => { console.log("server is running on http://localhost:5000"); });