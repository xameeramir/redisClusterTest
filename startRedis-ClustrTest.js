var RedisClustr = require('redis-clustr');
var RedisClient = require('redis');
var config = require("./config.json");

var redis = new RedisClustr({
    servers: [
        {
            host: config.redisClusterHost,
            port: config.redisClusterPort
        }
    ],
    createClient: function (port, host) {
        // this is the default behaviour
        return RedisClient.createClient(port, host);
    }
});

redis.set('key', 'value');