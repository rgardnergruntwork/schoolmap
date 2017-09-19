import BaseStateComponent from './BaseStateComponent'

class INComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'IN',
            mapType: {
            county:'maps/indiana',
            areaCode: 'maps/indianaareacode',
            congressional: 'maps/indianacongressional'
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
export default INComponent;
