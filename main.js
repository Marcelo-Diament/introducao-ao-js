window.onload = () => {



    // Aula 01 | Parte 01 - Console Log
    console.log('%c\n\nAULA 01 | PARTE 01\t\nconsole.log( )\t\t\n\n', 'background-color:#f15722;color:#000000;font-size:32px;');

    console.log('%c\n\nconsole.log( )\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');
    console.log('\n\nEssa mensagem está sendo enviada através da função nativa\n\n\n\tconsole.log()\n\n\n%cDê uma olhada no arquivo main.js e entenda como aplicar estilo nos registros do console\n\n', 'font-style: italic');



    // Aula 01 | Parte 02 - Variáveis e Tipos de Dados
    console.log('%c\n\nAULA 01 | PARTE 02\t\nVariáveis e\t\t\t\nTipos de Dados\t\t\n', 'background-color:#f15722;color:#000000;font-size:32px;');

    // Variável com valor do tipo String
    console.log('%c\n\nString\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');
    var variavelComString = "Minha variável com String";
    console.log('\n\nVariável com String:\n\n\n\t' + variavelComString + '\n\n\n');

    // Variável com valor do tipo Number
    console.log('%c\n\nNumber\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');
    var variavelComNumber = 420;
    console.log('\n\nVariável com Number:\n\n\n\t' + variavelComNumber + '\n\n\n');

    // Variável com valor do tipo BigInt
    console.log('%c\n\nBigInt\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');
    var variavelComBigInt = 9876543210123456789987654321013456789;
    console.log('\n\nVariável com BigInt:\n\n\n\t' + variavelComBigInt + '\n\n\n%cSão números com valor superior a 2 elevado a 53\nou inferior a -2 elevado a 53\n\n', 'font-style: italic');

    // Variável com valor do tipo Boolean
    console.log('%c\n\nBoolean\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');
    var variavelComBoolean = true;
    console.log('\n\nVariável com Boolean:\n\n\n\t' + variavelComBoolean + '\n\n\n');

    // Variável com valor do tipo Array
    console.log('%c\n\nArray\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');
    var variavelComArray = ["Elemento 01", "Elemento 02", "Elemento 03"];
    console.log('\n\nVariável com Array:\n\n\n\t' + variavelComArray + '\n\n\n');
    console.log('\n\nÍndice específico do Array:\n\n\n\t' + variavelComArray[0] + '\n\n\n');

    // Variável com valor do tipo Object
    console.log('%c\n\nObject\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');
    var variavelComObject = {
        "propriedade01": "valor 01",
        "propriedade02": "valor 02",
        "propriedade03": "valor 03"
    };
    console.log('\n\nVariável com Object:\n\n\n\t' + variavelComObject + '\n\n\n%cPerceba que ao chamarmos um objeto,\nele não nos traz os valores como o array,\npois precisamos acessar suas propriedades\n\n', 'font-style: italic');
    console.log('\n\nPropriedade específica do Object com colchetes:\n\n\n\t' + variavelComObject['propriedade01'] + '\n\n\n');
    console.log('\n\nPropriedade específica do Object com ponto:\n\n\n\t' + variavelComObject.propriedade01 + '\n\n\n');



    // Aula 01 | Parte 03 - Escopo das Variáveis
    console.log('%c\n\nAULA 01 | PARTE 03\t \nEscopo Global e Local\n\n', 'background-color:#f15722;color:#000000;font-size:32px;');

    // Declarando diferentes os tipos de variáveis (var, let e const) no escopo global
    var minhaVariavelGlobal = 'Minha Variável Global';
    let minhaLetGlobal = 'Minha Let Global';
    const minhaConstGlobal = 'Minha Const Global';
    minhaVariavelGlobalSemPrefixo01 = 'Minha Variável Global Sem Prefixo 01';

    // Chamando as variáveis globais no escopo global
    console.log('%c\n\nVariáveis Globais em Escopo Global\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');
    console.log('\n\nMinha variável declarada no escopo global chamada no escopo global também:\n\n\n\t' + minhaVariavelGlobal + '\n\n\n');
    console.log('\n\nMinha let declarada no escopo global chamada no escopo global também:\n\n\n\t' + minhaLetGlobal + '\n\n\n');
    console.log('\n\nMinha const declarada no escopo global chamada no escopo global também:\n\n\n\t' + minhaConstGlobal + '\n\n\n');
    console.log('\n\nMinha variável sem prefixo declarada no escopo global chamada no escopo global também:\n\n\n\t' + minhaVariavelGlobalSemPrefixo01 + '\n\n\n');

    /*
     * Função chamando as variáveis globais em escopo local
     */
    function testandoVariaveisGlobais() {

        console.log('%c\n\nVariáveis Globais em Escopo Local\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');
        console.log('\n\nMinha variável declarada no escopo global chamada no escopo local (dentro de uma função):\n\n\n\t' + minhaVariavelGlobal + '\n\n\n');
        console.log('\n\nMinha let declarada no escopo global chamada no escopo local (dentro de uma função):\n\n\n\t' + minhaLetGlobal + '\n\n\n');
        console.log('\n\nMinha const declarada no escopo global chamada no escopo local (dentro de uma função):\n\n\n\t' + minhaConstGlobal + '\n\n\n');
        console.log('\n\nMinha variável sem prefixo declarada no escopo global chamada no escopo local (dentro de uma função):\n\n\n\t' + minhaVariavelGlobalSemPrefixo01 + '\n\n\n');

    }
    testandoVariaveisGlobais();

    /*
     * Função declarando variáveis no escopo local e chamando em escopo local
     */
    function testandoVariaveisLocais() {

        var minhaVariavelLocal = 'Minha Variável Local';
        let minhaLetLocal = 'Minha Let Local';
        const minhaConstLocal = 'Minha Const Local';
        minhaVariavelGlobalSemPrefixo02 = 'Minha Variável Global Sem Prefixo 02';

        console.log('%c\n\nVariáveis Locais em Escopo Local\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');
        console.log('\n\nMinha variável declarada no escopo local chamada no escopo local (dentro de uma função):\n\n\n\t' + minhaVariavelLocal + '\n\n\n');
        console.log('\n\nMinha let declarada no escopo local chamada no escopo local (dentro de uma função):\n\n\n\t' + minhaLetLocal + '\n\n\n');
        console.log('\n\nMinha const declarada no escopo local chamada no escopo local (dentro de uma função):\n\n\n\t' + minhaConstLocal + '\n\n\n');
        console.log('\n\nMinha variável sem prefixo declarada no escopo local chamada no escopo local (dentro de uma função):\n\n\n\t' + minhaVariavelGlobalSemPrefixo02 + '\n\n\n');

    }
    testandoVariaveisLocais();

    /* 
     * Chamando variáveis locais em escopo global
     * Experimente descomentar para visualizar o erro gerado
     */
    console.log('%c\n\nVariáveis Locais em Escopo Global\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');
    // console.log('\nMinha variável declarada no escopo local chamada no escopo global:\n\n\n\t'+minhaVariavelLocal+'\n\n\n');
    // console.log('\nMinha let declarada no escopo local chamada no escopo global:\n\n\n\t'+minhaLetLocal+'\n\n\n');
    // console.log('\nMinha const declarada no escopo local chamada no escopo global:\n\n\n\t'+minhaConstLocal+'\n\n\n');
    console.log('\nMinha variável sem prefixo declarada no escopo local chamada no escopo global:\n\n\n\t' + minhaVariavelGlobalSemPrefixo02 + '\n\n\n');
    console.log('%c\n\nVariáveis Locais não podem ser chamadas em Escopo Global, pois geram erro - exceto pela variável declarada sem prefixo, pois torna-se global automaticamente\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');



    // Aula 01 | Parte 04 - Escopo de Bloco
    console.log('%c\n\nAULA 01 | PARTE 04\t\nEscopo de Bloco\t\t\n\n', 'background-color:#f15722;color:#000000;font-size:32px;');

    /*
     * Função mostrando o comportamento da var dentro e fora de um bloco em que é declarada
     */
    function escopoDeBlocoComVar() {

        console.log('%c\n\nUsando var dentro e fora de um bloco\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

        // Declarando a var nome2 fora do bloco
        var nome2 = 'Fulano';

        // Declarando um bloco com a declaração da var sobrenome2 e chamando as duas var
        if (2 + 2 === 4) {

            // var sobrenome2 declarada dentro do bloco
            var sobrenome2 = 'da Silva';

            // chamando as duas variáveis
            console.log('\n\nChamando a var nome2 (declarada fora do bloco) e var sobrenome2 (declarada dentro do bloco) DENTRO DO BLOCO:\n\n\n\t' + nome2 + ' ' + sobrenome2 + '\n\n\n');

        }

        console.log('\n\nChamando a var nome2 (declarada fora do bloco) e var sobrenome2 (declarada dentro do bloco) FORA DO BLOCO:\n\n\n\t' + nome2 + ' ' + sobrenome2 + '\n\n\n');

    }
    escopoDeBlocoComVar();

    /*
     * Função mostrando o comportamento da let dentro e fora de um bloco em que é declarada
     */
    function escopoDeBlocoComLet() {

        console.log('%c\n\nUsando let dentro e fora de um bloco\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

        // Declarando a let nome3 fora do bloco
        let nome3 = 'Fulano';

        // Declarando um bloco com a declaração da let sobrenome3 e chamando as duas let
        if (2 + 2 === 4) {

            // let sobrenome3 declarada dentro do bloco
            let sobrenome3 = 'da Silva';

            // chamando as duas variáveis
            console.log('\n\nChamando a let nome3 (declarada fora do bloco) e let sobrenome3 (declarada dentro do bloco) DENTRO DO BLOCO:\n\n\n\t' + nome3 + ' ' + sobrenome3 + '\n\n\n');

        }

        // console.log('\nChamando a let nome3 (declarada fora do bloco) e let sobrenome3 (declarada dentro do bloco) FORA DO BLOCO:\n\n\n\t'+nome3+' '+sobrenome3+'\n\n\n');
        console.log('%c\n\nSe tentarmos chamar a let sobrenome3 fora do bloco em que foi declarada, gera um erro (sobrenome3 is not defined)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');

    }
    escopoDeBlocoComLet();

    /*
     * Função mostrando o comportamento da const dentro e fora de um bloco em que é declarada
     */
    function escopoDeBlocoComConst() {

        console.log('%c\n\nUsando const dentro e fora de um bloco\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

        // Declarando a const nome4 fora do bloco
        const nome4 = 'Fulano';

        // Declarando um bloco com a declaração da const sobrenome4 e chamando as duas const
        if (2 + 2 === 4) {

            // const sobrenome4 declarada dentro do bloco
            const sobrenome4 = 'da Silva';

            // chamando as duas variáveis
            console.log('\n\nChamando a const nome4 (declarada fora do bloco) e const sobrenome4 (declarada dentro do bloco) DENTRO DO BLOCO:\n\n\n\t' + nome4 + ' ' + sobrenome4 + '\n\n\n');

        }

        // console.log('\nChamando a const nome4 (declarada fora do bloco) e const sobrenome4 (declarada dentro do bloco) FORA DO BLOCO:\n\n\n\t'+nome4+' '+sobrenome4+'\n\n\n');
        console.log('%c\n\nSe tentarmos chamar a const sobrenome4 fora do bloco em que foi declarada, gera um erro (sobrenome4 is not defined)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');

    }
    escopoDeBlocoComConst();

    /*
     * Função mostrando o comportamento da variável sem prefixo dentro e fora de um bloco em que é declarada
     */
    function escopoDeBlocoComVariavelSemPrefixo() {

        console.log('%c\n\nUsando variável sem prefixo dentro e fora de um bloco\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

        // Declarando a variável sem prefixo nome5 fora do bloco
        nome5 = 'Fulano';

        // Declarando um bloco com a declaração da variável sem prefixo sobrenome5 e chamando as duas variáveis sem prefixo
        if (2 + 2 === 4) {

            // variável sem prefixo sobrenome5 declarada dentro do bloco
            sobrenome5 = 'da Silva';

            // chamando as duas variáveis
            console.log('\n\nChamando a variável sem prefixo nome5 (declarada fora do bloco) e variável sem prefixo sobrenome5 (declarada dentro do bloco) DENTRO DO BLOCO:\n\n\n\t' + nome5 + ' ' + sobrenome5 + '\n\n\n');

        }

        console.log('\n\nChamando a variável sem prefixo nome5 (declarada fora do bloco) e variável sem prefixo sobrenome5 (declarada dentro do bloco) FORA DO BLOCO:\n\n\n\t' + nome5 + ' ' + sobrenome5 + '\n\n\n');

    }
    escopoDeBlocoComVariavelSemPrefixo();



    // Aula 01 | Parte 05 - var, let e const
    console.log('%c\n\nAULA 01 | PARTE 05\t\nvar, let e const\t\n\n', 'background-color:#f15722;color:#000000;font-size:32px;');


    console.log('%c\n\nvar\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');


    console.log('%c\n\nChamando uma mesma var global em diferentes escopos\n\n', 'background-color:#f3d751;color:#000000;font-size:24px;');

    var animal1 = 'cachorro';
    // chamando a variável animal1 em escopo global
    console.log('\n\nDeclarando a var global animal1 com valor \'cachorro\'\ne chamando EM ESCOPO GLOBAL:\n\n\n\t' + animal1 + '\n\n\n');

    /*
     * Função chamando a mesma var em escopo local e de bloco
     */
    function entendendoVarGlobal() {

        // chamando a variável animal1 global em escopo local
        console.log('\n\nChamando var animal1 (global) EM ESCOPO LOCAL (dentro de uma função):\n\n\n\t' + animal1 + '\n\n\n');

    }
    entendendoVarGlobal();

    /*
     * If para mostrar como uma var global se comporta dentro de um bloco
     */
    if (2 + 2 === 4) {

        // chamando a variável animal1 global em escopo local
        console.log('\n\nChamando var animal1 (global) EM ESCOPO DE BLOCO (dentro de um if):\n\n\n\t' + animal1 + '\n\n\n');

    }


    console.log('%c\n\nChamando uma mesma var local em diferentes escopos\n\n', 'background-color:#f3d751;color:#000000;font-size:24px;');

    /*
     * Função chamando a mesma var em escopo local e de bloco
     */
    function entendendoVarLocal() {

        var animal2 = 'cachorro';
        // chamando a variável animal2 global em escopo local
        console.log('\n\nDeclarando e chamando var animal2 (local) EM ESCOPO LOCAL (dentro de uma função):\n\n\n\t' + animal2 + '\n\n\n');

    }
    entendendoVarLocal();

    // chamando a variável animal2 em escopo global
    // console.log('\nChamando a var local animal2 EM ESCOPO GLOBAL:\n\n\n\t'+animal2+'\n\n\n');
    console.log('%c\n\nSe tentarmos chamar a var animal2 (local) fora da função em que foi declarada, gera um erro (animal2 is not defined)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');

    /*
     * If para mostrar como uma var local se comporta dentro de um bloco
     */
    if (2 + 2 === 4) {

        // chamando a variável animal2 global em escopo de bloco
        // console.log('\nChamando var animal2 (local) EM ESCOPO DE BLOCO (dentro de um if):\n\n\n\t'+animal2+'\n\n\n');
        console.log('%c\n\nSe tentarmos chamar a var animal2 (local) fora da função em que foi declarada, gera um erro (animal2 is not defined)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');

    }


    console.log('%c\n\nChamando uma mesma var de bloco em diferentes escopos\n\n', 'background-color:#f3d751;color:#000000;font-size:24px;');

    /*
     * If para mostrar como uma var de bloco se comporta dentro de um bloco
     */
    if (2 + 2 === 4) {

        var animal3 = 'cachorro';
        // chamando a variável animal3 de bloco em escopo de bloco
        console.log('\n\nDeclarando e chamando var animal3 (bloco) EM ESCOPO DE BLOCO (dentro de um if):\n\n\n\t' + animal3 + '\n\n\n');

    }

    /*
     * Função chamando a mesma var em escopo local e de bloco
     */
    function entendendoVarDeBloco() {

        // chamando a variável animal3 de bloco em escopo local
        console.log('\n\nChamando var animal3 (bloco) EM ESCOPO LOCAL (dentro de uma função):\n\n\n\t' + animal3 + '\n\n\n');

    }
    entendendoVarDeBloco();

    // chamando a variável animal3 em escopo global
    console.log('\n\nChamando a var de bloco animal3 EM ESCOPO GLOBAL:\n\n\n\t' + animal3 + '\n\n\n');
    // console.log('%c\n\nSe tentarmos chamar a var animal3 (local) fora da função em que foi declarada, gera um erro (animal3 is not defined)\n\n','background-color:#f44336;color:#ffffff;font-size:20px;');

    console.log('%c\n\nPodemos concluir que a var transcende o escopo de bloco, só não é acessível globalmente quando é declarada em uma função (escopo local)\n\n', 'background-color:#09c9e8;color:#000000;font-size:20px;');



    console.log('%c\n\nlet\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');


    console.log('%c\n\nChamando uma mesma let global em diferentes escopos\n\n', 'background-color:#f3d751;color:#000000;font-size:24px;');

    let fruta1 = 'banana';
    // chamando a variável fruta1 em escopo global
    console.log('\n\nDeclarando a let global fruta1 com valor \'banana\'\ne chamando EM ESCOPO GLOBAL:\n\n\n\t' + fruta1 + '\n\n\n');

    /*
     * Função chamando a mesma let em escopo local e de bloco
     */
    function entendendoLetGlobal() {

        // chamando a variável fruta1 global em escopo local
        console.log('\n\nChamando let fruta1 (global) EM ESCOPO LOCAL (dentro de uma função):\n\n\n\t' + fruta1 + '\n\n\n');

    }
    entendendoLetGlobal();

    /*
     * If para mostrar como uma let global se comporta dentro de um bloco
     */
    if (2 + 2 === 4) {

        // chamando a variável fruta1 global em escopo local
        console.log('\n\nChamando let fruta1 (global) EM ESCOPO DE BLOCO (dentro de um if):\n\n\n\t' + fruta1 + '\n\n\n');

    }


    console.log('%c\n\nChamando uma mesma let local em diferentes escopos\n\n', 'background-color:#f3d751;color:#000000;font-size:24px;');

    /*
     * Função chamando a mesma let em escopo local e de bloco
     */
    function entendendoLetLocal() {

        let fruta2 = 'abacaxi';
        // chamando a variável fruta2 global em escopo local
        console.log('\n\nDeclarando e chamando let fruta2 (local) EM ESCOPO LOCAL (dentro de uma função):\n\n\n\t' + fruta2 + '\n\n\n');

    }
    entendendoLetLocal();

    // chamando a variável fruta2 em escopo global
    // console.log('\nChamando a let local fruta2 EM ESCOPO GLOBAL:\n\n\n\t'+fruta2+'\n\n\n');
    console.log('%c\n\nSe tentarmos chamar a let fruta2 (local) fora da função em que foi declarada, gera um erro (fruta2 is not defined)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');

    /*
     * If para mostrar como uma let local se comporta dentro de um bloco
     */
    if (2 + 2 === 4) {

        // chamando a variável fruta2 global em escopo de bloco
        // console.log('\nChamando let fruta2 (local) EM ESCOPO DE BLOCO (dentro de um if):\n\n\n\t'+fruta2+'\n\n\n');
        console.log('%c\n\nSe tentarmos chamar a let fruta2 (local) fora da função em que foi declarada, gera um erro (fruta2 is not defined)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');

    }


    console.log('%c\n\nChamando uma mesma let de bloco em diferentes escopos\n\n', 'background-color:#f3d751;color:#000000;font-size:24px;');

    /*
     * If para mostrar como uma let de bloco se comporta dentro de um bloco
     */
    if (2 + 2 === 4) {

        let fruta3 = 'carambola';
        // chamando a variável fruta3 de bloco em escopo de bloco
        console.log('\n\nDeclarando e chamando let fruta3 (bloco) EM ESCOPO DE BLOCO (dentro de um if):\n\n\n\t' + fruta3 + '\n\n\n');

    }

    /*
     * Função chamando a mesma let em escopo local e de bloco
     */
    function entendendoLetDeBloco() {

        // chamando a variável fruta3 de bloco em escopo local
        // console.log('\nChamando let fruta3 (bloco) EM ESCOPO LOCAL (dentro de uma função):\n\n\n\t'+fruta3+'\n\n\n');
        console.log('%c\n\nSe tentarmos chamar a let fruta3 (bloco) fora do if em que foi declarada, gera um erro (fruta3 is not defined)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');

    }
    entendendoLetDeBloco();

    // chamando a variável fruta3 em escopo global
    // console.log('\nChamando a let de bloco fruta3 EM ESCOPO GLOBAL:\n\n\n\t'+fruta3+'\n\n\n');
    console.log('%c\n\nSe tentarmos chamar a let fruta3 (bloco) fora do if em que foi declarada, gera um erro (fruta3 is not defined)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');

    console.log('%c\n\nPodemos concluir que a let se limita ao escopo de bloco (ou local), a não ser que tenha sido declarada globalmente\n\n', 'background-color:#09c9e8;color:#000000;font-size:20px;');


    console.log('%c\n\nconst\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');


    console.log('%c\n\nChamando uma mesma const global em diferentes escopos\n\n', 'background-color:#f3d751;color:#000000;font-size:24px;');

    const cidade1 = 'São Paulo';
    // chamando a variável cidade1 em escopo global
    console.log('\n\nDeclarando a const global cidade1 com valor \'São Paulo\'\ne chamando EM ESCOPO GLOBAL:\n\n\n\t' + cidade1 + '\n\n\n');

    /*
     * Função chamando a mesma const em escopo local e de bloco
     */
    function entendendoConstGlobal() {

        // chamando a variável cidade1 global em escopo local
        console.log('\n\nChamando const cidade1 (global) EM ESCOPO LOCAL (dentro de uma função):\n\n\n\t' + cidade1 + '\n\n\n');

    }
    entendendoConstGlobal();

    /*
     * If para mostrar como uma const global se comporta dentro de um bloco
     */
    if (2 + 2 === 4) {

        // chamando a variável cidade1 global em escopo local
        console.log('\n\nChamando const cidade1 (global) EM ESCOPO DE BLOCO (dentro de um if):\n\n\n\t' + cidade1 + '\n\n\n');

    }


    console.log('%c\n\nChamando uma mesma const local em diferentes escopos\n\n', 'background-color:#f3d751;color:#000000;font-size:24px;');

    /*
     * Função chamando a mesma const em escopo local e de bloco
     */
    function entendendoConstLocal() {

        const cidade2 = 'Rio de Janeiro';
        // chamando a variável cidade2 global em escopo local
        console.log('\n\nDeclarando e chamando const cidade2 (local) EM ESCOPO LOCAL (dentro de uma função):\n\n\n\t' + cidade2 + '\n\n\n');

    }
    entendendoConstLocal();

    // chamando a variável cidade2 em escopo global
    // console.log('\nChamando a const local cidade2 EM ESCOPO GLOBAL:\n\n\n\t'+cidade2+'\n\n\n');
    console.log('%c\n\nSe tentarmos chamar a const cidade2 (local) fora da função em que foi declarada, gera um erro (cidade2 is not defined)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');

    /*
     * If para mostrar como uma const local se comporta dentro de um bloco
     */
    if (2 + 2 === 4) {

        // chamando a variável cidade2 global em escopo de bloco
        // console.log('\nChamando const cidade2 (local) EM ESCOPO DE BLOCO (dentro de um if):\n\n\n\t'+cidade2+'\n\n\n');
        console.log('%c\n\nSe tentarmos chamar a const cidade2 (local) fora da função em que foi declarada, gera um erro (cidade2 is not defined)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');

    }


    console.log('%c\n\nChamando uma mesma const de bloco em diferentes escopos\n\n', 'background-color:#f3d751;color:#000000;font-size:24px;');

    /*
     * If para mostrar como uma const de bloco se comporta dentro de um bloco
     */
    if (2 + 2 === 4) {

        const cidade3 = 'Curitiba';
        // chamando a variável cidade3 de bloco em escopo de bloco
        console.log('\n\nDeclarando e chamando const cidade3 (bloco) EM ESCOPO DE BLOCO (dentro de um if):\n\n\n\t' + cidade3 + '\n\n\n');

    }

    /*
     * Função chamando a mesma const em escopo local e de bloco
     */
    function entendendoConstDeBloco() {

        // chamando a variável cidade3 de bloco em escopo local
        // console.log('\nChamando const cidade3 (bloco) EM ESCOPO LOCAL (dentro de uma função):\n\n\n\t'+cidade3+'\n\n\n');
        console.log('%c\n\nSe tentarmos chamar a const cidade3 (bloco) fora do if em que foi declarada, gera um erro (cidade3 is not defined)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');

    }
    entendendoConstDeBloco();

    // chamando a variável cidade3 em escopo global
    // console.log('\nChamando a const de bloco cidade3 EM ESCOPO GLOBAL:\n\n\n\t'+cidade3+'\n\n\n');
    console.log('%c\n\nSe tentarmos chamar a const cidade3 (bloco) fora do if em que foi declarada, gera um erro (fruta3 is not defined)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');

    console.log('%c\n\nPodemos concluir que a const também se limita ao escopo de bloco (ou local), a não ser que tenha sido declarada globalmente. Mas... então qual a diferença entre let e const?\n\n', 'background-color:#09c9e8;color:#000000;font-size:20px;');


    console.log('%c\n\nRedeclarando valores\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');


    console.log('%c\n\nlet\n\n', 'background-color:#f3d751;color:#000000;font-size:24px;');

    var carro1 = 'BMW';
    // Declarando e chamando a let carro1
    console.log('\n\nDeclarando e chamando let carro1:\n\n\n\t' + carro1 + '\n\n\n');

    carro1 = 'Mercedes';
    console.log('\n\nAtribuindo um novo valor à let carro1:\n\n\n\t' + carro1 + '\n\n\n');


    console.log('%c\n\nlet\n\n', 'background-color:#f3d751;color:#000000;font-size:24px;');

    let carro2 = 'BMW';
    // Declarando e chamando a let carro2
    console.log('\n\nDeclarando e chamando let carro2:\n\n\n\t' + carro2 + '\n\n\n');

    carro2 = 'Mercedes';
    console.log('\n\nAtribuindo um novo valor à let carro2:\n\n\n\t' + carro2 + '\n\n\n');


    console.log('%c\n\nconst\n\n', 'background-color:#f3d751;color:#000000;font-size:24px;');

    const carro3 = 'BMW';
    // Declarando e chamando a const carro3
    console.log('\n\nDeclarando e chamando const carro3:\n\n\n\t' + carro3 + '\n\n\n');

    // carro3 = 'Mercedes';
    // console.log('\nAtribuindo um novo valor à const carro3:\n\n\n\t'+carro3+'\n\n\n');
    console.log('%c\n\nSe tentarmos atribuir um novo valor à const carro3 receberemos um erro (assignment to constant variable)\n\n', 'background-color:#f44336;color:#ffffff;font-size:20px;');


    console.log('%c\n\nRespondendo à pergunta feita anteriormente, a diferença entre let e const é que const recebe um valor imutável, enquanto let pode ser trocado (assim como var)\n\n', 'background-color:#09c9e8;color:#000000;font-size:20px;');



    // Aula 01 | Parte 06 - arrays
    console.log('%c\n\nAULA 01 | PARTE 06\t\nArrays\t\t\t\t\n\n', 'background-color:#f15722;color:#000000;font-size:32px;');


    console.log('%c\n\narray simples\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    // Criando um array com 3 elementos
    const arr1 = ['Elemento 01', 'Elemento 02', 'Elemento 03'];
    console.log('\n\nDeclarando e chamando o array arr1:\n\n\n\t' + arr1 + '\n\n\nSe declararmos apenas arr1 no console.log ele retornará assim:');
    console.log(arr1);

    // Selecionando um elemento esepecífico do arr1
    console.log('\n\nSelecionando o primeiro elemento do arr1 com arr1[0]:\n\n\n\t' + arr1[0] + '\n\n\n');

    // Verificando o número de elementos no arr1
    console.log('\n\nVerificando o número de elementos no arr1 com arr1.length:\n\n\n\t' + arr1.length + '\n\n\n');


    console.log('%c\n\nincluindo e removendo itens\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    const arr2 = ['Índice 0', 'Índice 1', 'Índice 2'];
    console.log('\n\nDeclarando e chamando o array arr2:\n\n\n\t' + arr2 + '\n\n\n');

    // Incluindo mais um índice ao arr1
    arr2.push('Índice 3');
    console.log('\n\nIncluindo mais um índice ao arr2 com arr2.push(\'Índice 3\'):\n\n\n\t' + arr2 + '\n\n\n');

    // Removendo o último item do arr2
    arr2.pop();
    console.log('\n\nRemovendo o último item do arr2 com arr2.pop() temos:\n\n\n\t' + arr2 + '\n\n\n');
    console.log('\n\nSe incluirmos o array.pop() no console.log, além de remover o último item ele retornará esse item removido\n\n\n\t'+arr2.pop()+'\n\n\n');
    console.log('\n\nVeja como ficou o nosso array depois de declararmos o array.pop() duas vezes:\n\n\n\t'+arr2+'\n\n\n')

    console.log('%c\n\nTambém podemos ter arrays associativos, mas eles passam a ser tratados como objetos (com propriedades e métodos)\n\n', 'background-color:#09c9e8;color:#000000;font-size:20px;');
    


    // Aula 01 | Parte 07 - objetos
    console.log('%c\n\nAULA 01 | PARTE 07\t\nObjetos\t\t\t\t\n\n', 'background-color:#f15722;color:#000000;font-size:32px;');


    console.log('%c\n\narray associativo (ou objeto literal)\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    // Criando um array com 3 elementos
    const arr3 = {
        'nome' : 'Fulano',
        'sobrenome' : 'da Silva',
        'idade' : 33,
    };
    console.log('\n\nDeclarando e chamando o array arr3:\n\n\n\t' + arr3 + '\n\n\nSe declararmos apenas arr3 no console.log ele retornará assim:');
    console.log(arr3);


    console.log('%c\n\npropriedades do objeto\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    // Selecionando um elemento esepecífico do arr3
    console.log('\n\nSelecionando o primeiro elemento do arr3 com arr3[\'nome\']:\n\n\n\t' + arr3['nome'] + '\n\n\n%cComo agora os itens do nosso array possuem nomes, ao invés de selecionarmos pelo índice, selecionamos pelo próprio nome da propriedade ou método\n\n', 'font-style: italic');

    // Selecionando um elemento esepecífico do arr3
    console.log('\n\nSelecionando o primeiro elemento do arr3 com arr3.nome:\n\n\n\t' + arr3.nome + '\n\n\n%cVeja que acessamos as propriedades e métodos tanto com o uso do colchetes quanto usando o ponto\n\n', 'font-style: italic');

    // Alterando o valor de uma propriedade
    arr3['nome'] = 'Beltrano'
    console.log('\n\nAlterando o valor de uma propriedade do array arr3 com arr3[\'nome\'] = \'Beltrano\':\n\n\n\t' + arr3['nome'] + '\n\n\n');

    // Incluindo uma nova propriedade
    arr3.hobbies = 'Estudar programação';
    console.log('\n\nIncluindo uma nova propriedade ao array arr3 com\n\n\tarr3.hobbies = \'Estudar programação\';\n\n\nAgora o objeto arr3 está assim:');
    console.log(arr3);


    console.log('%c\n\nmétodos do objeto\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    // Incluindo um novo método
    arr3.cumprimentar = function ( ) {
        console.log( 'Olá!' );
    };
    console.log('\n\nIncluindo um novo método ao array arr3 com\n\n\tarr3.cumprimentar = function () {\n\t\tconsole.log(\'Olá!\');\n\t}\n\n\nEntão simplesmente chamamos o método com\n\n\tarr3.cumprimentar()\n\n\n');
    arr3.cumprimentar();

    // Incluindo um novo método com this
    arr3.apresentarSe = function ( ) {
        console.log( 'Meu nome é '+this.nome );
    };
    console.log('\n\nIncluindo um novo método ao array arr3 com\n\n\tarr3.apresentarSe = function () {\n\t\tconsole.log(\'Meu nome é \'+this.nome);\n\t}\n\n\nRepare que, assim como vimos em POO, this refere-se ao objeto em questão\n\n\n');
    arr3.apresentarSe();


    // Aula 01 | Parte 08 - alertas
    console.log('%c\n\nAULA 01 | PARTE 08\t\nAlertas\t\t\t\t\n\n', 'background-color:#f15722;color:#000000;font-size:32px;');


    console.log('%c\n\nalert()\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    console.log('\n\nSabe aquele alerta que visualizou primeiro, ao acessar o site? Dando as boas vindas?\nEntão, essa é a função alert()!\n\nPara declará-la, basta digitar alert() e incluir o texto desejado entre os parênteses - e entre aspas, pois estamos falando de uma string\n\n\n');
    alert('\nNossas boas vindas ao material de estudo de JS - Aula 01!\n\nPara acompanhar essa aula, abra o console do dev tools!\n');


    console.log('%c\n\nconfirm()\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    console.log('\n\nO confirm foi exibido logo após o alert().\nA única diferença entre o confirm e o alert é que o confirm é como uma notificação que exige que aceite ou não a declaração (clicando em OK ou Cancel).\n\nPara declará-lo, basta digitar confirm() e incluir o texto desejado entre os parênteses - e entre aspas, pois estamos falando de uma string\n\n\n');
    const alunoDH = confirm('\nEsse conteúdo é exclusivo para alunos da DH.\n\nSe você é um aluno da DH, clique em OK!\n');
    console.log(alunoDH ? '\nQue bom que está estudando!\n\n' : '\nOps... você não deveria ter acesso a esse conteúdo!\n\n');
    console.log('\n\nDê uma olhada na linha 650 do arquivo main.js - verá que atrelamos a resposta do confirm() à uma variável. O confirm sempre será booleano, ou seja, se clicar em OK ele terá o valor de true; caso contrário, receberá o valor false, veja:\n\n'+alunoDH+'\n\nDe quebra ainda utilizamos o if ternário (um spoiler para você!)\n\n\n');


    console.log('%c\n\nprompt()\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    console.log('\n\nO prompt foi o último alerta a ser exibido (perguntando seu nome).\nEle também recebe um valor, mas ao invés de booleano ele recebe o valor digitado no input que aparece\n\n\n');
    const nomeDoVisitante = prompt('\nComo gostaria de o chamemos?\n');
    console.log(nomeDoVisitante && nomeDoVisitante !== '' ?  `\nQualquer dúvida, conte conosco ${nomeDoVisitante}!\n\n` : '\nNão quer se identificar? Sem problemas!\n\n');
    console.log('\n\nMais uma dica extra para você! Você pode usar crases ao invés de aspas nas strings, dessa maneira, pode incluir variáveis sem ter de usar o + para concatenar - basta incluir um cifrão e chaves, então declarar a variável entre as chaves, assim: \$\{suaVariavel\}.\n\n\n');



    // Aula 01 | Parte 09 - condicionais
    console.log('%c\n\nAULA 01 | PARTE 09\t\nCondicionais\t\t\n\n', 'background-color:#f15722;color:#000000;font-size:32px;');


    console.log('%c\n\nif\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    console.log('\n\nO if funciona da mesma maneira que vimos em PHP:\n\n\n\tif ( condição ) {\n\n\t\tação caso a condição seja verdadeira\n\n\t}\n\n\nAbaixo temos a condição 2 + 2 === 4:');

    if ( 2 + 2 === 4 ) {

        console.log('\nA condição é verdadeira\n\n')

    }


    console.log('%c\n\nif / else\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    console.log('\n\nO if else se difere do if por ter um código previsto para caso a condição seja falsa\n\n\n\tif ( condição ) {\n\n\t\tação caso a condição seja verdadeira\n\n\t}\n\n\n\telse {\n\n\t\tação caso a condição seja falsa\n\n\t}\n\n\nAbaixo temos a condição 2 + 2 === 5:');

    if ( 2 + 2 === 5 ) {

        console.log('\n\tA condição é verdadeira\n\n');

    } else {

        console.log('\n\tA condição é falsa\n\n');

    }


    console.log('%c\n\nif / else if / else\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    console.log('\n\nO else if nos permite incluir uma segunda condição\n\n\n\tif ( 1a condição ) {\n\n\t\tação caso a primeira condição seja verdadeira\n\n\t} else if ( 2a condição ) {\n\n\t\tação caso a segunda condição seja verdadeira\n\n\t} else {\n\n\t\tação caso a condição seja falsa\n\n\t}\n\n\nAbaixo temos a primeira condição como 2 + 2 === 5 e a segunda como 2 + 2 === 4:');

    if ( 2 + 2 === 5 ) {

        console.log('\n\tA condição é verdadeira\n\n');

    } else if ( 2 + 2 === 4 ) {

        console.log('\n\tA 2a condição é verdadeira\n\n');

    } else {

        console.log('\n\tA condição é falsa\n\n');

    }


    console.log('%c\n\nswitch\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    console.log('\n\nO switch considera uma \'verificação\' e as possíveis respostas:\n\n\n\tswitch ( \'pergunta\' ) {\n\n\t\tcase \'a\':\n\n\t\t\tconsole.log(\'O valor é a\');\n\n\t\t\tbreak;\n\n\n\t\tcase \'b\':\n\n\t\t\tconsole.log(\'O valor é b\');\n\n\t\t\tbreak;\n\n\n\t\tdefault:\n\n\t\t\tconsole.log(\'O valor é não é a nem b\');\n\n\t}\n\n\nAbaixo declaramos a variável x como c e o switch verifica o valor de x:');

    const x = 'c';

    switch (x) {

        case 'a':

            console.log('\n\tO valor é a\n\n');

            break;

        case 'b':

            console.log('\n\tO valor é b\n\n');

            break;

        default:

            console.log('\n\tO valor não é a nem b\n\n');
    }



    // Aula 01 | Parte 10 - loops
    console.log('%c\n\nAULA 01 | PARTE 10\t\nLoops\t\t\n\n', 'background-color:#f15722;color:#000000;font-size:32px;');


    console.log('%c\n\nfor\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    console.log('\n\nO for funciona da mesma maneira que vimos em PHP - declaramos a variável com o valor inicial com let (por conta do escopo):\n\n\n\tfor ( let i = 0; i < arr4; i++ ) {\n\n\t\tconsole.log(arr[i]);\n\n\t}\n\n\nConsiderando arr4 = [9,8,7,6], temos:');

    const arr4 = [9,8,7,6];

    for ( let i = 0; i < arr4.length; i++ ) {

        console.log(`\n${arr4[i]}\n\n`)

    }


    console.log('%c\n\nforEach\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    console.log('\n\nO forEach dispensa a declaração do valor inicial, condição para parar o loop e incremento do i. Por outro lado, demanda uma função - que será executada a cada item do nosso array. Devemos declarar um parâmetro nessa função, que representará cada um dos itens de nossa coleção:\n\n\n\tarr5.forEach ( function (item) {\n\n\t\tconsole.log(item)\n\n\t} );\n\n\nConsiderando arr5 = [\'Item 01\',\'Item 02\',\'Item 03\'], temos:');

    const arr5 = ['Item 01', 'Item 02', 'Item 03'];

    arr5.forEach( function (item) {
        
        console.log(`\n${item}\n\n`)
    
    } );


    console.log('%c\n\nfor in\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    console.log('\n\nO for in \'caminha\' sobre as propriedades de um objeto.\n\n\n\tfor ( item in obj1 ) {\n\n\t\tconsole.log(`\\n${item} : ${obj1[item]}\\n\\n`)\n\n\t} );\n\n\nConsiderando obj1 como {\'nome\':\'Fulano\',\'sobrenome\':\'da Silva\'}, temos:');

    const obj1 = {
        'nome' : 'Fulano',
        'sobrenome' : 'da Silva'
    };

    for(item in obj1) {
        
        console.log(`\n${item} : ${obj1[item]}\n\n`)
    
    };

    console.log('\n\nPerceba que além de acessarmos os nomes das propriedades, também podemos acessar o valor de cada uma delas com obj1[item]\n\n\n');


    console.log('%c\n\nfor of\n\n', 'background-color:#ffb42a;color:#000000;font-size:24px;');

    console.log('\n\nO for of por sua vez, \'caminha\' sobre os elementos de um objeto iterável (um array) - não funciona com um array associativo ou objeto, pois considera o índice de cada elemento.\n\n\n\tfor ( item of arr6 ) {\n\n\t\tconsole.log(`\\n${item}\\n\\n`)\n\n\t}\n\n\nConsiderando arr6 como [0,1,2,3,4,5], temos:');

    const arr6 = [0,1,2,3,4,5];

    for(item of arr6) {
        
        console.log(`\n${item}\n\n`)
    
    };

    console.log('\n\nFunciona como um loop for, mas é declarado de forma mais limpa e compreensível.\n\n\n');



}