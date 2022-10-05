<?php 

require('views/header.php');

if(isset($_GET['view'])){

    switch ($_GET['view']) {
        case 'employes':
            include 'views/listEmployes.php';
            break;
        case 'postes':
            include 'views/employesByPostes.php';
            break;
            case 'addEmployee':
                include 'views/addEmployesForm.php';
                break;
            case 'updateEmployee':
                include 'views/updateEmployesForm.php';
                break;
        default:
            break;
    }
}

require('views/footer.php');