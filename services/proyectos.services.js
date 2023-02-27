import { MongoClient} from "mongodb"
const client = new MongoClient('mongodb+srv://portfolio2023:Riverplate_SAG_1991@cluster0.ghun0gd.mongodb.net/?retryWrites=true&w=majority')

async function traerProyectos(filter){

    const filterQuery =  {
        ...filter
    }

    if(filterQuery.genero) {
        filterQuery.genero = {$regex : filterQuery.genero, $options: 'i'}
    } 

    return client.connect()
    .then(async function(){
        const db = client.db('Portfolio-2023-MG')
        return db.collection('Proyectos').find(filterQuery).toArray()
    })
}

export{
    traerProyectos,
}