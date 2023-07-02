const http = require('http')

const server = http.createServer((request, response) => {
  response.write('Minha primeira resposta')
  response.end()
})

server.listen(3030, () => { console.log('Servidor rodando!') })