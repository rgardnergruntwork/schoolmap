import BaseStateComponent from './BaseStateComponent'

class MIComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'MI',
            mapType: {
            county:'maps/michigan',
            areaCode: 'maps/michiganareacode',
            congressional: 'maps/michigancongressional'
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
export default MIComponent;
