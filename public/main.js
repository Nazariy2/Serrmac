// main.js
import axios from "axios";

// Richiesta al backend su Render
axios.get("https://serrmac.onrender.com/blogs")
  .then(res => {
    console.log(res.data); // mostra i dati nel console log
    // qui puoi aggiungere codice per mostrare i dati nel DOM
  })
  .catch(err => console.error(err));
