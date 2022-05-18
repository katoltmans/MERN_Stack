const PlayerController = require("../controllers/player.controller");

module.exports = (app) => {
    app.get("/api/players", PlayerController.findAllPlayers);
    app.post("/api/players", PlayerController.createPlayer);
    app.put("/api/players/:_id", PlayerController.updatePlayer);
    app.delete("/api/players/:_id", PlayerController.deletePlayer);
};
