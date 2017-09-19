import BaseStateComponent from './BaseStateComponent'

class KSComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'KS',
            mapType: {
            county:'maps/kansas',
            areaCode: 'maps/kansasareacode',
            congressional: 'maps/kansascongressional'
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
export default KSComponent;
