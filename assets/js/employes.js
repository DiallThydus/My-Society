document.addEventListener("DOMContentLoaded", function() { 
    submitCreateEmployeeForm();
    deleteEmployeeForm();
});

// Création d'une entrée employés
function submitCreateEmployeeForm(){
    let url = 'https://api.airtable.com/v0/apph1IHfOSAx4wZCg/Employes?api_key=';
    let method = 'POST';
    let createForm = document.querySelector('#addEmployes');
    let radioButtons = document.querySelectorAll('input[type=radio]');
    
    if(createForm != null){
        createForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let formData = new FormData(createForm);

            for (let radioButton of radioButtons) {
                if (radioButton.checked) {
                    formData.append('sexe', radioButton.value)
                }
            }

            let data = {
                'records' : [{
                    'fields' : {
                        "nom" : formData.get('nom'),
                        "prenom" : formData.get('prenom'),
                        "sexe" : formData.get('sexe'),
                        "age" : parseInt(formData.get('age')),
                        "adresse" : formData.get('adresse'),
                        "ville" : formData.get('ville'),
                        "code_postal" : formData.get('code_postal'),
                        "email" : formData.get('email'),
                        "num_tel" : formData.get('numtel'),
                        "date_embauche" : formData.get('dateEmbauche'),
                        "Employe_Poste": ["recPulFop64uWxvJ1"],
                    }
                }]
            }

            console.log(data);
            fetchPostOrPatch(url, method, data);
        })
    }
}

function deleteEmployeeForm(){
    let deleteEmployeButtons = document.getElementsByClassName('deleteEmploye');
    if(deleteEmployeButtons != null){
        for(let button of deleteEmployeButtons){
            button.addEventListener('click', () => {
            let url = 'https://api.airtable.com/v0/apph1IHfOSAx4wZCg/Employes';
            let id = button.value;
            console.log(id);
            fetchDelete(url, id);    
            });   
        }
     }
 
    
}
  
