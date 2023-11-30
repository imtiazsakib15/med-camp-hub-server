const express = require("express");
const applyMiddleware = require("./middlewares");
const globalErrorHandler = require("./utils/globalErrorHandler");
const connectDB = require("./db/connectDB");
const userRoutes = require("./routes/v1/users");
const campRoutes = require("./routes/v1/camps");
const authRoutes = require("./routes/v1/authentication");
const upcomingCampRoutes = require("./routes/v1/upcomingCamps");
const subscribeNewsletterRoutes = require("./routes/v1/subscribeNewsletter");
const registerCampRoutes = require("./routes/v1/registerCamps");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

applyMiddleware(app);

// Import Routes
app.use(userRoutes);
app.use(campRoutes);
app.use(authRoutes);
app.use(upcomingCampRoutes);
app.use(subscribeNewsletterRoutes);
app.use(registerCampRoutes);

app.get("/health", (req, res) => {
  res.send("MedCamp Hub is running....");
});

// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

// const main = async () => {
//   await connectDB();
//   app.listen(port, () => {
//     console.log(`MedCamp Hub Server is running on port ${port}`);
//   });
// };

// main();
module.exports = app;
