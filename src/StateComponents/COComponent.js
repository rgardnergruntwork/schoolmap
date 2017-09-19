import BaseStateComponent from './BaseStateComponent'

class COComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'CO',
            mapType: {
            county:'maps/colorado',
            areaCode: 'maps/coloradoareacode',
            congressional: 'maps/coloradocongressional'
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
export default COComponent;
