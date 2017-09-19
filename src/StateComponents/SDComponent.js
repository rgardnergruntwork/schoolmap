import BaseStateComponent from './BaseStateComponent'

class SDComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'SD',
            mapType: {
            county:'maps/southdakota',
            areaCode: 'maps/southdakotaareacode',
            congressional: 'maps/southdakotacongressional'
            }
        }
    }

    getEntityDef() {
        return [
                {
                    "internalId": '113',
                    "newId": '113',
                    "sName": 'OL',
                    "lName": 'Oglala Lakota',
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
export default SDComponent;
