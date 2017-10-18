// *********************************************************************************
// member-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // // GET route for getting all of the posts
  // app.get("/api/diarydata", function(req, res) {
  //   var query = {};
  //   if (req.query.id) {
  //     query.id = req.query.id;
  //   }
  //   console.log(req);
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Author
  //   db.Diarydata.findAll({
  //     where: query,
  //     include: [db.User]
  //   }).then(function(dbDiarydata) {
  //     res.json(dbUser);
  //   });
  // });

  // // Get rotue for retrieving a single post
  // app.get("/api/diarydata/:id", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Author
  //   db.Diarydata.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.User]
  //   }).then(function(dbDiarydata) {
  //     res.json(dbDiarydata);
  //   });
  // });

  // POST route for saving a new post
  app.post("/api/diarydata", function(req, res) {
    console.log(req.body);
    db.DiaryData.create(req.body).then(function(dbDiarydata) {
      res.json(dbDiarydata);
      console.log(dbDiarydata);
    });
  });

  // // DELETE route for deleting posts
  // app.delete("/api/Diarydata/:id", function(req, res) {
  //   db.Diarydata.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbDiarydata) {
  //     res.json(dbDiarydata);
  //   });
  // });

  // // PUT route for updating posts
  // app.put("/api/diarydata", function(req, res) {
  //   db.Diarydata.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbDiarydata) {
  //       res.json(dbDiarydata);
  //     });
  // });
};



