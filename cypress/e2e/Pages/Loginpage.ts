class Login{

LoginLocator={

    Usernamefield :() => cy.get('#loginPanel > form > div:nth-child(2) > input'),
    Passwordfield :() => cy.get('#loginPanel > form > div:nth-child(4) > input'),
    btnfield      :() => cy.get('#loginPanel > form > div:nth-child(5) > input')
}
LoginUser(username:string,Password:string){
    this.LoginLocator.Usernamefield().type(username)
    this.LoginLocator.Passwordfield().type(Password)
    this.LoginLocator.btnfield().click()
    
}


}
export let login =new Login()