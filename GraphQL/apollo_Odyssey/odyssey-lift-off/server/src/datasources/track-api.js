const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  // this.get is same as the RestAPI's Get method
  getTracksForHome() {
    return this.get('tracks');
  };
  
  getTrack(trackId){
    return this.get(`track/${trackId}`);
  };

  getTrackModules(trackID) {
    return this.get(`track/${trackID}/modules`)
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  };

}

module.exports = TrackAPI;
