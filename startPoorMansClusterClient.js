var poorMansClusterClient = require('redis-cluster').poorMansClusterClient;
var assert = require('assert');
 
var cluster = [
  {name: 'redis01', link: 'AMAZON ELASTICACHE CLUSTER INDIVIDUAL INSTANCE URL:6379', slots: [   0, 5462], options: {max_attempts: 5}},
  {name: 'redis02', link: 'AMAZON ELASTICACHE CLUSTER INDIVIDUAL INSTANCE URL:7379', slots: [5463, 12742], options: {max_attempts: 5}},
  {name: 'redis03', link: 'AMAZON ELASTICACHE CLUSTER INDIVIDUAL INSTANCE URL:8379', slots: [12743, 16384], options: {max_attempts: 5}}
];
 
var r = poorMansClusterClient(cluster);
 
r.set('foo', 'bar', function (err, reply) {
  if (err) throw err;
  assert.equal(reply,'OK');
 
  r.get('foo', function (err, reply) {
    if (err) throw err;
    assert.equal(reply, 'bar');
  });
});
