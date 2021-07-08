import client from "./client";

const endpoint = "/user/2";

const getInfo = () => client.get(endpoint);
const getAlbumInfo = (album) => client.get('/album/info/' + album);
const getTracklist = (release) => client.get('/album/tracklist/' + release);

export default {
    getInfo,
    getAlbumInfo,
    getTracklist,
};
