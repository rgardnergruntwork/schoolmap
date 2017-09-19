import BaseStateComponent from './BaseStateComponent'

class NMComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'NM',
            mapType: {
            county:'maps/newmexico',
            areaCode: 'maps/newmexicoareacode',
            congressional: 'maps/newmexicocongressional'
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
export default NMComponent;
