import BaseStateComponent from './BaseStateComponent'

class MNComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'MN',
            mapType: {
            county:'maps/minnesota',
            areaCode: 'maps/minnesotaareacode',
            congressional: 'maps/minnesotacongressional'
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
export default MNComponent;
