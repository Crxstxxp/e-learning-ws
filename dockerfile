# Usar una imagen base oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Copiar el contenido del directorio src al contenedor
COPY src/ ./src

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
