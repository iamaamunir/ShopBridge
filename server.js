import http from "http";

import app from "./src/app.js";

import CONFIG from "./config/default.js";

const server = http.createServer(app);

server.listen(CONFIG.PORT, () => {
  console.log(`Server is running at PORT:${CONFIG.PORT}`);
});
