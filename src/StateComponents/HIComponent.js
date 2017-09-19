import BaseStateComponent from './BaseStateComponent'

class HIComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'HI',
            mapType: {
            county:'maps/hawaii',
            areaCode: 'maps/hawaiiareacode',
            congressional: 'maps/hawaiicongressional'
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
export default HIComponent;
