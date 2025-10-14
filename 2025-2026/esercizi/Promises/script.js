const miaPromise = new Promise((resolve, reject) => {
  const successo = true;
  
  setTimeout(() => {
    if (successo) {
      resolve("Operazione completata con successo!");
    } else {
      reject("Si è verificato un errore 😢");
    }
  }, 2000); 
});

miaPromise
  .then((messaggio) => {
    console.log("✅", messaggio);
  })
  .catch((errore) => {
    console.error("❌", errore);
  })
  .finally(() => {
    console.log("🔁 Operazione terminata (successo o errore).");
  });
