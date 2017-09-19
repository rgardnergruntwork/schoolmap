import BaseStateComponent from './BaseStateComponent'

class UTComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'UT',
            mapType: {
            county:'maps/utah',
            areaCode: 'maps/utahareacode',
            congressional: 'maps/utahcongressional'
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
export default UTComponent;
