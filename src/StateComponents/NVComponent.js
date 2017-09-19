import BaseStateComponent from './BaseStateComponent'

class NVComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'NV',
            mapType: {
            county:'maps/nevada',
            areaCode: 'maps/nevadaareacode',
            congressional: 'maps/nevadacongressional'
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
export default NVComponent;
