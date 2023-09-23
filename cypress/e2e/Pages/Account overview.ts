class Accountoverview{

    OverviewLocators={
        Accountoverview :()=>cy.get('#leftPanel > ul > li:nth-child(2) > a')
    }
    Accounts(){
        this.OverviewLocators.Accountoverview()
        .click()
        .should('contain','Accounts Overview')

    }

}
export let accounts =new Accountoverview()