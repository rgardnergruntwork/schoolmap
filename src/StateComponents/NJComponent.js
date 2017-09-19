import BaseStateComponent from './BaseStateComponent'

class NJComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'NJ',
            mapType: {
            county:'maps/newjersey',
            areaCode: 'maps/newjerseyareacode',
            congressional: 'maps/newjerseycongressional'
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
export default NJComponent;
