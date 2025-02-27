import PopUpInicioPage from "../../pages/adaptliviu/PopUpInicioPage"
import EntrarEmContatoPage from "../../pages/adaptliviu/EntrarEmContatoPage"


describe('Página inicial Adapt Liviu', () => {
  it('Validação do formulário de contato', () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    cy.visit('/');
    PopUpInicioPage.clicarBotaoFecharPopUp();
    PopUpInicioPage.clicarBotaoFecharWhatsapp();
    EntrarEmContatoPage.clicarBotaoFaleComNossaEquipe();
    EntrarEmContatoPage.preencherFormulario();
    EntrarEmContatoPage.marcarCaixaAceitoReceberEmail();
    EntrarEmContatoPage.clicarBotaoEntrarEmContato();
    EntrarEmContatoPage.validacaoMensagemSucesso();
  })
})