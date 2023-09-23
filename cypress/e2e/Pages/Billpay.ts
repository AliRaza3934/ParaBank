let Pn ='ARQ'
let Address='civil lines'
let city ='Hyderabad'
let state ='Hyderabad'
let zc ='13403'
let Phone ='01794197221'
let Account ='1452'
let VA ='1452'
let ammount ='2345'

class Billpay{
    BillLocators={

    Billfield    :() => cy.get('#leftPanel > ul > li:nth-child(4) > a'),
    Payeefield   :() => cy.get('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input'),
    Addressfield :() => cy.get('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input'),
    Cityfield    :() => cy.get('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input'),
    Satefield    :() => cy.get('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > input'),
    Zipcodefield :() => cy.get('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(5) > td:nth-child(2) > input'),
    Phonefield   :() => cy.get('<input id="ccd1ae99-17b8-4e83-86a6-0e84e30ee14f" class="input phone-number-ccd1ae99-17b8-4e83-86a6-0e84e30ee14f ng-pristine ng-valid ng-empty ng-touched" ng-model="payee.phoneNumber" name="payee.phoneNumber">'),
    Accountfield :() => cy.get('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input'),
    VerifyAccountfield :() => cy.get('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(9) > td:nth-child(2) > input'),
    Amountfield :() => cy.get('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(11) > td:nth-child(2) > input'),
    Sendpaymentfield:() => cy.get('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(14) > td:nth-child(2) > input')


    }
    Bill(){
     this.BillLocators.Billfield().click()
     this.BillLocators.Payeefield().type(Pn)
     this.BillLocators.Addressfield().type(Address)
     this.BillLocators.Cityfield().type(city)
     this.BillLocators.Satefield().type(state)
     this.BillLocators.Zipcodefield().type(zc)
     this.BillLocators.Phonefield().type(Phone)
     this.BillLocators.Accountfield().type(Account)
     this.BillLocators.VerifyAccountfield().type(VA)
     this.BillLocators.Amountfield().type(ammount)
     this.BillLocators.Sendpaymentfield()
     .click()
    }
}
export let bill =new Billpay()