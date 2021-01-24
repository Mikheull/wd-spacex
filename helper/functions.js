import axios from 'axios';

export async function getLaunches() {
    return new Promise(async (resolve, reject) => {
        return axios({
            url: "https://api.spacexdata.com/v4/launches/query",
            data: {
                "options": {
                    "pagination": false,
                    "populate": [
                        "launchpad"
                    ]
                }
            },
            method: "POST"
        })
        .then(res => resolve(res))
        .catch(err => reject(err.response ? err.response.status : 500));
    });
};

export async function getLaunchpads() {
    return new Promise(async (resolve, reject) => {
        return axios({
            url: "https://api.spacexdata.com/v4/launchpads",
            method: "GET"
        })
        .then(res => resolve(res))
        .catch(err => reject(err.response ? err.response.status : 500));
    });
};


export async function getUpcomingLaunch() {
    return new Promise(async (resolve, reject) => {
        return axios({
            url: "https://api.spacexdata.com/v4/launches/next",
            method: "GET"
        })
        .then(res => resolve(res))
        .catch(err => reject(err.response ? err.response.status : 500));
    });
};


