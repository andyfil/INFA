$(document).ready(init);
var inputChange = false;
function init(){
	$('body').on('click','a',changePage);
	$('body').on('change','input',changeInput);
}

function changeInput(){
	//chequeamos que no se esté disparando automáticamente cuando se carga la página
	if(!this.disabled && this.value != '0'){
		inputChange = true;
	}	
}

function changePage(event){
	if(inputChange){
		if (confirm("¡Atención! Si continúa los cambios que realizó en la página se perderan. ¿Desea continuar?") == false) {
			event.preventDefault();
		}
		else{
			inputChange = false;
		}
	}
}