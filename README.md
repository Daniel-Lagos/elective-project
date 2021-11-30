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

- clonas el repositorio y ejecutas:

```
npm i || npm install
```

### Rutas

- `/api/`. Renderiza el archivo `home.ejs`
- `/api/login/`. Renderiza el archivo `index.ejs`
- `/api/home/`. Renderiza el archivo `hero.ejs`
