import objects_cadastro from '../../cypress/pages/ticto/objects_cadastro'
import objects_edit from '../../cypress/pages/ticto/objects_edit'
import objects_filled_table from '../../cypress/pages/ticto/objects_filled_table'


Cypress.on('uncaught:exception', (err, runnable) => {
  //
  return false
})

describe("testes de cadastro", () => {
  beforeEach (()=>{
    //visitar e validar se a pagina foi carregada corretamente
    cy.Visitar_Pagina_Cadastro();
  })
 
  it("Inserir informações inválidas", () => {

   //inserindo informações inválidas
   objects_cadastro.elements.NomeInput().type('abc')
   objects_cadastro.elements.SenhaInput().type('123')
   objects_cadastro.elements.CadastrarInput().click()

   //verificando o retorno nos devidos campos
   objects_cadastro.elements.TabelaText().contains('Sem registro')
   objects_cadastro.elements.AlertaNomeInvalido().contains('Insira um Nome e Sobrenome válido.')
   objects_cadastro.elements.AlertaEmailInvalido().contains('O campo Email é obrigatório.')
   objects_cadastro.elements.AlertaSenhaInvalida().contains('O campo Password deve ter no minimo 8 caracteres.')
   
  })

  it("Realizar cadastro no sistema", ()=> {

    //Inserindo informações válidas para cadastro
    objects_cadastro.elements.NomeInput().type('Sergio Barbosa')
    objects_cadastro.elements.EmailInput().type('sergioaugusto2000@hotmail.com')
    objects_cadastro.elements.SenhaInput().type('Senha@12345')
    objects_cadastro.elements.CadastrarInput().click()

    //Validando se o cadastro foi realizado corretamente
    objects_cadastro.elements.AlertaText().contains('Usuário cadastrado com sucesso.')
    objects_filled_table.elements.TabelaNome().contains('Sergio Barbosa')
    objects_filled_table.elements.TabelaEmail().contains('sergioaugusto2000@hotmail.com')
  }) 

  it("Editar informações cadastradas", ()=> {

    //Abrindo o modal de Edição e inserindo e-mail inválido
    objects_filled_table.elements.TabelaAcoes().click()
    objects_filled_table.elements.TabelaAcoesEditar().click()
    objects_edit.elements.emailEdit().clear()
    objects_edit.elements.saveBtnEdit().click()
    cy.wait(2000)
    //Validando se a mensagem de erro foi exibida
    objects_edit.elements.AlertaTextEdit().contains('O campo Email é obrigatório.')

    //Digitando o e-mail correto
    objects_edit.elements.emailEdit().clear()
    objects_edit.elements.emailEdit().type('sergioaugusto1000@hotmail.com')
    objects_edit.elements.saveBtnEdit().click()
    cy.wait(1000)
    //Verificando se as alterações foram salvas com sucesso
    objects_cadastro.elements.AlertaText().contains('Usuário salvo com sucesso.')

    //Digitando nome inválido na edição
    objects_filled_table.elements.TabelaAcoes().click()
    objects_filled_table.elements.TabelaAcoesEditar().click()
    objects_edit.elements.nomeEdit().clear()
    objects_edit.elements.nomeEdit().type('abc')
    objects_edit.elements.saveBtnEdit().click()
    //Validando se a mensagem de erro foi exibida
    objects_edit.elements.AlertaTextEdit().contains('Insira um Nome e Sobrenome válido.')

    //Digitando nome correto na edição
    objects_edit.elements.nomeEdit().clear()
    objects_edit.elements.nomeEdit().type('Sergio A Barbosa')
    objects_edit.elements.saveBtnEdit().click()
    cy.wait(1000)

    //Verificando se os dados editados estão corretos e se a mensagem de sucesso foi exibida
    objects_filled_table.elements.TabelaNome().contains('Sergio A Barbosa')
    objects_filled_table.elements.TabelaEmail().contains('sergioaugusto1000@hotmail.com')
    objects_cadastro.elements.AlertaText().contains('Usuário salvo com sucesso.')

  })

  it("Excluir Cadastro", ()=> {

    //Realizando exclusão e verificando mensagem de erro
    objects_filled_table.elements.TabelaAcoes().click()
    objects_filled_table.elements.TabelaAcoesExcluir().click()
    cy.wait(1000)
    objects_filled_table.elements.TabelaConfirmarExclusao().click()
    objects_cadastro.elements.AlertaText().contains('Usuário removido com sucesso.')

  }
  )
   
})