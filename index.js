require("dotenv").config(); // 🌱 Load environment variables at the very top

const express = require("express");
// const { users } = require("./data/users.json")

// import database connection file
const DbConnection = require("./databaseConnection");

// importing the routers
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

const app = express();

// Connect to MongoDB
DbConnection();

const PORT = process.env.PORT || 8081;

// Middleware to parse JSON
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Home Page :-)",
    });
});

// Mount routers
app.use("/users", usersRouter);
app.use("/books", booksRouter);

// Fallback route for undefined endpoints
// app.all('*', (req, res) => {
//     res.status(500).json({
//         message: "Not Built Yet"
//     })
// })

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is up and running on http://localhost:${PORT}`);
});
