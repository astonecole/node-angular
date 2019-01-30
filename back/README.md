# Aston API REST

## installation

### Installation d'un projet déjà existant

```bash
npm install
```

### Génération de certificats TSL/SSL

```bash
npm run gencert
```

## Configuring SSL with Postman

- [Using self signed certificate](http://blog.getpostman.com/2014/01/28/using-self-signed-certificates-with-postman)
- [Postman application settings](https://learning.getpostman.com/docs/postman/launching_postman/settings/)

## Démarrage de l'application

```bash
npm start
```

## Problème de connection à la base de données (Résolue)

Le problème fait suite à l'erreur suivante :

```sh
Unhandled rejection SequelizeConnectionError: Client does not support authentication protocol requested by server
```

```sql
CREATE DATABASE IF NOT EXISTS `astonapi`;

USE mysql;
ALTER user 'root'@'localhost' identified with mysql_native_password by 'root';
```

## Récupérer les paramètres d'une requête HTTP avec le module **body-parser**

### Configuration d'une route avec un paramètre

```text
/jobs/:id
```

```js
function home(req, res) {
    console.log(req.params.id);
}
```

### Ajout d'une variable dans l'URL

```text
http://localhost/?token=abcd
```

```js
function home(req, res) {
    console.log(req.query.token);
}
```

### Envoie d'une requête HTTP au format JSON

Pour récupérer le corp d'une requête il faut préalablement configurer le module
**body-parser**.

```js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
```

```json
{
    "firstname": "John",
    "lastname": "Doe"
}
```

```js
function home(req, res) {
    console.log(req.body.firstname);
}
```

## Solutions

Problème avec [NODEMON](https://stackoverflow.com/a/32600959) quand il a atteind la limite de fichier à surveiller.

Linux :

Run the below command to avoid ENOSPC:

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

