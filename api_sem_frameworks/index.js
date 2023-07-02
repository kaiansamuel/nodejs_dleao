const http = require('http')
const { randomUUID } = require('crypto')
let users = []
const server = http.createServer((request, response) => {
 const METHOD = request.method
 if(METHOD === 'POST'){
  request.on('data', (data) => {
    const body = JSON.parse(data)
    const user = {
      ...body,
      id: randomUUID(),
    }
    users.push(user)
    return response.end(JSON.stringify(user))
    })
    }
  })

  server.listen(3030, () => console.log('Servidor rodando!'))
  
  

  