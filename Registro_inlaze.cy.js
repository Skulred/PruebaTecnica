describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://test-qa.inlaze.com/');
                    //-- Campos para comandos de Login: name, email, password,confirmpassword -- // 
  });
 
  it('Verificar que se pueda registrar un usuario con nombre, email y contraseña válidos', () => {
    // Cambiar valores para crear nuevo usuario
   cy.Crear_usuario_Nuevo_Usuario('pepito jimenez', 'Pepitojimenez@gmail.com','C0ntra.#','C0ntra.#') 
  cy.contains('Successful registration!').should('exist')
  })

  it('Validar que el campo de nombre acepte mínimo 2 palabras.', () => {
    // Valida que no se active el boton de crear al tener menos de dos palabras
    cy.ValidarNombre_Usuario('Pepito', 'Pepitojimenez@gmail.com','C0ntra.#','C0ntra.#')   
  })

    it('Verificar que el email cumpla con el formato estándar y sea único en la base de datos.',()=>{
      cy.ValidarCorreo_Usuario('Pepito perez dos', 'Pepitojimenez@gmail.com','C0ntra.#','C0ntra.#') 
      cy.contains('No fue posible crear usuario').should('exist')
    })

    it('Validar que la contraseña cumpla con los requisitos de longitud y caracteres.',()=>{
      // Valida que no se active el boton de crear cuando no se tienen caracteres especiales ni los caracteres requeridos
      cy.ValidarContraseña_Usuario('Pepito perez dos', 'Pepitojimenez@gmail.com','Contra0','Contra0') 
    })

    it('Comprobar que el formulario no se envíe si los campos obligatorios no están completos.',()=>{
    cy.Validar_Formulario_Crear_Usuario('pepito','perez','Contra00','Contra00')
    })
    it('Comprobar que la contraseñas coincidan',()=>{
      cy.Validar_Long_Contraseña_Usuario('pepito','perez','Contr123123123123','Contra00')
    })
})