import BaseStateComponent from './BaseStateComponent'

class NCComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'NC',
            mapType: {
            county:'maps/northcarolina',
            areaCode: 'maps/northcarolinaareacode',
            congressional: 'maps/northcarolinacongressional'
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
export default NCComponent;
