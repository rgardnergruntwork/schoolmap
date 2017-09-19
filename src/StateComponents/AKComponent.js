import BaseStateComponent from './BaseStateComponent'

class AKComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'AK',
            mapType: {
            county:'maps/alaska',
            areaCode: 'maps/alaskaareacode',
            congressional: 'maps/alaskacongressional'
            }
        }
    }

    getEntityDef() {
        return [
                {
                    "internalId": '270',
                    "newId": '270',
                    "sName": 'Kusilvak',
                    "lName": 'Kusilvak',
                }
                ];
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
export default AKComponent;
