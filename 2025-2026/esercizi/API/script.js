fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json()) 
  .then(data => console.log("Risposta API:", data))
  .catch(err => console.error("Errore:", err));

console.log("End of script");
