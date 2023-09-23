
let amount="50"

class Transferfund{

    TransferLocators={
        Transferfundfield :()=> cy.get('#leftPanel > ul > li:nth-child(3) > a'),
        Amountfield       :()=> cy.get('#amount'),
        Account           :()=> cy.get('#fromAccountId'),
        Accountfield      :()=> cy.get('#toAccountId'),
        Transferbtn       :()=> cy.get('#rightPanel > div > div > form > div:nth-child(4) > input')
    }
    Transfer(){
    this.TransferLocators.Transferfundfield().click()
    this.TransferLocators.Amountfield().type(amount)
    this.TransferLocators.Account()
    .type('19005')
    this.TransferLocators.Accountfield()
    .type('18672')
    this.TransferLocators.Transferbtn().click()

 }
}
export let transfer = new Transferfund()  