# Boas vindas ao projeto de Receitas!
Projeto feito durante o curso de desenvolvimento web na trybe.

Foi desenvolvido um app de receitas, utilizando React Hooks e Context API.
Nele é possível ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks.
A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas.
O layout tem como foco dispositivos móveis, então todos os protótipos vão estar desenvolvidos em telas menores.

## Habilidades
  - Utilizar _Redux_ para gerenciar estado

  - Utilizar a biblioteca _React-Redux_

  - Utilizar a Context API do _React_ para gerenciar estado

  - Utilizar o _React Hook useState_

  - Utilizar o _React Hook useContext_

  - Utilizar o _React Hook useEffect_

  - Criar Hooks customizados

# Desenvolvimento

<details>
  <summary>
    <h3>
      Antes de começar a desenvolver
    </h3>
  </summary>

1. Clone o repositório
  * `git clone git@github.com:mabiiak/app-de-receitas.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd app-de-receitas`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)

3. Adicione qualquer mudança ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listadas as novas alterações em vermelho)
  * Adicione o arquivo alterado ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listadas as novas alterações em verde)
  * Faça seus `commit`
      * Exemplo:
        * `git commit -m 'cria componente de input`
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

4. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin nome-da-sua-nova-branch`

5. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/mabiiak/app-de-receitas/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a branch do grupo, `main-group-XX`, e a sua branch **com atenção**
  * Coloque um título para a sua _Pull Request_
    * Exemplo: _"[GRUPO XX] Cria tela de busca"_
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/mabiiak/app-de-receitas/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary>
    <h3>
      APIs
    </h3>
    </summary>

## TheMealDB API

O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.

Os end-points são bastante ricos, você pode [vê-los aqui](https://www.themealdb.com/api.php)

O modelo de resposta para uma `meal` é o seguinte:
  <details>
    <summary>Ver modelo de resposta para uma meal</summary>

  ```json
    {
      "meals":[
          {
            "idMeal":"52882",
            "strMeal":"Three Fish Pie",
            "strDrinkAlternate":null,
            "strCategory":"Seafood",
            "strArea":"British",
            "strInstructions":"Preheat the oven to 200C\/400F\/Gas 6 (180C fan).\r\nPut the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary.\r\nFor the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth.\r\nAdd the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm.\r\nSpoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese.\r\nBake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.",
            "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg",
            "strTags":"Fish,Seafood,Dairy,Pie",
            "strYoutube":"https:\/\/www.youtube.com\/watch?v=Ds1Jb8H5Sg8",
            "strIngredient1":"Potatoes",
            "strIngredient2":"Butter",
            "strIngredient3":"Milk",
            "strIngredient4":"Gruy\u00e8re",
            "strIngredient5":"Butter",
            "strIngredient6":"Leek",
            "strIngredient7":"Plain Flour",
            "strIngredient8":"White Wine",
            "strIngredient9":"Milk",
            "strIngredient10":"Parsley",
            "strIngredient11":"Salmon",
            "strIngredient12":"Haddock",
            "strIngredient13":"Smoked Haddock",
            "strIngredient14":"Eggs",
            "strIngredient15":"",
            "strIngredient16":"",
            "strIngredient17":"",
            "strIngredient18":"",
            "strIngredient19":"",
            "strIngredient20":"",
            "strMeasure1":"1kg",
            "strMeasure2":"Knob",
            "strMeasure3":"Dash",
            "strMeasure4":"50g",
            "strMeasure5":"75g",
            "strMeasure6":"2 sliced",
            "strMeasure7":"75g",
            "strMeasure8":"150ml",
            "strMeasure9":"568ml",
            "strMeasure10":"2 tbs chopped",
            "strMeasure11":"250g",
            "strMeasure12":"250g",
            "strMeasure13":"250g",
            "strMeasure14":"6",
            "strMeasure15":"",
            "strMeasure16":"",
            "strMeasure17":"",
            "strMeasure18":"",
            "strMeasure19":"",
            "strMeasure20":"",
            "strSource":"https:\/\/www.bbc.co.uk\/food\/recipes\/three_fish_pie_58875",
            "dateModified":null
          }
      ]
    }
  ```
---

Os ingredientes seguem uma ordem lógica onde o nome dele (`strIngredient1`) e a quantidade (`strMeasure1`) tem o mesmo número no final (1, nesse caso).

É possível listar todas as `categorias`, `nacionalidades` (vindas da API como "areas") e `ingredientes`:

```
categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
nacionalidades: https://www.themealdb.com/api/json/v1/1/list.php?a=list
ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
```

As fotos dos ingredientes vêm de um end-point padronizado com a seguinte lógica:

```
https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}.png
// exemplo com "Lime"
https://www.themealdb.com/images/ingredients/Lime.png
```

### The CockTailDB API

Bem similar (inclusive mantida pela mesma entidade) a TheMealDB API, só que focado em bebidas.

Os end-points também são bastante ricos, você pode [vê-los aqui](https://www.thecocktaildb.com/api.php)

As respostas seguem a mesma estrutura, com algumas particularidades relativas às bebidas (como ser ou não alcoólica, por exemplo)

  <details>
    <summary>Ver modelo de resposta para drinks</summary>

  ```json
    {
      "drinks":[
          {
            "idDrink":"17256",
            "strDrink":"Martinez 2",
            "strDrinkAlternate":null,
            "strDrinkES":null,
            "strDrinkDE":null,
            "strDrinkFR":null,
            "strDrinkZH-HANS":null,
            "strDrinkZH-HANT":null,
            "strTags":null,
            "strVideo":null,
            "strCategory":"Cocktail",
            "strIBA":null,
            "strAlcoholic":"Alcoholic",
            "strGlass":"Cocktail glass",
            "strInstructions":"Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.",
            "strInstructionsES":null,
            "strInstructionsDE":"Alle Zutaten in ein Mischglas geben und mit Eis f\u00fcllen. Bis zum Abk\u00fchlen umr\u00fchren und in ein gek\u00fchltes Coup\u00e9glas abseihen.",
            "strInstructionsFR":null,
            "strInstructionsZH-HANS":null,
            "strInstructionsZH-HANT":null,
            "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/fs6kiq1513708455.jpg",
            "strIngredient1":"Gin",
            "strIngredient2":"Sweet Vermouth",
            "strIngredient3":"Maraschino Liqueur",
            "strIngredient4":"Angostura Bitters",
            "strIngredient5":null,
            "strIngredient6":null,
            "strIngredient7":null,
            "strIngredient8":null,
            "strIngredient9":null,
            "strIngredient10":null,
            "strIngredient11":null,
            "strIngredient12":null,
            "strIngredient13":null,
            "strIngredient14":null,
            "strIngredient15":null,
            "strMeasure1":"1 1\/2 oz",
            "strMeasure2":"1 1\/2 oz",
            "strMeasure3":"1 tsp",
            "strMeasure4":"2 dashes",
            "strMeasure5":null,
            "strMeasure6":null,
            "strMeasure7":null,
            "strMeasure8":null,
            "strMeasure9":null,
            "strMeasure10":null,
            "strMeasure11":null,
            "strMeasure12":null,
            "strMeasure13":null,
            "strMeasure14":null,
            "strMeasure15":null,
            "strCreativeCommonsConfirmed":"No",
            "dateModified":"2017-12-19 18:34:15"
          }
      ]
    }
  ```

</details>

<details>
  <summary>
    <h3>
      Rotas
    </h3>
  </summary>

As rotas a serem utilizadas na aplicação devem ser as seguintes:

* Tela de login: `/`;
* Tela principal de receitas de comidas: `/foods`;
* Tela principal de receitas de bebidas: `/drinks`;
* Tela de detalhes de uma receita de comida: `/foods/{id-da-receita}`;
* Tela de detalhes de uma receita de bebida: `/drinks/{id-da-receita}`;
* Tela de receita em progresso de comida: `/foods/{id-da-receita}/in-progress`;
* Tela de receita em progresso de bebida: `/drinks/{id-da-receita}/in-progress`;
* Tela de explorar: `/explore`;
* Tela de explorar comidas: `/explore/foods`;
* Tela de explorar bebidas: `/explore/drinks`;
* Tela de explorar comidas por ingrediente: `/explore/foods/ingredients`;
* Tela de explorar bebidas por ingrediente: `/explore/drinks/ingredients`;
* Tela de explorar comidas por nacionalidade: `/explore/foods/nationalities`;
* Tela de perfil: `/profile`;
* Tela de receitas feitas: `/done-recipes`;
* Tela de receitas favoritas: `/favorite-recipes`.
</details>

## Requisitos

    ❌ 1 - Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90%

## Tela de login

    ✅ 2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login

    ✅ 3 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever seu email no input de email

    ✅ 4 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever sua senha no input de senha

    ✅ 5 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos

    ✅ 6 - Salve 2 tokens no localStorage após a submissão, identificados pelas chaves mealsToken e cocktailsToken

    ✅ 7 - Salve o e-mail da pessoa usuária no localStorage na chave user após a submissão

    ✅ 8 - Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login

## Header

    ✅ 9 - Implemente os elementos do header na tela principal de receitas, respeitando os atributos descritos no protótipo

    ✅ 10 - Implemente um ícone para a tela de perfil, um título e um ícone para a busca, caso exista no protótipo

    ✅ 11 - Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil

    ✅ 12 - Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la

## Barra de busca - Header

    ✅ 13 - Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo

    ✅ 14 - Posicione a barra logo abaixo do header e implemente 3 radio buttons: Ingredient, Name e First letter

    ✅ 15 - Busque na API de comidas caso a pessoa esteja na página de comidas e na de bebidas caso esteja na de bebidas

    ✅ 16 - Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL

    ✅ 17 - Mostre as receitas em cards caso mais de uma receita seja encontrada

    ✅ 18 - Exiba um `alert` caso nenhuma receita seja encontrada

## Menu inferior

    ✅ 19 - Implemente os elementos do menu inferior respeitando os atributos descritos no protótipo

    ✅ 20 - Posicione o menu inferior de forma fixa e apresente 3 ícones: um para comidas, um para bebidas e outro para exploração

    ✅ 21 - Exiba o menu inferior apenas nas telas indicadas pelo protótipo

    ✅ 22 - Redirecione a pessoa usuária para uma lista de cocktails ao clicar no ícone de bebidas

    ✅ 23 - Redirecione a pessoa usuária para a tela de explorar ao clicar no ícone de exploração

    ✅ 24 - Redirecione a pessoa usuária para uma lista de comidas ao clicar no ícone de comidas

    ✅ 25 - Implemente os elementos da tela principal de receitas respeitando os atributos descritos no protótipo

    ✅ 26 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card

    ✅ 27 - Implemente os botões de categoria para serem utilizados como filtro

    ✅ 28 - Implemente o filtro das receitas através da API ao clicar no filtro de categoria

    ✅ 29 - Implemente o filtro como um toggle, que se for selecionado de novo, o app deve retornar as receitas sem nenhum filtro

    ✅ 30 - Implemente o filtro de categoria para que apenas um seja selecionado por vez

    ✅ 31 - Desenvolva o filtro de categorias com a opção de filtrar por todas as categorias

    ✅ 32 - Redirecione a pessoa usuária, ao clicar no card, para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL

    ✅ 33 - Implemente os elementos da tela de detalhes de uma receita respeitando os atributos descritos no protótipo

    ✅ 34 - Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL

    ✅ 35 - Desenvolva a tela de forma que contenha uma imagem da receita, o título, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações

    ✅ 36 - Implemente as recomendações, para receitas de comida, a recomendação deverá ser bebida e vice-versa

    ✅ 37 - Implemente os cards de recomendação, onde serão 6 cards, mas mostrando apenas 2 e o scroll é horizontal, similar a um `carousel`

    ✅ 38 - Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo

    ✅ 39 - Implemente a solução de forma que caso a receita já tenha sido feita, o botão "Start Recipe" deve sumir

    ✅ 40 - Implemente a solução de modo que caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"

    ✅ 41 - Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso

    ✅ 42 - Implemente um botão de compartilhar e um de favoritar a receita

    ✅ 43 - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer

    ✅ 44 - Implemente o ícone do coração (favorito) de maneira que, deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário

    ✅ 45 - Implemente a lógica no botão de favoritar, caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa

    ✅ 46 - Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`

    ✅ 47 - Desenvolva a tela de maneira que contenha uma imagem da receita, seu titulo, sua categoria (ou se a bebida é alcoólica ou não) uma lista de ingredientes com suas respectivas quantidades e suas instruções

    ✅ 48 - Desenvolva um checkbox para cada item da lista de ingredientes

    ✅ 49 - Implemente uma lógica que, ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista

    ❌ 50 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita

    ✅ 51 - Desenvolva a lógica de favoritar e compartilhar, a lógica da tela de detalhes de uma receita se aplica aqui

    ❌ 52 - Implemente a solução de maneira que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)

    ❌ 53 - Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser `/done-recipes`

