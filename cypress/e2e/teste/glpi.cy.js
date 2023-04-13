describe('empty spec', () => {
    it('passes', () => {
      cy.visit('https://chamados.corumba.ms.gov.br/')
      cy.get('#login_name').click().type("vcfernandes")
      cy.get('#login_password').click().type("@ursulA838")
      cy.contains("Enviar").click()
           
    })
  })