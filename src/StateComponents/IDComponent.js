import BaseStateComponent from './BaseStateComponent'

class IDComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'ID',
            mapType: {
            county:'maps/idaho',
            areaCode: 'maps/idahoareacode',
            congressional: 'maps/idahocongressional'
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
export default IDComponent;
