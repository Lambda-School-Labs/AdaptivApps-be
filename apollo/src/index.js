// @ts-check

// Apollo dependencies
const { importSchema } = require('graphql-import');
const { ApolloServer, gql } = require('apollo-server');
// Import resolvers and context
const resolvers = require('./resolvers');
const context = require('./context');
// Declare port
const PORT = process.env.PORT || 8000;

const checkEnvironment = () => {
  const requiredEnvironmentVariables = ['JWT_ISSUER', 'JWKS_URI', 'PRISMA_ENDPOINT', 'PRISMA_SECRET']

  let environmentReady = true;
  for(const variableName of requiredEnvironmentVariables) {
    if(!(variableName in process.env)) {
      console.error("Server cannot be started without environment variable %s", variableName);
      environmentReady = false;
    }
  }

  if(!environmentReady) {
    throw new Error("Missing one or more required environment variables")
  }
}

async function main() {
  //console.log('Importing schema');

  const typeDefs = await importSchema('schema/schema.graphql');

  //console.log(typeDefs);

  //console.log('Imported schema');

  const server = new ApolloServer({
    resolvers,
    typeDefs: gql(typeDefs),
    context,
    cors: {
      origin: '*', // <- allow request from all domains
      credentials: true,
    },
    dataSources: () => ({}),
  });

  server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

// Check the environment
checkEnvironment()

main();
