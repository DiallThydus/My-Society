<?php
include('functions/apiGet.php');
$urlKey = 'getPostes';
$newArray = getApi($urlKey, $array);
echo '<pre>';
var_dump($newArray);
echo '</pre>';
