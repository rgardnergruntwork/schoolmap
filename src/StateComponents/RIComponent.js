import BaseStateComponent from './BaseStateComponent'

class RIComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'RI',
            mapType: {
            county:'maps/rhodeisland',
            areaCode: 'maps/rhodeislandareacode',
            congressional: 'maps/rhodeislandcongressional'
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
export default RIComponent;
