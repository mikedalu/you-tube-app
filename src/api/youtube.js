import axios from 'axios'

const KEY = 'AIzaSyBnrOeSYf_3mvEtwFBIqdzsQpW3jSyoZ-c'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY
    }
})
