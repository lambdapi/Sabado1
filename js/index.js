var pg=false;
	
	function onLoad() {
		document.addEventListener("deviceready", onDeviceReady, false); 
	}
	function onDeviceReady() {
		pg=true;  
		
		//todo: Recuperar las propiedades del dispositivo y mostrarlas
		//      a traves del elementos "deviceInfo"
		
		alert (" Ini device ready");
		var texto="";
		
		texto+= "<b> Nombre del dispositivo:</b>" + device.name   +   "<br/>";
		texto+= "<b> version phonegap:</b>" +  device.cordova  +   "<br/>";
		texto+= "<b> plataforma:</b>" +  device.platform  +   "<br/>";
		texto+= "<b> identificador único:</b>" +  device.uuid  +   "<br/>";
		texto+= "<b> versión del so:</b>" +  device.version  +   "<br/>";
		texto+= "<b> modelo del dispositivo:</b>" + device.model   +   "<br/>";
		
		$("#deviceInfo").html(texto);
		alert (" fin device ready");
	}
