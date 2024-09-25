# Réponses au TP5

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


      Error: ENOENT: no such file or directory, open 'e:\Université\S4\DEV WEB\devweb-tp5\index.html'
                  at async open (node:internal/fs/promises:639:25)
                  at async Object.readFile (node:internal/fs/promises:1242:14) {
            errno: -4058,
            code: 'ENOENT',
            syscall: 'open',
            path: 'e:\\Université\\S4\\DEV WEB\\devweb-tp5\\index.html'
      }

Cette erreur se produit lorsque le fichier est introuvable. Ici index.html n'existe pas dans le dossier devweb-tp5.
<br>Erreur sur node.js :<br>

      ENOENT (No such file or directory): Commonly raised by fs operations to indicate that a component of the specified pathname does not exist. No entity (file or directory) could be found by the given path.


## Question 1.5


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