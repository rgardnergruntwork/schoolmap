import BaseStateComponent from './BaseStateComponent'

class WAComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'WA',
            mapType: {
            county:'maps/washington',
            areaCode: 'maps/washingtonareacode',
            congressional: 'maps/washingtoncongressional'
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
export default WAComponent;
