# Community Protocol

Modelo de Negócios Sustentável para Comunidades e DAOs de Serviço

## Contexto

Profissionais liberais, empreendedores solo e candidatos a vagas de emprego têm dificuldades de encontrar clientes e empregos qualificados e muitas vezes têm dificuldades de comprovar o conhecimento e experiência que têm no mercado.

O currículo tradicional já é uma ferramenta obsoleta.

Já foi a época em que as empresas armazenavam documentos estáticos com o perfil de cada candidato.

As empresas por sua vez têm dificuldades de validar se realmente os candidatos têm as habilidades necessárias e quão relevante foram as experiências de trabalho anteriores.

Além da questão do currículo percebemos também um desafio no _matchmaking_ entre as empresas e os profissionais. Muitas vezes a pessoa ideal não chega no radar das empresas e por sua vez as empresas acabam demorando muito para conseguir achar o profissional no _timing_ que precisam.

Em setores como o de desenvolvimento de software em que a demanda por profissionais é muito maior que a oferta de talentos o problema se agrava.

Uma saída para esse problema são as comunidades.

Uma comunidade é um grupo de pessoas que compartilham interesses, valores, objetivos ou localização geográfica semelhantes. Elas interagem e colaboram entre si, criando vínculos sociais e estabelecendo uma identidade coletiva. A comunidade proporciona um senso de pertencimento, apoio mútuo e um ambiente onde os indivíduos podem se envolver e participar ativamente.

As comunidades representam oásis de profissionais para as empresas que desejam encontrar talentos. Elas reúnem muitos profissionais da mesma área de atuação o que facilita as buscas pelo profissional certo. Para os profissionais, as comunidades oferecem conhecimento, educação, um espaço de troca e crescimento pessoal e profissional. Também são um canal para encontrarem trabalho.

As comunidades em geral são criadas por profissionais entusiastas que dedicam seu tempo na paixão e que estão em busca de retorno financeiro, reconhecimento social e reputação.

Mas nem sempre esses profissionais pensam em um modelo de negócios viável que possa sustentar financeiramente as atividades da comunidade e gerar incentivos o suficiente para que os membros se mantenham ativos. Criar e manter um modelo de negócios para comunidades é um desafio enorme.

Dentro desse cenário de empresas contratantes, profissionais e comunidades, surge a solução **Community Protocol**

## O que é

O **Community Protocol** é um protocolo voltado para a relação entre comunidades, contratantes e profissionais.

O protocolo oferece uma infraestrutura de software que resolve o problema das empresas na contratação de profissionais, gera benefícios e prova de experiência para os profissionais contratados e viabiliza um modelo de negócios sustentável para as comunidades.

Tudo é feito por meio do processamento dos pagamentos realizados pela empresa contratada pelo trabalho executado pelos profissionais contratados na comunidade.

O protocolo funciona como um gateway de pagamento que distribui o dinheiro recebido, emite e distribui tokens que representam benefícios da comunidade para o profissional e registra as habilidades dos profissionais envolvidos na prestação de serviço como prova de currículo.

## Como Funciona

Os líderes da comunidade decidem implementar o Protocolo para que todos os membros possam se beneficiar e a Comunidade tenha uma fonte de receita. No primeiro momento os líderes definem qual será a **Taxa da Comunidade** , um percentual que incidirá sobre a quantia de todos os serviços prestados pelos membros participantes. Essa decisão pode ser delegada para os membros em um segundo momento. Além disso, será cunhado o **Token da Comunidade** , um token próprio que será distribuído para os membros participantes. Esse token poderá ser usado em mecanismos de gamificação ou governança da comunidade, a critério de cada uma.

A partir desse momento os membros da comunidade podem utilizar a ferramenta e o protocolo para recebimento da remuneração de todos os serviços executados para seus clientes. O uso do protocolo não é obrigatório. O protocolo oferece uma ferramenta de controle de contratos e faturamento para o membro usar.

Para participar do protocolo o membro precisará passar por um processo de KYC e AML e criar uma conta verificada. Nesta conta o membro irá cadastrar suas carteiras de cripto das redes suportadas pelo Protocolo.

