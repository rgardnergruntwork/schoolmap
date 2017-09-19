import BaseStateComponent from './BaseStateComponent'

class MTComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'MT',
            mapType: {
            county:'maps/montana',
            areaCode: 'maps/montanaareacode',
            congressional: 'maps/montanacongressional'
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
export default MTComponent;
