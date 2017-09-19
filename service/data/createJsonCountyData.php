<?php

include_once('dataFileUploader.php');
$writeFile = 'json/countyData.json';

$perCapitaFile = 'raw/percapbycounty.csv';
//$taxesFile = 'raw/taxesbystate.csv';
$data = [];

$file = fopen($perCapitaFile, 'r');

$uploader = new dataFileUploader($file);
$uploader->getHeaders();
$row = $uploader->getRow();
//headers row 2
var_export($row);
$dataColumns = [
             'GEO.display-label' => 'display',
             'HC01_VC118' => 'perCapita',
];
$nameChanges = [
      'Prince of Wales-Hyder' => 'Prince Of Wales-Outer Ketchika',
      'Skagway Municipality' => 'Skagway-Hoonah-Angoon',
      'Wrangell' => 'Wrangell-Petersburg',
      'Anchorage Municipality' => 'Anchorage',
      'Denali' => 'Denali Borough',
      'Lake and Peninsula' => 'Peninsula And Lake',
      'Kusilvak' => 'Wade Hampton',
      'St. Francis' => 'St.Francis',
      'St. Johns' => 'St.Johns',
      'St. Lucie' => 'St.Lucie',
      'St. Clair' => 'St.Clair',
      'LaSalle' => 'La Salle',
      'St. Joseph' => 'St.Joseph',
      'DeKalb' => 'De Kalb',
      'LaPorte' => 'La Porte',
      'St. Mary' => 'St.Mary',
      'St. Tammany' => 'St.Tammany',
      'St. James' => 'St.James',
      'St. John the Baptist' => 'St.John the Baptist',
      'St. Bernard' => 'St.Bernard',
      'St. Charles' => 'St.Charles',
      'St. Landry' => 'St.Landry',
      'St. Martin' => 'St.Martin',
      'St. Helena' => 'St.Helena',
      'Worcester' => 'Worchester',
      'St. Mary\'s' => 'St.Mary\'s',
      'St. Louis' => 'St.Louis',
      'Ste. Genevieve' => 'Ste.Genevieve',
      'St. Francois' => 'St.Francois',
      'St. Louis city' => 'St.Louis City',
      'Wheatland' => 'Wheatland ',
      'Fallon' => 'Fallon ',
      'Doña Ana' => 'Doña Ana ',
      'St. Lawrence' => 'St.Lawrence',
];

$stateNameChanges = [
                  'Virginia' => [
                             'Alexandria city' => 'Alexandria(City)',
                             'Bedford city' => 'Bedford(City)',
                             'Bristol city' => 'Bristol (City)',
                             'Buena Vista city' => 'Buena Vista (City)',
                             'Charlottesville city' => 'Charlottesville (City)',
                             'Chesapeake city' => 'Chesapeake (City)',
                             'Clifton Forge city' => 'Clifton Forge (City)',
                             'Colonial Heights city' => 'Colonial Heights (City)',
                             'Covington city' => 'Covington (City)',
                             'Danville city' => 'Danville (City)',
                             'Emporia city' => 'Emporia (City)',
                             'Fairfax city' => 'Fairfax (City)',
                             'Falls Church city' => 'Falls Church (City)',
                             'Franklin city' => 'Franklin (City)',
                             'Fredericksburg city' => 'Fredericksburg (City)',
                             'Galax city' => 'Galax (City)',
                             'Hampton city' => 'Hampton (City)',
                             'Harrisonburg city' => 'Harrisonburg (City)',
                             'Hopewell city' => 'Hopewell (City)',
                             'Lexington city' => 'Lexington (City)',
                             'Lynchburg city' => 'Lynchburg (City)',
                             'Manassas city' => 'Manassas (City)',
                             'Manassas Park city' => 'Manassas Park (City)',
                             'Martinsville city' => 'Martinsville (City)',
                             'Newport News city' => 'Newport News (City)',
                             'Waynesboro city' => 'Waynesboro (City)',
                             'Williamsburg city' => 'Williamsburg (City)',
                             'Winchester city' => 'Winchester (City)',
                             'Norfolk city' => 'Norfolk (City)',
                             'Norton city' => 'Norton (City)',
                             'Petersburg city' => 'Petersburg (City)',
                             'Poquoson city' => 'Poquoson (City)',
                             'Portsmouth city' => 'Portsmouth (City)',
                             'Radford city' => 'Radford (City)',
                             'Richmond city' => 'Richmond (City)',
                             'Roanoke city' => 'Roanoke (City)',
                             'Salem city' => 'Salem (City)',
                             'Staunton city' => 'Staunton  (sCity)',
                             'Suffolk city' => 'Suffolk (City)',
                             'Virginia Beach city' => 'Virginia Beach (City)',
                  ],
                  'Washington' => [
                               'Walla Walla' => 'Wallawalla',
                  ],
                  'Wisconsin' => [
                              'St. Croix' => 'St.Croix',
                  ],
];
$dataChanges = [
             'Wrangell-Petersburg' => 32804,
             'Skagway-Hoonah-Angoon' => 33607
];

while (!feof($file)) {
      $row = $uploader->getRow();
      //var_export($row);
      $rowData = [];
      foreach($dataColumns as $column => $key) {
        $rowData[$key] = utf8_encode($row[$column]);
      }
      $key = $rowData['display'];
      list($display, $state) = explode(',', $rowData['display'], 2);
      $state = trim($state);
      $display = trim(str_ireplace(' county', '', $display, $count=1));
      $display = trim(str_ireplace(' census area', '', $display, $count=1));
      $display = trim(str_ireplace(' city and borough', '', $display, $count=1));
      $display = trim(str_ireplace(' borough', '', $display, $count=1));
      $display = trim(str_ireplace(' Parish', '', $display, $count=1));

      if (isset($nameChanges[$display])) {
      echo $display . "\n";
            $display = $nameChanges[$display];
            echo $display . "\n";
      }

      if (isset($stateNameChanges[$state][$display])) {
      echo $display . "\n";
            $display = $stateNameChanges[$state][$display];
            echo $display . "\n";
      }

      //values
      if (isset($dataChanges[$display])) {
         $rowData['perCapita'] = $dataChanges[$display];
      }      
      if (($state == 'Missouri' || $state == 'Tennessee') && $display == 'De Kalb') {
         $display = 'DeKalb';
      }
      if ($state == 'Montana' && $display == 'Custer') {
         $display = 'Custer ';
      }
      if ($state == 'Montana' && $display == 'Lake') {
         $display = 'Lake  ';
      }
      if ($state == 'Ohio' && $display == 'Lawrence') {
         $display = 'Lawerence';
      }
      if ($state == 'South Dakota' && $display == 'Oglala Lakota') {
         $display = 'Shannon';
      }
      $rowData['state'] = $state;      
      $rowData['display'] = $display;      
      if ($key) {
         $data[$key] = $rowData;
      }
}
fclose($file);
//var_export($data);
$file = fopen($writeFile, 'w');
fwrite($file, json_encode($data));
var_export(json_last_error_msg());
fclose($file);