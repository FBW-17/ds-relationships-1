const express = require("express")
const mongoose = require("mongoose")
const app = express()
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["female", "male"],
        default: "female",
    },
    address: {
        type: {
            street: String,
            zipcode: Number,
            city: String
        },
        required: true
    }
})

const Customer = mongoose.model("Customer", CustomerSchema)

mongoose.connect("mongodb://localhost/pizza_db", {
    useFindAndModify: false, 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const port = 3000
app.listen(port, () => {
    console.log('Server started on port ' + port);
});

app.use(express.urlencoded()); // parse incoming FORM data into req.body

app.get('/', (req, res) => {
    res.send("Hello World");
});
