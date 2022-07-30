export default {
  components: {
    forms: {
      loginForm: {
        placeholders: {
          email: 'Insira o e-mail',
          password: 'Inserir senha'
        },
        buttons: {
          login: 'Fazer login'
        }
      },
      users: {
        registerForm: {
          placeholders: {
            name: 'Insira seu nome',
            email: 'Insira o e-mail',
            password: 'Inserir senha'
          },
          buttons: {
            login: 'Fazer cadastro'
          }
        }
      }
    }
  },
  views: {
    loginView: {
      cardForm: {
        title: 'Fazer Login',
        linkToRegister: 'Criar uma conta'
      }
    },
    userRegisterView: {
      cardForm: {
        title: 'Fazer Cadastro',
        linkToLogin: 'Já possuo uma conta'
      }
    }
  }
}
