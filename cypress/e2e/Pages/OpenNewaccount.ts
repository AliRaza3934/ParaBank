let payment='18672'
class Opennewaccount{
AccountsLocator={
 openaccountfield  :() => cy.get('#leftPanel > ul > li:nth-child(1) > a'),
 
 slectaccountfield :() => cy.get('#type'),
 ammountfield      :() => cy.get('#fromAccountId'),
 accountbtn        :() => cy.get('#rightPanel > div > div > form > div > input')

    }
Accounts(){
this.AccountsLocator.openaccountfield().click()
this.AccountsLocator.slectaccountfield()
.select('SAVINGS')
this.AccountsLocator.ammountfield()
.type('payment')
this.AccountsLocator.accountbtn().click()


}

}
export let  openaccount = new Opennewaccount()