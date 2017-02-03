 (function(){
	window.addEventListener("load", cargaPagina);

	var contenTodo = document.getElementById("contieneTodo");
	var contenLista = document.getElementById("contenedorLista");
	var cajaLista = document.getElementById("nuevaLista");
	var formuLista = document.getElementById("formLista");
	var nombreLista = document.getElementById("nombreLista");
	var botonGuardar = document.getElementById("btnGuardar");
	var botonCerrar = document.getElementById("btnCerrar");
	var conta = 1;

	function cargaPagina(){
		cajaLista.addEventListener("click", apareceFormulario);
	}
	function apareceFormulario(){
		cajaLista.classList.add("desaparece");
		formuLista.classList.remove("desaparece");
		nombreLista.value = "";
		nombreLista.focus();qq
		contenLista.classList.add("p-7","estiloLista");

		botonCerrar.addEventListener("click", cerrar);	
		botonGuardar.addEventListener("click", agregar);
	}
	function cerrar(){
		formuLista.classList.add("desaparece");
		cajaLista.classList.remove("desaparece");
	}
	function agregar(e){
		e.preventDefault();
		if (nombreLista.value != "") {
			formuLista.classList.add("desaparece");
			agregarLista(nombreLista, this);
			agregaContenedor();
			nombreLista.value = "";
		}	
	}
	function agregarLista(nombre, btnGuardar){
		var padre = btnGuardar.parentElement.parentElement; 
		var tarjeta = document.createElement("div");
		var nuevaLista = document.createElement("div");

		nuevaLista.innerText = nombre.value;
		nuevaLista.classList.add("nomList");
		padre.insertBefore(nuevaLista, padre.childNodes[0]);

		tarjeta.innerText = "Añadir una tarjeta...";
		tarjeta.classList.add("tarjeta");
		padre.appendChild(tarjeta);

		tarjeta.addEventListener("click", apareceFormuTarjeta);
		padre.addEventListener("dragover", arrastraSobre);
		padre.addEventListener("drop", soltar);
	}
    function agregarContenedor (){
        cajaLista.classList.remove("desaparecer")
        var nuevoContenedo = document.createElement("div");
        nuevoContenedor.classList.add("nuevoConten");
        nuevoContenedor.classList.add("p-7","estiloLista");
        nuevoContenedor.insertBefore(cajaLista,nuevoContenedor.childNodes[0]); nuevoContenedor.insertBefore(formuLista,nuevoContenedor.childNodes[0]);
        contenTodo.appendChild(nuevoContenedor);
    }
        
        
        
        
        