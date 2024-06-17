const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('dynamic', { title: '동적 폼을 배워보자!' })
})

// ajax 
app.get('/ajax', (req,res) => {
    console.log(req.query);
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})