<?php
include('functions/apiGet.php');
$urlKey = 'getEmployes';
$newArray = getApi($urlKey, $array);
?>
<div class="card-group row">
    <?php
    foreach ($newArray as $id => $employe) {

    ?>
        <div class="col-sm-6 col-md-10">
            <div class="card mb-3" style="max-width: 900px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <?php
                        if ($employe['sexe'] === 'woman') {
                            echo '<img src="assets/img/femme_icon.webp" class="img-fluid rounded-start" alt="Man">';
                        } else {
                            echo '<img src="assets/img/homme_icon.webp" class="img-fluid rounded-start" alt="Man">';
                        }
                        ?>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class='d-flex justify-content-between'>
                                <h5 class="card-title"><?php echo strtoupper($employe['nom']) . ' ' . ucfirst($employe['prenom']) . ' (' . $employe['age'] . ' ans)' ?></h5>
                                <span class="fw-bold"> <?php echo $employe['poste_name'][0] ?></span>
                            </div>
                            <br>
                            <div class="row mt-5">
                                <div class="col-md-8">
                                    <span class="fw-bold">Adresse: </span><?php echo ucwords($employe['adresse']) ?>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-4">
                                    <span class="fw-bold">Ville: </span><?php echo ucwords($employe['ville']) ?>
                                </div>
                                <div class="col-md-4 offset-md-2"><span class="fw-bold">Code Postal: </span><?php echo ucwords($employe['code_postal']) ?></div>
                            </div>

                            <div class="row mt-4">
                                <div class="col-md-4">
                                    <span class="fw-bold">Tél: </span><?php echo ucwords($employe['num_tel']) ?>
                                </div>
                                <div class="col-md-6 offset-md-2"><span class="fw-bold">Mail: </span><?php echo strtolower($employe['email']) ?></div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-4">
                                    <button class="btn btn-danger deleteEmploye" id="deleteEmployes" value="<?php echo $id ?>">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <?php }
    echo '</div>';
    ?>

    <script src="assets/js/employes.js"></script>