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

# Build du site statique (Next.js gère déjà l'export)
RUN npm run build  

# Installe un serveur statique léger pour servir le site généré
RUN npm install -g serve

# Définit le port d'écoute
EXPOSE 3000

# Commande pour servir les fichiers statiques depuis `out/`
CMD ["serve", "-s", "out", "-l", "3000"]
