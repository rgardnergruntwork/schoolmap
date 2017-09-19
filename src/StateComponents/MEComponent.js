import BaseStateComponent from './BaseStateComponent'

class MEComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'ME',
            mapType: {
            county:'maps/maine',
            areaCode: 'maps/maineareacode',
            congressional: 'maps/mainecongressional'
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
export default MEComponent;
