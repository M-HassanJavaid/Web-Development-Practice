# MongoDB Database & Collection Methods

This document covers commonly used **MongoDB methods** for working with databases (`db`) and collections (`db.collection`).  
Methods are divided into **Basic**, **Intermediate**, and **Advanced** levels for easier learning.

---

## 📌 Basic Level

### Database Methods
- `show dbs` → List all databases  
- `use <dbName>` → Switch to or create a database  
- `db` → Show current database  

### Collection Methods
- `show collections` → List collections in current database  
- `db.createCollection(name, options)` → Create new collection  
- `db.collection.drop()` → Delete a collection  

### CRUD (Create, Read, Update, Delete)
- `db.collection.insertOne(document)` → Insert one document  
- `db.collection.insertMany([doc1, doc2])` → Insert multiple documents  
- `db.collection.find(query, projection)` → Find documents  
- `db.collection.findOne(query, projection)` → Find one document  
- `db.collection.updateOne(filter, update, options)` → Update one document  
- `db.collection.updateMany(filter, update, options)` → Update multiple documents  
- `db.collection.deleteOne(filter)` → Delete one document  
- `db.collection.deleteMany(filter)` → Delete multiple documents  

---

## 📌 Intermediate Level

### Query Enhancements
- `db.collection.distinct(field, query)` → Get unique values of a field  
- `db.collection.countDocuments(query, options)` → Count matching documents  
- `db.collection.estimatedDocumentCount()` → Estimate total documents  

### Find & Modify
- `db.collection.findOneAndUpdate(filter, update, options)` → Find and update one document  
- `db.collection.findOneAndReplace(filter, replacement, options)` → Find and replace one document  
- `db.collection.findOneAndDelete(filter, options)` → Find and delete one document  

### Indexes
- `db.collection.createIndex(keys, options)` → Create an index  
- `db.collection.createIndexes([indexes])` → Create multiple indexes  
- `db.collection.getIndexes()` → List all indexes  
- `db.collection.dropIndex(indexName)` → Drop a specific index  
- `db.collection.dropIndexes()` → Drop all indexes  

### Collection Management
- `db.collection.renameCollection(newName, options)` → Rename collection  
- `db.collection.stats()` → Get collection stats  
- `db.collection.validate(options)` → Validate documents in collection  

---

## 📌 Advanced Level

### Bulk & Aggregation
- `db.collection.bulkWrite(operations, options)` → Perform multiple operations in bulk  
- `db.collection.aggregate(pipeline, options)` → Run aggregation pipeline  

### Change Streams (Real-Time Updates)
- `db.collection.watch(pipeline, options)` → Watch collection changes in real-time  

### Sharding & Performance
- `db.collection.getShardDistribution()` → Get shard distribution (in sharded cluster)  
- `db.collection.totalIndexSize()` → Get total index size  

### Database Administration
- `db.dropDatabase()` → Drop the current database  
- `db.stats()` → Get database statistics  

---

## ✅ Example Usage

```js
// Insert document
db.users.insertOne({ name: "Hassan", age: 21 });

// Find documents
db.users.find({ age: { $gt: 20 } });

// Update document
db.users.updateOne({ name: "Hassan" }, { $set: { age: 22 } });

// Delete document
db.users.deleteOne({ name: "Hassan" });

// Count documents
db.users.countDocuments({ age: { $gt: 20 } });
