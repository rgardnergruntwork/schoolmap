import BaseStateComponent from './BaseStateComponent'

class Component extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: '',
            mapType: {
            county:'maps/wyoming',
            areaCode: 'maps/wyomingareacode',
            congressional: 'maps/wyomingcongressional'
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
export default Component;
