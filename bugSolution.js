```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('<database>');
    const collection = database.collection('<collection>');

    const filter = { name: "John Doe" };
    const updateDoc = { $set: { age: 30 } };

    const result = await collection.updateOne(filter, updateDoc);
    if (result.matchedCount === 0) {
      // Insert if no document matched the filter
      const newDoc = { name: "John Doe", age: 30 };
      const insertResult = await collection.insertOne(newDoc);
      console.log('Inserted document:', insertResult.insertedId);
    } else {
      console.log('Document updated:', result.modifiedCount);
    }
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
```