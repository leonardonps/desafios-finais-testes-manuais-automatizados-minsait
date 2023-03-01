# Formação de Testes Manuais e Automatizados - Minsait/INDRA

## O que você vai encontrar nesse repositório?

Neste repositório, você encontrará os desafios realizados durante a formação de Testes Manuais e Automatizados fornecida pela Minsait/INDRA.

## Sobre o desafio de testes manuais

### Primeira etapa

A primeira etapa do desafio dos testes manuais se deu por meio de um questionário. Nele, teve-se que responder algumas questões englobando:

- O que é teste? 
- O que é qualidade de software? 
- Teste Agile x Teste convencional
- Particionamento de Equivalência, Análise de Valor Limite e Tabela de Decisão

### Segunda etapa

Já a segunda etapa foi um pouco mais de prática e, nela, desenvolveu os seguintes assuntos vistos durante o treinamento:

- Planejamento de testes
- Modelagem e especificação de casos de testes
- Gerenciamento e monitoramento de testes
- Estratégia dos testes

## Sobre o desafio de testes automatizados

### Requisitos iniciais do projeto

- Crie no mínimo 2 e no máximo 3 suítes de testes (arquivos de testes);
- Crie para cada suíte de teste no mínimo 2 e no máximo 4 casos de Teste.

### Plataforma testada

[Orange HRM](https://opensource-demo.orangehrmlive.com/)

### Imagens da plataforma

<div align="center">

#### Orange HRM - Tela de Login
![Orange HRM - Login](https://github.com/leonardonps/desafios-finais-testes-manuais-automatizados-minsait/blob/main/desafio-testes-automatizados/imagens/tela-login.png)

#### Orange HRM - Menus principais do site Orange HRM
![Menus principais do site](https://github.com/leonardonps/desafios-finais-testes-manuais-automatizados-minsait/blob/main/desafio-testes-automatizados/imagens/orange-menus.png)

#### Orange HRM - Seção
![Orange HRM - Seção Admin](https://github.com/leonardonps/desafios-finais-testes-manuais-automatizados-minsait/blob/main/desafio-testes-automatizados/imagens/orange-admin.png)

#### Orange HRM - Seção PIM
![Orange HRM - Seção PIM](https://github.com/leonardonps/desafios-finais-testes-manuais-automatizados-minsait/blob/main/desafio-testes-automatizados/imagens/orange-pim.png)

</div>

### Ferramentas utilizadas para a elaboração dos casos de testes

- Framework para o desafio: Cypress
- Linguagem de programação: Javascript
- Abordagem: Page Object Model (POM)

### Como foi planejado os testes?

Os testes foram divididos em 3 suítes principais focadas em determinadas partes da plataforma Orange HRM. São elas:

#### Suíte Login | Objetivo: Verificar a tela de login

Para essa suíte, 4 casos foram pensados:

- Caso 1: login com credenciais válidas, realizando adequadamente o caminho pensado.

- Caso 2: contraponto do Caso 1. Nele, foram testadas duas situações: o usuário inserindo credenciais inválidas e nulas.

- Caso 3: fluxo 'Forget your password' com sucesso. Nele, foi testado o caminho 'feliz', inserindo adequadamente o que se pede (o username), caso o usuário queira solicitar uma nova senha de acesso.

- Caso 4: contraponto do Caso 3. Nele, foi testada a situação na qual o usuário acessa a opção 'Forget your password' mas não insere seu username (ou seja, não consegue pedir uma nova senha) e cancela a operação.

#### Suíte Admin | Objetivo: Verificar principais funcionalidades fornecidas para um usuário ADMIN

[Observação]: Essa suíte não teve nenhum caso 'contraponto' visando uma maior abrangência de ações 'felizes' - ações se comportando como pensado - pelo usuário ADMIN.  
- Caso 1: adiciona um novo funcionário na seção PIM inserindo informações básicas (nome completo) e credenciais para login (username e senha).
 
- Caso 2: nele, temos duas situações (que poderiam ser dois casos distintos para uma melhor independência) envolvendo o ADMIN: pesquisar o funcionário (pelo nome e/ou ID - caso haja duas pessoas com o mesmo nome) e removê-lo.

Os casos 3 e 4 seguem essa mesma linha de racicíonio, agora na seção ADMIN.

- Caso 3: cria um login (username, senha, função e status) para um funcionário já existente no sistema.

- Caso 4: pesquisa um usuário pelo seu username e remove-o.

#### Suíte Usuário em geral | Objetivo: Verificar funcionalidades gerais da página principal Orange HRM

- Caso 1: nele, o menu principal lateral é testado. Observa-se as seguintes propriedades: se a expansão/retração desse menu está como esperado, se a quantidade de items e sua ordem está correta e se o sistema de busca está funcionando.

- Caso 2: realiza a mudança de senha, 'Change Password', pelo usuário com o comportamento esperado: credenciais válidos e com nenhuma fuga do caminho 'feliz'.

- Caso 3: contraponto do caso 2. Nele, é testado se a operação 'Change Passsword' não é concluída quando inputs nulos e inválidos são colocados nos campos.

- Caso 4: caso simples que realiza o logout no sistema pelo usuário.

### Alguns pontos a serem melhorados nesse projeto

- Automatizar (pular) a etapa de Login em casos que esse não precisa ser testado 
- Adicionar mais casos de contraponto.
