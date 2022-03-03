/// <reference types="cypress" />

import pedidoPageObject from '../support/page_objects/pedido.page';

const pedido = require('../fixtures/pedido.json');

context('Adicionar itens ao carrinho', () => {
    beforeEach(() => {
        cy.visit('minha-conta');
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha);
        });
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Deve adicionar 3 itens de produtos diferentes ao carrinho com sucesso', () => {
        pedido.forEach(item => {
            if (item.processar) {
                pedidoPageObject.pedido(item.tamanho, item.cor);
                cy.get('.woocommerce-message').should('contain', '“Abominable Hoodie” foi adicionado no seu carrinho.');
            }
        });
    });
})