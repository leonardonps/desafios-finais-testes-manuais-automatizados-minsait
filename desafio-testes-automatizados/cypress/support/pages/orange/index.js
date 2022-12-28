const el = require("./elements").ELEMENTS;

class Orange{

    verificarLoginValido(){
        cy.get(el.imgClientBrand).should('be.visible')
    }

    expandirRetrairMenuPrincipal(){
        cy.get(el.btnMainMenu).click()
    }

    verificarQtdElementosMenuPrincipal(){
        cy.get(el.mainMenuItem).should('have.length', '11')
    }

    verificarElementosMenuPrincipal(){
        const items = ['Admin', 'PIM', 'Leave', 'Time','Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Buzz'];
        
        for(let i = 0; i < items.length; i++){
            cy.get(el.mainMenuItem).eq(i).should('contain', items[i])
        }
    }

    pesquisarMenuPrincipal(item){
        if(item){
            cy.get(el.mainMenuSearch).type(item)
            cy.get(el.mainMenuItem).contains(item).click()
        }
    }

    expandirRetrairMenuUsuario(){
        cy.get(el.userMenu).click()
    }

    clicarMenuUsuarioLogOut(){
        cy.get(el.userMenuItem).contains('Logout').click()
    }

    clicarMenuUsuarioChangePassword(){
        cy.get(el.userMenuItem).contains("Change Password").click()
    }
}

export default new Orange()