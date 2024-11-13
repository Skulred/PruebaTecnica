describe('template spec', () => {
    beforeEach(() => {
      cy.visit('https://test-qa.inlaze.com/');
    });
it('Verificar que el usuario pueda loguearse con el email y contraseña correctos', () => {
    ///--- Verifica que el usuario no pueda ingresar con un usuario Errado
    
  cy.IngresoUsuarioPrueba('Pepitojimenez@gmail.com','C0ntra.#')
  })
  it('Validar que el formulario de login no se envíe si los campos no están completos.',()=>{
    cy.ValidarFormUsuarios('a','a')
  })
  it('Comprobar que al ingresar se muestre el nombre del usuario.',()=>{
    cy.IngresoPruebaNombre('Pepitojimenez@gmail.com','C0ntra.#')
  })
  it('Verificar que la plataforma permita cerrar la sesión correctamente.',()=>{
    cy.LogoutUsario('Pepitojimenez@gmail.com','C0ntra.#')
    cy.contains('Sign in').should('exist')
  })
})