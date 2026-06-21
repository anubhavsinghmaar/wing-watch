// Optional mock API so the execute_api flagship leg is demonstrable on a static site.
// Served in the runner; Kane's execute_api step can POST a sighting and read it back.
import http from "http";
const sightings = [];
http
  .createServer((req, res) => {
    res.setHeader("content-type", "application/json");
    res.setHeader("cache-control", "no-store");
    if (req.method === "POST" && req.url === "/api/sightings") {
      let b = ""; req.on("data", (c) => (b += c));
      req.on("end", () => {
        let d = {}; try { d = JSON.parse(b || "{}"); } catch (e) {}
        const id = "S-" + (sightings.length + 1);
        const row = { id, ...d };
        sightings.push(row);
        res.writeHead(201); res.end(JSON.stringify(row));
      });
      return;
    }
    if (req.method === "GET" && req.url.startsWith("/api/sightings")) {
      res.writeHead(200); res.end(JSON.stringify({ count: sightings.length, sightings }));
      return;
    }
    res.writeHead(404); res.end("{}");
  })
  .listen(process.env.MOCK_PORT || 7100, () =>
    console.error("[mock-api] /api/sightings on " + (process.env.MOCK_PORT || 7100))
  );
