var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");


  var myquery = { address: 'Rua Oswaldo Siqueira' };


  dbo.collection("customers").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});