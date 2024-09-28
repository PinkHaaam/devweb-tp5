import http from "node:http";
import fs from "node:fs/promises";

const host = "localhost";
const port = 8000;

/*
function requestListener(_request, response) {
  fs.readFile("index.html", "utf8")
    .then((contents) => {
      response.setHeader("Content-Type", "text/html");
      response.writeHead(200);
      return response.end(contents);
    })
    .catch((error) => {
      console.error(error);
      response.setHeader("Content-Type", "text/plain");
      response.writeHead(500);
      return response.end("Erreur serveur interne: Fichier introuvable");
    });
}
*/

async function requestListener(_request, response) {
  try {
    console.log("NODE_ENV =", process.env.NODE_ENV);
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

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
