var redis = require('redis');
var redisHost = "AMAZON ELASTICACHE CLUSTER URL"; //change the host here
var redisPort = "6379"; //change the port here
var redisClient = redis.createClient(redisPort, redisHost, {no_ready_check: true}); //creates a new client

//connect to redis
redisClient.on('connect', function() {
  console.log('connected');
});

//check the functioning
redisClient.set('framework', 'AngularJS', function(err, reply) {
  console.log(reply);
});

redisClient.get('framework', function(err, reply) {
  console.log(reply);
});

//catch all errors
redisClient.on('error', function(err) {
  console.log('Redis error: ' + err);
});
