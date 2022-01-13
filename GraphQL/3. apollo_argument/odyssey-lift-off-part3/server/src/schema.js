const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The tracks's complete description, can be in Markdown format"
    description: String
    "The number of tiems a track has been viewed"
    numberOfViews: Int
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules componse a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
  }
  

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`;

module.exports = typeDefs;