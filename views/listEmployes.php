<?php
include('../views/header.php');
include('../functions/apiGet.php');

$urlKey = 'getEmployes';

$newArray = getApi($urlKey, $array);

echo '<pre>';
//var_dump($newArray);
echo '</pre>';
?>
<div class="card-group row">
<?php
$i = 0;
foreach($newArray as $employe){
    $i++;
    ?>
    <div class="col-sm-6 col-md-10">
        <div class="card mb-3" style="max-width: 900px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <?php 
                    if($employe['sexe']=== 'woman'){
                        echo  '<img src="../assets/img/femme_icon.webp" class="img-fluid rounded-start" alt="Man">';
                    } else {
                        echo  '<img src="../assets/img/homme_icon.webp" class="img-fluid rounded-start" alt="Man">';
                    }
                    ?>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo strtoupper($employe['nom']).' '.ucfirst($employe['prenom']).' ('.$employe['age'].')'?></h5>
                        <div class="row">
                            <div class="col-md-8">
                                <p><span class="fw-bold">Adresse:</span> <?php echo ucwords($employe['adresse'])?></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                            <span class="fw-bold">Code Postal:</span> <?php echo ucwords($employe['code_postal'])?>
                            </div>
                            <div class="col-md-4 offset-md-2"><span class="fw-bold">Ville:</span> <?php echo ucwords($employe['ville'])?></div>
                        </div>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php if($i === 2){
        echo '</div>';
        echo '<div class="card-group row">';
        $i = 0;
    }?>
    
    
<?php }
echo '</div>';

include('../views/footer.php')
?>

