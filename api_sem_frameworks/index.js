const { application } = require('express')
const http = require('http')

const server = http.createServer((request, response) => {
  const result = {
    message: 'Minha primeira resposta!'
  }
  response.statusCode = 201
  response.writeHead(201, {
    'Content-type': 'application/json'
  })
  response.statusMessage = 'Usuário salvo com sucesso!'

  response.write(JSON.stringify(result))
  response.end()
})

server.listen(3030, () => { console.log('Servidor rodando!') })