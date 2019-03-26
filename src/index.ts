import * as hapi from "hapi";
// create a server with a host and port
const server: hapi.Server = new hapi.Server({
  host: 'localhost',
  port: 8000
});
// add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, h) {
    return 'hello world';
  }
});
// start the server
async function start() {
  try {
    await server.start()
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
}
// don't forget to call start
start();