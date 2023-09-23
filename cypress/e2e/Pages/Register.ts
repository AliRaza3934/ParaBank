let firstname = 'Ali'
let Secondname= 'Raza'
let AddressField='Zi44'
let cityfield='Clausthal'
let statefield ='Clausthal'
let zipcode='13403'
let Phonefield='1794197221'
let ssnfield='1459'
let usernamefield='Ali123'
let Passwordfield='Qureshi'
let confirm='Qureshi'



class Register{
RegisterLocator={
   registerfield   :() => cy.get('#loginPanel > p:nth-child(3) > a'),
   FirstNamefield  :() => cy.get('input[id="customer.firstName"]'),
   SecondNamefield :() => cy.get('input[id="customer.lastName"]'),
   AddressField    :() => cy.get('input[id="customer.address.street"]'),
   CityField       :() => cy.get('input[id="customer.address.city"]'),
   StateField      :() => cy.get('input[id="customer.address.state"] '),
   ZipcodeField    :() => cy.get('input[id="customer.address.zipCode"] '),
   PhoneField      :() => cy.get('input[id="customer.phoneNumber" ]'),
   SSNField        :() => cy.get('input[id="customer.ssn"]' ),
   UsernameField   :() => cy.get('input[id="customer.username"]' ),
   PasswordField   :() => cy.get('input[id="customer.password"] '),
   ConfirmField    :() => cy.get('input[id="repeatedPassword"]'),
   Registerbtn     :() => cy.get('#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input'),

   
}
RegisterUser(){
    this.RegisterLocator.registerfield().click()

    this.RegisterLocator.FirstNamefield().type(firstname)
    this.RegisterLocator.SecondNamefield()
    .type(Secondname)
    this.RegisterLocator.AddressField()
    .type(AddressField)
    this.RegisterLocator.CityField()
    .type(cityfield)
    this.RegisterLocator.StateField()
    .type(statefield)
    this.RegisterLocator.ZipcodeField()
    .type(zipcode)
    this.RegisterLocator.PhoneField()
    .type(Phonefield)
    this.RegisterLocator.SSNField()
    .type(ssnfield)
    this.RegisterLocator.UsernameField().
    type(usernamefield)
    this.RegisterLocator.PasswordField()
    .type(Passwordfield)
    this.RegisterLocator.ConfirmField()
    .type(confirm)
    this.RegisterLocator.Registerbtn()
    .click()





}
}
export let userregister = new Register()