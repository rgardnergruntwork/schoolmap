import BaseStateComponent from './BaseStateComponent'

class MSComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'MS',
            mapType: {
            county:'maps/mississippi',
            areaCode: 'maps/mississippiareacode',
            congressional: 'maps/mississippicongressional'
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
export default MSComponent;
