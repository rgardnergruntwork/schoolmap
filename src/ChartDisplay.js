import React, { Component } from 'react';
import fusioncharts from 'fusioncharts';

import charts from 'fusioncharts/fusioncharts.charts';
import maps from 'fusioncharts/fusioncharts.maps';
import ReactFC from 'react-fusioncharts';

import usa from 'fusioncharts/maps/fusioncharts.usa'

import stateComponents from './StateComponents'
import SchoolDataSource from './SchoolDataSource'

charts(fusioncharts)
maps(fusioncharts)
usa(fusioncharts)

class ChartDisplay extends React.Component {    
    constructor() {
        super();
        this.state = {
            chartConfig: {
                id: 'displayed-map',
                width:"1200",
                height: "800",
                dataFormat: 'json',
                dataSource: {
                    chart: {
                        caption: '',
                        theme: "fint"
                    },
                    colorrange: {
                        minvalue:"0",
                        startlabel: "Low",
                        endLabel: "High",
                        code: "#e44a00",
                        gradient: 1,
                        color: [{
                                maxvalue:"500",
                                code: "#f8bd19",
                            }, {
                                maxvalue:"1000",
                                code: "#6baa01",
                            }
                            ],
                    },                    
                    data:[]
                }
            }            
        };
        this.chartData = {};
        this.dataType = 'perCapIncome';
        this.dataSource = new SchoolDataSource();
        //add functions here and bind them to this
        this.resetChart = this.resetChart.bind(this);
        this.changeChart = this.changeChart.bind(this);
        window.changeChart = this.changeChart;
        window.resetChart = this.resetChart;
    }

  render() {
    return (
      <div className="ChartDisplay">
      <button onClick={this.resetChart}>Back</button>
      <ReactFC { ...this.state.chartConfig} />
      </div>
    );
  }

    componentDidMount() {
        this.resetChart();
    }

    resetChart() {
        var item = fusioncharts('displayed-map');
        item.chartType('maps/usa');
        var requestData = {};
        requestData.dataType = this.dataType;
        requestData.item = item;
        this.dataSource.getStateData(requestData, this.applyData.bind(this));
    }
  
  applyData(item, data) {
      item.render();
        var entities = item.getEntityList();
        var formattedData = [];
        var stats = {};
        var vals = [];
        for (var i=0; i < entities.length; i++) {
            var value = data[entities[i].label]['perCapita'];
            var key = entities[i].shortlabel;
            vals.push(value);
            var stateData = {
                    id: key,
                    value: value,
            };
            if (key !== 'DC') {
                stateData.link = 'j-changeChart-' + key;
            }
            formattedData.push(stateData);
        }
        console.log(vals);
        vals.sort(function(a, b) {return (parseInt(a)-parseInt(b));});
        console.log(vals);
        stats.min = parseInt(vals[0]);
        stats.max = parseInt(vals[vals.length-1]);
        let lowMid = Math.floor((vals.length-1)/2);
        let highMid = Math.ceil((vals.length-1)/2);
        stats.med = Math.round((parseInt(vals[lowMid]) + parseInt(vals[highMid])) / 2);
        if ((stats.med - stats.min) > (stats.max-stats.med)) {
            //stats.max = stats.med + (stats.med-stats.min);
        } else {
            //stats.min = stats.med - (stats.max-stats.med);
        }
        var json = item.getJSONData();
        json.data = formattedData;
        json.colorrange.minvalue = stats.min;
        json.colorrange.color[0].maxvalue = stats.med;
        json.colorrange.color[1].maxvalue = stats.max;
        item.setJSONData(json);
        item.render();
  }

  changeChart(mapName) {
      var item = fusioncharts('displayed-map');
      var states = item.getEntityList(mapName);
      var map = new stateComponents[mapName]();
      for (var i in states) {
          if (states[i].shortlabel == mapName) {
              map.config.display = states[i].label;
          }
      }
      var mapType = map.getMapType(this.dataType);
      item.chartType(mapType);                
      map.fetchAndApplyData(this.dataType, item);
  }
}
export default ChartDisplay;;
