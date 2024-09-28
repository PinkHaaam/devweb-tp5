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

async function requestListener(request, response) {
  response.setHeader("Content-Type", "text/html");
  const urlParts = request.url.split("/");

  try {

    const contents = await fs.readFile("index.html", "utf8");

    switch (urlParts[1]) {
      case "index.html":
      case "":
        response.writeHead(200);
        return response.end(contents);

      case "random.html":
        response.writeHead(200);
        return response.end(`<html><p>${Math.floor(100 * Math.random())}</p></html>`);

      case "random":
        const nb = parseInt(urlParts[2], 10);
        if (isNaN(nb) || nb <= 0){
          response.writeHead(400);
          return response.end(`<html><p>400: BAD REQUEST</p></html>`);
        }

        const randomNumbers = Array.from({ length: nb }, () => Math.floor(100 * Math.random()));
        response.writeHead(200);
        return response.end(`<html><p>${randomNumbers.join(", ")}</p></html>`);

      default:
        response.writeHead(404);
        return response.end(`<html><p>404: NOT FOUND</p></html>`);
    }
  } catch (error) {
    console.error(error);

    response.writeHead(500);
    return response.end(`<html><p>500: INTERNAL SERVER ERROR</p></html>`);
  }
}



const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
