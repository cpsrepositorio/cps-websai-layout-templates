# CPS WebSAI Layout Templates

> Conjunto de _templates_ de _layout_ aplicando o CPS Design System às interfaces do WebSAI.

**Demonstração:** https://cpsrepositorio.github.io/cps-websai-layout-templates/

## Introdução

Este repositório contém exemplos de _layout_ em aderência ao [CPS Design System](https://cpsrepositorio.github.io/cps-design-system/), pensados para o fluxo básico de resposta a questionários através da plataforma WebSAI.

A premissa básica de sua construção foi se ater às tecnologias fundamentais da Web, ou seja, disponibilizar _assets_ HTML, CSS e JavaScript nativos, sem dependências a _frameworks_ ou ferramentas específicas.

## Utilizando

O ferramental utilizado durante o desenvolvimento não gera qualquer implicação na utilização final destes _templates_, por equipes que queiram integrá-los com qualquer tecnologia desejada. Os arquivos empacotados são simplesmente HTML, CSS e JavaScript nativos, sem dependências a _frameworks_ ou ferramentas específicas.

Basta acessá-los em [dist](./dist/), consultar os códigos e copiar as partes que interessarem para dentro dos _templates_/_layouts_ do _framework_ que estiver sendo utilizado. Desde que a mesma estrutura HTML e CSS seja mantida, os _layouts_ funcionarão automaticamente.

## Desenvolvendo

Apesar da premissa de utilização de tecnologias puras nativas da Web, experiência de desenvolvedor (_developer experience_, ou simplesmente DX) foi valorizada, através da utilização de ferramental baseado em [Node](https://nodejs.org/) com o gerenciador de pacotes [Yarn](https://classic.yarnpkg.com/), em especial através do _bundler_ [Parcel](https://parceljs.org/).

Sendo assim, para colaborar com o desenvolvimento destes _templates_, é necessário preparar um ambiente com a instalação prévia do **Node** e do **Yarn**. Em seguida, executar em um _terminal_ a partir do diretório raiz deste projeto.

``` bash
# Instalar todas as dependências.
yarn

# Executar em modo de desenvolvimento.
yarn dev
```

Uma versão de desenvolvimento da aplicação será disponibilizada em http://localhost:1234. Em seguida, basta realizar alterações nos arquivos dentro do diretório [src](./src/), enquanto o servidor de desenvolvimento permanece em execução.

## Publicando

Após realizar atualizações nos arquivos-fonte do projeto, é possível se respaldar em alguns comandos preparados para publicação deste projeto.

``` bash
# Testar a compilação de produção, porém localmente.
yarn start

# Atualizar a versão preview disponível no GitHub Pages.
yarn deploy

# Gerar uma nova distribuição na pasta `dist`.
yarn publish
```

Após gerar uma nova distribuição em [dist](./dist/), basta enviar um _commit_ com esta nova versão para o _branch_ `master` deste repositório no GitHub.
