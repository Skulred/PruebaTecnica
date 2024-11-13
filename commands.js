//-- Comandos Registro --
//-- Registro
Cypress.Commands.add('Crear_usuario_Nuevo_Usuario', (C_name, C_email, C_password,C_confirmpassword ) => {
    cy.get('a[href="/auth/sign-up"]').click();
    cy.get('#full-name').type(C_name);
    cy.get('#email').type(C_email);
    cy.get('#password').type(C_password);
    cy.get('#confirm-password').type(C_confirmpassword);
    cy.get('[type="submit"]').click();
})
Cypress.Commands.add('ValidarNombre_Usuario', (C_name, C_email, C_password,C_confirmpassword ) => {
    cy.get('a[href="/auth/sign-up"]').click();
    cy.get('#full-name').type(C_name);
    cy.get('#email').type(C_email);
    cy.get('#password').type(C_password);
    cy.get('#confirm-password').type(C_confirmpassword);
    cy.get('[type="submit"]').should('be.disabled');
})
Cypress.Commands.add('ValidarCorreo_Usuario', (C_name, C_email, C_password,C_confirmpassword ) => {
    cy.get('a[href="/auth/sign-up"]').click();
    cy.get('#full-name').type(C_name);
    cy.get('#email').type(C_email);
    cy.get('#password').type(C_password);
    cy.get('#confirm-password').type(C_confirmpassword);
    cy.get('[type="submit"]').click();
})

Cypress.Commands.add('ValidarContraseña_Usuario', (C_name, C_email, C_password,C_confirmpassword ) => {
    cy.get('a[href="/auth/sign-up"]').click();
    cy.get('#full-name').type(C_name);
    cy.get('#email').type(C_email);
    cy.get('#password').type(C_password);
    cy.get('#confirm-password').type(C_confirmpassword);
    cy.get('[type="submit"]').should('be.disabled');
})
Cypress.Commands.add('Validar_Formulario_Crear_Usuario', (C_name, C_email, C_password,C_confirmpassword ) => {
    cy.get('a[href="/auth/sign-up"]').click();
    cy.get('[type="submit"]').should('be.disabled');
    cy.get('#full-name').type(C_name);
    cy.get('[type="submit"]').should('be.disabled');
    cy.get('#email').type(C_email);
    cy.get('[type="submit"]').should('be.disabled');
    cy.get('#password').type(C_password);
    cy.get('[type="submit"]').should('be.disabled');
    cy.get('#confirm-password').type(C_confirmpassword);
    cy.get('[type="submit"]').should('be.disabled');
    
})
Cypress.Commands.add('ValidarContraseña_Usuario', (C_name, C_email, C_password,C_confirmpassword ) => {
    cy.get('a[href="/auth/sign-up"]').click();
    cy.get('#full-name').type(C_name);
    cy.get('#email').type(C_email);
    cy.get('#password').type(C_password);
    cy.get('#confirm-password').type(C_confirmpassword);
    cy.get('[type="submit"]').should('be.disabled');
})
Cypress.Commands.add('Validar_Long_Contraseña_Usuario', (C_name, C_email, C_password,C_confirmpassword ) => {
    cy.get('a[href="/auth/sign-up"]').click();
    cy.get('#full-name').type(C_name);
    cy.get('#email').type(C_email);
    cy.get('#password').type(C_password);
    cy.get('#confirm-password').type(C_confirmpassword);
    cy.contains('Passwords do not match');
    cy.get('[type="submit"]').should('be.disabled'); 
})




// Inicio de sesion -- Login
Cypress.Commands.add('IngresoUsuarioPrueba',(U_name, U_password)=>{
    cy.wait(2000)
    cy.get('#email').type(U_name);
    cy.get('.join > #password').type(U_password);
    cy.get('[type="submit"]').click();
    cy.wait(2000)
    cy.contains('Welcome to Lorem').should('exist');
})
Cypress.Commands.add('ValidarFormUsuarios',(U_name, U_password)=>{

   cy.wait(2000)
    cy.get('#email').type(U_name);
    cy.get('.join > #password').type(U_password);
    cy.get('[type="submit"]').should('be.disabled'); 
})
Cypress.Commands.add('IngresoPruebaNombre',(U_name, U_password)=>{
    cy.wait(2000)
    cy.get('#email').type(U_name);
    cy.get('.join > #password').type(U_password);
    cy.get('[type="submit"]').click();
    cy.wait(2000)
    cy.contains('pepito jimenez').should('exist');
})
Cypress.Commands.add('LogoutUsario',(U_name, U_password)=>{
    cy.wait(2000)
    cy.get('#email').type(U_name);
    cy.get('.join > #password').type(U_password);
    cy.get('[type="submit"]').click();
    cy.wait(2000)
    cy.contains('Welcome to Lorem').should('exist');
    cy.get('img[src="/assets/rengoku.webp"]').click();
    cy.contains('Logout').click();
})