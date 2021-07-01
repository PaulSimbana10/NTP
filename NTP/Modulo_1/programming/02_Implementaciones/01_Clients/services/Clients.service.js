
const {MongoConnection} = require('../lib/Mongo');
//colecciones
const COLLECTION = "clients"
const findUsers = () => new Promise( async (resolve, reject)=>{

try {
    
        //inicializo mongo client para que me retondo la conf de la bd
        const DB =  await MongoConnection()
        //obtenemos la coleccion
        const clients = DB.collection(COLLECTION)
        const clientsList = await clients.find({}).toArray();
        resolve (clientsList);
    
} catch (error) {
    reject(error);
}




})

module.exports ={
    findUsers,
};