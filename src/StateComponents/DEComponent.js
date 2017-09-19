import BaseStateComponent from './BaseStateComponent'

class DEComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'DE',
            mapType: {
            county:'maps/delaware',
            areaCode: 'maps/delawareareacode',
            congressional: 'maps/delawarecongressional'
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
export default DEComponent;
