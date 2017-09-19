import React, { Component } from 'react';
import 'whatwg-fetch';

const STATE_DATA_ENDPOINT = 'http://localhost:4000/api/stateData/perCapita';
const COUNTY_DATA_ENDPOINT = 'http://localhost:4000/api/countyData/perCapita';

class SchoolDataSource extends Component {
    getStateData(requestData, callback) {
        var data = {};
        fetch(STATE_DATA_ENDPOINT, {method: "GET", mode:"cors"}).then(response => response.json()).then(response => {
                callback(requestData['item'], response.data);
                return response;
            });
    }
    getCountyData(requestData, callback) {
        var data = {};
        var queryURL = COUNTY_DATA_ENDPOINT;
        var params = {};
        if (requestData.state) {
            params.state = requestData.state;
        }
        let queryString = new URLSearchParams();
        for (let key in params) {
            if (!params.hasOwnProperty(key)) {
                continue;
            }
            queryString.append(key, params[key]);
        }
        queryURL = queryURL + "?" + queryString.toString();
        fetch(queryURL, {method: "GET", mode:"cors"}).then(response => response.json()).then(response => {
                callback(requestData['item'], response.data);
                return response;
            });
    }

}
export default SchoolDataSource;
