describe.only("Mock test for VSCode Extension", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });

  it("loads amazon page", () => {
    cy.visit("https://www.amazon.es");
  });

  it("searches for `kindle`", () => {
    cy.get('input[id="twotabsearchtextbox"]').type("kindle{enter}");
  });
});

export {};