O membro então vai registrar no protocolo um Contrato que representa a prestação de serviço que ele negociou com um cliente. Esse Contrato vai ter a referência do Contratante, a descrição dos serviços, o valor acordado, o tipo de pagamento (único, parcelado ou recorrente e as **Habilidades** envolvidas nesta prestação de serviço, com um peso para cada Habilidade. Por exemplo, se for um contrato para ser desenvolvedor de software _back-end_ na linguagem Javascript, ele vai poder escolher a habilidade Javascript com um peso de 100%, ou vai poder colocar duas ou mais habilidades (p. ex: Javascript e Node.js), colocando um peso de 50% pra cada um. Todas essas informações serão úteis para o processo de contratação e trabalho futuro e serão explicadas mais abaixo.

Depois de ter um contrato ativo, aprovado pela empresa para executar o serviço, no momento de realizar a cobrança de seus serviços para a empresa contratante, o membro emite uma fatura contra seu cliente a partir da **Ferramenta** de faturamento.

A fatura inclui a cobrança pelos serviços realizados e a taxa da comunidade. Digamos que a Taxa da Comunidade seja de 5%, então um salário de $10.000 irá gerar uma fatura no valor de $10.500 para a empresa pagar. Sendo $10.000 para o **Profissional** e $500 para a Comunidade.

Na descrição dos serviços serão evidenciadas as Habilidades definidas pelo membro para que a empresa valide e confirme que as habilidades realmente estão presentes na prestação do serviço.

Nos dados de pagamento será informado o endereço de pagamento em criptomoedas na rede escolhida pelo membro no momento da emissão da fatura. A rede a ser usada é um acordo entre o profissional e a empresa contratante. O pagamento precisa ser feito necessariamente em criptomoedas por conta dos benefícios gerados para o Profissional e para a Comunidade, que serão explicadas a seguir.

Ao receber a fatura, a empresa realiza o **Pagamento** no endereço informado, um endereço gerado pelo Protocolo que fará o processamento do **Pagamento**.

Ao receber um **Pagamento** , o Protocolo saberá automaticamente de quem vem o dinheiro, sob qual **Contrato** esse pagamento é relativo, quem é o **Profissional** contratado e sob qual Comunidade esse contrato está sendo regido.

Imediatamente no recebimento do dinheiro o protocolo irá então fazer a divisão do pagamento:

1. Transferir o valor do percentual da comunidade para o tesouro, que em geral será uma carteira multi-sign
2. Pagar o uso do protocolo transferindo 0,5% para o tesouro do protocolo
3. Transferir o restante para o membro que executou o serviço
4. Computar o volume de dinheiro recebido distribuído pelas **Habilidades** em função do

peso delas no Contrato. Por exemplo, se o contrato tem duas habilidades com um peso de 50% cada uma, e o pagamento foi de $10K, cada habilidade terá um índice nominal de 5k.

1. Distribuir 50% do valor nominal recebido, em Tokens da Comunidade. Por

exemplo, se o pagamento for de $10.000, serão enviados 5.000 tokens da comunidade para o membro.

O registro dos índices das Habilidades será usado pelo membro como uma prova de currículo. A qualquer momento o profissional poderá comprovar que trabalhou efetivamente com determinadas tecnologias, ferramentas ou processos porque essa prova está relacionada a quanto ele efetivamente recebeu de dinheiro executando um serviço.

Quanto maior o índice, mais tempo o profissional trabalhou naquela habilidade ou mais _sênior_ ele é, considerando que a senioridade está diretamente relacionada ao preço que o profissional consegue cobrar no mercado. No final das contas, quanto mais dinheiro recebido, mais experiência a pessoa tem.

O membro poderá cunhar um NFT que será atualizado com o peso daquela **Habilidade** e a comunidade poderá criar um ranking de profissionais por habilidades, o que vai facilitar as empresas a encontrar os talentos na medida que elas precisam. Esse NFT é Soulbound, our seja, não pode ser transferido entre Carteiras.

A comunidade terá uma receita armazenada no seu tesouro por conta da **Taxa da Comunidade** e poderá usar os recursos para oferecer benefícios para seus membros, tais como:

- Clube de benefícios com descontos em estabelecimentos de interesse da comunidade
- Busca ativa de empresas contratantes para serem clientes contratando os membros,
- Treinamento, cursos e educação gratuita para toda a comunidade ou para os membros participantes do protocolo.

O token da comunidade pode ser usado como gateway de acesso para determinadas áreas ou serviços prestados para a comunidade e/ou ser usado como um token de governança caso a comunidade tenha interesse de se tornar uma DAO (Organização Autônoma Descentralizada).

Em se tratando do caso de uma DAO, o membro terá muito interesse de usar o Protocolo, porque além dos benefícios da **Comunidade** , da prova de currículo, ele poderá ter também a propriedade do negócio com voto sobre as decisões relativas ao dinheiro recebido pela **Taxa da Comunidade** gerados com os trabalhos dos outros membros. Quanto mais ele trabalhar usando o Protocolo, maior parte do negócio ele terá e "mais dono" ele será da DAO.

O token da DAO poderá ter liquidez no mercado secundário e irá valorizar na medida que mais **Profissionais** aderirem à comunidade e resolverem ter suas remunerações recebidas por meio do **Protocolo** , pois isso irá representar mais taxas e maior valor no Tesouro da comunidade.

## Definições

### Entidades

**Comunidade** : A comunidade é uma organização que reúne os Profissionais, em geral de uma mesma área de atuação, gera benefícios para os membros e provê o serviço de recrutamento, seleção para as **Contratantes** que desejam recrutar os membros da comunidade.

**Membro** :Pessoa física ou natural, maior de idade, que faz parte da comunidade e é apto legalmente aexecutar serviço para terceiros.

**Profissional** : Empresa, normalmente unipessoal, que presta o serviço que é executado pela pessoa que é membro da **Comunidade**. Todo membro que deseje usar o protocolo precisa ter uma empresa. Os profissionais precisam ter uma **Identidade** para utilizar o protocolo.

**Contratante** : Empresa que demanda os serviços do **Profissional** e utiliza a Comunidade para encontrar os profissionais e contratá-los. Os **Contratantes** precisam ter uma **Identidade** para utilizar o protocolo.

### Conceitos

**Protocolo** : Conjunto de softwares que rodam de forma descentralizada por meio de contratos inteligentes nas redes suportadas. O **Protocolo** é apenas a parte do sistema que roda on-chain.

**Ferramentas** : Conjunto de softwares que rodam de forma centralizada em servidores hospedados pela empresa que fornece o serviço do Protocolo. Esses sistemas podem ser substituídos por qualquer outro desenvolvido por terceiros ou pela própria comunidade.

**Identidade** : Registro único que é salvo no protocolo e representa uma empresa, sendo Profissional ou Contratante, após ter passado por um processo de KYC (Know your Client) and AML (Anti Money Laundering). Cada **Profissional** e **Contratante** podem ter apenas uma **Identidade** no sistema. A **Identidade** está relacionada com algum documento com valor legal no país de cadastro do documento da empresa. Pessoas físicas não podem criar Identidades no protocolo.

**Carteira** :Endereço público da carteira na blockchain de uma das redes utilizadas pelo **Protocolo**. Uma **Identidade** pode ter múltiplas Carteiras associadas em seu cadastro.

**Tesouro** : Carteira da comunidade para onde vai o dinheiro relativo à **Taxa da Comunidade**

### Arquitetura


**Taxa da Comunidade** : Percentual sobre o valor dos serviços prestados pelo **Profissional** que é retido para o **Tesouro** paraque a Comunidade use em benefícios para todos os **Membros**.

**Token da Comunidade** : Criptomoeda que é entregue ao **Profissional** a cada **Pagamento** recebido e que pode ser usado como gateway de acesso para determinadas áreas ou serviços prestados para a comunidade ou ser usado como um token de governança caso a comunidade tenha interesse de se tornar uma DAO.

**Contrato** : Relação de prestação de serviço entre o **Profissional** e o **Contratante**. Ao utilizar o protocolo, umdos dois cria o **Contrato** para que a partir daí os pagamentos possam ser realizados.

**Habilidade** : Registro de uma habilidade ou conhecimento exigido pela prestação do serviço que é associada ao **Contrato**. Esse registro vai ter um número associado que vai representar a quantia total financeira recebida por Contratos que exigiram determinada **Habilidade**. A partir das **Habilidades** que os **Distintivos** serão criados.

**Fatura** : Documento comercial que registra os detalhes de um **Pagamento** relativo ao **Contrato** firmado entre o **Contratante** e o **Profissional**. A fatura inclui o valor dos serviços realizados, a **Taxa da Comunidade** , a descrição dos serviços, as Habilidades associadas e as informações para o pagamento.

**Pagamento** : Transferência realizada pelo **Contratante** para o **Protocolo** pelo pagamento de uma **Fatura**. O **Protocolo** se encarrega de fazer a divisão, transferir o valor da **Taxa da Comunidade** para o **Tesouro** , a **Taxa do Protocolo** para a carteira do **Protocolo** e o restante para o Profissional. Além de transferir os **Tokens da Comunidade** para o Profissional.

**Distintivos** : Prova de experiência que o **Profissional** pode cunhar em forma de NFT que possui o registro das **Habilidades** e seus índices. O **Distintivo** é somente uma forma de provar as Habilidades.

## Dinâmica Resumida

A **Comunidade** implementa o **Protocolo**.

Os **Contratantes** conseguem recrutar na **Comunidade**.

Os **Profissionais** recebem **Tokens da Comunidade** e NFTs **Distintivos** como prova de habilidades.

A **Comunidade** usa **Tesouro** acumulado com a **Taxa da Comunidade** para oferecer benefícios para os **Profissionais**

O **Contratante** economiza em benefícios de recursos humanos

Se a **Comunidade** for uma DAO, o **Profissional** se torna dono do Gateway de Pagamento que escolheu usar para receber seus pagamentos.

## Benefícios

### Para a Comunidade

`A Comunidade ganha um modelo de negócios sustentável por oferecer a possibilidade de seus membros serem contratados por terceiros. O modelo de negócios consiste em manter uma comunidade ativa engajada, oferecer para o mercado o serviço de recrutamento e seleção otimizados, com o dinheiro arrecadado oferecer benefícios para os **Membros** e para os **Profissionais** contratados.

- Modelo de negócios sustentável
- Fonte de receita recorrente
- Mecanismo de atração de profissionais da mesma área de atuação
- Engajamento dos membros por oferecer trabalho e emprego
- Sustentabilidade e crescimento

### Para os Profissionais

O **Profissional** tem muitas vantagens em escolher receber sua remuneração por meio do Protocolo. A pessoa ganha benefícios oferecidos pela comunidade e em se tratando de DAOs, ganha também propriedade do negócio. A ideia é que a **Taxa da Comunidade** seja inferior às taxa empregadas pelos gateways de mercado, então será uma negociação com poucas barreiras para o **Profissional** fazer com que seu **Contratante** pague através do **Protocolo**.

- Benefícios da Comunidade
- Prova de currículo
- Distintivos de suas habilidades com o peso baseado no valor financeiro recebido
- Ferramenta de faturamento
- Nos casos de DAOs:
  - Propriedade da Comunidade
  - Governança sobre o Tesouro que guarda as Taxas da Comunidade (é como ser o dono do Paypal)

### Para os Contratantes

Os contratantes ganham no seu processo de contratação de serviços de profissionais liberais ou empreendedores solo. O **Protocolo** viabiliza o recrutamento e seleção de talentos de uma **Comunidade** que reúne **Profissionais** da mesma área de atuação. Em um lugar só é possível achar a pessoa ideal.

- Benefícios da Comunidade para os contratados
- Prova de contratação
- Gateway de pagamento
- Ferramenta de busca e seleção de profissionais
- Gestão e histórico de contratações