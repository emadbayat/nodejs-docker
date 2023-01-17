import express from 'express';
import morgan from 'morgan'


//express configs
const app = express();
const PORT = process.env.SERVER_PORT || 8080;

initServer(PORT);

function initServer(PORT) {
    app.listen(PORT, (error) => {
            if (!error)
                console.log("Server is Successfully Running, and App is listening on port " + PORT)
            else
                console.log("Error occurred, server can't start", error);
        }
    );
}

app.use(morgan('[:date[iso]] :status :url'))

app.get("/hello", function (req, res, next) {
    if (req.query.name) {
        res.json(`Hello ${req.query.name}`);
    } else {
        res.json("Hello Stranger!");
    }
});

app.get("/author", function (req, res, next) {
    res.json('Emad Bayat');
});
