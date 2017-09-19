import BaseStateComponent from './BaseStateComponent'

class OKComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'OK',
            mapType: {
            county:'maps/oklahoma',
            areaCode: 'maps/oklahomaareacode',
            congressional: 'maps/oklahomacongressional'
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
export default OKComponent;
