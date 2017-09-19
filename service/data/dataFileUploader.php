<?php

class DataFileUploader {
      var $file;
      var $headers = [];      

      function __construct($file) {
               $this->file = $file;
      }

      function getHeaders() {
               $this->headers = fgetcsv($this->file);
      }

      function getRow() {
               if (!feof($this->file)) {
                  $row = [];
                  $data = fgetcsv($this->file);
                  if ($data) {
                    foreach ($data as $key => $value) {
                          $row[$this->headers[$key]] = $value;
                    }
                  }
                  return $row;
               }
      }
}