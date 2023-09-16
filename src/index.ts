import express from 'express'

const diaryRouter = require('./routes/diaries')

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('someone pinged here !!')
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)

//escuchar
app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`)
})