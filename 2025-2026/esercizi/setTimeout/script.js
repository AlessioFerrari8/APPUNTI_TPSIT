const azzetti = document.getElementById("azzetti");
const azza = document.querySelector(".azza");
const azz = document.getElementById("azz");

azzetti.addEventListener("click", function() {

    setTimeout(() => {
        azza.innerHTML = "Ora provalo";
        
        // Controlla se il valore nella textarea è corretto
        const valoreInserito = azz.value; // Ottiene il testo dalla textarea
        const valoreCorretto = "Azzetti"; // Il valore "vero"
        
        if (valoreInserito === valoreCorretto) {
            azza.innerHTML = "Bevenuto, ora provalo!";
            azz.value = ""; // Pulisce la textarea
        } else {
            azza.innerHTML = "Riprova...";
        }
    }, 100); // Aspetta 100 millisecondi

});
