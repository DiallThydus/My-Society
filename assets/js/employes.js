document.addEventListener("DOMContentLoaded", function() { 
    showAddEmployeeForm();
    deleteEmployee();
    showEditEmployeeForm();
});

function showAddEmployeeForm(){
    let addEmployee = document.querySelector('#btnAddEmployee');
    addEmployee.addEventListener('click', () => {
        fireAddEmployee();
    })
}

// Création d'une entrée employés
function submitCreateEmployeeForm(formData){
    let url = 'https://api.airtable.com/v0/apph1IHfOSAx4wZCg/Employes?api_key=';
    let method = 'POST';
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

    fetchPostOrPatch(url, method, data).then((response) =>{
        if(response.ok){
            response.json().then(() => {
                let success = true;
                fireSuccessOrErrorToasts(success);
            })
        } else {
            let success = false;
            fireSuccessOrErrorToasts(success);
        }
    }).catch((error) => {
        console.error(error);
        let success = false;
        fireSuccessOrErrorToasts(success);
    });
}
    


function showEditEmployeeForm(){
    let editEmployeButtons = document.getElementsByClassName('editEmploye');
    if((editEmployeButtons)){
        for(let button of editEmployeButtons){
            let id = button.value;
            button.addEventListener('click', () => {
                let url = 'https://api.airtable.com/v0/apph1IHfOSAx4wZCg/Employes/'+ id + '?api_key=';
                fetchGet(url).then((value) => {
                    fireUpdateEmployee(value, id);
                });
            });   
        }
    }
}

function submitEditEmployeForm(formData){
    let url = 'https://api.airtable.com/v0/apph1IHfOSAx4wZCg/Employes?api_key=';
    let method = 'PATCH';
    let data = {
        'records' : [
            {
            'id' : formData.get('id'),
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
                "date_embauche" : formData.get('hired_date'),
                "Employe_Poste": ["recPulFop64uWxvJ1"],
            }
        }]
    }
    
    fetchPostOrPatch(url, method, data).then((response) =>{
        if(response.ok){
            response.json().then(() => {
                let success = true;
                fireSuccessOrErrorToasts(success);
            })
        } else {
            let success = false;
            fireSuccessOrErrorToasts(success);
        }
    }).catch((error) => {
        console.error(error);
        let success = false;
        fireSuccessOrErrorToasts(success);
    });
}

function deleteEmployee(){
    let deleteEmployeButtons = document.getElementsByClassName('deleteEmploye');
    if(deleteEmployeButtons){
        for(let button of deleteEmployeButtons){
            button.addEventListener('click', () => {
            let url = 'https://api.airtable.com/v0/apph1IHfOSAx4wZCg/Employes';
            let id = button.value;
            fireDeleteEmployee(url, id);    
            });   
        }
    }
}