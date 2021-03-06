import { ApolloServer } from 'apollo-server';

import { schema } from './schema/schema.js';

require('dotenv').config();

const server = new ApolloServer({
	schema,
	engine: {
		apiKey: process.env.API_KEY
	}
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`)
});
