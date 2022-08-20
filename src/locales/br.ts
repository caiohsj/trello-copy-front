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
      boards: {
        registerForm: {
          placeholders: {
            name: "Insira o nome do quadro",
            backgroundColor: "Insira a cor de fundo do quadro",
            backGroundPhoto: "Imagem de fundo do quadro",
          },
          buttons: {
            register: "Criar quadro",
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
    modals: {
      cardModal: {
        placeholders: {
          title: "Titulo do cartão",
          description: "Descrição do cartão...",
        },
        saveButton: "Salvar",
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
  stores: {
    board: {
      column: {
        title: "Digite aqui o nome da coluna",
      },
      card: {
        title: "Novo cartão da coluna {column}",
      },
    },
  },
};
