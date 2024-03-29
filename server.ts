import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Movie {
    id: Int
    title: String
    year: Int
  }
  type Query {
    movies: [Movie]
    movie: Movie
  }
  type Mutation {
    createMovie(title: String!): Boolean
    deleteMovie(title: String!): Boolean
  }
`;

const resolvers = {
  Query: {
    movies: () => [],
    movie: () => ({ title: "Hello", year: 2021 }),
  },
  Mutation: {
    createMovie: (_: any, args: { title: string }) => {
      console.log(args.title);
      return true;
    },
    deleteMovie: (_: any, args: { title: string }) => {
      console.log(args.title);
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server
  .listen()
  .then(() => console.log("Server is running on http://localhost:4000"));
