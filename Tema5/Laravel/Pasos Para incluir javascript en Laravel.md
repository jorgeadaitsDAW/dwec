Pasos para incluir tu javascript en Laravel

1. Para preparar nuestro entorno.

   ```
   npm install
   ```

2. En la carpeta **resources/js**, creamos los javascript que nos hagan falta, por ejemplo creamos la carpeta **validaciones** e incluimos el fichero **validacionLibro.js** en el, quedando: **resources/js/validaciones/validacionLibro.js**

3. Este archivo lo usaremos para validar el formulario para crear un libro. Un ejemplo del código puede ser el siguiente:

   ```
   document.addEventListener('DOMContentLoaded',function(){  
       let input = document.getElementById('title');
       input.addEventListener('change',function(event){
           alert(`El valor del input es: ${event.target.value} `);
       });
   })
   ```

4. Ahora debemos ir al archivo **webpack.mix.js**, ubicado en la raiz del proyecto. Debemos modificar la siguiente parte del código:

   ```
   mix.js('resources/js/app.js', 'public/js')
      .sass('resources/sass/app.scss', 'public/css')
   ```

   Y añadimos una línea más para nuestro  **validacion.js**:

   ```
   .js('resources/js/validaciones/validacionLibro.js', 'public/js/validaciones/');
   ```

5. Ahora para que se genere nuestro archivo debemos lanzar el siguiente comando:

   ```
   npm run dev
   ```

6. Ahora si vamos a la carpeta **public/js/validaciones/** deberá estar creado nuestro archivo **validaciones.js**

7. Ahora debemos incluir dicho archivo en nuestras vistas de laravel. Para ello nos ubicamos primero en el archivo **resources/views/public/layout.blade.php**  Y al final del body debemos incluir la siguiente línea de código:

   ```
    @stack('scripts')
   ```

   Con este código podremos ir incluyendo los javascripts que necesitemos en la vista que lo use.

8. Ahora nos ubicamos en **resources/views/public/books/create.blade.php** , y después del **@endsection** incluimos el siguiente código:

   ```
   @push('scripts')
       <script src="{{ mix('/js/validaciones/validacionLibro.js') }}" defer ></script>
   @endpush
   ```

   De esta forma obtenemos el archivo de javascript que hemos creado y lo añadimos dónde hemos puesto nuestra directica **@stack('scripts')**

9. Y ya debería funcionar todo. Sólo destacar, que si queremos qué nuestro código javascript sea el más adecuado cuando terminemos nuestro proyecto, debemos lanzar el siguiente comando:

   ```
   npm run prod
   ```

10. Otro factor en tener en cuenta, es evitar el cacheo de versiones antiguas de nuestros archivos por los navegadores, para ello **laravel-mix**, con un simple método nos permite incluir un hash en cada archivo que hace referencia a la versión del mismo, y evitar así cacheos de versiones antiguas pero si el cacheo de la versión actual. Para ello sólo debemos incluir en el archivo **webpack.mix.js** al final el siguiente código:

  ```
  if (mix.inProduction()) {
     mix.version();
  }
  ```

  Sólo se controla el cache, cuando lanzamos la aplicación en producción, en desarrollo no tiene importancia.

  Ahora si volveis a ejecutar  **npm run prod** , cuandos inspecciones en el navegador el archivo debería salirnos algo como:

  ```
  <script src="/js/validaciones/validacionLibro.js?id=11400ea1d24d33e4a50e" defer=""></script>
  ```

