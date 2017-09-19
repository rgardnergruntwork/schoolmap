import BaseStateComponent from './BaseStateComponent'

class CAComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'CA',
            mapType: {
            county:'maps/california',
            areaCode: 'maps/californiaareacode',
            congressional: 'maps/californiacongressional'
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
export default CAComponent;
