```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('<database>');
    const collection = database.collection('<collection>');

    // Incorrect update operation leading to unexpected results
    const result = await collection.updateOne({ name: "John Doe" }, { $set: { age: 30 } }, { upsert: true });
    console.log(result);
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
```