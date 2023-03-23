var imagens=["pedra vermelha.jpg","pedra azul.jpg","pedra laranja.jpg","pedra roxa.jpg"]
var pedras=["AHLEMREV ARDEP","LUZA ARDEP","AJNARAL ARDEP","AXOR ARDEP"]
var sofrimento=["otulosba redop o eugesnoc êcov ,redop od sardep 3 sartuo sa moc ardep asse ratnuj êcov es ,ranigami euq asioc reuqlauq rairc edop êcov ale moc ,oãçairc ad redop o met ahlemrev ardep A",
"otulosba redop ririuqda edop êcov ,redop od sardep sêrt sartuo sa moc ardep asse ratnuj êcov es ,rajesed omoc sonaeco so ralortnoc edop êcov ale moc ,saugá sa ralortnoc ed redop o met ale ,luza ardep A",
"otulosba redop eugesnoc êcov ,redop od sardep sêrt sartuo sa moc ardep asse ratnuj es ,osrevitlum od setneuq siam samahc sa ranimod edop êcov ale moc ,ogof o ralortnoc ed redop o met ale ,ajnaral ardep A",
"otulosba redop eugesnoc êcov ,redop od sardep sartuo sa moc ardep asse ratnuj es ,asioc reuqlauq riurtsed edop êcov ,ossid méla ,resiuq euq oãsnemid reuqlauq arap ratropsnartelet es edop êcov ale moc ,etropsnartelet od e oãçiurtsed ad redop o met ale ,sadot ed asoredop siam ardep a ,axor ardep A"]
var posicão=0;
function sucessor() {
posicão++;
var numeroMAX=3;
if (posicão>numeroMAX){
posicão=0
}
var posicaoimg=imagens[posicão]
var posicaopreda=pedras[posicão]
var posicaodesc=sofrimento[posicão]
document.getElementById("IMAGEM").src=posicaoimg;
document.getElementById("NOMEDASPEDRAS").innerHTML=posicaopreda;
document.getElementById("INFODASPEDRAS").innerHTML=posicaodesc;


}