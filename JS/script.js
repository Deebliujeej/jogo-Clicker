let base = 0;

function alterar(){
    document.getElementById('teste').innerText=base;
}


function clique() {
    console.log('botão funciona');
    document.getElementById('teste').innerText=base;
    base = base +1
}
function upgrade1() {
    if(base>30) {
        base = base -31
        document.getElementById('teste').innerText=base;
    } else {
        window.alert('pobre');
    }

}