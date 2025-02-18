const fastify = require('fastify')();
fastify.get('/', async (request, reply) => reply.send('Hello from Fastify!'));
fastify.listen({ port: 3002 }, () => console.log('3002'));
