# Ricky and Morty's Portal Gun

Olá devs! Este projeto (mesmo que um estádo bem inicial) conta com algumas boas práticas que utilizo em meus projetos Angular.
Infelizmente o tempo hábil não foi meu ponto forte, mas valeu a pena a execução!

## Ferramentas Utilizadas
* [Angular CLI](https://cli.angular.io/), inicialização do projeto
* [Bootstrap 4 Grid](https://www.npmjs.com/package/bootstrap-4-grid), aproveitando o sistema de Grid do bootstrap.

## Sobre
* Como o próprio framework encoraja, foi utilizado da arquitetura [CBA](https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238),
onde agrupa-se os recursos e suas responsabilidades em um módulo comum a um domínio (Ex: poderiamos ter um módulo `location` que possuiria o serviço responsável
por comunicar via REST com os endpoints que manipulam `locations`, além de seus componentes visuais)
  * Foi agrupado em um módulo `shared` os recuros comuns a toda a aplicação.
  * Ao lado de cada `service`, é criado um arquivo `.types.ts` utilizado para agrupar as definições de assinaturas de API (parâmetros e respostas), fazendo um bom uso do TypeScript.
* Nos arquivos SCSS, foi utilizado a abordagem de [BEM](http://getbem.com/introduction/), dando ganho a manutenibilidade do projeto.
  * Além disso, foi utilizado uma boa prática Angular de nomenclatura de classes, prefixando com `app__` as classes definidas no escopo do AppComponent, e `page__` para as classes definidas no escopo específico de cada página.

## Implementações Futuras

* [TSDOC](https://github.com/microsoft/tsdoc) nas assinaturas dos metodos de Serviços e Compoentes;
* Testes unitários dos critérios de aceitação;
* Componentizar os elementos visuais (header, search-bar, location-card, portal, etc) utilizando a abordagem [Atomic](http://atomicdesign.bradfrost.com/), reduzindo o acoplamento e a complexidade das páginas.
* Animações de entrada e saída dos cards utilizando `@angular/animations`;
* Páginas internas de navegação (`/location/:id` contendo as informações relativas a um lugar escolhido);
* Carregar imagens dos lugares e personages utilizando da API [Google Custom Search](https://developers.google.com/custom-search/) ou da API da [FANDOM Rick and Morty](https://rickandmorty.fandom.com);
* Setup de ServiceWorker e Manifest com `@angular/pwa` para cache de assets e criação de uma PWA.
