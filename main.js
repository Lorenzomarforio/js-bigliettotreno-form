const nome = document.getElementById('nome');
const km = document.getElementById('km');
const fasciaeta = document.getElementById('fasciaeta');
const btnconferma = document.getElementById('btnconferma');
const btnannulla = document.getElementById('btnannulla');
const passeggeronome = document.getElementById('passeggero-nome');
const passeggeroofferta = document.getElementById('passeggero-offerta');
const passeggerocarrozza = document.getElementById('passeggero-carrozza');
const passeggerocodice = document.getElementById('passeggero-codice');
const passeggerocosto = document.getElementById('passeggero-costo');
const modulo = document.getElementById('ticket-form')
    modulo.addEventListener('submit',(event) => {
   event.preventDefault();
        const nomeValue = nome.value;
    const kmValue = Number(km.value);
    const etaValue = fasciaeta.value;
    console.log(nomeValue)
    console.log(kmValue)
    console.log(etaValue)

    if (nomeValue === '' || !Number.isFinite(kmValue) || kmValue <= 0) {
        alert('Inserisci un nome valido e un numero di Km maggiore di 0.');
        return;
    }

    const prezzoBase = kmValue * 0.21;
    let prezzoFinale = prezzoBase;
    let offerta = 'Biglietto Standard';

    if (etaValue === 'minorenne') {
        prezzoFinale = prezzoBase * 0.8;
        offerta = 'Sconto minorenni';
    } else if (etaValue === 'over65') {
        prezzoFinale = prezzoBase * 0.6;
        offerta = 'Sconto Senior';
    }

    const carrozza = Math.floor(Math.random() * 8) + 1;
    const codiceCP = Math.floor(Math.random() * 10000) + 10000;

    passeggeronome.innerText = nomeValue;
    passeggeroofferta.innerText = offerta;
    passeggerocarrozza.innerText = carrozza;
    passeggerocodice.innerText = codiceCP;
    passeggerocosto.innerText = prezzoFinale.toFixed(2) + '€';
});

btnannulla.addEventListener('click', function () {
    nome.value = '';
    km.value = '';
    fasciaeta.value = 'maggiorenne';
    passeggeronome.innerText = '-';
    passeggeroofferta.innerText = '-';
    passeggerocarrozza.innerText = '-';
    passeggerocodice.innerText = '-';
    passeggerocosto.innerText = '-';
});
