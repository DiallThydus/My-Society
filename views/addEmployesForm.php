<div class="container">
    <h2>Add employes</h2>
    <form id="addEmployes" class="form-horizontal">
        <div class="form-group">
            <label class="col-sm-2 control-label">Nom</label>
            <div class="col-sm-10">
                <input class="form-control" id="nom" name="nom" type="text" placeholder="nom from DB">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">Prenom</label>
            <div class="col-sm-10">
                <input class="form-control" id="prenom" name="prenom" type="text" placeholder="prenom from DB">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label" for="sexe">Sexe : </label>
            <input name="sexe" type="radio" value="man">Homme</input><input name="sexe" value="woman" type="radio">Femme</input>
        </div>

        <div class="form-group">
            <label class="col-sm-2 control-label">Age</label>
            <div class="col-sm-10">
                <input class="form-control" id="age" name="age" type="number" placeholder="age from DB">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">Adresse</label>
            <div class="col-sm-10">
                <input class="form-control" name="adresse" id="adresse" type="text" placeholder="adresse from DB">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">ville</label>
            <div class="col-sm-10">
                <input class="form-control" name="ville" id="ville" type="text" placeholder="ville from DB">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">Cpde postal</label>
            <div class="col-sm-10">
                <input class="form-control" name="code_postal" id="code_postal" type="text" placeholder="CP from DB">
            </div>
        </div>

        <div class="form-group">
            <label class="col-sm-2 control-label">Email</label>
            <div class="col-sm-10">
                <input class="form-control" name="email" id="email" type="mail" placeholder="adresse mail from DB">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">Num Tel</label>
            <div class="col-sm-10">
                <input class="form-control" name="numtel" id="numtel" type="text" placeholder="numTel from DB">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">Date d'embauche</label>
            <div class="col-sm-10">
                <input class="form-control" name="dateEmbauche" id="dateEmbauche" type="date" placeholder="date from DB">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">Poste </label>
            <div class="col-sm-10">
                <input class="form-control" name="poste_name" id="poste_name" type="text" placeholder="poste from DB">
            </div>
        </div>

        <div class="form-group">
            <button class="btn btn-success" id="submitAddEmployes" type="submit" value="Update"> add</button>
        </div>
</div>
</form>
</div>

<script src="assets/js/employes.js"></script>