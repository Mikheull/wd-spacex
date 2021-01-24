import axios from 'axios';


export async function getLaunches(options = {}) {
    const params = options.params || {};

    return new Promise(async (resolve, reject) => {
        return axios({
            url: "https://api.spacexdata.com/v4/launches/query",
            data: {
                "options": {
                    "pagination": false
                }
            },
            method: "POST"
        })
        .then(res => resolve(res))
        .catch(err => reject(err.response ? err.response.status : 500));
    });
};