## Tela de receitas feitas

    ✅ 54 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo

    ✅ 55 - Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar

    ✅ 56 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar

    ✅ 57 - Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

    ✅ 58 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

    ✅ 59 - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita

## Tela de receitas favoritas

    ❌ 60 - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas) respeitando os atributos descritos no protótipo

    ❌ 61 - Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a nacionalidade, um botão de compartilhar e um de "desfavoritar"

    ❌ 62 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"

    ❌ 63 - Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

    ❌ 64 - Desenvolva a solução de maneira que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela

    ❌ 65 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

    ❌ 66 - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita

## Tela de explorar

    ✅ 67 - Implemente os elementos da tela de explorar respeitando os atributos descritos no protótipo

    ✅ 68 - Desenvolva a tela de maneira que tenha 2 botões: um para explorar comidas e o outro para explorar bebidas

    ✅ 69 - Redirecione a pessoa usuária ao clicar em um dos botões, a rota deve mudar para a página de explorar comidas ou de explorar bebidas

## Tela de explorar bebidas ou comidas

    ✅ 70 - Implemente os elementos da tela de explorar bebidas ou comidas respeitando os atributos descritos no protótipo

    ✅ 71 - Desenvolva 3 botões: um para explorar por ingrediente, um para explorar por nacionalidade e um para pegar uma receita aleatória

    ✅ 72 - Redirecione a pessoa usuária ao clicar em "By Ingredient", para a tela de explorar por ingredientes

    ✅ 73 - Redirecione a pessoa usuária ao clicar em "By Nationality", a rota deve mudar para tela de explorar por nacionalidades

    ✅ 74 - Redirecione a pessoa usuária ao clicar em "Surprise me!", a rota deve mudar para a tela de detalhes de uma receita, que deve ser escolhida de forma aleatória através da API

