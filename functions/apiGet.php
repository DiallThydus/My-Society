<?php

include('../routes/routeArray.php');
include ('../functions/getEmployesCollection.php');

function getApi($urlKey, $array){
    // Initialisation de cURL
    $curl = curl_init();

    // Spécifie l'URL sur laquelle pointer
    foreach($array as $key=>$value){
        if($key === $urlKey){
            $url = $value;
        }
    }
    curl_setopt($curl, CURLOPT_URL, $url);

    // Évite d'afficher sur la page le résultat (facultatif)
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    //Auth
    $auth = "Authorization: Bearer keyAnhapOeHKJpu6O";
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-type: application/json', $auth));

    // Éxécution
    $resultat = curl_exec($curl);

    // Ferme la session cURL
    curl_close($curl);

    $resultat = json_decode($resultat, true);

    switch($urlKey){
        case 'getEmployes':
            $newArray = getEmployesCollectionArray($resultat);
            break;
        default:
        $newArray = $resultat;
    }


    return $newArray;
}







