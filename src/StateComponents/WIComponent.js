import BaseStateComponent from './BaseStateComponent'

class WIComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'WI',
            mapType: {
            county:'maps/wisconsin',
            areaCode: 'maps/wisconsinareacode',
            congressional: 'maps/wisconsincongressional'
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
export default WIComponent;
