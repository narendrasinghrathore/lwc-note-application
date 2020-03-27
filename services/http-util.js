const host = 'http://localhost:3000/';
const http = {
    get: async (url, callback) => {
        url = `${host}${url}`;
        const res = await fetch(url);
        const data = await res.json();
        callback(data);
    },
    post: async (url, body, callback) => {
        url = `${host}${url}`;
        const res = await fetch(url, {
            method: 'post',
            body: JSON.stringify({ ...body, date: new Date().getTime() }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        callback(data);
    },
    patch: async (url, body, callback) => {},
    delete: async (url, id) => {}
};
export default http;
