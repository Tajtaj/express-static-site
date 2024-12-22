const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('public'));

app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.get('/about', (req, res)=>{
	res.sendFile(path.join(__dirname, 'public', 'about.html'));
})
app.get('/contact', (req, res)=>{
	res.sendFile(path.join(__dirname, 'public', 'contact.html'));
})
app.listen(8000);