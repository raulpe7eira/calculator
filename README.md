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
$ yarn test .
```
![tst-scshot](../master/scshot/tst-scshot.png)

#### Ambiente de produção

Acesse => *[https://calculator-rp.herokuapp.com/](https://calculator-rp.herokuapp.com/)* :clap:

### Considerações

#### Plataforma

**[Node.js](https://nodejs.org/)** c/ [Create React App](https://github.com/facebookincubator/create-react-app): A escolha da plataforma foi determinada pelo desafio e o uso do módulo de criação de aplicativos c/ [React](https://facebook.github.io/react/) foi para agilizar a configuração do ambiente.

#### Frontend

**[HTML](https://w3.org/html/)** + **[CSS](https://w3.org/Style/CSS/)** + **[ES6](https://www.ecma-international.org/ecma-262/6.0/)** (c/ **[React](https://facebook.github.io/react/)**): A idéia era usar todo o poder de componentização e gerenciamento de estado que o [React](https://facebook.github.io/react/) possui, para criar a calculadora.

#### Testes

**[Jest](https://facebook.github.io/jest/)**: Era a ferramenta instalada como padrão do ambiente React criado pelo [Create React App](https://github.com/facebookincubator/create-react-app), fiz apenas 4 testes, para verificar como funciona mas esta longe de cobrir todo código escrito.

![cov-scshot](../master/scshot/cov-scshot.png)

#### Servidores de produção

**[Heroku](https://heroku.com)** (PAAS): Escolhido por ter suporte grátis para aplicações [Node.js](https://nodejs.org/), além de ter uma boa integração com o [GitHub](https://github.com/).

## Conclusão

Tinha pouco tempo para me dedicar ao desafio, escolhi usar o desafio para estudar [React](https://facebook.github.io/react/), pois não havia tido contato até então, todo a solução foi baseada no [Live Coding](https://youtu.be/ZtU7Mhf9vN8) apresentado por [Michael Jackson](https://twitter.com/mjackson), isso poupo um tempo danado para criação do [CSS](https://w3.org/Style/CSS/), que utiliza o mode de layout Flexbox para determinar a localização de cada componente no página. Estruturei o código em pacotes separados e não num arquivo só como apresentado no vídeo, assim a manutenção fica melhor, porém ainda da para estruturar mais o código, pois o JS principal, Calculator.js, ainda esta bem grande e com muita responsabilidade, utilizar o command pattern deve ser um caminho. Isso vai facilitar o teste também, pois vai existir unidades menores.

Gostei muito de conhecer o tão famoso [React](https://facebook.github.io/react/), vou estudar mais sobre todo seu ecossistema, mas o pouco que vi já foi bem gratificante, resolve muita coisa que antes dava um belo trabalho.

**AVANTE!** :muscle:
