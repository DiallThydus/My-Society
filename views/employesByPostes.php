<?php
include('functions/apiGet.php');

$urlKey = 'getEmployesByPoste';

$newArray = getApi($urlKey, $array);

foreach ($newArray as $poste => $employes) {
    ?>
    <h2><?= $poste; ?></h2>
    <p><?php echo join(', <br> ', $employes); ?></p>
    <?php
}