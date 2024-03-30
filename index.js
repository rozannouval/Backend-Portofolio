const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  const responseHTML = `
        <html>
            <body>
			        <div>
                <h1>Kamu berhasil bukan aku ༼ つ ◕_◕ ༽つ <br> LAntas? (⌐■_■)</h1>
                <a href="/api/anggota">
                    <button>Ke Halaman api/data</button>
                </a>
				      </div>
            </body>
        </html>
    `;
  res.send(responseHTML);
});

//use cors
app.use(cors());

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    // ...
  })
);

//import body parser
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const routeData = require("./routes/routeData");
app.use("/api/anggota", routeData); // use route posts di Express

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
