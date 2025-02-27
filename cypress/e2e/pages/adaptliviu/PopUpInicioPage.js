class PopUpInicioPage {

  clicarBotaoFecharPopUp() {
    cy.get("use", {timeout:50000}).click();
  }

  clicarBotaoFecharWhatsapp() {
    cy.get(".nld-conversation-header .nld-close-white", {timeout:50000}).click();
  }
}

export default new PopUpInicioPage();
