# Contribuindo com o projeto

Existem diversas formas para contribuir com o projeto:
* criar ou propor novas funcionalidades
* refatorar código
* documentar erros de funcionalidades
* muitas outras coisas, sinta-se convidado a contribuir

## Como executar o projeto

Para executar o servidor ou o cliente em modo de desenvolvimento, entre na pasta `web` ou `server` e execute:

```sh
yarn dev
```

## Como fazer build do projeto

Ao fazer build do projeto, ele funciona de forma diferente para o web e o servidor.

### Web

Na pasta web, onde fica o código do front-end, para buildar o projeto, apenas execute o comando:

```sh
yarn build
```

Após o comando, as alterações feitas durante o desenvolvimento estarão presentes na pasta `docs/`, sendo responsável pela página gerada ao acessar [o site do repositório](https://juliobguedes.dev/tormenta).

### Server

Na pasta server, onde fica o código do back-end, para buildar o projeto, execute o comando:

```sh
yarn build
```

Após executar o comando, a versão gerada estará na pasta `server/dist/`. Entretanto, apenas eu tenho autorização para atualizar o Heroku.