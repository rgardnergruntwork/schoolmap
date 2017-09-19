import BaseStateComponent from './BaseStateComponent'

class NDComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'ND',
            mapType: {
            county:'maps/northdakota',
            areaCode: 'maps/northdakotaareacode',
            congressional: 'maps/northdakotacongressional'
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
export default NDComponent;
