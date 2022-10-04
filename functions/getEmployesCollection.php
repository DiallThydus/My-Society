<?php 

function getEmployesCollectionArray($resultat) {
    $newArray = [];
    $i = 0;
    foreach ($resultat['records'] as $record){
        $i++;
        foreach($record['fields'] as $key => $value){
            if($key !== "Employe_Poste"){
                $newArray[$i][$key]= $value;
            }
        }
    }

    return $newArray;
}