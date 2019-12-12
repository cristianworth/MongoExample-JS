var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  var mysort = { name: -1 };
  //where 1 is ascending and -1 is descending.

  dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});