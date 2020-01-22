<?php 
function validarNumeros(){
    sleep(2);
    $errores = [];
    if(isset($_POST["numero1"])){
       $numero1 = $_POST["numero1"];
       $errores["numero1"] = [];
    
       if(!preg_match("/[0-9]+/",$numero1)){
          $errores["numero1"]["numerico"] = "ERROR ESTO NO ES UN NUMERO";
       }
       if($numero1 <= 10){
          $errores["numero1"]["min"] =  "COMO MINIMO DEBE SER MAYOR QUE 10";
       }
    }
    
    if(isset($_POST["numero2"])){
       $numero2 = $_POST["numero2"];
       $errores["numero2"] = [];
       if(!preg_match("/[0-9]+/",$numero2)){
          $errores["numero2"]["numerico"] = "ERROR ESTO NO ES UN NUMERO";
       }
    
       if($numero2 <= 20){
          $errores["numero2"]["min"] =  "COMO MINIMO DEBE SER MAYOR QUE 20";
       }
    
       if((int)$numero2 % 2 === 0){
          $errores["numero2"]["impar"] =  "DEBE SER UN NUMERO IMPAR";
       }
    
       if(isset($_POST["numero1"])){
          if($numero2 === $_POST["numero1"]){
             $errores["numero2"]["iguales"] = "LOS NÚMEROS NO PUEDEN SER IGUALES";
          }
       }
    }
    return $errores;
    }