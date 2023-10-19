import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

import db from "./_db.js";

const resolvers = {
  Query: {
    names() {
      return db.names;
    },
    name(_, args) {
      return db.names.find((name) => name.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Name: {
    reviews(parent) {
      return db.reviews.filter((r) => r.name_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id);
    },
    name(parent) {
      return db.names.find((g) => g.id === parent.name_id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },
  Mutation: {
    addName(_, args) {
      let name = {
        ...args.name,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.names.push(name);

      return name;
    },
    deleteName(_, args) {
      db.names = db.names.filter((n) => n.id !== args.id);

      return db.names;
    },
    updateName(_, args) {
      db.names = db.names.map((n) => {
        if (n.id === args.id) {
          return { ...n, ...args.edits };
        }

        return n;
      });

      return db.names.find((n) => n.id === args.id);
    },
  },
};

const server = new ApolloServer({
  // typeDefs
  typeDefs,

  // resolvers
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port, 4000");
