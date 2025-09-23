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

## CSS
CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere l'aspetto e il layout di un documento HTML. Con CSS, è possibile controllare il colore del testo, il tipo di carattere, la spaziatura tra i paragrafi, la dimensione delle immagini, la posizione degli elementi, la larghezza delle colonne e molto altro.

### Caratteristiche principali del CSS
1. **Cascading (a cascata)**: Le regole possono sovrapporsi e quelle più specifiche hanno la precedenza
2. **Separation of Concerns**: Separa la struttura (HTML) dalla presentazione (CSS)
3. **Riutilizzabilità**: Un singolo file CSS può essere applicato a più pagine HTML
4. **Responsive Design**: Permette di adattare l'aspetto dei siti web a diversi dispositivi e dimensioni dello schermo

### Box Model CSS
Ogni elemento HTML viene rappresentato come un rettangolo (box) composto da:
- **Content**: Il contenuto effettivo dell'elemento
- **Padding**: Lo spazio tra il contenuto e il bordo
- **Border**: Il bordo che circonda il padding e il contenuto
- **Margin**: Lo spazio esterno al bordo

### Specificity (Specificità)
Determina quale regola CSS viene applicata quando più regole si riferiscono allo stesso elemento:
1. Stili inline (`style="..."`) - Più alta priorità
2. ID selectors (`#id`)
3. Class selectors (`.class`), attribute selectors (`[type="..."]`), pseudo-classi (`:hover`)
4. Element selectors (`p`, `div`) - Più bassa priorità

### Media Queries
Permettono di applicare stili diversi in base alle caratteristiche del dispositivo:
```css
@media screen and (max-width: 768px) {
  /* Stili per schermi con larghezza massima di 768px */
}
```

## Flexbox
Flexbox (Flexible Box Layout) è un modulo di layout CSS3 che fornisce un modo efficiente per disporre, distribuire e allineare elementi all'interno di un contenitore, anche quando la loro dimensione è sconosciuta o dinamica. È particolarmente utile per creare layout responsivi e gestire la distribuzione dello spazio.

### Caratteristiche principali di Flexbox
1. **Layout unidimensionale**: Gestisce il layout lungo un singolo asse (orizzontale o verticale) alla volta
2. **Flessibilità automatica**: Gli elementi possono crescere o ridursi automaticamente in base allo spazio disponibile
3. **Controllo dell'allineamento**: Offre controllo preciso sull'allineamento degli elementi
4. **Ordine flessibile**: Permette di riordinare gli elementi visivamente senza modificare l'HTML

### Terminologia Flexbox
- **Flex Container**: L'elemento genitore che ha `display: flex` applicato
- **Flex Items**: Gli elementi figli diretti del flex container
- **Main Axis**: L'asse principale lungo il quale gli elementi flex sono disposti
- **Cross Axis**: L'asse perpendicolare al main axis
- **Main Start/End**: I punti di inizio e fine del main axis
- **Cross Start/End**: I punti di inizio e fine del cross axis

### Differenze con altri metodi di layout
| Aspetto | Flexbox | Float | Grid |
|---------|---------|-------|------|
| Dimensioni | 1D (una dimensione) | Limitato | 2D (due dimensioni) |
| Allineamento | Eccellente | Difficile | Eccellente |
| Ordine elementi | Flessibile | Fisso | Flessibile |
| Responsività | Nativa | Manuale | Nativa |

### Quando usare Flexbox
- Layout di componenti UI (navbar, card, form)
- Allineamento di elementi in una direzione
- Distribuzione equa dello spazio
- Centraggio verticale/orizzontale
- Layout responsive semplici

## Layout Responsivo
Il layout responsivo (Responsive Web Design) è un approccio di progettazione web che permette alle pagine web di adattarsi automaticamente a diverse dimensioni di schermo e dispositivi. L'obiettivo è fornire un'esperienza utente ottimale su desktop, tablet e smartphone.

### Principi del Design Responsivo
1. **Griglia fluida**: Layout basato su percentuali anziché dimensioni fisse
2. **Immagini flessibili**: Immagini che si ridimensionano proporzionalmente
3. **Media queries**: Regole CSS che si applicano a specifiche condizioni del dispositivo

### Breakpoints comuni
- **Mobile**: 0px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px e oltre

### Vantaggi del Design Responsivo
- Migliore esperienza utente su tutti i dispositivi
- Riduzione dei costi di sviluppo (un solo sito)
- Migliore SEO (Google favorisce i siti responsive)
- Facilità di manutenzione

## Box Model
Il Box Model è il modello fondamentale che descrive come vengono calcolate le dimensioni degli elementi HTML e come occupano spazio nella pagina. Ogni elemento è rappresentato come una scatola rettangolare composta da quattro aree concentriche.

### Componenti del Box Model
1. **Content**: Il contenuto effettivo dell'elemento (testo, immagini, ecc.)
2. **Padding**: Lo spazio interno tra il contenuto e il bordo
3. **Border**: Il bordo che circonda il padding e il contenuto
4. **Margin**: Lo spazio esterno che separa l'elemento dagli altri elementi

### Tipi di Box Model
- **Standard Box Model** (`box-sizing: content-box`): Le dimensioni includono solo il contenuto
- **Alternative Box Model** (`box-sizing: border-box`): Le dimensioni includono contenuto, padding e border

### Esempio di calcolo dimensioni
```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

**Standard Box Model**: Larghezza totale = 200px + 40px + 10px = 250px
**Alternative Box Model**: Larghezza totale = 200px (padding e border inclusi)

## Viewport
Il viewport è l'area visibile di una pagina web nel browser dell'utente. È un concetto fondamentale per il design responsivo, poiché definisce come il contenuto viene visualizzato su dispositivi di diverse dimensioni.

### Tipi di Viewport
1. **Layout Viewport**: L'area in cui il browser renderizza la pagina
2. **Visual Viewport**: La parte attualmente visibile della pagina
3. **Ideal Viewport**: Le dimensioni ottimali per la visualizzazione

### Meta Viewport Tag
Il tag meta viewport controlla come la pagina viene scalata e visualizzata sui dispositivi mobili:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Attributi comuni del viewport
- `width=device-width`: Imposta la larghezza del viewport alla larghezza del dispositivo
- `initial-scale=1.0`: Imposta il livello di zoom iniziale
- `maximum-scale`: Livello massimo di zoom consentito
- `minimum-scale`: Livello minimo di zoom consentito
- `user-scalable`: Permette o impedisce lo zoom da parte dell'utente

