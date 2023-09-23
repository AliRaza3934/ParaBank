/// <reference types = "cypress"/>
import {userregister} from "./Pages/Register"
import{login} from "./Pages/Loginpage"
import{navigator} from "./Pages/Navigationbar"
import{openaccount} from "./Pages/OpenNewaccount"
import{accounts}from "./Pages/Account overview"
import{transfer}from "./Pages/Transferfunds"
import{bill} from "./Pages/Billpay"


describe("login",()=>{
    it("Main page",()=>{
        cy.visit('https://parabank.parasoft.com/parabank/register.htm;jsessionid=D17A9E6A68BB9B70413053D7BB2A63C5')
       
        userregister.RegisterUser()
        //login.LoginUser('Ali123','Qureshi')
         //navigator.Navbar()
        // openaccount.Accounts()
       // accounts.Accounts()
       // transfer.Transfer()
        bill.Bill()
        
    })
    
})