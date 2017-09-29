//carregar a página home tpl
jQuery(".app").load("tpl/home.tpl", function(){

    //depois que carrgar o home
    //preparar o button click
    jQuery(".app .home-content .btn").click(function(){

        jQuery(".app").load("tpl/types.tpl", function(){
            //depois que carrgar o type
            jQuery(".app .types-content input[type=radio]").click(function(){
                console.info(jQuery(".app .types-content input[type=radio]:checked").val())
            })

        })

    })

})
