import BaseStateComponent from './BaseStateComponent'

class TXComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'TX',
            mapType: {
            county:'maps/texas',
            areaCode: 'maps/texasareacode',
            congressional: 'maps/texascongressional'
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
export default TXComponent;
