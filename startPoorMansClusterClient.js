var poorMansClusterClient = require('redis-cluster').poorMansClusterClient;
var assert = require('assert');
var config = require("config.json");

var cluster = [
  { name: 'redis01', link: config.redisClusterNode1 + config.redisClusterNode1Port, slots: [0, 5462], options: { max_attempts: 5 } },
  { name: 'redis02', link: config.redisClusterNode2 + config.redisClusterNode2Port, slots: [5463, 12742], options: { max_attempts: 5 } },
  { name: 'redis03', link: config.redisClusterNode3 + config.redisClusterNode3Port, slots: [12743, 16384], options: { max_attempts: 5 } }
];

var r = poorMansClusterClient(cluster);

r.set('foo', 'bar', function (err, reply) {
  if (err) throw err;
  assert.equal(reply, 'OK');

  r.get('foo', function (err, reply) {
    if (err) throw err;
    assert.equal(reply, 'bar');
  });
});
