import BaseStateComponent from './BaseStateComponent'

class FLComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'FL',
            mapType: {
            county:'maps/florida',
            areaCode: 'maps/floridaareacode',
            congressional: 'maps/floridacongressional'
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
export default FLComponent;
