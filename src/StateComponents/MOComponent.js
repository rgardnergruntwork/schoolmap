import BaseStateComponent from './BaseStateComponent'

class MOComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'MO',
            mapType: {
            county:'maps/missouri',
            areaCode: 'maps/missouriareacode',
            congressional: 'maps/missouricongressional'
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
export default MOComponent;
