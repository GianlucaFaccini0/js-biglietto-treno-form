function calcolaPrezzo() {
    // Ottieni i valori inseriti dall'utente
    let kmDaPercorrere = parseFloat(document.getElementById("km").value);
    let etaPasseggero = parseInt(document.getElementById("eta").value);

    // Calcola il prezzo del biglietto
    let prezzoBase = kmDaPercorrere * 0.21;

    // Applica gli sconti in base all'età
    if (etaPasseggero < 18) {
        prezzoBase -= prezzoBase * 0.2; // Sconto del 20% per i minorenni
    } else if (etaPasseggero >= 65) {
        prezzoBase -= prezzoBase * 0.4; // Sconto del 40% per gli over 65
    }

    // Formatta il prezzo finale con massimo due decimali
    let prezzoFinale = prezzoBase.toFixed(2);

    // Mostra il risultato nella pagina
    let risultatoElement = document.getElementById("risultato");
    risultatoElement.innerHTML = "<p>Il prezzo del biglietto è: " + prezzoFinale + " €</p>";
}
