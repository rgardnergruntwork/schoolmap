import BaseStateComponent from './BaseStateComponent'

class TNComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'TN',
            mapType: {
            county:'maps/tennessee',
            areaCode: 'maps/tennesseeareacode',
            congressional: 'maps/tennesseecongressional'
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
export default TNComponent;
