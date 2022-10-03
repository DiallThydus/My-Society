<?php


// Initialisation de cURL
$curl = curl_init();


// Spécifie l'UL sur laquelle pointer
curl_setopt($curl, CURLOPT_URL, 'https://api.airtable.com/v0/apph1IHfOSAx4wZCg/Employes?view=Grid%20view');

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

foreach($resultat['records'] as $record){
    echo $record['fields']['nom'];
}


echo '<pre>';
var_dump($resultat);
echo '</pre>';

