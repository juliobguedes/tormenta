# Tormenta

* [Acesse o site](https://juliobguedes.dev/tormenta)
* [Acesse o servidor](http://tormenta-pwa.herokuapp.com/)

[Tormenta](https://tormentarpg.com.br/) é um jogo de RPG de mesa desenvolvido pela [Jambô Editora](https://jamboeditora.com.br/) baseado em D&D3.5, permitido sob a Open Game License. No cenário de RPGs de mesa brasileiro, Tormenta cresceu bastante ao longo dos anos, gerando uma grande coleção de livros-jogo, e até mesmo romances baseados no cenário de Tormenta.

Ao longo dos anos o interesse em buscar talentos e magias nos livros, enquanto pondera se são adequados aos personagens, tem se tornado desinteressante e demorado, principalmente durante uma sessão de jogo ou se os jogadores são iniciantes. Dessa forma, assim como a [busca por magias](https://juliobguedes.codes/TormentaSpellbook/#!/spells) pôde ser facilitada por um filtro de busca avançado, é interessante que a busca por talentos também seja.

## O que esse repositório é

Esse repositório é uma ferramenta de busca e auxílio à criação e atualização de personagens que deve ser utilizado **em conjunto** com os livros-jogo.

## O que esse repositório não é

* Esse repositório não é uma ferramenta oficial desenvolvida pela Jambô Editora e, portanto, as informações aqui contidas podem estar desatualizadas ou em desacordo com novas edições dos livros oficiais.
* Esse repositório não é uma forma de lucro sobre o conteúdo criado pela Jambô Editora ou afiliados.

## Desenvolvimento

O desenvolvimento desta aplicação está sendo feito durante a disciplina de [Princípios de Desenvolvimento Web](https://github.com/matheusgr/devweb/), sob a orientação do professor [Matheus Gaudêncio](https://github.com/matheusgr).

A aplicação está sendo desenvolvida utilizando React como framework para front-end, e NodeJS para o back-end. O arquivo [CONTRIBUTING](./CONTRIBUTING.md) contém as instruções de como executar o projeto em modo de desenvolvimento ou fazer builds.

## Funcionalidades

Na página principal, o usuário pode:
* Usar o menu para buscar talentos, podendo filtrá-los:
    * pelo seu tipo, entre talentos de Combate, de Magia, etc
    * pelo livro em que o talento foi publicado
    * pelo nome do talento, através do campo de busca na navbar
* Selecionar um talento e adicioná-lo à sidebar, onde é possível ver seus detalhes
* Adicionar um talento da sidebar aos talentos de um personagem, ou remover o talento da sidebar

Na página de talentos salvos, o usuário pode:
* Ver os personagens criados
* Escolher um personagem ativo
* Dar nome a um personagem
* Salvar o personagem, gerando uma hash, caso ainda não possua
* Usar a hash gerada para adicionar o personagem em outro dispositivo

Algumas das funcionalidades acima ainda serão implementadas, de acordo com as issues existentes neste repositório.