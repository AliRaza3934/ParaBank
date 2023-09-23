class Navigation{

    NavLocators={

    HomeField          :() => cy.get('<a href="/parabank/index.htm">home</a>'),
    DemoField          :() => cy.get('<a href="about.htm">about</a>'),
    CustomerCarefield  :() => cy.get('<a href="contact.htm">contact</a>')

    }
   Navbar(){
    this.NavLocators.HomeField()
    .click()
    this.NavLocators.DemoField().click()
    this.NavLocators.CustomerCarefield().click()

   } 
}
export let navigator =new Navigation()