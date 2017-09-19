import BaseStateComponent from './BaseStateComponent'

class LAComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'LA',
            mapType: {
            county:'maps/louisiana',
            areaCode: 'maps/louisianaareacode',
            congressional: 'maps/louisianacongressional'
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
export default LAComponent;
