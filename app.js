const express =require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('hi there, world')
}).listen(iport)

app.get('/demo', (req, res) => {
	res.status(418)
	res.set('X-Tea-Pot', 'the tea')
	res.send('hi im a tea pot')
})

