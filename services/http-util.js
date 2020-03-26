const host = 'http://localhost:3000/';
const http = {
    get: async (url, callback) => {
        url = `${host}${url}`;
        const res = await fetch(url);
        const data = await res.json();
        callback(data);
    }
};
export default http;
