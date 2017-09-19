import BaseStateComponent from './BaseStateComponent'

class NEComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'NE',
            mapType: {
            county:'maps/nebraska',
            areaCode: 'maps/nebraskaareacode',
            congressional: 'maps/nebraskacongressional'
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
export default NEComponent;
