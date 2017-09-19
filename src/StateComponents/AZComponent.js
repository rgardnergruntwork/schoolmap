import BaseStateComponent from './BaseStateComponent'

class AZComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'AZ',
            mapType: {
            county:'maps/arizona',
            areaCode: 'maps/arizonaareacode',
            congressional: 'maps/arizonacongressional'
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
export default AZComponent;
