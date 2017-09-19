import BaseStateComponent from './BaseStateComponent'

class VAComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'VA',
            mapType: {
            county:'maps/virginia',
            areaCode: 'maps/virginiaareacode',
            congressional: 'maps/virginiacongressional'
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
export default VAComponent;
