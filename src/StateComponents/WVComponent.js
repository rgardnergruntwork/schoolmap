import BaseStateComponent from './BaseStateComponent'

class WVComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'WV',
            mapType: {
            county:'maps/westvirginia',
            areaCode: 'maps/westvirginiaareacode',
            congressional: 'maps/westvirginiacongressional'
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
export default WVComponent;
