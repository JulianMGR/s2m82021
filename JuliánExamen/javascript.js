

document.getElementById("imagenCambia").style.display="none";



var lista = document.getElementsByClassName("listaImg");

var listaImgs = ["avant.jpg", "general_road.jpg", "menu-personalizar-orcaaero.png", "menu-personalizar-terra.jpg", "orca.jpg", "OrcaAero.jpg", "personalizar-menu-orca.png", "terra.jpg"];




document.getElementsByClassName("listaImg")[0].addEventListener("mousemove", muestrad);
document.getElementsByClassName("listaImg")[1].addEventListener("mousemove", muestrad);
document.getElementsByClassName("listaImg")[2].addEventListener("mousemove", muestrad);
document.getElementsByClassName("listaImg")[3].addEventListener("mousemove", muestrad);
document.getElementsByClassName("listaImg")[4].addEventListener("mousemove", muestrad);
document.getElementsByClassName("listaImg")[5].addEventListener("mousemove", muestrad);
document.getElementsByClassName("listaImg")[6].addEventListener("mousemove", muestrad);
document.getElementById("finalmenu").addEventListener("mouseover", quitalo);
document.getElementsByClassName("finalmenu2")[0].addEventListener("mouseover", quitalo);

function muestrad(){
	
	for(var i=0; i<8;i++){
		if(this==lista[i]){
			document.getElementById("imagenCambia").style.display="block";
			var sourceFinal= "img/menu/"+listaImgs[i];
			document.getElementById("imagenCambia").src=sourceFinal;
			document.getElementsByClassName("OcultarMostrar")[i].style.display="block";
		}
	}
}

function quitalo(){
	document.getElementById("imagenCambia").style.display="none";
	for(var x=0; x<7;x++){
		document.getElementsByClassName("OcultarMostrar")[x].style.display="none";
	}
	
}




//submenus


   
   document.querySelectorAll(".desplegar")[0].addEventListener("click",submenu);
    
    
    function submenu(){
        var estado = document.getElementById("noMostrar").style.display;
        if (estado == "none"){
            document.getElementById("noMostrar").style.display = "block";
        }else{
            document.getElementById("noMostrar").style.display = "none";            
        }
        
    }








