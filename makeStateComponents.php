<?php

$componentPath = 'src/StateComponents/';
$componentBase = './StateComponents/';
$componentsFile = 'src/StateComponents.js';
$componentsFileString = 'let components = {};
';

$components = [
            [
                'id' => 'AK',
                'component' => 'AKComponent', 
                'mapType' =>  'maps/alaska',
                'areaCodeMap' => 'maps/alaskaareacode',
                'congressional' => 'maps/alaskacongressional',
            ],
            [
                'id' => 'AZ',
                'component' => 'AZComponent', 
                'mapType' => 'maps/arizona',
                'areaCodeMap' => 'maps/arizonaareacode',
                'congressional' => 'maps/arizonacongressional',
            ],
            [
                'id' => 'AR',
                'component' => 'ARComponent', 
                'mapType' => 'maps/arkansas',
                'areaCodeMap' => 'maps/arkansasareacode',
                'congressional' => 'maps/arkansascongressional',
            ],
            [
                'id' => 'CA',
                'component' => 'CAComponent',
                'mapType' => 'maps/california',
                'areaCodeMap' => 'maps/californiaareacode',
                'congressional' => 'maps/californiacongressional',
            ],
            [
                'id' => 'CO',
                'component' => 'COComponent',
                'mapType' => 'maps/colorado',
                'areaCodeMap' => 'maps/coloradoareacode',
                'congressional' => 'maps/coloradocongressional',
            ],
            [
                'id' => 'CT',
                'component' => 'CTComponent',
                'mapType' => 'maps/connecticut',
                'areaCodeMap' => 'maps/connecticutareacode',
                'congressional' => 'maps/connecticutcongressional',
            ],
            [
                'id' => 'DE',
                'component' => 'DEComponent',
                'mapType' => 'maps/delaware',
                'areaCodeMap' => 'maps/delawareareacode',
                'congressional' => 'maps/delawarecongressional',
            ],
            [
                'id' => 'DC',
                'component' => 'DCComponent',
                'mapType' => 'maps/districtofcolumbia',
                'areaCodeMap' => 'maps/districtofcolumbiaareacode',
                'congressional' => 'maps/districtofcolumbiacongressional',
            ],
            [
                'id' => 'FL',
                'component' => 'FLComponent',
                'mapType' => 'maps/florida',
                'areaCodeMap' => 'maps/floridaareacode',
                'congressional' => 'maps/floridacongressional',
            ],
            [
                'id' => 'GA',
                'component' => 'GAComponent',
                'mapType' => 'maps/georgia',
                'areaCodeMap' => 'maps/georgiaareacode',
                'congressional' => 'maps/georgiacongressional',
            ],
            [
                'id' => 'HI',
                'component' => 'HIComponent',
                'mapType' => 'maps/hawaii',
                'areaCodeMap' => 'maps/hawaiiareacode',
                'congressional' => 'maps/hawaiicongressional',
            ],
            [
                'id' => 'ID',
                'component' => 'IDComponent',
                'mapType' => 'maps/idaho',
                'areaCodeMap' => 'maps/idahoareacode',
                'congressional' => 'maps/idahocongressional',
            ],
            [
                'id' => 'IL',
                'component' => 'ILComponent',
                'mapType' => 'maps/illinois',
                'areaCodeMap' => 'maps/illinoisareacode',
                'congressional' => 'maps/illinoiscongressional',
            ],
            [
                'id' => 'IN',
                'component' => 'INComponent',
                'mapType' => 'maps/indiana',
                'areaCodeMap' => 'maps/indianaareacode',
                'congressional' => 'maps/indianacongressional',
            ],
            [
                'id' => 'IA',
                'component' => 'IAComponent',
                'mapType' => 'maps/iowa',
                'areaCodeMap' => 'maps/iowaareacode',
                'congressional' => 'maps/iowacongressional',
            ],
            [
                'id' => 'KS',
                'component' => 'KSComponent',
                'mapType' => 'maps/kansas',
                'areaCodeMap' => 'maps/kansasareacode',
                'congressional' => 'maps/kansascongressional',
            ],
            [
                'id' => 'KY',
                'component' => 'KYComponent',
                'mapType' => 'maps/kentucky',
                'areaCodeMap' => 'maps/kentuckyareacode',
                'congressional' => 'maps/kentuckycongressional',
            ],
            [
                'id' => 'LA',
                'component' => 'LAComponent',
                'mapType' => 'maps/louisiana',
                'areaCodeMap' => 'maps/louisianaareacode',
                'congressional' => 'maps/louisianacongressional',
            ],
            [
                'id' => 'ME',
                'component' => 'MEComponent',
                'mapType' => 'maps/maine',
                'areaCodeMap' => 'maps/maineareacode',
                'congressional' => 'maps/mainecongressional',
            ],
            [
                'id' => 'MD',
                'component' => 'MDComponent',
                'mapType' => 'maps/maryland',
                'areaCodeMap' => 'maps/marylandareacode',
                'congressional' => 'maps/marylandcongressional',
            ],
            [
                'id' => 'MA',
                'component' => 'MAComponent',
                'mapType' => 'maps/massachusetts',
                'areaCodeMap' => 'maps/massachusettsareacode',
                'congressional' => 'maps/massachusettscongressional',
            ],
            [
                'id' => 'MI',
                'component' => 'MIComponent',
                'mapType' => 'maps/michigan',
                'areaCodeMap' => 'maps/michiganareacode',
                'congressional' => 'maps/michigancongressional',
            ],
            [
                'id' => 'MN',
                'component' => 'MNComponent',
                'mapType' => 'maps/minnesota',
                'areaCodeMap' => 'maps/minnesotaareacode',
                'congressional' => 'maps/minnesotacongressional',
            ],
            [
                'id' => 'MS',
                'component' => 'MSComponent',
                'mapType' => 'maps/mississippi',
                'areaCodeMap' => 'maps/mississippiareacode',
                'congressional' => 'maps/mississippicongressional',
            ],
            [
                'id' => 'MO',
                'component' => 'MOComponent',
                'mapType' => 'maps/missouri',
                'areaCodeMap' => 'maps/missouriareacode',
                'congressional' => 'maps/missouricongressional',
            ],
            [
                'id' => 'MT',
                'component' => 'MTComponent',
                'mapType' => 'maps/montana',
                'areaCodeMap' => 'maps/montanaareacode',
                'congressional' => 'maps/montanacongressional',
            ],
            [
                'id' => 'NE',
                'component' => 'NEComponent',
                'mapType' => 'maps/nebraska',
                'areaCodeMap' => 'maps/nebraskaareacode',
                'congressional' => 'maps/nebraskacongressional',
            ],
            [
                'id' => 'NV',
                'component' => 'NVComponent',
                'mapType' => 'maps/nevada',
                'areaCodeMap' => 'maps/nevadaareacode',
                'congressional' => 'maps/nevadacongressional',
            ],
            [
                'id' => 'NJ',
                'component' => 'NJComponent',
                'mapType' => 'maps/newjersey',
                'areaCodeMap' => 'maps/newjerseyareacode',
                'congressional' => 'maps/newjerseycongressional',
            ],
            [
                'id' => 'NM',
                'component' => 'NMComponent',
                'mapType' => 'maps/newmexico',
                'areaCodeMap' => 'maps/newmexicoareacode',
                'congressional' => 'maps/newmexicocongressional',
            ],
            [
                'id' => 'NY',
                'component' => 'NYComponent',
                'mapType' => 'maps/newyork',
                'areaCodeMap' => 'maps/newyorkareacode',
                'congressional' => 'maps/newyorkcongressional',
            ],
            [
                'id' => 'NC',
                'component' => 'NCComponent',
                'mapType' => 'maps/northcarolina',
                'areaCodeMap' => 'maps/northcarolinaareacode',
                'congressional' => 'maps/northcarolinacongressional',
            ],
            [
                'id' => 'ND',
                'component' => 'NDComponent',
                'mapType' => 'maps/northdakota',
                'areaCodeMap' => 'maps/northdakotaareacode',
                'congressional' => 'maps/northdakotacongressional',
            ],
            [
                'id' => 'OH',
                'component' => 'OHComponent',
                'mapType' => 'maps/ohio',
                'areaCodeMap' => 'maps/ohioareacode',
                'congressional' => 'maps/ohiocongressional',
            ],
            [
                'id' => 'OK',
                'component' => 'OKComponent',
                'mapType' => 'maps/oklahoma',
                'areaCodeMap' => 'maps/oklahomaareacode',
                'congressional' => 'maps/oklahomacongressional',
            ],
            [
                'id' => 'OR',
                'component' => 'ORComponent',
                'mapType' => 'maps/oregon',
                'areaCodeMap' => 'maps/oregonareacode',
                'congressional' => 'maps/oregoncongressional',
            ],
            [
                'id' => 'PA',
                'component' => 'PAComponent', 
                'mapType' =>  'maps/pennsylvania',
                'areaCodeMap' => 'maps/pennsylvaniaareacode',
                'congressional' => 'maps/pennsylvaniacongressional',
            ],
            [
                'id' => 'RI',
                'component' => 'RIComponent',
                'mapType' => 'maps/rhodeisland',
                'areaCodeMap' => 'maps/rhodeislandareacode',
                'congressional' => 'maps/rhodeislandcongressional',
            ],
            [
                'id' => 'SC',
                'component' => 'SCComponent',
                'mapType' => 'maps/southcarolina',
                'areaCodeMap' => 'maps/southcarolinaareacode',
                'congressional' => 'maps/southcarolinacongressional',
            ],
            [
                'id' => 'SD',
                'component' => 'SDComponent',
                'mapType' => 'maps/southdakota',
                'areaCodeMap' => 'maps/southdakotaareacode',
                'congressional' => 'maps/southdakotacongressional',
            ],
            [
                'id' => 'TN',
                'component' => 'TNComponent',
                'mapType' => 'maps/tennessee',
                'areaCodeMap' => 'maps/tennesseeareacode',
                'congressional' => 'maps/tennesseecongressional',
            ],
            [
                'id' => 'TX',
                'component' => 'TXComponent',
                'mapType' => 'maps/texas',
                'areaCodeMap' => 'maps/texasareacode',
                'congressional' => 'maps/texascongressional',
            ],
            [
                'id' => 'UT',
                'component' => 'UTComponent',
                'mapType' => 'maps/utah',
                'areaCodeMap' => 'maps/utahareacode',
                'congressional' => 'maps/utahcongressional',
            ],
            [
                'id' => 'VA',
                'component' => 'VAComponent',
                'mapType' => 'maps/virginia',
                'areaCodeMap' => 'maps/virginiaareacode',
                'congressional' => 'maps/virginiacongressional',
            ],
            [
                'id' => 'VT',
                'component' => 'VTComponent',
                'mapType' => 'maps/vermont',
                'areaCodeMap' => 'maps/vermontareacode',
                'congressional' => 'maps/vermontcongressional',
            ],
            [
                'id' => 'WA',
                'component' => 'WAComponent',
                'mapType' => 'maps/washington',
                'areaCodeMap' => 'maps/washingtonareacode',
                'congressional' => 'maps/washingtoncongressional',
            ],
            [
                'id' => 'WV',
                'component' => 'WVComponent',
                'mapType' => 'maps/westvirginia',
                'areaCodeMap' => 'maps/westvirginiaareacode',
                'congressional' => 'maps/westvirginiacongressional',
            ],
            [
                'id' => 'WI',
                'component' => 'WIComponent',
                'mapType' => 'maps/wisconsin',
                'areaCodeMap' => 'maps/wisconsinareacode',
                'congressional' => 'maps/wisconsincongressional',
            ],
            [
                'id' => 'WY',
                'component' => 'WYComponent',
                'mapType' => 'maps/wyoming',
                'areaCodeMap' => 'maps/wyomingareacode',
                'congressional' => 'maps/wyomingcongressional'
            ],
];

if (is_array($components)) {
   foreach ($components as $component) {
           $componentName = $component['component'];
           $componentID = $component['id'];
           $componentMap = $component['mapType'];;
           $componentFile = $componentPath . $componentName . '.js';
           $areaCodeMap = $component['areaCodeMap'];
           $congressional = $component['congressional'];
           $componentText = "import BaseStateComponent from './BaseStateComponent'

class $componentName extends BaseStateComponent {
    constructor() {
        super()
        this.config = {
            id: '$componentID',
            mapType: {
            county:'$componentMap',
            areaCode: '$areaCodeMap',
            congressional: '$congressional'
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
export default $componentName;
";
        //write out the file
        $file = fopen($componentFile, "w");
        fwrite($file, $componentText);
        fclose($file);
        $componentsFileString = 'import ' . $componentID . ' from \'' . $componentBase . $componentName . '\'' . "\n" . $componentsFileString;
        $componentsFileString .= "components['$componentID'] = $componentID;" . "\n";

   }
}


$componentsFileString .= '
export default components;';
$file = fopen($componentsFile, "w");
fwrite($file, $componentsFileString);
fclose($file);
