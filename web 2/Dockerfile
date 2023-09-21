#Imagen de Node.js
FROM node:16

# Copia del archivo package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalacion de las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expón el puerto en el que tu aplicación Express escucha
EXPOSE 80

# Comando para iniciar la aplicación
CMD ["node", "index.js"]


###Comando para crear la imágen determinada en el dockerfile
#docker build -t imagentp6node2 . 

#Comando para crear y levantar el contenedor:
#docker run -d --name tp6web2 -p 4002:80 imagentp6node2



######   BALANCEADOR   ########
# docker run -d -p 8088:80 --name balanceNginx -v C:\tp6-balanceadorNginx:/etc/nginx nginx

##upstream loadBalancer {
# server tp6web1:80;
# server tp6web2:80;


# }
# server{
# listen 80;
# location / {
# proxy_pass http://loadbalancer/;
# }
# }