import BaseStateComponent from './BaseStateComponent'

class ORComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'OR',
            mapType: {
            county:'maps/oregon',
            areaCode: 'maps/oregonareacode',
            congressional: 'maps/oregoncongressional'
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
export default ORComponent;
