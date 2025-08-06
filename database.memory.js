import { randomUUID } from "node:crypto"

export class DatabaseMemory{
    #videos = new Map()  //Chave privada (só verá vista dentro dessa classe) --> Armazena os vídeos

    //Estruturas de dados melhores para a memoria dos videos:
    //SET --> Um tipo de Array em JS que não aceita valores duplicados
    //MAP --> É como se fosse um objeto dentro do JS

    list(search){
        //Array.from() --> Converte uma estrutura de dados que não é um array em um array
        //O entries traz um id único junto à requisição
        return Array.from(this.#videos.entries())
            .map((videoArray) => {
                const id = videoArray[0]
                const data = videoArray[1]

                return{
                    id, 
                    ...data,
                }
            }) 
            .filter(video => {
                if (search){
                    return video.title.includes(search)
                }
                return true
            })
    }
    
    create(video){
        const videoID = randomUUID()
        //UUID = Universal Unique ID (ID único e universal para cada vídeo)
        this.#videos.set(videoID, video)  /*Metodo set = Serve para adicionar uma informação dentro do map
                                           (recebe dois parametros = chave, que é o nosso id do vídeo, e o valor, que são as informações do vídeo)*/
    }

    update(id, video){
        this.#videos.set(id, video)
    }

    delete(id, video){
        this.#videos.delete(id)
    }
}