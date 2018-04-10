const { api_key } = require('../config.json');

const Promise = require('bluebird');
const qs = require('query-string');

const BASE_URL = `https://api.themoviedb.org/3`;

const _request = ( { endpoint, method, query={}, headers={}, body={} } ) => {

  const q = qs.stringify(
    Object.assign( {}, query, { api_key })
  );

  const url = `${BASE_URL}${endpoint}?${q}`;
  console.log( 'making request: ', url );

  return Promise.resolve()
  .then( () => {
    return fetch( url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: method !== 'GET' ? JSON.stringify( body ) : undefined
    } )
    .then( ( res ) => {
      return res.json()
      .then( ( json ) => {
        console.log( 'response: ', method, ' -> ', url, ' -> ', json );
        if ( res.status !== 200 ) return Promise.reject( json );
        return json;
      } )
    } )
    ;
  } )
  ;
};

export default {
  getBaseUrl: () => BASE_URL,

  getPopularMovies: ( { page } ) =>{
    return _request({
      endpoint: '/discover/movie',
      method: 'GET',
      query:{
        page: page,
        sort_by: 'popularity.desc'
      },
      headers: {},
      body: {},
    });
  },

  getGenres: () => {
    return _request({
      endpoint: '/genre/movie/list',
      method: 'GET',
      query: {},
      headers: {},
      body: {},
    });
  },

  getConfiguration: () => {
    return _request({
      endpoint: '/configuration',
      method: 'GET',
      query: {},
      headers: {},
      body: {},
    });
  }
}
