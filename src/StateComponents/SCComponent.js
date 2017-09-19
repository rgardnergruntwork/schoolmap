import BaseStateComponent from './BaseStateComponent'

class SCComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'SC',
            mapType: {
            county:'maps/southcarolina',
            areaCode: 'maps/southcarolinaareacode',
            congressional: 'maps/southcarolinacongressional'
            }
        }
    }

    getMapType(type) {
        var key = this.getMapKey(type);
        return this.config.mapType[key];
    }

    getMapKey(type) {
        switch (type) {
               case 'perCapIncome':
               default:
                return  'county';
        }
    }
}
export default SCComponent;
