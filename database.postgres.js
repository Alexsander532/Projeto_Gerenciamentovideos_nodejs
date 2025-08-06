import { randomUUID } from "node:crypto"
import {sql} from './db.js'
export class DatabasePostgres{

    list(search){
        let videos
        if (search){
            videos = sql`select * from videos where title ilike ${'%' + search + '%'}`
        } else{
            videos = sql `select * from videos`
        }
        return videos
    }
    
    async create(videos){
        const videoID = randomUUID()
        const {title, description, duration} = videos
        await sql `insert into videos (id, title, description, duration) VALUES (${videoID},${title},${description},${duration})`
    }

    async update(id, video){
        const {title, description, duration} = video
        await sql `update videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`

    }

    async delete(id, video){
        await sql`delete from videos WHERE id = ${id}`
    }
}