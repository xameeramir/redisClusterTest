var redis = require('redis');
var config = require("./config.json");
var redisClient = redis.createClient(config.redisClusterPort, config.redisClusterHost,  { no_ready_check:  true }); //creates a new client

//catch all errors
redisClient.on("error", function (err) {
  console.log("Redis error: " + err);
});

//connect to redis
redisClient.on("connect", function (err, reply) {
  console.log("connected " + reply);
});

//check the functioning
redisClient.set("framework", "AngularJS", function (err, reply) {
  console.log("redisClient.set " , reply);
});

redisClient.get("framework", function (err, reply) {
  console.log("redisClient.get ", reply);
});