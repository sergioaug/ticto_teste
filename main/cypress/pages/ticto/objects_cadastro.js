class objects_cadastro {
    elements= {
        NomeInput: () => cy.get('#name'),
        EmailInput: () => cy.get('#email'),
        SenhaInput: () => cy.get('#password'),
        CadastrarInput: () => cy.get('form > .btn'),
        TabelaText: () => cy.get('td'),
        AlertaText: () => cy.get('.alert'),
        AlertaNomeInvalido: () => cy.get(':nth-child(2) > .form-text'),
        AlertaEmailInvalido: () => cy.get(':nth-child(3) > .form-text'),
        AlertaSenhaInvalida: () => cy.get(':nth-child(4) > .form-text')
    }
}
module.exports = new objects_cadastro();