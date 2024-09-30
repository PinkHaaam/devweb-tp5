# Réponses au TP5
Alexandre JAMROZ 

## Question 1.1


- HTTP/1.1 200 OK
- Date: Tue, 24 Sep 2024 08:59:24 GMT
- Connection: keep-alive
- Keep-Alive: timeout=5
- Transfer-Encoding: chunked


## Question 1.2

- HTTP/1.1 200 OK
- Content-Type: application/json
- Date: Tue, 24 Sep 2024 09:22:33 GMT
- Connection: keep-alive
- Keep-Alive: timeout=5
- Content-Length: 20


## Question 1.3

Aucune réponse côté client. La page charge dans le vide.


## Question 1.4

```bash
Error: ENOENT: no such file or directory, open 'e:\Université\S4\DEV WEB\devweb-tp5\index.html'
            at async open (node:internal/fs/promises:639:25)
            at async Object.readFile (node:internal/fs/promises:1242:14) {
      errno: -4058,
      code: 'ENOENT',
      syscall: 'open',
      path: 'e:\\Université\\S4\\DEV WEB\\devweb-tp5\\index.html'
}
```

Cette erreur se produit lorsque le fichier est introuvable. Ici index.html n'existe pas dans le dossier devweb-tp5.
<br>Erreur sur node.js :<br>

```bash
ENOENT (No such file or directory): Commonly raised by fs operations to indicate that a component of the specified pathname does not exist. 
No entity (file or directory) could be found by the given path.
```

## Question 1.5

```js
async function requestListener(_request, response) {
      try {
            const contents = await fs.readFile("index.html", "utf8");

            response.setHeader("Content-Type", "text/html");
            response.writeHead(200);
            return response.end(contents);

      } catch (error) {
            console.error(error);
            response.setHeader("Content-Type", "text/plain");
            response.writeHead(500);
            return response.end("Erreur server interne: Fichier introuvable");
      }
}
```

## Question 1.6

- npm install cross-env --save
  - Ceci installe le paquet "cross-env" dans la section "dependencies" dans "package.json"
- npm install nodmon --save-dev
  - Ceci installe le paquet "nodemon" dans la section "devDependencies" dans "package.json"


## Question 1.7

- http-dev : Pour le développement, utilise l'outil nodemon
  - A chaque changement du fichier source, cela redémarre le serveur pour apporter les modifications
- http-prod : Pour la production, utilise l'outil node
  - Nécessite un redémarrage manuel si on souhaite apporter les modifications du fichier source


## Question 1.8

- http://localhost:8000/index.html : 200

- http://localhost:8000/random.html : 200

- http://localhost:8000/ : 404

- http://localhost:8000/dont-exist : 404


## Question 2.1

- express : http://expressjs.com/
- https-errors : https://github.com/jshttp/http-errors
- loglevel : https://github.com/pimterry/loglevel
- morgan : https://github.com/expressjs/morgan


## Question 2.2

- Les trois routes fonctionnent
  - http://localhost:8000/ affiche index.html
  - http://localhost:8000/index.html affiche index.html
  - http://localhost:8000/random/4 affiche la liste des nombres aléatoires


## Question 2.3

- Pour http://localhost:8000/ et http://localhost:8000/index.html
  - HTTP/1.1 304 Not Modified
  - X-Powered-By: Express
  - Accept-Ranges: bytes
  - Cache-Control: public, max-age=0
  - Last-Modified: Wed, 25 Sep 2024 02:26:12 GMT
  - ETag: W/"380-19227001fb4"
  - Date: Sat, 28 Sep 2024 12:21:27 GMT
  - Connection: keep-alive
  - Keep-Alive: timeout=5

- Pour http://localhost:8000/random/4
  - HTTP/1.1 200 OK
  - X-Powered-By: Express
  - Content-Type: text/html; charset=utf-8
  - Content-Length: 66
  - ETag: W/"42-3kktwRoZKBKqdkoAQLBqBHlZeFU"
  - Date: Sat, 28 Sep 2024 12:21:25 GMT
  - Connection: keep-alive
  - Keep-Alive: timeout=5

- Donc les nouvelles en-têtes sont :
  - X-Powered-By
  - Accept-Ranges
  - Cache-Control
  - Last-Modified
  - Etag


## Question 2.4

L'évènement listening se déclenche une fois que le serveur est ouvert, peut accepté les connexions.


## Question 2.5

Express cherche par défaut un fichier nommé "index.html" et l'affiche si "/" est spécifié dans l'adresse.


## Question 2.6

- CTRL+R : 304 "Not modified"
   - Comme son nom l'indique, le navigateur utilise la dernière version du serveur non modifiée mise en cache. Cela permet d'accélérer le chargement du contenu.
- CTRL+Shift+R : 200 "OK"
   - Ici, le navigateur cherche la version la plus récente du serveur et télécharge les nouvelles ressources. Ce processus est un peu plus long que CTRL+R.