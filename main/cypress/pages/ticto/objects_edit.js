class objects_edit {
    elements= {
        nomeEdit: ()=> cy.get('[name="e_name"]'),
        emailEdit: ()=> cy.get('[name="e_email"]'),
        saveBtnEdit: ()=> cy.get('.modal-footer > .btn-primary'),
        AlertaTextEdit: ()=> cy.get('.form-text')
    }
}
module.exports = new objects_edit();