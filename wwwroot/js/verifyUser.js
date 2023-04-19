import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { MongoClient } = require('mongodb')
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

async function getUsers(username) {
  // Connect to MongoDB
  const uri =
    "mongodb+srv://kolbyzboesel:Kolby344@sportsscores.anxznpk.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    const dbName = "Login_Data";
    const collectionName = "Login_Info";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    // Retrieve user from MongoDB
    const query = { LoginID: username };
    const options = {
        projection: {LoginID: 1, PasswordID: 2},
    }
    const user = await collection.findOne(query, options);
    return user;
  
  }
  finally{
    await client.close();
  }
}
getUsers().catch(console.dir)

async function verifyUsers(username, password){
    console.log(username);
    console.log(password);

    let user = await getUsers(username);
    console.log(user.LoginID);
    console.log(user.PasswordID);
    if(user.LoginID == username && user.PasswordID == password){
        return true;
    }
}
