
let pontos = 0;
let pontosPorClique = 1;
let precoupgrade1 = 10;
let precoupgrade2 = 50;
let precoupgrade3 = 1000;

const pontosDiv = document.getElementById('points');
const clickBtn = document.getElementById('click-btn');
const valorupgrade1 = document.getElementById('valorupgrade1');
const valorupgrade2 = document.getElementById('valorupgrade2');
const valorupgrade3 = document.getElementById('valorupgrade3');
const cps = document.getElementById('cps');


clickBtn.onclick = () => {
    pontos += pontosPorClique;
    atualizarPontos();
};

function atualizarPontos() {
    pontosDiv.innerText = 'Pontos: ' + (pontos);
}

function atualizarCPS() {
    cps.innerText = 'pontos por click: ' + (pontosPorClique);
}

// Upgrade 1
document.getElementById('upgrade1').onclick = () => {
    if (pontos >= precoupgrade1) {
        pontos -= precoupgrade1;
        pontosPorClique += 1;
        precoupgrade1 = precoupgrade1 * 2;
        valorupgrade1.innerText = precoupgrade1 + ' pontos';
        atualizarPontos();
        atualizarCPS();
    }
};

// Upgrade 2
document.getElementById('upgrade2').onclick = () => {
    if (pontos >= precoupgrade2) {
        pontos -= precoupgrade2;
        pontosPorClique *= 2;
        precoupgrade2 = precoupgrade2 * 4;
        valorupgrade2.innerText = precoupgrade2 + ' pontos';
        atualizarPontos();
        atualizarCPS();
    }
};

// Upgrade 3 
document.getElementById('upgrade3').onclick = () => {
    if (pontos >= precoupgrade3) {
        pontos -= precoupgrade3;
        pontosPorClique *= 3;
        precoupgrade3 = precoupgrade3 * 8;
        valorupgrade3.innerText = precoupgrade3 + ' pontos';
        atualizarPontos();
        atualizarCPS();
    }
};