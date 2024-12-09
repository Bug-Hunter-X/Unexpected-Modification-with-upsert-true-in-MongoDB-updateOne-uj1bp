# MongoDB updateOne Upsert Bug

This repository demonstrates a subtle bug in using MongoDB's `updateOne` method with the `upsert: true` option.  The issue arises when attempting to update a document that already exists; instead of correctly inserting a new document if one with the specified filter doesn't exist, it modifies the existing document in unexpected ways.  The code example uses Node.js and the official MongoDB driver.

## Bug Details

The `updateOne` operation in `bug.js` attempts to update a document where the name is "John Doe".  If such a document exists, it should only update its age. However, if the document does not exist, a new document should be inserted. The current implementation does not behave as expected in either scenario, leading to data corruption.

## Solution

The `bugSolution.js` file provides a corrected implementation that utilizes the `insertOne` method for new documents to prevent unintended modifications.