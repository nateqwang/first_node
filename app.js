import express from 'express'
import url from 'url'
import path from 'path'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const pagesPath = path.join(__dirname,'pages')

app.get('/',(req,res) => {
    res.sendFile(path.join(pagesPath,'index.html'))
})

app.get('/about',(req,res) => {
    res.sendFile(path.join(pagesPath,'about.html'))
})

app.get('/contact-me',(req,res) => {
    res.sendFile(path.join(pagesPath,'contact-me.html'))
})

app.listen(3000,() => console.log('hello'))