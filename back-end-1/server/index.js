const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json())  // When we want to be able to accept JSON.


app.get("/api/users", (req, res) => {
    let friends = ["Butters", "Jared", "Tyler", "Cade", "Griffen"]
    res.status(200).send(friends)
})

app.get("/weather/:tempurature", (req, res) => {
    const {tempurature} = req.params;
    const phrase = `<h3>It was ${tempurature} today</h3>`;
    res.status(200).send(phrase);
});

app.listen(4000, () => console.log('Server running on 4000'));
