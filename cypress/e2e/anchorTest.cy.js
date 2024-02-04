it.only("has anchor tags using cy.get and .each", () => {
    cy.visit('https://www.awsomecreations.com/')//navigate to site
    cy.get("a:contains(#)").each($a => {
      const message = $a.parent().parent().text();
      expect($a, message).to.not.have.attr("href", "#undefined");
    });
  });