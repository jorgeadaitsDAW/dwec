function mostrarError(){
    try{
        mostrarAlerta("ERror");
    }catch(err){
        console.log(err.name);
    }
}