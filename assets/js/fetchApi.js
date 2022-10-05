
const API_KEY = 'keyAnhapOeHKJpu6O';

function fetchGet(url){
    fetch(url+API_KEY).then((response) => {
        if(response.ok){
            response.json().then((data) => {
                console.log(data);
            })
        } else {
            console.log('Erreur status != 200');
        }
    }).catch((error) => {
        console.log(`Erreur : ${error.message}`);
    })
}

function fetchPostOrPatch(url, method, data){
    fetch(url+API_KEY, {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then((response) => {
        if(response.ok){
            response.json().then((data) => {
                console.log(data);
            })
        } else {
            console.log('Erreur status != 200');
        }
    }).catch((error) => {
        console.log(`Erreur : ${error.message}`);
    })
}

function fetchDelete(url, id){
    fetch(url+'/'+id+'?api_key='+API_KEY,{
        method:'DELETE',
    }).then((response) => {
        if(response.ok){
            response.json().then((data) => {
                console.log(data);
            })
        } else {
            console.log('Erreur status != 200');
        }
    }).catch((error) => {
        console.log(`Erreur : ${error.message}`);
    })
}
