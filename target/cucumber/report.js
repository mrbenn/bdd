$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027resources/park.feature\u0027");
formatter.feature({
  "id": "parking",
  "description": "\nAs a new feature file\nI want to be generic\nSo that I can be filled in later",
  "name": "Parking",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "parking;calculate-parking-cost-for-half-an-hour",
  "description": "",
  "name": "Calculate parking cost for half an hour",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "I am a generic feature file",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I have generic info",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "I will populate them later",
  "keyword": "Then ",
  "line": 11
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});