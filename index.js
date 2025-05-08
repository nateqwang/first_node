import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer(async (req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'})
    let htmlPath
    const pages = path.join(__dirname,'pages')
    if (req.url == '/about') {  
        htmlPath = path.join(pages,'about.html')
    } else if (req.url == '/contact-me') {
        htmlPath = path.join(pages,'contact-me.html')
    } else if (req.url == '/') {
        htmlPath = path.join(pages,'index.html')
    } else {
        htmlPath = path.join(pages,'404.html')
    }
    const htmlPage = await fs.readFile(htmlPath)
    res.write(htmlPage)
    res.end()
})

server.listen(8080, () => {
    console.log('connected from here')
})