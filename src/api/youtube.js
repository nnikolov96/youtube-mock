import axios from 'axios';
const KEY = 'AIzaSyDxv6HS2DhU6m2JzGcbdOgLk16quWcg8vI';

export default axios.create({ 
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: { 
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
    q: 'surfboards'
  }

});
