const express = require("express");
const app = express();

app.use(express.json());

const puerto = 3006;
app.get("/", (req, res) => {
	res.send(res.json());
});

app.post("/", (req, res) => {
	const body = req.body;
	console.log(body);
	res.json(req.body);
});

app.listen(puerto, () => {
	console.log(`El servidor está escuchando en el puerto ${puerto}`);
});
