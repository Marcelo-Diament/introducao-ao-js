window.onload = () => {
    
    // Aula 02 | Parte 01 - Funções de Array
     console.log('%c\n\nAULA 01 | PARTE 01\t\nFunções de Array\t\n\n', 'background-color:#f15722;color:#000000;font-size:32px;');

    
    // Map
    console.log('%c\n\nmap\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    const produtosCompletos = [
        {
            "id" : 0,
            "titulo" : "Cola para PostIt velho",
            "categoria" : "Informática",
            "sku" : "ABC012345",
            "codigoBarras" : "0123-4567-8910-12345",
            "descricao" : "É uma cola muito boa para colar post-its velhos e sem cola",
            "preco" : 15.5,
            "emPromocao" : false,
            "estoque" : 0,
            "permiteEncomenda" : false

        },
        {
            "id" : 1,
            "titulo" : "Clips para conserto de tiras de Havaianas",
            "categoria" : "Moda",
            "sku" : "XYZ98765",
            "codigoBarras" : "0123-9874-4568-65456",
            "descricao" : "Clipes resistentes, com certeza sua \'chinela\' nunca mais vai soltar!",
            "preco" : 10.50,
            "emPromocao" : true,
            "estoque" : 26,
            "permiteEncomenda" : true
        },
        {
            "id" : 2,
            "titulo" : "Pente de mão para carecas",
            "categoria" : "Cabelo",
            "sku" : "AAA45687",
            "codigoBarras" : "4565-4565-7898-78965",
            "descricao" : "Pente com encaixe de dedo para puxar os cabelos para o lado e disfarçar a sua careca - ótimo para pentear os cabelos enquanto dirige táxi",
            "preco" : 19.99,
            "emPromocao" : false,
            "estoque" : 1,
            "permiteEncomenda" : true
        }
    ];
    
    console.log('\n\nArray com o qual trabalharemos a função reduce:\n\n\n\tvar produtosCompletos = [\n\n\t\t{\n\n\t\t\t"id" : 0,\n\n\t\t\t"titulo" : "Cola para PostIt velho",\n\n\t\t\t"categoria" : "Informática",\n\n\t\t\t"sku" : "ABC012345",\n\n\t\t\t"codigoBarras" : "0123-4567-8910-12345",\n\n\t\t\t"descricao" : "É uma cola muito boa para colar post-its velhos e sem cola",\n\n\t\t\t"preco" : 15.5,\n\n\t\t\t"emPromocao" : false,\n\n\t\t\t"estoque" : 156,\n\n\t\t\t"permiteEncomenda" : false\n\n\t\t},\n\n\t\t{\n\n\t\t\t"id" : 1,\n\n\t\t\t"titulo" : "Clips para conserto de tiras de Havaianas",\n\n\t\t\t"categoria" : "Moda",\n\n\t\t\t"sku" : "XYZ98765",\n\n\t\t\t"codigoBarras" : "0123-9874-4568-65456",\n\n\t\t\t"descricao" : "Clipes resistentes, com certeza sua \'chinela\' nunca mais vai soltar!",\n\n\t\t\t"preco" : 10.50,\n\n\t\t\t"emPromocao" : true,\n\n\t\t\t"estoque" : 26,\n\n\t\t\t"permiteEncomenda" : true\n\n\t\t},\n\n\t\t{\n\n\t\t\t"id" : 2,\n\n\t\t\t"titulo" : "Pente de mão para carecas",\n\n\t\t\t"categoria" : "Cabelo",\n\n\t\t\t"sku" : "AAA45687",\n\n\t\t\t"codigoBarras" : "4565-4565-7898-78965",\n\n\t\t\t"descricao" : "Pente com encaixe de dedo para puxar os cabelos para o lado e disfarçar a sua careca - ótimo para pentear os cabelos enquanto dirige táxi",\n\n\t\t\t"preco" : 19.99,\n\n\t\t\t"emPromocao" : false,\n\n\t\t\t"estoque" : 1,\n\n\t\t\t"permiteEncomenda" : true\n\n\t\t},\n\n\t];\n\n\nNosso desafio é trazer apenas o nome dos produtos, para listá-los para nosso cliente. Então vamos usar o map para isso!\n\nMas antes, vamos ver como se parece nosso array aqui no console:\n\n\n');
    console.log(produtosCompletos);

    console.log('\n\n\tvar produtosMapeados = produtosCompletos.map(function(produto) {\n\n\t\treturn produto.titulo;\n\n\t});\n\n\n');
    var produtosMapeados = produtosCompletos.map(function(produto) {
        return produto.titulo;
    });
    console.log('\n\nComo podemos ver, agora temos o array produtosMapeados (retorno do map):');
    console.log(produtosMapeados);

    console.log('\n\nAgora um simples loop nos retorna os nomes dos produtos:');
    console.log('\n\n\tfor( nomeDoProduto of produtosMapeados ) {\n\n\t\tconsole.log(`\\n${nomeDoProduto}\\n\\n`);\n\n\t};\n\n\n');

    for( nomeDoProduto of produtosMapeados ) {

        console.log(`\n${nomeDoProduto}\n\n`);

    };

    console.log('%c\n\nDe forma resumida, o map basicamente nos retorna um novo array com a propriedade que desejamos mapear. Declare as variáveis produtosCompletos e produtosMapeados para entender a diferença entre o array original e o retorno do nosso map().\n\n', 'background-color:#09c9e8;color:#000000;font-size:20px;');

    

    // Filter
    console.log('%c\n\nfilter\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    var candidatos = [
        {
            "nome" : "Fulano",
            "sobrenome" : "da Silva",
            "idade" : 21
        },
        {
            "nome" : "Ciclano",
            "sobrenome" : "Santos",
            "idade" : 22
        },
        {
            "nome" : "Beltrano",
            "sobrenome" : "da Silva Santos",
            "idade" : 36
        },
        {
            "nome" : "Juliano",
            "sobrenome" : "Silva dos Santos",
            "idade" : 16
        }
    ];

    console.log('\n\nArray com o qual trabalharemos a função filter:\n\n\n\tvar candidatos = [\n\n\t\t{\n\n\t\t\t"nome" : "Fulano",\n\n\t\t\t"sobrenome" : "da Silva",\n\n\t\t\t"idade" : 21,\n\n\t\t},\n\n\t\t{\n\n\t\t\t"nome" : "Ciclano",\n\n\t\t\t"sobrenome" : "Santos",\n\n\t\t\t"idade" : 22,\n\n\t\t},\n\n\t\t{\n\n\t\t\t"nome" : "Beltrano",\n\n\t\t\t"sobrenome" : "da Silva Santos",\n\n\t\t\t"idade" : 36,\n\n\t\t},\n\n\t\t{\n\n\t\t\t"nome" : "Juliano",\n\n\t\t\t"sobrenome" : "Silva dos Santos",\n\n\t\t\t"idade" : 16,\n\n\t\t}\n\n\t];\n\n\n');

    console.log('\n\nAgora vamos filtrar apenas os candidatos com menos de 30 anos e salvá-los em uma variável chamada \'candidatosComMenosDe30\':\n\n\n')

    console.log('\n\n\tcandidatosComMenosDe30 = candidatos.filter( function(candidato) {\n\n\t\treturn candidato.idade < 30;\n\n\t});\n\n\n');

    candidatosComMenosDe30 = candidatos.filter( function(candidato) {
        return candidato.idade < 30;
    });

    console.log('\n\nA variável \'candidatosComMenosDe30\' ficou assim:\n\n\n');
    console.log(candidatosComMenosDe30);

    console.log('\n\nE... para refrescarmos a memória, fazermos um loop aninhado a outro para exibirmos todos os dados dos candidatos com menos de 30 anos usando o loop for of e for in.\n\nE ainda de quebra, usaremos um if ternário para deixarmos nosso console mais limpo e legível.\n\n\n');

    for ( candidato of candidatosComMenosDe30 ) {

        for ( dado in candidato ) {

            console.log(`${dado} : ${candidato[dado]}`);

        };

        candidatosComMenosDe30.indexOf(candidato) < candidatosComMenosDe30.length - 1
            ? console.log('\n_________\n\n\n')
            : console.log('\n\nOs candidatos acima são todos os candidatos com idade inferior a 30 anos. =)\n\n\n');

    };

    console.log('%c\n\nComo o próprio nome diz, a função filter() nos retorna um novo array com os itens do array original filtrados - de acordo com o filtro que aplicarmos no return.\n\n', 'background-color:#09c9e8;color:#000000;font-size:20px;');



    // Reduce
    console.log('%c\n\nreduce\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    var pontuacao = [
        {
            "nome" : "Abirosvaldo",
            "pontos" : 100
        },
        {
            "nome" : "Ciclano",
            "pontos" : 10
        },
        {
            "nome" : "Beltrano",
            "pontos" : 46
        },
        {
            "nome" : "Juliano",
            "pontos" : 90
        }
    ];
    
    console.log('\n\nArray com o qual trabalharemos a função reduce:\n\n\n\tvar pontosTotais = [\n\n\t\t{\n\n\t\t\t"nome" : "Abirosvaldo",\n\n\t\t\t"pontos" : 21,\n\n\t\t},\n\n\t\t{\n\n\t\t\t"nome" : "Ciclano",\n\n\n\t\t\t"pontos" : 22,\n\n\t\t},\n\n\t\t{\n\n\t\t\t"nome" : "Beltrano",\n\n\t\t\t"pontos" : 36,\n\n\t\t},\n\n\t\t{\n\n\t\t\t"nome" : "Juliano",\n\n\t\t\t"pontos" : 16,\n\n\t\t}\n\n\t];\n\n\nA ideia é calcularmos a média das notas de todo o concurso.\n\nEntão pegaremos cada pontuação - através do map.\n\nPor fim, receberemos o total de pontos a partir da função reduce aplicada ao array retornado pelo map (e para descobrirmos a média final, basta dividirmos o retorno por 4).\n\nObs.: a média final deve ser 61,5 - é a soma das 4 notas dividida por 4. Vamos ver o resultado!\n\n\n');

    console.log('\n\n\tvar pontosMapeados = pontuacao.map(function(pontosDoArray) {\n\n\t\treturn pontosDoArray.pontos;\n\n\t});\n\n\n');
    var pontosMapeados = pontuacao.map(function(pontosDoArray) {
        return pontosDoArray.pontos;
    });
    console.log('\n\nComo podemos ver, agora temos o array pontosMapeados (retorno do map):');
    console.log(pontosMapeados);

    console.log('E, agora sim, podemos aplicar nosso reduce:');
    console.log('\n\n\tvar totalDePontos = pontosMapeados.reduce(function (anterior, atual) {\n\n\t\treturn ( anterior + atual ) / 2;\n\n\t});\n\n\n');
    var totalDePontos = pontosMapeados.reduce(function (anterior, atual) {

        return anterior + atual;

    });
    console.log(`\n\nO retorno de nosso reduce (soma das pontuações) é: ${totalDePontos}.\n\n\n`);

    console.log('\n\n\tvar mediaFinal = totalDePontos / 4;\n\n\n');
    var mediaFinal = totalDePontos/4;
    console.log(`\n\nEntão temos o resultado desejado (mediaFinal): ${mediaFinal}.\n\n\n`);


    console.log('%c\n\nO reduce() basicamente faz operações - matemáticas ou não - com os itens do array, dividindo em pares (atual e anterior).\n\n', 'background-color:#09c9e8;color:#000000;font-size:20px;');



    console.log('%c\n\nDESAFIO!!!%c\n\nConsiderando o array \'desafio\' o seguinte problema: queremos receber um array com todos os produtos que possuam estoque, listando o título, categoria, valor e estoque.\n\n', 'background-color:yellowgreen;color:#000000;font-size:56px;font-weight:bold', 'background-color:yellowgreen;color:#000000;font-size:28px;');

    const desafio = [
        {
            "id" : 0,
            "titulo" : "Cola para PostIt velho",
            "categoria" : "Informática",
            "sku" : "ABC012345",
            "codigoBarras" : "0123-4567-8910-12345",
            "descricao" : "É uma cola muito boa para colar post-its velhos e sem cola",
            "preco" : 15.5,
            "emPromocao" : false,
            "estoque" : 10,
            "permiteEncomenda" : false

        },
        {
            "id" : 1,
            "titulo" : "Clips para conserto de tiras de Havaianas",
            "categoria" : "Moda",
            "sku" : "XYZ98765",
            "codigoBarras" : "0123-9874-4568-65456",
            "descricao" : "Clipes resistentes, com certeza sua \'chinela\' nunca mais vai soltar!",
            "preco" : 10.50,
            "emPromocao" : true,
            "estoque" : 106,
            "permiteEncomenda" : true
        },
        {
            "id" : 2,
            "titulo" : "Pente de mão para carecas",
            "categoria" : "Cabelo",
            "sku" : "AAA45687",
            "codigoBarras" : "4565-4565-7898-78965",
            "descricao" : "Pente com encaixe de dedo para puxar os cabelos para o lado e disfarçar a sua careca - ótimo para pentear os cabelos enquanto dirige táxi",
            "preco" : 19.99,
            "emPromocao" : false,
            "estoque" : 1,
            "permiteEncomenda" : true
        },
        {
            "id" : 3,
            "titulo" : "Plástico Bolha Usado",
            "categoria" : "Embalagens",
            "sku" : "AEFAEC65a595",
            "codigoBarras" : "7898-78965-4565-47565",
            "descricao" : "Para você que não consegue se segurar e estoura todas as bolhas do plástico bolha, chegou a solução - nosso plástico bolha já vem com as bolhas estouradas!",
            "preco" : 819.99,
            "emPromocao" : false,
            "estoque" : 14,
            "permiteEncomenda" : true
        },
        {
            "id" : 4,
            "titulo" : "Dente de Leite",
            "categoria" : "Esoterismo",
            "sku" : "ESF684FES684",
            "codigoBarras" : "7898-78965-4565-45695",
            "descricao" : "Compre um kit com 15 unidades e espere pela fada do dente - oportunidade única!",
            "preco" : 89.99,
            "emPromocao" : true,
            "estoque" : 0,
            "permiteEncomenda" : true
        },
        {
            "id" : 5,
            "titulo" : "Alarme com Delay",
            "categoria" : "Segurança",
            "sku" : "191AAEFAEF0984",
            "codigoBarras" : "4849-78965-4565-4565",
            "descricao" : "Não assuste o bandido! Com nosso alarme, a polícia só será chamada 3 dias úteis após o ocorrido.",
            "preco" : 1.49,
            "emPromocao" : true,
            "estoque" : 5,
            "permiteEncomenda" : false
        },
        {
            "id" : 6,
            "titulo" : "Perfume sem cheiro",
            "categoria" : "Perfumaria",
            "sku" : "191AA2626EF0984",
            "codigoBarras" : "4849-78965-4758-4565",
            "descricao" : "Cansado de perfumes fortes e fedidos? Compre nosso perfume sem cheiro - pode até não agradar, mas desagradar também não vai!",
            "preco" : 199.00,
            "emPromocao" : true,
            "estoque" : 50,
            "permiteEncomenda" : false
        },
        {
            "id" : 7,
            "titulo" : "Bússola para Almas",
            "categoria" : "Esoterismo",
            "sku" : "191AA26FEREF0984",
            "codigoBarras" : "6649-7666-4758-46665",
            "descricao" : "Ideal para almas perdidas",
            "preco" : 1999.00,
            "emPromocao" : true,
            "estoque" : 90,
            "permiteEncomenda" : false
        }
    ];

    console.log('%c\n\nTente resolver por conta própria antes de verificar o arquivo!\n\n\nAbaixo, a variável desafio - para que possa analisar a melhor forma de resolver o desafio!\n\n\n','background-color:#14b3c7;color:#000000;font-size:28px;');
    console.log(desafio);

    // RESPOSTA:

    const produtosComEstoque = desafio.filter( function(emEstoque) {

        return emEstoque.estoque > 0;

    });

    var resultado = [];
    
    const produtosFinais = produtosComEstoque.reduce( ( anterior, atual ) => {
        
        if ( anterior["titulo"] !== undefined ) {

            resultado.push([`\n\n\t\t### ${anterior["titulo"]} - ${anterior["categoria"]} ###\t\t\n\t\t### Por apenas R$ ${anterior["preco"]} (${anterior["estoque"]} unidades em estoque) ###\t\t`]);
            resultado.push([`\n\n\t\t### ${atual["titulo"]} - ${atual["categoria"]} ###\t\t\n\t\t### Por apenas R$ ${atual["preco"]} (${atual["estoque"]} unidades em estoque) ###\t\t`]);
        
        } else {

            resultado.push([`\n\n\t\t### ${atual["titulo"]} - ${atual["categoria"]} ###\t\t\n\t\t### Por apenas R$ ${atual["preco"]} (${atual["estoque"]} unidades em estoque) ###\t\t`]);
        
        };
        
        return resultado;

    });

    console.log('%c\n\nDica: veja parte dos resultados para ajudar a traçar uma possível solução\n\n\n','background-color:#14b3c7;color:#000000;font-size:28px;');

    // Resultado do filter
    console.log(produtosComEstoque);

    // Resultado do reduce
    console.log(resultado);

    console.log('%c\n\nResultado esperado:\n\n\n','background-color:#14b3c7;color:#000000;font-size:28px;');

    for(produto of resultado) {
        console.log(`%c${produto}`,'background-color:darkorange;color:#fff;font-size:20px;')
    }


}