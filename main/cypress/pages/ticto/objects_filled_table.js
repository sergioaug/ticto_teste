class objects_filled_table {
    elements={
        TabelaNome: () => cy.get('tbody > tr > :nth-child(2)'), 
        TabelaEmail: () => cy.get('tbody > tr > :nth-child(3)'),
        TabelaAcoes: () => cy.get('.btn-group > .btn'),
        TabelaAcoesEditar: () => cy.contains('[class="dropdown-item"]','Editar'),
        TabelaAcoesExcluir: () => cy.contains('[class="dropdown-item"]','Excluir'),
        TabelaConfirmarExclusao: () => cy.get('.modal-footer > .btn-danger')
    }
}
module.exports = new objects_filled_table();