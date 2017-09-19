import BaseStateComponent from './BaseStateComponent'

class NYComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'NY',
            mapType: {
            county:'maps/newyork',
            areaCode: 'maps/newyorkareacode',
            congressional: 'maps/newyorkcongressional'
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
export default NYComponent;
