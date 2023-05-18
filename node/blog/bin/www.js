const http = require('http');
const PORT =8801

const serverHandle = require('../app');

const server = http.createServer(serverHandle);

console.log(PORT);
server.listen(PORT)