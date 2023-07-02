const http = require('http')

const server = http.createServer((request, response) => {
  if(request.url === '/minha-primeira-rota'){
    const result = {
      message: 'Minha primeira rota'
    }
    response.statusCode = 200
    response.setHeader('Content-type', 'application/json')
    
    return response.end(JSON.stringify(result))
  }
  if(request.url === '/minha-segunda-rota'){
    const result = {
      message: 'Minha segunda rota'
    }
    response.statusCode = 200
    response.setHeader('Content-type', 'application/json')
    
    return response.end(JSON.stringify(result))
  }

  const result = {
    message: 'Qualquer outra rota!'
  }
  response.statusCode = 200
  response.setHeader('Content-type', 'application/json')
  response.statusMessage = 'Usuário faltando informação'

  response.write(JSON.stringify(result))
  response.end()
  })

  server.listen(3030, () => console.log('Servidor rodando!'))
  
  

  