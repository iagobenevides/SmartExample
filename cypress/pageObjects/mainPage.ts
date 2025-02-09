class MainPage {
    private origemInput = '[oreonspropertyname="IdDepartureLocation"]'
    private destinoInput = '[oreonspropertyname="IdArrivalLocation"]'
    private dataInput = '[oreonspropertyname="DepartureDate"]'
    private carrocel = '.form-input-select'
    private busca = '.select2-search__field'
    private listagemBusca = '.select2-results__options'
    private pesquisarButton = '#btnSearchService'

    preencherOrigem(origem: string): void {
        cy.get(this.origemInput).find(this.carrocel).click();
        cy.get(this.busca).type(origem);
        cy.get(this.listagemBusca).contains(' - ').click();
    }

    preencherDestino(destino: string): void {
        cy.wait(1000).get(this.destinoInput).find(this.carrocel).click();
        cy.get(this.busca).type(destino);
        cy.get(this.listagemBusca).contains(' - ').click();
    }

    escolherData(dataIda): void {
        cy.get(this.dataInput).clear().type(dataIda)
    }

    pesquisarTrecho(): void {
        cy.get(this.pesquisarButton).click()
    }
}

export default new MainPage();