import BaseStateComponent from './BaseStateComponent'

class IAComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'IA',
            mapType: {
            county:'maps/iowa',
            areaCode: 'maps/iowaareacode',
            congressional: 'maps/iowacongressional'
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
export default IAComponent;
