 //API REST em Node.js para gerenciamento de vídeos

//------------------------------------------------------------------------------------------------------------------------------------------//
//Uso do Fastify (micro framework) para construção da aplicação
//import { createServer} from 'node:http' //Cria um servidor HTTP (Servidor que pode ser acessado no servidor)

/*Request --> Obter dados da requisição que o usuário faz para o servido HTTP (informações da requisição para dentro da api)
Procura por exemplo, dados (nome, email, senha) do usuário para a funcionalidade de criação de um novo usuário*/

/*Response --> É o objeto utilizado para devolver uma resposta da api*/

//const server = createServer((request, response) => { //Passando função como parametro
//    response.write("OIIIIII")   //Escreve na tela de localhost:3333
//    return response.end()
//}) 
//server.listen(3333) //Quando abro a porta no meu navegador, aparece oi no meu terminal */ 
//------------------------------------------------------------------------------------------------------------------------------------------//

import {fastify} from 'fastify'
//import { DatabaseMemory } from './database.memory.js'
import { describe } from 'node:test'
import { DatabasePostgres } from './database.postgres.js'

//GET --> Busca informações (Consulta de um vídeo)
//POST --> Criação de um registo (Criação de um vídeo)
//PUT --> Alteração, Atualização de um registo (Atualização dos dados do vídeo)
//DELETE --> Deletar o registro (Apagar o registro de um vídeo)


const server = fastify() //Cria o servidor em Fastify

//const database = new DatabaseMemory()
const database = new DatabasePostgres()

//Request body --> Toda vez que utilizo PUT e POST, eu posso enviar o corpo da requisição (dados do videos)

//POST http://localhost:3333/videos --> Rota para criar um novo vídeo
server.post('/videos', async (request, reply) => { 
    const {title, description, duration} = request.body


    await database.create({   //Short sintaxe
        title, 
        description, 
        duration,
    })
    return reply.status(201).send()  //Consigo mudar o status code (é uma forma de informar, geralmente para o front, qual que foi o status, se deu sucesso, erro, qual tipo de erro, etc) da minha rota
})

//GET http://localhost:3333/videos --> Rota para listar todos os vídeos
server.get('/videos', async (request, reply) => { 
    const search = request.query.search

    const videos = await database.list(search)

    return videos
})

//PUT http://localhost:3333/videos --> Rota para atualizar um vídeo
// Route Parameter (id) --> Parametro que é enviado na rota para identificar um video especifico 
server.put('/videos/:id',async(request, reply) => { 
    const videoID = request.params.id   //Dentro de params, consigo acessar todos os parametros que vem na rota, que nesse caso é o id
    const { title, description, duration } = request.body

    await database.update(videoID, {
        title, 
        description,
        duration,
    })

    return reply.status(204).send()
})

//DELETE http://localhost:3333/videos --> Rota para deletar um vídeo
server.delete('/videos/:id', async(request,reply) => { 
    const videoID = request.params.id
    await database.delete(videoID)
    return reply.status(204).send()
})

server.listen({
    port: 3333,
})

