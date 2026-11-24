const urlParams = new URLSearchParams(window.location.search);
const currentLevel = parseInt(urlParams.get('level')) || 1;
const nextLevel = currentLevel + 1;
const previousLevel = currentLevel > 1 ? currentLevel - 1 : 1;
const txtEditor = `<h1>Code Editor</h1>
                        <textarea id="code" rows="10" cols="50"></textarea>
                        <br><button id="PopInfo" popovertarget="info" class="button">Help</button>
                        <button id="run" class="button" style="margin-left: 50px; " onclick="run()"><i class="bi bi-play"></i>Run mijn code</button>`
const txtNavbar = `<div class="navbar">
   <a class="btn  btn-outline-dark btn-lg mb-1" href="Opdracht.html?level=${previousLevel}"><i class="bi bi-arrow-left"></i> vorige ${previousLevel}</a>
   <a class="btn  btn-outline-dark btn-lg mb-1" href="index.html">Terug naar overzicht</a>
   <a class="btn  btn-outline-dark btn-lg mb-1" href="Opdracht.html?level=${nextLevel}">volgende ${nextLevel} <i class="bi bi-arrow-right"></i> </a>
</div>`
const txtMain = `<div id="main">
        <div id="container" class="col-md-8 col-sm-12 col-lg-8"></div>
        <div class="editor-container col-md-4 col-sm-12 col-lg-4">
            <div id="editor"></div>
        </div>
    </div>
        
        <div id="info" class="actions poppy" popover>
            <h2>Spaceship Acties:</h2>
            <p><span class="cmd">spaceShip.moveForward();</span> <br> het schip gaat de richting op waar de punt toe
                wijst</p>
            <p><span class="cmd">spaceShip.moveBackward();</span> <br> het schip gaat de richting op waar de punt niet
                naartoe wijst</p>
            <p><span class="cmd">spaceShip.rotateRight();</span> <br> het schip draait naar rechts, maar beweegt niet
            </p>
            <p><span class="cmd">spaceShip.rotateLeft();</span> <br> het schip draait naar links, maar beweegt niet</p>
            <p><span class="cmd">spaceShip.wait();</span> <br> het schip draait en beweegt niet</p>
            <p>de <span class="cmd">For loop</span> hiermee kan je een actie meerdere keren uitvoeren</br>
            for (let i = 0; i < 5; i++) {</br>
            spaceShip.moveForward();}</p>
        </div>`

function reset() {
    var baseContainer = document.getElementById('container');
    baseContainer.innerHTML = "";
    spaceShip = new SpaceShip(baseContainer);
    spaceShip.loadLevel(currentLevel);
}
function run() {
    reset();
    code = document.getElementById('code').value;
    spaceShip.run(function () {
        eval(code);
        }, code);
}

var main = document.body
main.innerHTML += txtNavbar
main.innerHTML += txtMain
var editor = document.getElementById('editor');
editor.innerHTML = txtEditor
reset();
