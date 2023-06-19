import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "http";

const PORT = Number(process.env.PORT) || 8080;

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "world",
    },
  },
});

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(PORT, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${PORT}/graphql`);
});
