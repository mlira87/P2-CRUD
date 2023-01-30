//Acceso al DOM

//puede ser una clase, una etiqueta o un ID //Retorna el primer elemento que hace match con el selector
//document.querySelector("body") 


//Levante o trae un elemento
document.addEventListener(  
    "DOMContentLoaded", () => { //DOMContentLoader Carga todo el html por completo

        //validar que el usuario este con login
        const user = localStorage.getItem("user"); //se mete en el local sorage
        if (user){
            //TODO: Falta obtener usuario

        } else {
            window.location = "./login.html" // Si no está con login, manda a otro sitio
        }


console.log("DOM Loaded")
    }
)