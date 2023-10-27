export const typeDefs = `#graphql

  type Name {
    id: ID!
    name: String!
    langKnown: [String!]
    reviews: [Review!]
  }

  type Review {
    id: Int!
    rating: Int!
    content: String!
    name: Name!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }

  type Query {
    reviews: [Review]
    review(id: ID!): Review
    names: [Name]
    name(id: ID!): Name
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    addName(name: AddNameInput!): Name
    deleteName(id: ID!): [Name]
    updateName(id: ID!, edits: EditNameInput): Name
  }

  input AddNameInput {
    name: String!,
    langKnown: [String!]!
  }

  input EditNameInput {
    name: String,
    langKnown: [String!]
  }

`;
