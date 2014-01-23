/*******************************************************************************
 * @author:marcosptf@yahoo.com.br
 * @since:19/09/2013
 * @desc:atribuição dos elementos html nas propriedades do jogo com YUI();
 ********************************************************************************/
//    document.getElementById("divPrincipal").style.backgroundImage="file:///home/deployer/thewalkingdeadgame/public_html/img/bg/bg3.jpg";

window.onload = function() {
    YUI().use("node", function(YGet) {
        YGet.one("#divPrincipal").setStyle("backgroundImage", "url('"+BGImagePath+BGImage3+"')");
    });
}