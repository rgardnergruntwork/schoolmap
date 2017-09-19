import BaseStateComponent from './BaseStateComponent'

class GAComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'GA',
            mapType: {
            county:'maps/georgia',
            areaCode: 'maps/georgiaareacode',
            congressional: 'maps/georgiacongressional'
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
export default GAComponent;
