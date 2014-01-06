/*******************************************************************************
 * @author:marcosptf@yahoo.com.br
 * @since:19/09/2013
 * @desc:definições das propriedades usadas no game
 * Rotinas do carrossel
 ********************************************************************************/


function exibeCarrossel() {
    tempJogo = window.clearInterval(tempJogo);
    telaInicial.setStyle("display", "none");
    tela1.setStyle("display", "block");
    grade6.setStyle("display", "block");

    tempDados = self.setInterval(function() {
        exibeIMGCarrossel(zbImg);
        zbImg++;
    }, 50);
}

function exibeIMGCarrossel(pzbImg) {
    YUI().use("node", function(Y) {
        if (carrosselOrdem === 1) {

            Y.one("#grade6z" + pzbImg).setStyle("display", "block");

        } else if (carrosselOrdem === 2) {

            pzbImg = 180;

        } else if (carrosselOrdem === 3) {

            /* implementar carrocel circular */
            Y.one("#grade6z" + carrosselCircular[pzbImg]).setStyle("display", "block");

        } else if (carrosselOrdem === 4) {

            for (var x = 1; x <= 180; x++) {
                Y.one("#grade6z" + x).setStyle("display", "none");
            }
            Y.one("#grade6z" + pzbImg).setStyle("display", "block");

        } else if (carrosselOrdem === 5) {

            carrosselOrdem = 1;

        }

        if (pzbImg === 180) {
            zbImg = 0;
            carrosselOrdem++;
            for (var x = 1; x <= 180; x++) {
                Y.one("#grade6z" + x).setStyle("display", "none");
            }
        }
    });
}

