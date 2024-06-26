const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: axios } = require("axios");

const PORT = 8000;

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `
        type User {
            id: Int!
            name: String!
            username: String!
            email: String!
            phone: String!
            website: String!
            }
        type Todo{
            id: ID!
            userId: Int!
            title: String!
            completed: Boolean!
            user: User
            }
        type Query {
            getTodos: [Todo]
            getAllUsers: [User]
            getUser(id: Int!): User
        }
        `,
    resolvers: {
      Todo: {
        user: async (todo) =>
          (
            await axios.get(
              `https://jsonplaceholder.typicode.com/users/${todo.userId}`
            )
          ).data,
      },
      Query: {
        getTodos: async () =>
          (await axios.get(`https://jsonplaceholder.typicode.com/todos`)).data,
        getAllUsers: async () =>
          (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data,
        getUser: async (parent, { id }) =>
          (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
            .data,
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
