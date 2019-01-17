# Node Angular API

## Back

La base de données reste à votre charge et les informations de connection se trouvent dans le fichier **back/config/global.json**.

### Générer un certificat SSL

```bash
npm run gencert
```

### Démarrage du serveur

Configurer une variable d'environnemnt avant de démarrer le serveur

```bash
export NODE_ENV=development

ou

export NODE_ENV=production
```

Puis démarrer

```bash
npm start
```

Ouvrir la page du navigateur pour accepter le certificat non signé.

- [https://localhost:3000](https://localhost:3000)

## Front

### Démarrer l'application

```bash
npm start
```
