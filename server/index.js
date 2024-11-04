const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const userRoutes = require("./routes/user.js")

app.use(cors());
// credentials: true allows your server to accept cookies, authentication headers, 
// or client certificates in cross-origin requests.
app.use(express.json());
// express.json() is a built-in middleware function in Express that parses the incoming 
// request body as JSON and makes it available on the req.body object.
app.use(express.static("public"));
// serves static files like HTML, CSS, JavaScript, and images from the public directory.

/* ROUTES */
app.use("/auth", authRoutes) //All routes in authRoutes are prefixed with /auth
app.use("/items", listingRoutes) //All routes in listingRoutes are prefixed with /items.
app.use("/users", userRoutes)

// req (Request Object): Contains information about the client's HTTP request, 
// such as URL, query parameters, headers, and body.
// res (Response Object): Used to send the server's response back to the client, 
// including setting the status code, headers, and body of the response.
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* MONGOOSE SETUP */
const PORT = 3001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));