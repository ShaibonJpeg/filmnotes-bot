const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1202168944:AAG_B7qkSz2b9rj4Ii97uhzI646cU0Qk0qY'
const bot = new TelegramBot(TOKEN, {polling: true})

const dbName = 'filmbot';
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://shaibonjpeg:Shaibon2019@cluster0-yn2yo.mongodb.net/test?retryWrites=true&w=majority";


// bot.onText(/\/db (.+)/, (msg, match) => {
bot.on('message', msg => {
  MongoClient.connect(url, function(err, client) {

  // Create a collection we want to drop later

  const col = client.db(dbName).collection('films');

  // Insert a bunch of documents

  col.insert([{a:1, b:1}

  , {a:2, b:2}, {a:3, b:3}

  , {a:4, b:4}], {w:1}, function(err, result) {

  test.equal(null, err);

  // List the database collections available

  db.listCollections().toArray(function(err, items) {

  test.equal(null, err);

  client.close();

  });

  });

  });

});
