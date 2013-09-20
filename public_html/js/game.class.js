/*******************************************************************************
* @author:marcosptf@yahoo.com.br
* @since:19/09/2013
* @desc:atribuição dos elementos html nas propriedades do jogo com YUI();
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


/*******************************************************************************
 * Rotinas do carrossel
 *  
 *******************************************************************************/
                function exibeCarrossel(){
                    tempJogo = window.clearInterval(tempJogo);
                    telaInicial.setStyle("display","none");
                    tela1.setStyle("display","block");
                    grade6.setStyle("display","block");

                    tempDados = self.setInterval(function(){
                        exibeIMGCarrossel(zbImg);
                        zbImg++;
                     },50);
                }   

                function exibeIMGCarrossel(pzbImg){
                    YUI().use("node",function(Y){
                        if(carrosselOrdem===1){
						
                            Y.one("#grade6z"+pzbImg).setStyle("display","block");
							
						}else if(carrosselOrdem===2){	
						
							pzbImg=180;
							
						}else if(carrosselOrdem===3){	
						
							/* implementar carrocel circular */
							Y.one("#grade6z"+carrosselCircular[pzbImg]).setStyle("display","block");
							
                        }else if(carrosselOrdem===4){
						
                            for(var x=1;x<=180;x++){Y.one("#grade6z"+x).setStyle("display","none");}
                            Y.one("#grade6z"+pzbImg).setStyle("display","block");
							
                        }else if(carrosselOrdem===5){
						
                            carrosselOrdem=1;
							
                        }

                        if(pzbImg===180){
                            zbImg=0;
                            carrosselOrdem++;
                            for(var x=1;x<=180;x++){Y.one("#grade6z"+x).setStyle("display","none");}
                        }
                     });
                }



/*******************************************************************************
* programação das rodadas do jogo
********************************************************************************/
                function exibeIMGGame(pzbImg,pQtdeImg){
                    YUI().use("node",function(Y){
                        imgZumbiAtual = pzbImg;
                        for(var x=1;x<=pQtdeImg;x++){Y.one("#grade"+faseGradeJogador+"z"+x).setStyle("display","none");}
                        Y.one("#grade"+faseGradeJogador+"z"+pzbImg).setStyle("display","block");
                    });
                }

                function iniciaJogo(){
                    tempDados=window.clearInterval(tempDados);
                    tempJogo =self.setInterval(function(){
                            mostraZumbiRandom()
//                        },1000);
                        },2000);
                }    

                function mostraZumbiRandom(){
                    /*
                    esta função deve:
                    1.saber qual grade o jogador esta agora, sabando-se que, se estiver começando o jogo agora, inicializa-se na grade0
                    2.mostrar o zumbi em um determinado quadrado, e se caso o jogador ñ clicar, deve fazer sumir o mesmo, aparecendo em outro quadrado.
                    3.se caso o jogador ja estiver clicado no zumbi exibido, o mesmo deve entrar no status morto, e não deve ser apagado.
                    4.desenvolver funcao para que quando o jogador matar zumbi, apareça imagem de zumbi sujo de sangue e o quadrado desabilitado para jogo.
                    5.quando o jogador matar o zumbi, deve ser computado pontos para ele.
                    6.deve ser desenvolvido função para calculo de tempo para passar cada fase de grade.
                    7.deve desenvolver funcao inteligente para gerenciar quando acabar uma fase e passar para a fase seguinte;
                    */
					
                    //YUI().use("node",function(YHtml){
                    //    YHtml.one("#idFase").setHTML("jsDebugger => Fase=>"+faseGradeJogador+" Temp=>"+temporizadorGame+" QtdePontos=>"+qtdePontosJogador);
                    //});					
					document.getElementById("idFase").innerHTML = " Fase=>"+faseGradeJogador+" Tempo=>"+temporizadorGame+"  Pontos=>"+pontosJogador;
						console.debug("jsDebugger => Fase=>"+faseGradeJogador+" Temp=>"+temporizadorGame+" QtdePontos=>"+pontosJogador);
					
                    if(
                            (faseGradeJogador===0) && (temporizadorGame===5) ||
                            (faseGradeJogador===1) && (temporizadorGame===10) ||
                            (faseGradeJogador===2) && (temporizadorGame===20) ||
                            (faseGradeJogador===3) && (temporizadorGame===30) ||
                            (faseGradeJogador===4) && (temporizadorGame===30) ||
                            (faseGradeJogador===5) && (temporizadorGame===30)
                        ){
                        tempJogo=window.clearInterval(tempJogo);
                        console.log("finalizou o tempo da fase! debug=>  pontos=>"+pontosJogador+" fase=>"+faseGradeJogador+" tempo=>"+temporizadorGame);
                        faseGradeJogador = 0;
                        temporizadorGame = 0;
                        qtdePontosJogador= 0;
                    }
						
                    if(faseGradeJogador===0){
                        grade6.setStyle("display","none");
                        grade0.setStyle("display","block");
                    }else if(faseGradeJogador===1){
                        grade6.setStyle("display","none");
                        grade0.setStyle("display","none");
                        grade1.setStyle("display","block");
                    }else if(faseGradeJogador===2){
                        grade6.setStyle("display","none");
                        grade0.setStyle("display","none");
                        grade1.setStyle("display","none");
                        grade2.setStyle("display","block");
                    }else if(faseGradeJogador===3){
                        grade6.setStyle("display","none");
                        grade0.setStyle("display","none");
                        grade1.setStyle("display","none");
                        grade2.setStyle("display","none");
                        grade3.setStyle("display","block");
                    }else if(faseGradeJogador===4){
                        grade6.setStyle("display","none");
                        grade0.setStyle("display","none");
                        grade1.setStyle("display","none");
                        grade2.setStyle("display","none");
                        grade3.setStyle("display","none");
                        grade4.setStyle("display","block");
                    }else if(faseGradeJogador===5){
                        grade6.setStyle("display","none");
                        grade0.setStyle("display","none");
                        grade1.setStyle("display","none");
                        grade2.setStyle("display","none");
                        grade3.setStyle("display","none");
                        grade4.setStyle("display","none");
                        grade5.setStyle("display","block");
                    }
                    
                    exibeIMGGame((Math.floor((Math.random() * qtdeImg[faseGradeJogador]) + 1)),qtdeImg[faseGradeJogador]);
                    temporizadorGame++;
//                   faseGradeJogador++;
                }
                
                
            function capturaAcaoJogador(idQuadro){
                console.log("idQuadro =>"+idQuadro);
                if(imgZumbiAtual===idQuadro){
                    pontosJogador+=10;
                    qtdePontosJogador++;
                    YUI().use("node",function(Y){
                        //deve retirar a imagem do zumbi e colocar a imagem de alvo acertado;
                        Y.one("#grade"+faseGradeJogador+"z"+idQuadro).setStyle("display","block");//trocar chamada de funcao
                        
                    });
                }

                if(qtdePontosJogador===qtdeImg[faseGradeJogador]){
                    tempJogo=window.clearInterval(tempJogo);
                    if(faseGradeJogador===5){
                        console.log("jogador finalizou o jogo! debug=>  pontos=>"+pontosJogador+" fase=>"+faseGradeJogador+" tempo=>"+temporizadorGame);
                    }else{
                        console.log("jogador finalizou a fase! debug=>  pontos=>"+pontosJogador+" fase=>"+faseGradeJogador+" tempo=>"+temporizadorGame);
                        faseGradeJogador++;
                        temporizadorGame = 0;
                        qtdePontosJogador= 0;
                        iniciaJogo();
                    }
                }
            }
