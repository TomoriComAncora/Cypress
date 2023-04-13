/// <reference types="cypress" />

//cy.viewport
//arquivos de config
//configs por linha de 

context('Dev Finance Agilizei', () => {

    //hooks
    //trechos que executam antes e depois do teste
    //before -> antes de todos os testes
    //beforeEach -> antes de cada teste
    //after -> depois de todos os testes
    //afterEach ->depois de cada teste

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/');
        cy.get('#data-table tbody tr').should('have.length', 0);
        
    });

    it('Cadastrar Enradas', () => {

        cy.get('#transaction .button').click(); //id + classe
        cy.get('#description').type('salario'); //id
        cy.get('[name=amount]').type(1200); //atributos
        cy.get('#date').type('2023-03-27'); //id
        cy.get('button').contains('Salvar').click(); //tipo e valor

        cy.get('#data-table tbody tr').should('have.length', 1);
        
        
    });

    it('Cadastrar saidas', () => {

        cy.get('#transaction .button').click(); //id + classe
        cy.get('#description').type('presente'); //id
        cy.get('[name=amount]').type(-350); //atributos
        cy.get('#date').type('2023-03-29'); //id
        cy.contains('Salvar').click(); //tipo e valor

        cy.get('#data-table tbody tr').should('have.length', 1);
    });

    it('Remover entradas e saidas', () => {
        const entrada = 'salario'
        const saida = "presente"


        cy.get('#transaction .button').click(); //id + classe
        cy.get('#description').type(entrada); //id
        cy.get('[name=amount]').type(1200); //atributos
        cy.get('#date').type('2023-03-27'); //id
        cy.get('button').contains('Salvar').click(); //tipo e valor     
        
        cy.get('#transaction .button').click(); //id + classe
        cy.get('#description').type(saida); //id
        cy.get('[name=amount]').type(-350); //atributos
        cy.get('#date').type('2023-03-29'); //id
        cy.get('button').contains('Salvar').click(); //tipo e valor


        //voltar para o elemento pai, e avançar para um td img attr
        cy.get('td.description')
            .contains('salario')
            .parent()
            .find('img[onclick*=remove]').click();

        //buscar todos os irmaos
        cy.get('td.description')
            .contains('presente')
            .siblings()
            .children('img[onclick*=remove]').click();

            cy.get('#data-table tbody tr').should('have.length', 0);

        
    });
});