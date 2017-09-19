import React from 'react';
import SchoolDataSource from '../SchoolDataSource'

class BaseStateComponent extends React.Component {
    constructor() {
        super();
        this.dataSource = new SchoolDataSource();
    }

    fetchAndApplyData(dataType, item) {
        var requestData = {};
        requestData.dataType = dataType;
        requestData.state = this.config.display;
        requestData.item = item;
        this.dataSource.getCountyData(requestData, this.applyData.bind(this));
    }

    getEntityDef() {
        return [];
    }

    applyData(item, data) {
        var json = item.getJSONData();
        json.entitydef = [];
        item.setJSONData(json);
        item.render();
        var entities = item.getEntityList();
        var formattedData = [];
        var stats = {};
        var mapping = {};
        var vals = [];
        console.log('here2');
        console.log(data);
        for (var col in data) {
            mapping[data[col].display.toLowerCase()] = data[col]['perCapita']
        }
        for (var i=0; i < entities.length; i++) {
            //problem here is that we are missing a way to grab data
            var value = mapping[entities[i].label.toLowerCase()];
            if (!mapping[entities[i].label.toLowerCase()]) {
                console.log(entities[i]);
            }
            var key = entities[i].id;
            if (key) {                
                vals.push(value);
                var pushedData = {
                    id: key,
                    value: value,
                };
                
                formattedData.push(pushedData);
            }
        }
        vals.sort(function(a, b) {return (parseInt(a)-parseInt(b));});
        stats.min = parseInt(vals[0]);
        stats.max = parseInt(vals[vals.length-1]);
        console.log(vals);
        console.log(stats);
        let lowMid = Math.floor((vals.length-1)/2);
        let highMid = Math.ceil((vals.length-1)/2);
        stats.med = Math.round((parseInt(vals[lowMid]) + parseInt(vals[highMid])) / 2);
        var json = item.getJSONData();
        json.data = formattedData;
        json.entitydef = this.getEntityDef();
        json.colorrange.minvalue = stats.min;
        json.colorrange.color[0].maxvalue = stats.med;
        json.colorrange.color[1].maxvalue = stats.max;
        item.setJSONData(json);
        console.log(json);
        item.render();
    }    
}

export default BaseStateComponent;
