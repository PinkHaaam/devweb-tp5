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

- http://localhost:8000/index.html<br>
      
      <html>
      <head>
            <title>My Website</title>
            <style>
            html {
                  margin: 0;
                  padding: 0;
                  border: 0;
                  width: 100%;
                  height: 100%;

            }

            body {
                  width: 100%;
                  height: 100%;
                  position: relative;
                  background-color: rgb(236, 152, 42);
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
            }

            .center {
                  color: white;
                  font-family: Helvetica, sans-serif;
                  text-align: center;
            }

            h1 {
                  font-size: 144px;
            }

            p {
                  font-size: 64px;
            }
                  </style>
      </head>
      <body>
            <div class="center">
                  <h1>Hello Again!</h1>
                  <p>This is served from a file</p>
            </div>

            <iframe frameborder="0" scrolling="no" style="background-color: transparent; border: 0px; display: none;"></iframe>

            <div id="GOOGLE_INPUT_CHEXT_FLAG" style="display: none;" input="" input_stat="{&quot;tlang&quot;:true,&quot;tsbc&quot;:true,&quot;pun&quot;:true,&quot;mk&quot;:true,&quot;ss&quot;:true}">
            </div>
      </body>
      </html>

- http://localhost:8000/random.html

      <html>
      <head>
      </head>
      <body>
            <p>69</p>
            <iframe frameborder="0" scrolling="no" style="background-color: transparent; border: 0px; display: none;">
            </iframe>

            <div id="GOOGLE_INPUT_CHEXT_FLAG" style="display: none;" input="" input_stat="{&quot;tlang&quot;:true,&quot;tsbc&quot;:true,&quot;pun&quot;:true,&quot;mk&quot;:true,&quot;ss&quot;:true}">
            </div>
      </body>
      </html>

- http://localhost:8000/

      <html>
      <head>
      </head>
      <body>
            <p>404: NOT FOUND</p>
            <iframe frameborder="0" scrolling="no" style="background-color: transparent; border: 0px; display: none;">
            </iframe>
            
            <div id="GOOGLE_INPUT_CHEXT_FLAG" style="display: none;" input="" input_stat="{&quot;tlang&quot;:true,&quot;tsbc&quot;:true,&quot;pun&quot;:true,&quot;mk&quot;:true,&quot;ss&quot;:true}">
            </div>
      </body>
      </html>

- http://localhost:8000/dont-exist

      <html>
      <head>
      </head>
      <body>
            <p>404: NOT FOUND</p>
            <iframe frameborder="0" scrolling="no" style="background-color: transparent; border: 0px; display: none;">
            </iframe>
            
            <div id="GOOGLE_INPUT_CHEXT_FLAG" style="display: none;" input="" input_stat="{&quot;tlang&quot;:true,&quot;tsbc&quot;:true,&quot;pun&quot;:true,&quot;mk&quot;:true,&quot;ss&quot;:true}">
            </div>
      </body>
      </html>