var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");


  var myquery = { name: "Oficina do Bolinha" };
  var newvalues = { $set: { name: "Disney", address: "Orlando 293" } };


  dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});