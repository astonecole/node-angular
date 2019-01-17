# Node Angular API

## Back

### Générer un certificat SSL

```bash
npm run gencert
```

### Démarrage du serveur

Configurer une variable d'environnemnt avant de démarrer le serveur

```bash
export NODE_ENV=developpment

ou

export NODE_ENV=production
```

Puis démarrer

```bash
npm start
```

Ouvrir la page du nagigateur pour accepter le certificat non signé.

- [https://localhost:3000](https://localhost:3000)
