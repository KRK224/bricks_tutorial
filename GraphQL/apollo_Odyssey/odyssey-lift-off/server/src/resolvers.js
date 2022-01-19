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

  Mutation: {
    // increment's a track's numberOfViews property
    incrementTrackViews: async (_, { id }, {dataSources}) =>{
      try{
        const track = await dataSources.trackAPI.incrementTrackViews(id);

        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track
        };
      } catch(err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null
        }
      }
      
    }
    
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },

    modules: ({id}, _, {dataSources}) =>{
      return dataSources.trackAPI.getTrackModules(id);
    },

  },
};

module.exports = resolvers;
