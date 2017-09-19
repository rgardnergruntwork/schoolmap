<?php

include_once('dataFileUploader.php');
$writeFile = 'json/stateData.json';

$perCapitaFile = 'raw/percapbystate.csv';
$taxesFile = 'raw/taxesbystate.csv';
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

while (!feof($file)) {
      $row = $uploader->getRow();
      $rowData = [];
      foreach($dataColumns as $column => $key) {
        $rowData[$key] = $row[$column];
      }
      $key = $rowData['display'];
      if ($key) {
         $data[$key] = $rowData;
      }
}
fclose($file);
$file = fopen($taxesFile, 'r');

$uploader = new dataFileUploader($file);
$uploader->getHeaders();
$row = $uploader->getRow();
//headers row 2
var_export($row);
$dataColumns = [
             'GEO.display-label' => 'display',
             'AMOUNT' => 'propertyTax',
];
$propertyField = 'GOVTAX.id';
$propertyValue = '011211';
while (!feof($file)) {
      $row = $uploader->getRow();
      $rowData = [];
      if ($row[$propertyField] !== $propertyValue) {
            continue;
      }
      foreach($dataColumns as $column => $key) {
        $rowData[$key] = $row[$column];
      }
      var_export($row);
      var_export($rowData);
      $rowData['propertyTax'] = $rowData['propertyTax'] * 1000;
      $key = $rowData['display'];
      if ($key && isset($data[$key])) {
         $data[$key] = array_merge($data[$key], $rowData);
      }
}
var_export($data);        
fclose($file);

$file = fopen($writeFile, 'w');
fwrite($file, json_encode($data));
fclose($file);