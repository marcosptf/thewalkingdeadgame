/*******************************************************************************
* @author:marcosptf@yahoo.com.br
* @since:19/09/2013
* @desc:definições das propriedades usadas no game
********************************************************************************/
            YUI().use("node",function(Y){
                telaInicial     = Y.one("#telaInicial");
                tela1           = Y.one("#tela1");
                tela2           = Y.one("#tela2");
                tela3           = Y.one("#tela3");
                btnInicioJogo   = Y.one("#btnInicio");
                btnMatarZumbis  = Y.one("#btnMatarZumbis");
                btnTutorialJogo = Y.one("#btnTutorialJogo");
                btnCreditos     = Y.one("#btnCreditos");
                btnArregarNoJogo= Y.one("#btnArregarNoJogo");
                grade0          = Y.one("#grade0");
                grade1          = Y.one("#grade1");
                grade2          = Y.one("#grade2");
                grade3          = Y.one("#grade3");
                grade4          = Y.one("#grade4");
                grade5          = Y.one("#grade5");
                grade6          = Y.one("#grade6");

                btnInicioJogo.on("click",function(e){
                    exibeCarrossel();
                });

                btnArregarNoJogo.on("click",function(e){
                    btnMatarZumbis.setStyle("display","block");
                    btnArregarNoJogo.setStyle("display","none");
                    Y.one("#grade0").setStyle("display","none");
                    Y.one("#grade1").setStyle("display","none");
                    Y.one("#grade2").setStyle("display","none");
                    Y.one("#grade3").setStyle("display","none");
                    Y.one("#grade4").setStyle("display","none");
                    Y.one("#grade5").setStyle("display","none");
                    Y.one("#grade6").setStyle("display","none");
                    exibeCarrossel();
                });

                btnTutorialJogo.on("click",function(e){
                    console.log("clicou no botao tutorial jogo;");
                });

                btnCreditos.on("click",function(e){
                    console.log("clicou no botao de creditos");
                });

                btnMatarZumbis.on("click",function(e){
                    btnArregarNoJogo.setStyle("display","block");
                    btnMatarZumbis.setStyle("display","none");
                    iniciaJogo();
                });

            });