## Tela de explorar ingredientes

    ✅ 75 - Implemente os elementos da tela de explorar ingredientes respeitando os atributos descritos no protótipo

    ✅ 76 - Desenvolva cards para os 12 primeiros ingredientes, de forma que cada card contenha o nome do ingrediente e uma foto

    ❌ 77 -  Redireciona a pessoa usuária ao clicar no card do ingrediente, a rota deve mudar para tela principal de receitas mas mostrando apenas as receitas que contém o ingrediente escolhido

## Tela de explorar por nacionalidades

    ✅ 78 - Implemente os elementos da tela de explorar por nacionalidades respeitando os atributos descritos no protótipo

    ✅ 79 - Desenvolva as mesmas especificações da tela de receitas principal, com a diferença de que os filtros de categoria são substituídos por um dropdown

    ✅ 80 - Implemente o dropdown de maneira que devem estar disponíveis todas as áreas retornadas da API, incluindo a opção "All", que retorna as receitas sem nenhum filtro

    ✅ 81 - Implemente a rota que deve ser apenas `/explore/foods/nationalities`

## Tela de perfil

    ✅ 82 - Implemente os elementos da a tela de perfil respeitando os atributos descritos no protótipo

    ✅ 83 - Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível

    ✅ 84 - Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"

    ✅ 85 - Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas

    ✅ 86 - Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas

    ✅ 87 - Redirecione a pessoa usuária que, ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login
