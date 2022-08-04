export default {
  components: {
    forms: {
      loginForm: {
        placeholders: {
          email: "Insira o e-mail",
          password: "Inserir senha",
        },
        buttons: {
          login: "Fazer login",
        },
      },
      users: {
        registerForm: {
          placeholders: {
            name: "Insira seu nome",
            email: "Insira o e-mail",
            password: "Inserir senha",
          },
          buttons: {
            register: "Fazer cadastro",
          },
        },
      },
    },
    navs: {
      navBar: {
        title: "Trello",
        menuItems: {
          boards: "Quadros",
        },
        profile: {
          actions: {
            logout: "Sair",
          },
        },
      },
    },
  },
  views: {
    loginView: {
      cardForm: {
        title: "Fazer Login",
        linkToRegister: "Criar uma conta",
      },
    },
    userRegisterView: {
      cardForm: {
        title: "Fazer Cadastro",
        linkToLogin: "Já possuo uma conta",
      },
    },
    homeView: {
      title: "Gerencie seus projetos de forma simples",
    },
  },
};
