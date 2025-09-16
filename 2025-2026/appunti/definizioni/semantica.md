# Definizioni

## HTML
HTML (HyperText Markup Language) è il linguaggio di marcatura standard utilizzato per creare pagine web. È la struttura fondamentale del World Wide Web che permette di definire la struttura e il contenuto di una pagina web attraverso l'uso di elementi (tag) che indicano al browser come visualizzare il contenuto.

## Semantica
In HTML, la semantica si riferisce all'uso di tag che descrivono chiaramente il significato del contenuto che contengono, sia per i browser che per gli sviluppatori. Un elemento semantico comunica il suo significato al browser e allo sviluppatore, oltre a fornire struttura visiva.

Esempi di tag semantici:
- `<header>`: definisce un'intestazione
- `<footer>`: definisce un piè di pagina
- `<article>`: definisce un contenuto autonomo
- `<section>`: definisce una sezione in un documento
- `<nav>`: definisce un gruppo di link di navigazione

Vantaggi dell'HTML semantico:
1. Migliore accessibilità per screen reader e tecnologie assistive
2. Migliore SEO (Search Engine Optimization)
3. Codice più leggibile e manutenibile
4. Facilità nel definire stili con CSS

## Sintassi
La sintassi in HTML si riferisce alle regole che governano la struttura e la formattazione corretta del codice HTML. Include:

1. **Elementi e tag**: Gli elementi sono definiti da tag di apertura e chiusura, ad esempio `<p>...</p>`
2. **Annidamento**: Gli elementi possono contenere altri elementi, creando una struttura gerarchica
3. **Attributi**: Forniscono informazioni aggiuntive sugli elementi, formato come `nome="valore"`
4. **Commenti**: Annotazioni nel codice non visualizzate nel browser, in formato `<!-- commento -->`
5. **Doctype**: Dichiarazione che indica al browser quale versione di HTML viene utilizzata

Esempio di sintassi HTML corretta:
```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Titolo della pagina</title>
</head>
<body>
    <h1>Titolo principale</h1>
    <p>Questo è un <strong>paragrafo</strong> con testo.</p>
</body>
</html>
```
