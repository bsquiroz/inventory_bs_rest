# inventario bs

hola hola como estan? bienvenido a este repo en el que se busca como finalidad realizar un inventario sencillo pero funcional.

Esta es la API desplegada <br>
[inventariobs.com](https://inventoryrestapibs.onrender.com/) <br>
En el archivo app.htpp estan las rutas que puedes visitar.

## ¿Que tecnologias utilice?

-   nodejs con express
-   sequelize con postgres
-   docker

## ¿Como puedes levantar mi proyecto?

Ejecuta este comando que te clonara el proyecto

```
git clone https://github.com/bsquiroz/inventory_bs_rest.git
```

Despues instala dependencias <br>
NOTA => Asegurarte que estes dentro del proyecto

```
npm i
```

Seria super chevere que tuvieras el docker instalado ya que con esta linea de codigo podrias tener postgres y pgstore corriendo en tu maquina

```
docker-compose up -d
```

Y sino, (Aunque es lo recomendado) y en archivo .env que esta en la raiz del proyecto vas a cambiar mis credenciales por las tuyas

```
DB_DIALECT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=TU USERNAME DE POSTGRES
DB_PASSWORD=TU PASSWORD DE POSTGRES
DB_DATABASE=EL NOMBRE QUE LE DISTE A LA BASE DE DATOS
```

y por ultimo podrias ejecutar el comando para iniciar el proyecto

```
npm run start
```

<b>Y ya, con esto ya tendrias este backend corriendo en tu maquina</b>
