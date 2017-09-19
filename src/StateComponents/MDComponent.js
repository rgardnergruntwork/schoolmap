import BaseStateComponent from './BaseStateComponent'

class MDComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'MD',
            mapType: {
            county:'maps/maryland',
            areaCode: 'maps/marylandareacode',
            congressional: 'maps/marylandcongressional'
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
export default MDComponent;
