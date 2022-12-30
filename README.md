# Formação de Testes Manuais e Automatizados - Minsait/INDRA

## O que você vai encontrar nesse repositório?

Neste repositório, você encontrará os desafios realizados durante a formação de Testes Manuais e Automatizados fornecida pela Minsait/INDRA.

## Sobre o desafio de testes manuais

[Em construção...]

## Sobre o desafio de testes automatizados

### Requisitos do projeto

- Crie no mínimo 2 e no máximo 3 suítes de testes (arquivos de testes);
- Crie para cada suíte de teste no mínimo 2 e no máximo 4 casos de Teste.

### Plataforma testada

[Orange HRM](https://opensource-demo.orangehrmlive.com/)

### Ferramentas utilizadas para a elaboração dos casos de testes

- Framework para o desafio: Cypress
- Linguagem de programação: Javascript

### Como foi planejado os testes?

Os testes foram divididos em 3 suítes principais focadas em determinadas partes da plataforma Orange HRM. São elas:

#### Suíte Login | Objetivo: Verificar a tela de login

Para essa suíte, 4 casos foram pensados

- Caso 1: login com credenciais válidas, realizando adequadamente o caminho pensado.
- Caso 2: contraponto do Caso 1. Nele, foram testadas duas situações: o usuário inserindo credenciais inválidas e nulas.
- Caso 3: fluxo 'Forget your password' com sucesso. Nele, foi testado o caminho 'feliz', inserindo adequadamente o que se pedia (o username), caso o usuário quisesse solicitar uma nova senha de acesso.
- Caso 4: contraponto do Caso 3. Nele, foi testada a situação na qual o usuário acessa a opção 'Forget your password' mas não insere seu username (ou seja, não consegue pedir uma nova senha) e cancela a operação.

#### Suíte Admin | Objetivo: Verificar principais funcionalidades fornecidas para um usuário ADMIN

#### Suíte Usuário em geral | Objetivo: Verificar funcionalidades gerais da página principal Orange HRM
