	
	alertify.set({ labels: {
			ok     : "Continuar",
			cancel : "Cancelar"
		} });
	
	function deleteItem(nombre){
		alertify.confirm("Esta seguro que desea eliminar el Elemento: "+ nombre + "?",function (e){
			if(e){
				alertify.success("Elemento: "+ nombre+" eliminado");
			}else{
				alertify.log("Eliminación cancelada");
			}
		});
	}
	
	function addItemConfirmation(message,location){
		alertify.alert(message,function (){window.location=location;});
	}
	
	function modifyItem(id,location){
		alertify.confirm("Esta seguro que desea modificar el Elemento: "+ id + "?",function (e){
			if(e){
				alertify.alert("Elemento: "+ id+" modificado",function(){window.location=location});
			}else{
				alertify.log("Modificación cancelada");
			}
		});
	}