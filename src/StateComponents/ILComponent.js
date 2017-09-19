import BaseStateComponent from './BaseStateComponent'

class ILComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'IL',
            mapType: {
            county:'maps/illinois',
            areaCode: 'maps/illinoisareacode',
            congressional: 'maps/illinoiscongressional'
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
export default ILComponent;
