import BaseStateComponent from './BaseStateComponent'

class VTComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'VT',
            mapType: {
            county:'maps/vermont',
            areaCode: 'maps/vermontareacode',
            congressional: 'maps/vermontcongressional'
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
export default VTComponent;
