import BaseStateComponent from './BaseStateComponent'

class PAComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'PA',
            mapType: {
            county:'maps/pennsylvania',
            areaCode: 'maps/pennsylvaniaareacode',
            congressional: 'maps/pennsylvaniacongressional'
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
export default PAComponent;
