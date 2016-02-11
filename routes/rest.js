var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');
var Teams = require('../models/teams');
var Competitions = require('../models/competitions');

// /api endpoint
router.get('/', function(req, res) {
  res.json({
    message: 'Welcome to the bench project api'
  });
});

// user functionality
// list users
router.get('/users', function(req, res) {
  User.find({})
  .exec(function(err, users) {
    if (err) { res.send(err); }
    else { res.json(users); }
  });
});

// get single user
router.get('/users/:id', function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) { res.send(err); }
    else { res.json(user); }
  });
});

// create user
router.post('/users', function(req, res) {
  var user = new User({
    email: req.body.email,
    name: req.body.name,
    location: req.body.location,
    specialty: req.body.specialty
  });
  user.save(function(err, savedUser) {
    if (err) { res.send(err); }
    else { res.json(savedUser); }
  });
});

// delete a user
router.delete('/users/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, remUser) {
    if (err) { res.send(err); }
    else { res.json(remUser); }
  });
});

// edit user
router.put('/users/:id', function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) { res.send(err); }
    else{
      user.name = req.body.name;
      user.email = req.body.email;
      user.location = req.body.location;
      user.specialty = req.body.specialty;
      user.save(function(err, savedUser) {
        if (err) { res.send(err); }
        else{ res.json(savedUser); }
      });
    }
  });
});

// teams functionality
// list teams
router.get('/teams', function(req, res) {
  Teams.find({})
  .populate('members competitions')
  .exec(function(err, teams) {
    if (err) { res.send(err); }
    else { res.json(teams); }
  });
});

// list single team
router.get('/teams/:id', function(req, res) {
  Teams.findById(req.params.id)
  .populate('members competitions')
  .exec(function(err, team) {
    if (err) { res.send(err); }
    else { res.json(team); }
  });
});

// list competitions for a team
router.get('/teams/:id/competitions', function(req, res) {
  Teams.findById(req.params.id)
  .populate('competitions members')
  .exec(function(err, team) {
    if (err) { res.send(err); }
    else { res.json(team.competitions); }
  });
});

// create teams
router.post('/teams', function(req, res) {
  var team = new Teams({
    name: req.body.name,
    members: req.body.members
  });
  team.save(function(err, savedTeam) {
    if (err) { res.send(err); }
    else { res.json(savedTeam); }
  });
});

// add competitions to a team
router.post('/teams/addcomp', function(req, res) {
  Teams.findById(req.body.teamId,
  { $addToSet: { competitions: req.body.compId }},
  { safe: true, upsert: true, new: true })
  .exec(function(err, team) {
    if (err) { res.send(err); }
    else { res.json(team); }
  });
});

// delete a team
router.delete('/teams/:id', function(req, res) {
  Teams.findByIdAndRemove(req.params.id)
  .exec(function(err, remTeam) {
    if (err) { res.send(err); }
    else { res.json(remTeam); }
  });
});

// edit team
router.put('/teams/:id', function(req, res) {
  Teams.findById(req.params.id)
  .exec(function(err, team) {
    if (err) { res.send(err); }
    else{
      team.name = req.body.name;
      team.members = req.body.members;
      team.competitions = req.body.competitions;
      team.save(function(err, savedTeam) {
        if (err) { res.send(err); }
        else{ res.json(savedTeam); }
      });
    }
  });
});

// competitions functionality
// list competitions
router.get('/competitions', function(req, res) {
  Competitions.find({})
  .populate('teams')
  .exec(function(err, competitions) {
    if (err) { res.send(err); }
    else { res.json(competitions); }
  });
});

// list single competition
router.get('/competitions/:id', function(req, res) {
  Competitions.findById(req.params.id)
  .populate('teams')
  .exec(function(err, comp) {
    if (err) { res.send(err); }
    else { res.json(comp); }
  });
});

// list teams in a certain competition
router.get('/teams/:compId', function(req, res) {
  Competitions.findById(req.params.id)
  .populate('teams')
  .exec(function(err, comp) {
    if (err) { res.send(err); }
    else { res.json(comp.teams); }
  });
});

// create a competition
router.post('/competitions', function(req, res) {
  var competition = new Competitions({
    name: req.body.name,
    description: req.body.description,
    objective: req.body.objective,
    teams: req.body.teams
  });
  competition.save(function(err, savedCompetition) {
    if (err) { res.send(err); }
    else { res.json(savedCompetition); }
  });
});

// add team to a competition
router.post('/competitions/addteam', function(req, res) {
  Competitions.findById(req.body.compId,
  { $addToSet: { teams: req.body.teamId }},
  { safe: true, upsert: true, new: true },
  function(err, teamAdded) {
    if (err) { res.send(err); }
    else{ res.json(teamAdded); }
  });
});

// delete a competition
router.delete('/competitions/:id', function(req, res) {
  Competitions.findByIdAndRemove(req.params.id)
  .exec(function(err, remComp) {
    if (err) { res.send(err); }
    else { res.json(remComp); }
  });
});

// edit competition
router.put('/competitions/:id', function(req, res) {
  Competitions.findById(req.params.id)
  .exec(function(err, comp) {
    if (err) { res.send(err); }
    else {
      comp.name = req.body.name;
      comp.description = req.body.description;
      comp.objective = req.body.objective;
      comp.teams = req.body.teams;
      comp.save(function(err, savedComp) {
        if (err) { res.send(err); }
        else{ res.json(savedComp); }
      });
    }
  });
});

module.exports = router;
