# Calculator (vlab for [http://investtools.com.br/](http://investtools.com.br/))

Um pequeno projeto para testar minhas habilidades.

![frontend-scshot](../master/scshot/frontend-scshot.png)

## Desafio

> ...
>
> Criar uma simples calculadora, como a encontrado no sistema operacional, utilizando [React](https://facebook.github.io/react/).
>
> ...

## Solução

### Instalação

#### Pré-requisitos

Ter instalado localmente (apenas p/ Desenvolvimento e Teste):
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)


#### Instalando dependências

```bash
$ git clone https://github.com/raulpereira/calculator.git
$ cd calculator
$ yarn
```

### Subir & Rodar

#### Ambiente de desenvolvimento

```bash
$ yarn start
```
![dsv-scshot](../master/scshot/dsv-scshot.png)

#### Ambiente de teste

```bash
$ bin/rails db:environment:set RAILS_ENV=test
$ rake db:migrate RAILS_ENV=test
$ rspec .
```
![tst-scshot](../master/scshot/tst-scshot.png)

#### Ambiente de produção

Acesse => *[https://shopanalyzer-rp.herokuapp.com/](https://shopanalyzer-rp.herokuapp.com/)* :clap:

### Considerações

#### Plataforma

**[Rails](http://rubyonrails.org/)**: Foi uma escolha determinada pelo desafio, decidi encarar pois essa plataforma faz parte dos meus estudos atuais.

#### Backend

##### Web Server

**[Puma.io](http://puma.io/)**: É a escolha padrão da plataforma, na versão utilizada ([5.0.2](http://weblog.rubyonrails.org/2017/3/1/Rails-5-0-2-has-been-released/)), além de ser indicado pelo local que será hospedado em produção.

##### Banco de dados

**[SQLite](https://sqlite.org/)**: Utilizado por já vir embarcado na plataforma e facilitar o desenvolvimento local. 

**[PostgreSQL](https://www.postgresql.org/)**: Escolhido por ser indicado pelo local que será hospedado em produção.

##### Segurança

**[Devise](https://github.com/plataformatec/devise)**: Foi utilizado esta biblioteca de módulos para solucionar questões de segurança aos serviços que a aplicação possui. Hoje a aplicação permite o cadastro de novos usuários e apenas o usuário autenticado pode acessar os seus registros cadastrados.

#### Frontend

**[HTML](https://w3.org/html/)** + **[CSS](https://w3.org/Style/CSS/)** (c/ **[Bootstrap](http://getbootstrap.com/)**) + **[JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** (c/ **[CoffeeScript](http://coffeescript.org/)** + **[jQuery](https://jquery.com/)**): Não usei nenhuma plataforma para implementar esta camada, apenas bibliotecas facilitadoras.

#### Testes

**[RSpec](http://rspec.info/)**: Quase toda a estrutura do modelo e controle foi coberta - backend, ficou pendente também realizar os testes para os helpers e os cenários das features - frontend. A finalização de todos os testes é mais do que necessário para orquestrar todo processo de implantação em ambiente de produção com mais segurança.

#### Servidores de produção

**[Heroku](https://heroku.com)** (PAAS): Escolhido por ter suporte grátis para aplicações [Rails](http://rubyonrails.org/), além de ter uma boa integração com o [GitHub](https://github.com/).

## Conclusão

Mais um desafio usando [Rails](http://rubyonrails.org/), fiquei feliz com o resultado final, a solução esta bem funcional, porém, precisava de um pouco mais de tempo para averiguar toda parte de segurança relacionada com a manipulação do arquivo enviado, tirando isso, também faltou efetuar alguns testes, principalmente os do frontend e, a falta mais grave, **não** ter feito a solução na versão informada, acabei fazendo na versão instalada no micro pessoal e não percebi que estava usando uma versão diferente até escrever a primeira versão desta documentação.

Enfim, entrou no backlog de melhorias para próxima versão, averiguar se a solução tem algum problema para rodar na versão solicitada, além dos itens citados anteriormente.

**AVANTE!** :muscle:
