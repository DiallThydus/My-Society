<?php

function getEmployesCollectionArray($resultat)
{
    $newArray = [];

    foreach ($resultat['records'] as $record) {
        $i = $record['id'];
        foreach ($record['fields'] as $key => $value) {
            if ($key !== "Employe_Poste") {
                $newArray[$i][$key] = $value;
            }
        }
    }

    return $newArray;
}
