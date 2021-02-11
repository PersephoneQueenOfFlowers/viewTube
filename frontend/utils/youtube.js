import axios from 'axios';

const KEY = 'AIzaSyCwK9g3u1pDVwsaipVwWQXST_4YY24Q2HY';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});