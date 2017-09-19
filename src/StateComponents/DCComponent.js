import BaseStateComponent from './BaseStateComponent'

class DCComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'DC',
            mapType: {
            county:'maps/districtofcolumbia',
            areaCode: 'maps/districtofcolumbiaareacode',
            congressional: 'maps/districtofcolumbiacongressional'
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
export default DCComponent;
