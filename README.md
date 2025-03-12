

## 📌 **Installation & Exécution du Projet**

### 📋 **Prérequis**
Avant de commencer, assure-toi d'avoir installé :
- **Docker** 🐳 → [Installer Docker](https://docs.docker.com/get-docker/)
- **Docker Compose** → [Installer Docker Compose](https://docs.docker.com/compose/install/)

---

## 🚀 **Installation & Exécution du Projet**

---

### 🔹 **1. Lancer les conteneurs avec Docker**
#### 📌 **Démarrer l'application**
```bash
docker-compose up --build
```
Cela va :
- **Construire les images Docker** du frontend, backend et de la base de données.
- **Démarrer les conteneurs** (`db`, `backend`, `frontend`).
- **Exécuter automatiquement `data.sql`** pour initialiser la base de données.

---

### 🔹 **2. Vérifier que tout fonctionne**
#### 📌 **Lister les conteneurs actifs**
```bash
docker ps
```
Tu devrais voir :
```
CONTAINER ID   IMAGE        COMMAND                PORTS                    NAMES
xxxxxxxxxxxx   vc_frontend  "serve -s out -l 3000" 0.0.0.0:3000->3000/tcp   vc_frontend
xxxxxxxxxxxx   vc_backend   "node server.js"       0.0.0.0:5000->5000/tcp   vc_backend
xxxxxxxxxxxx   postgres:16  "docker-entrypoint..." 0.0.0.0:5432->5432/tcp   vc_db
```

#### 📌 **Tester le frontend**
Dans ton navigateur, ouvre **http://localhost:3000**  
Si tout fonctionne, tu verras ton application Next.js en action ! 🎉

#### 📌 **Tester l’API du backend**
Dans ton terminal, teste si l’API répond :
```bash
curl http://localhost:5000
```
Ou, avec un navigateur :
- **http://localhost:5000**

#### 📌 **Se connecter à PostgreSQL**
1. Récupérer l'ID du conteneur de la base de données :
```bash
docker ps | grep postgres
```
2. Ouvrir une session PostgreSQL :
```bash
docker exec -it <ID_CONTENEUR_DB> psql -U postgres -d mydatabase
```
3. Vérifier si les données ont bien été importées :
```sql
SELECT * FROM prenoms;
```
---

## 🛠️ **Commandes Utiles**
#### 📌 **Arrêter les conteneurs sans les supprimer**
```bash
docker-compose down
```

#### 📌 **Supprimer tous les conteneurs et volumes (Réinitialiser la base de données)**
Si tu veux **forcer la réexécution du script `data.sql`**, supprime le volume PostgreSQL :
```bash
docker-compose down --volumes
docker-compose up --build
```

#### 📌 **Afficher les logs des services**
```bash
docker-compose logs -f
```

#### 📌 **Se connecter au conteneur du backend**
```bash
docker exec -it vc_backend sh
```

#### 📌 **Se connecter au conteneur du frontend**
```bash
docker exec -it vc_frontend sh
```

#### 📌 **Voir l’état des conteneurs Docker**
```bash
docker ps -a
```

---

## 🎯 **Résumé**
- **`docker-compose up --build`** → Lance le projet 🚀  
- **`docker-compose down --volumes`** → Réinitialise la base de données 🔄  
- **`docker exec -it <ID_CONTENEUR_DB> psql -U postgres -d mydatabase`** → Accéder à PostgreSQL 🗄️  
- **`docker-compose logs -f`** → Voir les logs des services 📜  



docker-compose up --build
sudo docker-compose pull
sudo docker-compose up -d

sudo docker-compose down
sudo docker-compose up -d

