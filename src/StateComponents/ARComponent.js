import BaseStateComponent from './BaseStateComponent'

class ARComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'AR',
            mapType: {
            county:'maps/arkansas',
            areaCode: 'maps/arkansasareacode',
            congressional: 'maps/arkansascongressional'
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
export default ARComponent;
