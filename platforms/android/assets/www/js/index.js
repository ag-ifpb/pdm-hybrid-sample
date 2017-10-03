//------------------------------------------------------------
// Modelo
//------------------------------------------------------------
//Modelo: Festa
var festa = {
    tipo: function(valor){
        if (valor){
            this._tipo = valor
        }
        return this._tipo
    },
    detalhe: function(valor){
        if (valor){
            this._detalhe = valor
        }
        return this._detalhe
    },
    empresas: function(valor){
        if (valor){
            this._empresas = valor
        }
        return this._empresas
    }
}

//Modelo: Detalhe
var detalhe = {
    pessoas: function(valor){
        if (valor){
            this._pessoas = valor
        }
        return this._pessoas
    },
    duracao: function(valor){
        if (valor){
            this._duracao = valor
        }
        return this._duracao
    },
    data: function(valor){
        if (valor){
            this._data = valor
        }
        return this._data
    },
    cidade: function(valor){
        if (valor){
            this._cidade = valor
        }
        return this._cidade
    }
}

//Modelo: Empresas
var empresas = {
    bebidas: function(valor){
        if (valor){
            this._bebidas = valor
        }
        return this._bebidas
    },
    comidas: function(valor){
        if (valor){
            this._comidas = valor
        }
        return this._comidas
    },
    descartaveis: function(valor){
        if (valor){
            this._descartaveis = valor
        }
        return this._descartaveis
    }
}

//------------------------------------------------------------
// View
//------------------------------------------------------------
var carregarHome = function(){
    //carregar a página home tpl
    jQuery(".app").load("tpl/home.tpl", function(){
        //depois que carrgar o home
        //preparar o button click
        jQuery(".app .home-content .btn").click(function(){
            //carregar a próxima tela: tipo de festas
            carregarTipos()
        })
    })
}

var carregarTipos = function(){
    //carrega o template types.tpl
    jQuery(".app").load("tpl/types.tpl", function(){
        //depois que carrgar o type
        jQuery(".app .types-content input[type=radio]").click(function(){
            var tipo = jQuery(".app .types-content input[type=radio]:checked").val()
            festa.tipo(tipo)
        })
        //clique no botão avançar
        jQuery(".app .types-content .btn").click(function(){
            //carregar o template detail.tpl
            carregarDetalhes()
        })
    })
}

var carregarDetalhes = function(){
    jQuery(".app").load("tpl/detail.tpl", function(){
        console.info(festa.tipo())
        //TODO: é como vocês!        
    })
}

//------------------------------------------------------------
// Inicialização padrão
//------------------------------------------------------------
carregarHome()

