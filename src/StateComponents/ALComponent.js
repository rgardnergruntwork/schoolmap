import BaseStateComponent from './BaseStateComponent'

class ALComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'AL',
            mapType: {
            county:'maps/alabama',
            areaCode: 'maps/alabamacode',
            congressional: 'maps/alabamacongressional'
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
export default ALComponent;
