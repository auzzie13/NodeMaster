var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/character", function(req, res) {
    db.Characters.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Characters.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Characters.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
