Pasos para crear por AJAX con Axios(Sin validación):

1º- Crear formulario

2º- Crear Funcion en el controlador que dado unos datos por POST cree el objeto. Por ahora en vez de implementar la función incluir un sleep(5);

3º- Crear Ruta a la función del controlador, por POST.

4º Crear función de javascript que se asocie al cargar el DOM al evento submit del formulario.

5º La función javascript debe coger todos los valores del formulario($("#formulario").serialize()) y enviarlo a través de una petición axios.post a a la ruta que hemos creado. Dedemos mostrar un modal con un progress bar con el mensaje de "SE ESTA REALIZANDO LA PETICIÓN"

6º En la función implementada del controlador debemos devolver el mensaje : "El objeto se ha creado correctamente"

7º Cuando se reciba la respuesta, esconder el modal de cargando y mostrar el mensaje que hemos obtenido.

8º Limpiar el formulario. Por javascript o haciendo una petición axios para obtener la vista del formulario.

**Si hay algún error durante en el proceso de la petición AJAX, debemos mostrarse un modal indicando que : "SE HA PRODUCIDO UN ERROR INESPERADO Y QUE LO VUELVA A INTENTAR MAS TARDE. SI EL ERROR PERSISTE, CONSULTE CON EL ADMINISTRADOR."**