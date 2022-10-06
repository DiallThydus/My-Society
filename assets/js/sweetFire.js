function fireUpdateEmployee(value, idEmployee){
    let man, woman
    (value.fields.sexe ==='man') ? man = "checked" : woman = "checked";

    Swal.fire({
        title: 'Editer l\'employé',
        html: `
        <form id="editEmployeForm">
            <div class="col-sm-10 my-2 ">
                <input class="form-control" id="nom" name="nom" type="text" placeholder="Nom" value="${value.fields.nom}">
            </div>

            <div class="col-sm-10 my-2">
                <input class="form-control" id="prenom" name="prenom" type="text" placeholder="Prénom" value="${value.fields.prenom}">
            </div>
            <div class="col-sm-10 my-2">
                <div class="col-sm-7 d-flex justify-content-between">
                    <span><input name="sexe" type="radio" id="radio_man" value="man" ${man}><label for="radio_man"> Homme</label></span>
                    <span><input name="sexe" value="woman" id="radio_woman" type="radio" ${woman}><label for="radio_woman"> Femme</label></span>
                </div>
            </div>
        <div class="col-sm-10 my-2">
                <input class="form-control" id="age" name="age" type="number" placeholder="Age" value="${value.fields.age}">
            </div>
        
            <div class="col-sm-10 my-2">
                <input class="form-control" name="adresse" id="adresse" type="text" placeholder="Adresse" value="${value.fields.adresse}">
            </div>
        
            <div class="col-sm-10 my-2">
                <input class="form-control" name="ville" id="ville" type="text" placeholder="Ville" value="${value.fields.ville}">
            </div>
        
            <div class="col-sm-10 my-2">
                <input class="form-control" name="code_postal" id="code_postal" type="text" placeholder="Code Postal" value="${value.fields.code_postal}">
            </div>

            <div class="col-sm-10 my-2">
                <input class="form-control" name="email" id="email" type="mail" placeholder="Email" value="${value.fields.email}">
            </div>

            <div class="col-sm-10 my-2">
                <input class="form-control" name="numtel" id="numtel" type="text" placeholder="Numéro de téléphone" value="${value.fields.num_tel}">
            </div>

            <div class="col-sm-10 my-2">
                <input class="form-control" name="hired_date" id="hired_date" placeholder="Date d'embauche" value="${value.fields.date_embauche}">
            </div>
        </form>`,
        stopKeydownPropagation: false,
        confirmButtonText: 'Valider',
        allowOutsideClick: false,
        showCancelButton: true,
        cancelButtonText: 'Annuler',
        reverseButtons: true,
        focusConfirm: false,
        preConfirm: () => {
            let dataArray = ['nom', 'prenom', 'radio_man', 'radio_woman', 'age', 'adresse', 'ville', 'code_postal', 'email', 'numtel', 'hired_date'];
            let emptyArray = [];
            for(id of dataArray){
                if(! Swal.getPopup().querySelector('#'+ id +'').value){
                    emptyArray.push(id);
                }
            }
            if (emptyArray.length > 0){
                Swal.showValidationMessage(`${emptyArray.length} champ(s) nécessite une valeur`)
            }
            let formData = new FormData(editEmployeForm);
            formData.append('id', idEmployee);
          return {formData}
        },
        willOpen: () => {
            flatpickrInstance = flatpickr(
              Swal.getPopup().querySelector('#hired_date')
            )
          }
      }).then((result) => {
        submitEditEmployeForm(result.value.formData)
      })
}

function fireToastsWhenEditedData(success){
    
      if (success === true){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            color: 'white',
            background: 'green',
            customClass: {
              popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          });
        Toast.fire({
            icon: 'success',
            title: 'Réussie'
          }).then(() => {
            location.reload();
          })
      } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            color: 'white',
            background: 'red',
            customClass: {
              popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        Toast.fire({
            icon: 'error',
            title: 'Echec'
          })
      }  
}


function fireDeleteEmployee(url, id){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success m-2',
          cancelButton: 'btn btn-danger m-2'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Voulez-vous supprimer cet employé ?',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
        text: "Cet action est irréversible !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, on l\'a viré !',
        cancelButtonText: 'Non, il peut encore servir',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            fetchDelete(url, id);
            swalWithBootstrapButtons.fire({
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  },
                title: 'Allez Oust!',
                text:'Données de l\'employé supprimées !',
                icon: 'success'
            }).then(() => {
                location.reload();
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
            title: 'Mission annulée',
            text: 'On va le garder encore un peu...',
            icon: 'error',
          })
        }
      })
}