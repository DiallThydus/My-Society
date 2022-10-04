<?php

function getPostesArray($resultat){
    $postes = [];
    foreach ($resultat['records'] as $record){
        $postes[$record['fields']['Name']] = $record['fields']['employes_list'];
    
    }

    return $postes;
}
