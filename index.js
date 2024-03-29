const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const responseHTML = `
        <html>
            <body>
			        <div>
                <h1>Kamu berhasil bukan aku ༼ つ ◕_◕ ༽つ <br> LAntas? (⌐■_■)</h1>
                <a href="/api/data">
                    <button>Ke Halaman replit</button>
                </a>
				      </div>
            </body>
        </html>
    `;
  res.send(responseHTML);
});

//import library CORS 
const cors = require('cors')

//use cors 
app.use(cors())

//import body parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const routeData = require("./routes/routeData");
app.use("/api/data", routeData); // use route posts di Express

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`);
});