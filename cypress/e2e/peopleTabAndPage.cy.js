/// <reference types="cypress"/>

describe("People Tab and People page", () => {
  const endPointPeople = "/asynchPeople/";
it("AT_6.01_001 | People tab and People page", () => {
  cy.get("a.task-link").eq(1).should("contain", "People").click();
  cy.url().should("contains", endPointPeople);
});
});
