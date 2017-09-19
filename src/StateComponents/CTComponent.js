import BaseStateComponent from './BaseStateComponent'

class CTComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'CT',
            mapType: {
            county:'maps/connecticut',
            areaCode: 'maps/connecticutareacode',
            congressional: 'maps/connecticutcongressional'
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
export default CTComponent;
