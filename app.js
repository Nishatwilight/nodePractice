const readline = require('readline');
const fs = require('fs');
const http = require('http');
const url = require('url')

let replaceFun = require('./Modules/replaceHtml')
const user = require('./Modules/user')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Plese enter your name:', (name)=>{
// console.log(`You have Entered ${name}`);
// rl.close()
// })

// rl.on('close',()=>{
//     console.log('Interface was closed');
// })

      //*****File System - Read and Write file

// let readFile = fs.readFileSync('input.txt', 'utf-8')
// console.log('read***********', readFile);

// let content = `hi This come from inputText file: ${readFile} \n This is the date: ${new Date()}`
// const writeFile = fs.writeFileSync('output.txt', content)

// fs.readFile('append.txt', 'utf-8', (error, data)=>{
//     console.log(data);
//     fs.readFile(`${data}.txt`, 'utf-8', (err, data1)=>{
//         console.log(data1);
//         fs.writeFile('output.txt', `This is data file ${data} /n/n This is data1 file ${data1} /n/n This is date: ${new Date()}`,()=>{
//             console.log('fiinish');
//         })
//     })
// })
// console.log('Reading File......');

// let html = fs.readFileSync('Filesss/index.html');
// const server = http.createServer((request, response) =>{
//     // response.end('Hey There, I am the response') //using end, we are able to send the response to the client
//     // response.end('<h1 style ="color: blue;">Hey There</h1>') 
//     response.end(html)
//     console.log('The new request received');
// // console.log('request', request);
// // console.log('response', response);
// })

// server.listen(8080, '127.0.0.1', ()=>{
//     console.log('The server has started');
// })

const html = fs.readFileSync('Filesss/index.html', 'utf-8')
let products = JSON.parse(fs.readFileSync('jsonData/products.json', 'utf-8'))
let productsList = fs.readFileSync('Filesss/products.html', 'utf-8')
let productDetails = fs.readFileSync('Filesss/productDetails.html', 'utf-8')

// let productArray = products.map((prod)=>{
//     let out = productsList.replace('{{%Image%}}', prod.productImage);
//     out = out.replace('{{%Name%}}', prod.name);
//     out = out.replace('{{%ModelName%}}', prod.modeName);
//     out = out.replace('{{%Number%}}', prod.modelNumber);
//     out = out.replace('{{%Size%}}', prod.size);
//     out = out.replace('{{%Camera%}}', prod.camera);
//     out = out.replace('{{%Price%}}', prod.price);
//     out = out.replace('{{%Color%}}', prod.color);
//     out = out.replace('{{%id%}}', prod.id);

//     return out;

// })



// const server4000 = http.createServer((request, response)=>{
//     console.log('New request found');
//     const {query, pathname: path} = url.parse(request.url, true)
//     console.log("******", query);

//     if(path === '/' || path.toLocaleLowerCase() === '/home'){
//         response.writeHead(200, {
//             'content-text': 'text/html',
//             'my_header': 'hello World',
//             author: 'nisha'
//         })
//         response.end(html.replace('replaceText', 'Hey You are in Home Page'))
//     } else if(path.toLocaleLowerCase() === '/about') {
//         response.writeHead(200,{
//             'content-text': 'text/html',
//             'my_header': 'hello World',
//             author: 'nisha'
//         })
//         response.end(html.replace('replaceText', 'Hey You are in About Page'))
//     } else if(path.toLocaleLowerCase() === '/contact') {
//         response.writeHead(200,{
//             'content-text': 'text/html',
//             'my_header': 'hello World',
//             author: 'nisha'
//         })
//         response.end(html.replace('replaceText', 'Hey You are in Contact Page'))
//     } else if(path.toLocaleLowerCase() === '/products'){
//         if(!query.id){
//            let productArray = products.map((prod)=>{
//             // console.log('prod1111', prod);
//               return  replaceFun(productsList, prod)
//             })
//         response.writeHead(200, {
//             'content-type': 'text/html',
//             author: "NishaManibalan"
//         })
//             response.end(html.replace('replaceText', productArray.join(',')))
//         } else{
//             let prod = products[query.id]
//             console.log('products[query.id]', products[query.id]);
//             console.log('prod2222', prod);
//             let productDetailHtml = replaceFun(productDetails, prod)
//             // response.end(`You are in the product ${query.id} page`)
//             response.end(html.replace('replaceText', productDetailHtml))

//         }

//     }
//      else {
//         response.writeHead(404,{
//             'content-type': 'text/html',
//             'my_header': 'hello World',
//             author: 'nisha'
//         })
//         response.end(html.replace('replaceText', 'Opps!!   Page not found'))
//     } 
// })

// server4000.listen(4000, '127.0.0.1', ()=>{
//     console.log('port 4000 is ready to serve');
// })


const server8000 = http.createServer();

server8000.on('request', (req, res)=>{
    console.log('New request found');
        const {query, pathname: path} = url.parse(req.url, true)
        console.log("******", query);
    
        if(path === '/' || path.toLocaleLowerCase() === '/home'){
            res.writeHead(200, {
                'content-text': 'text/html',
                'my_header': 'hello World',
                author: 'nisha'
            })
            res.end(html.replace('replaceText', 'Hey You are in Home Page'))
        } else if(path.toLocaleLowerCase() === '/about') {
            res.writeHead(200,{
                'content-text': 'text/html',
                'my_header': 'hello World',
                author: 'nisha'
            })
            res.end(html.replace('replaceText', 'Hey You are in About Page'))
        } else if(path.toLocaleLowerCase() === '/contact') {
            res.writeHead(200,{
                'content-text': 'text/html',
                'my_header': 'hello World',
                author: 'nisha'
            })
            res.end(html.replace('replaceText', 'Hey You are in Contact Page'))
        } else if(path.toLocaleLowerCase() === '/products'){
            if(!query.id){
               let productArray = products.map((prod)=>{
                // console.log('prod1111', prod);
                  return  replaceFun(productsList, prod)
                })
            res.writeHead(200, {
                'content-type': 'text/html',
                author: "NishaManibalan"
            })
                res.end(html.replace('replaceText', productArray.join(',')))
            } else{
                let prod = products[query.id]
                console.log('products[query.id]', products[query.id]);
                console.log('prod2222', prod);
                let productDetailHtml = replaceFun(productDetails, prod)
                res.end(html.replace('replaceText', productDetailHtml))    
            }
    
        }
         else {
            res.writeHead(404,{
                'content-type': 'text/html',
                'my_header': 'hello World',
                author: 'nisha'
            })
            res.end(html.replace('replaceText', 'Opps!!   Page not found'))
        } 
})
 server8000.listen(8000, '127.0.0.1', ()=>{
    console.log('port 8000 is ready to serve');
})

const myemitter = new user()

myemitter.on('userCreated', (id, name)=>{
    console.log(`New user created successfully ${id} and the name is ${name}`);
})
myemitter.on('UserUpdated', (id, data)=>{
    console.log(`New user Updated the event successfully his id is ${id} and the name ${data}`);
})

myemitter.emit('userCreated', 1, 'nisha')
myemitter.emit('UserUpdated', 2, 'Jeeev')

console.log('nodemon is running.........');