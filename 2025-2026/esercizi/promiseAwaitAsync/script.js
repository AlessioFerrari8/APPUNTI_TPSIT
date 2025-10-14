
async function f() {
  let promise = new Promise((resolve, reject) => {
    n = Math.random(1, 2);
    if (n == 1) setTimeout(() => resolve("fatto!"), 1000)
    else setTimeout(() => reject("fatto!"), 1000) // con reject non funziona
    // QUANDO FACCIO SETTIMEOUT, con reject lo status diventa rejected
    // e quindi non va più avanti, con resolve invece funziona
  });

//   let result = await promise; 

//   let result2 = await promise.catch(error => alert(error));
    try {
        let result = await promise;
        alert(result); // "fatto!" --> reaction
    } catch(error) {
        alert(error); // "fatto!"
    }
  
  // L'esecuzione di f() si ferma qui per 1 secondo
  // quando con await abbiamo una promise, aspettiamo che si risolva
  // e poi assegniamo il valore risolto alla variabile result
  // se la promise viene rejectata, viene generato un errore
  // che può essere catturato con try...catch


  // si potrebbe risolvere cosi
//   try {
//     let result = await promise;
//   } catch(error) {
//     alert(error); // "fatto!"
//   }


  alert(result); // "fatto!" --> reaction
}

f();
