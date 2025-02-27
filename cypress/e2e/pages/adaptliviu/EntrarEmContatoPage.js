class EntrarEmContatoPage {

  clicarBotaoFaleComNossaEquipe() {
    cy.get(".elementor-element-fe455e7 .elementor-button-text").click();
  }
  preencherFormulario() {
    const dataHoraAgora = Date.now();

    cy.get('#form-field-name').type('André Manuel Cauê Baptista');
    cy.get('#form-field-email').type(`teste${dataHoraAgora}@gmail.com`);
    cy.get('#form-field-message').type('Capricórnio');
    cy.get('#form-field-field_f4f7f90').select('LIviu Content');
    cy.get('#form-field-field_195975d').type(dataHoraAgora);
    cy.get('#form-field-field_98bbe7d').type('IMPORTANTE: Nosso gerador online de Pessoa tem como intenção ajudar estudantes, programadores, analistas e testadores a gerar documentos');

  }
  marcarCaixaAceitoReceberEmail() {
    cy.get('#form-field-field_757d493').click();

  }
  clicarBotaoEntrarEmContato() {
    cy.get('.elementor-form').submit();

  }
  validacaoMensagemSucesso() {
    cy.get('.elementor-message',{timeout:50000}).contains('Inscrição realizada com sucesso! Em breve nosso time entrará em contato.')
  }



}

export default new EntrarEmContatoPage();



