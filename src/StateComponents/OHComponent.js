import BaseStateComponent from './BaseStateComponent'

class OHComponent extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: 'OH',
            mapType: {
            county:'maps/ohio',
            areaCode: 'maps/ohioareacode',
            congressional: 'maps/ohiocongressional'
            }
        }
    }

    getEntityDef() {
        return [
                {
                    "internalId": '087',
                    "newId": '087',
                    "lName": 'Lawrence',
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
export default OHComponent;
