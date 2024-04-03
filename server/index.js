const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8000;

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `type Todo {
            id: ID!
            title: String!
            completed: Boolean!
        }
        
        type Query {
            getTodos: [Todo]
        }
        `,
    resolvers: {
      Query: {
        getTodos: () => [{ id: 1, title: "Some title", completed: false }],
      },
    },
  });

  app.use(bodyParser.json());
  app.use(cors());
  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
}

startServer();
