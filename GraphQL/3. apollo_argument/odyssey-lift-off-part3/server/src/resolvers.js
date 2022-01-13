const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    // dataSources.trackAPI에서 case 확인 => index.js의 ApolloServer에서 정의한 class의 인스턴스임
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    track: (_, { id }, { dataSources}) =>{
      return dataSources.trackAPI.getTrack(id);
    },

  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },

  },
};

module.exports = resolvers;
