class Pedido {
    pedido(size, color) {
        cy.get('#primary-menu > .menu-item-629 > a').click();
        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click();
        cy.get('.button-variable-item-' + size).click();
        cy.get('.button-variable-item-' + color).click();
        cy.get('.single_add_to_cart_button').click();
    }
}

export default new Pedido();