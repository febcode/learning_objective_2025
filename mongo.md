To create a schema in **MongoDB Compass**, follow these steps:

### **Step 1: Create a Database and Collection**
1. Open **MongoDB Compass**.
2. Click on **"Create Database"**.
   - Enter **Database Name** (e.g., `task_manager`).
   - Enter **Collection Name** (e.g., `tasks`).
   - Click **"Create Database"**.

### **Step 2: Insert a Sample Document for `tasks`**
Since MongoDB is schema-less, you define structure by inserting documents with the desired fields.

1. Open the `tasks` collection.
2. Click **"Insert Document"**.
3. Replace the existing document with this JSON structure:

```json
{
  "title": "Complete project report",
  "description": "Prepare and submit the final project report.",
  "due_date": ISODate("2025-02-20T18:00:00Z"),
  "status": "pending",
  "created_at": ISODate("2025-02-15T10:00:00Z"),
  "updated_at": ISODate("2025-02-15T12:00:00Z")
  "assignee": ObjectId("65d28f3a2f8b9a001c8e4d9a"), 
}
```
- assignee should store the _id of a user from the users collection.
- Replace "65d28f3a2f8b9a001c8e4d9a" with an actual _id from your users collection.

4. Click **"Insert"**.

### **Step 3: Create Another Collection for `users`**
1. Click **"Create Collection"**, name it `users`.
2. Click **"Insert Document"** and use this JSON:

```json
{
  "_id": {
    "$oid": "67b01b8ab5c58a86a7fc363c"
  },
  "username": "roshni",
  "email": "roshu26feb@gmail.com",
  "password_hash": "v",
  "created_at": {
    "$date": "2025-02-15T10:00:00Z"
  }
}

```
If Inserting via Mongo Shell
If you're inserting via the MongoDB Shell, you can use:

```
db.users.insertOne({
  _id: ObjectId("67b01b8ab5c58a86a7fc363c"),
  username: "roshni",
  email: "roshu26feb@gmail.com",
  password_hash: "v",
  created_at: ISODate("2025-02-15T10:00:00Z")
});
3. Click **"Insert"**.
```
---

### **Additional Notes**
- MongoDB **does not enforce schemas** like SQL databases, but you can use **MongoDB Schema Validation** to enforce rules.
- If you want **schema validation**, you can define it while creating the collection using the following:

#### **Schema Validation for `tasks`**
Run this command in **MongoDB Shell** (or use the **"Modify Schema Validation"** option in Compass):
```
db.createCollection("tasks", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["title", "description", "status", "created_at"],
         properties: {
            title: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            description: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            due_date: {
               bsonType: ["date", "null"],
               description: "must be a date or null"
            },
            status: {
               bsonType: "string",
               enum: ["pending", "in-progress", "completed"],
               description: "must be a string and one of the predefined values"
            },
            assignee: {
               bsonType: ["objectId", "null"],
               description: "must be a valid user ObjectId or null"
            },
            created_at: {
               bsonType: "date",
               description: "must be a date and is required"
            },
            updated_at: {
               bsonType: ["date", "null"],
               description: "must be a date or null"
            }
         }
      }
   }
})
```

It includes:
✅ User creation
✅ Task creation
✅ MongoDB with Mongoose
✅ Validation

