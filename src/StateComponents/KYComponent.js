import BaseStateComponent from './BaseStateComponent'

class KYComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'KY',
            mapType: {
            county:'maps/kentucky',
            areaCode: 'maps/kentuckyareacode',
            congressional: 'maps/kentuckycongressional'
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
export default KYComponent;
