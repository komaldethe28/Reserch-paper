// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/reserchpaper", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async () => {
  console.log("Connected to MongoDB");
  // Check if the patent table is empty
//   const count = await Patent.countDocuments();
//   if (count === 0) {
//     // Save six sample patents
//     const samplePatents = [
//       {
//         username:"admin",
//         facultyName: "John Doe",
//         dept: "Computer Science",
//         titleOfIPR: "Innovative Algorithm",
//         patent:
//           "This patent discloses an innovative algorithm that significantly improves the efficiency of data processing. The algorithm employs advanced data structures and optimization techniques, making it suitable for various applications in computer science.",
//         dateOfFilingIPR: new Date("2023-01-01"),
//         dateOfIssue: new Date("2023-06-01"),
//         currentStatus: "Granted",
//         applicationNumber: "APP9876543",
//         patentNumber: "US1234567A1",
//         countryForIPProtection: "United States",
//       },
//       {
//         username:"admin",
//         facultyName: "Jane Smith",
//         dept: "Electrical Engineering",
//         titleOfIPR: "Energy-Efficient Power System",
//         patent:
//           "This patent presents a novel power system design that significantly enhances energy efficiency. The system incorporates smart grid technology and renewable energy sources, making it suitable for sustainable and eco-friendly power generation.",
//         dateOfFilingIPR: new Date("2023-02-15"),
//         dateOfIssue: new Date("2023-08-10"),
//         currentStatus: "Pending",
//         applicationNumber: "APP1234567",
//         patentNumber: "EU9876543B1",
//         countryForIPProtection: "European Union",
//       },
//       // Add five more sample patents with similar structure
//     ];

//     await Patent.insertMany(samplePatents);
//     console.log("Sample patents inserted successfully");
//   }
 });

function generateToken() {
  return Math.random().toString(36).substr(2);
}

// User Schema
const userSchema = new mongoose.Schema({
  fname:String,
  lname:String,
  username: String,
  password: String,
});

const paperSchema = new mongoose.Schema({

  username:String,
  facultyname:String,
  titleOfPR:String,
  dept:String,
  paper:String,
  PIN:String,
  journalName:String,
  dateOfPublication:Date,
  typeOfPublication:String,
  levelOfPublication:String 
});

const User = mongoose.model("User", userSchema);
const Paper = mongoose.model("Paper", paperSchema);

// Routes
app.post("/api/signup", async (req, res) => {
  try {
    const { fname,lname,username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      const newUser = new User({ fname,lname,username, password });
      await newUser.save();
      const token = generateToken();
      res.status(200).json({ token });
    } else {
      res.status(409).json({ message: "Email already exist" });
    }
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send("Error saving user");
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
     
      res.status(200).json({ msg: 'Login successful', status: 0});
    } else {
      // const token = generateToken();
      // res.status(200).json({ token });
      res.status(404).send({msg:"Invalid credentials", status: 1});
    }
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).send("Error finding user");
  }
});

app.post("/api/paper", async (req, res) => {
  try {
    const paperData = req.body;
    const paper = new Paper(paperData);
    await paper.save();
    res.status(201).json(paper);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/papers", async (req, res) => {
  try {
    const papers = await Paper.find();
    res.json(papers);
  } catch (error) {
    console.error("Error fetching patents:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete('/api/papers/:PIN', async (req, res) => {
  const { PIN} = req.params;

  try {
    const deletedPaper = await Paper.findOneAndDelete({
      PIN: PIN
    });

    if (deletedPaper) {
      console.log('Deleted paper');
      res.json({ message: 'Paper deleted successfully', deletedPaper });
    } else {
      res.status(404).json({ message: 'Paper not found' });
    }
  } catch (error) {
    console.error('Error deleting patent:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});