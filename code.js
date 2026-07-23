logTyper("WELCOME, PLAYER. 1 ROUND LOADED")
function buttonSwitcher(buttonId, state) {
    document.getElementById(buttonId).disabled = state;
    document.getElementById(buttonId).hidden = state;
}
function logTyper(text, i = 0) {
    document.getElementById("actionLog").textContent += text[i];
    if (i == text.length - 1) {
        return;
    } 
    setTimeout (() => logTyper(text, i + 1),10)
}
liveRound = Math.floor(Math.random() * (7 - 1) + 1)
currentChamber = Math.floor(Math.random() * (7 - 1) + 1)
document.getElementById("SPIN").onclick = function(){
    _stop = true
   currentChamber = Math.random() * (7 - 1) + 1;
   document.getElementById("actionLog").textContent = ""
   logTyper("SPINNED, NEXT?")
}
document.getElementById("SHOOT").onclick = function(){
if (liveRound == currentChamber) {
    document.getElementById("actionLog").textContent = ""
    logTyper("DEAD, RETRY?");
    buttonSwitcher("SHOOT",true)
    buttonSwitcher("SPIN", true)
    buttonSwitcher("RETRY",false )
} else {
    document.getElementById("actionLog").textContent = ""
    logTyper("ALIVE, NEXT?")
    currentChamber = currentChamber + 1
} 
if (currentChamber > 6) {
 currentChamber = 1
}
}
document.getElementById("RETRY").onclick = function() {
    liveRound = Math.floor(Math.random() * (7 - 1) + 1)
    currentChamber = Math.floor(Math.random() * (7 - 1) + 1)
    document.getElementById("actionLog").textContent = ""
    logTyper("WELCOME, AGAIN");
    buttonSwitcher("SHOOT",false)
    buttonSwitcher("SPIN", false)
    buttonSwitcher("RETRY", true)
}