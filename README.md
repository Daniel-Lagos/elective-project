# elective-project - EJS

Taller para uso de NodeJS con Express y EJS como motor de vistas

## Estructura de la carpeta del proyecto

```bash
├── README.md
├── app.js
├── package.json
└── routes/
| 	├── login.js
└── views/
|    ├── hero.ejs
|    ├── home.ejs
|    ├── index.ejs
|    └── templates/
|    		├── header.ejs
|    		├── navbar.ejs
|    		└── footer.ejs
└── controllers/
|    	└── login.js
└── styles/
    └── styles.css

```
### Descripción de Carpetas
- `routes` Contiene el archivo `login.js` que establece el enrutamiento de la aplicación
- `views` Contiene las vistas de la aplicación. Se usa el motor de plantillas EJS  
- `templates` se encuentran las plantillas que se importarán en las diferentes parte de cada página o documento HTML para no repetir código
- `styles` contiene el archivo `styles.css` que son estilos de la aplicación

## Instalación y Configuración

-clonas el repositorio y ejecutas:

```
npm i
```

### Rutas

- `/`. Renderiza el archivo `index.ejs`, envía el título de la página y el arreglo de estudiantes para desplegar su contenido en una tabla
- `/insert`. Ruta de tipo `GET`, visualiza el formulario  para capturas los datos del estudiante. Además envía los módulos requeridos de departamentos y municipios para usarlos en SELECTS dependientes
- `/insert`. Ruta de tipo `POST`, recibe los datos del formulario, a partir de los códigos de departamento y municipio, obtiene la descripción correspondiente de los arreglos, crea un nuevo objeto estudiante y lo almacena en el arreglo, redirecciona a la rzíz del sitio
- `/about`. Ruta para visualizar información de la App
