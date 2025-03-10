# Utilise l'image officielle de Node.js
FROM node:18-alpine

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du projet
COPY . .

# Définit le port d'écoute
EXPOSE 5000

# Commande pour démarrer l'application
CMD ["npm", "run", "start"]
