$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.background({
  "name": "User is Logged In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailStepDef.launch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit username and password",
  "keyword": "When "
});
formatter.match({
  "location": "RetailStepDef.login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailStepDef.dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Coupon creation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "I navigate to coupon page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailStepDef.i_navigate_to_coupon_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I create a coupon from home page",
  "keyword": "When "
});
formatter.match({
  "location": "RetailStepDef.i_create_a_coupon_from_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the coupon created",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailStepDef.i_verify_that_the_coupon_created()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is Logged In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailStepDef.launch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit username and password",
  "keyword": "When "
});
formatter.match({
  "location": "RetailStepDef.login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailStepDef.dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Coupon update",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "I navigate to coupon page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailStepDef.i_navigate_to_coupon_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I updating the coupon details",
  "keyword": "When "
});
formatter.match({
  "location": "RetailStepDef.i_updating_the_coupon_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the coupon updated",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailStepDef.i_verify_that_the_coupon_updated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is Logged In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailStepDef.launch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit username and password",
  "keyword": "When "
});
formatter.match({
  "location": "RetailStepDef.login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailStepDef.dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete Coupon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "I navigate to coupon page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailStepDef.i_navigate_to_coupon_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I deleting the coupon details",
  "keyword": "When "
});
formatter.match({
  "location": "RetailStepDef.i_deleting_the_coupon_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the coupon deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailStepDef.i_verify_that_the_coupon_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});