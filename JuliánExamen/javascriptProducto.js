var imgBicis= ["url('img/orcaero/ORCA_AREO_M21eTEAMA.jpg')","url('img/orcaero/ORCA_AREO_M21eTEAMB.jpg')","url('img/orcaero/ORCA_AREO_M21eTEAM.jpg')"];



document.getElementById("color1").addEventListener("click", cambiaImgBici1);
document.getElementById("color2").addEventListener("click", cambiaImgBici2);
document.getElementById("color3").addEventListener("click", cambiaImgBici3);
	
	function cambiaImgBici1(){
		document.getElementById("producto").style.backgroundImage=imgBicis[0];
		document.getElementById("color1").style.border="solid 3px red";
		document.getElementById("color2").style.border="none";
		document.getElementById("color3").style.border="none";
	}

	function cambiaImgBici2(){
		document.getElementById("producto").style.backgroundImage=imgBicis[1];
		document.getElementById("color2").style.border="solid 3px red";
		document.getElementById("color1").style.border="none";
		document.getElementById("color3").style.border="none";
	}

	function cambiaImgBici3(){
		document.getElementById("producto").style.backgroundImage=imgBicis[2];
		document.getElementById("color3").style.border="solid 3px red";
		document.getElementById("color1").style.border="none";
		document.getElementById("color2").style.border="none";
	}
