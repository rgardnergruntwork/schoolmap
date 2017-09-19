import BaseStateComponent from './BaseStateComponent'

class MAComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'MA',
            mapType: {
            county:'maps/massachusetts',
            areaCode: 'maps/massachusettsareacode',
            congressional: 'maps/massachusettscongressional'
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
export default MAComponent;
