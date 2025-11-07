import { createPost } from "./addPost";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const Nome_Cognome  = form.elements.title.value;
    const Nome_Rivenditore = form.elements.author.value;
    const Modello_Macchina = form.elements.Modello.value;
    const Matricola = form.elements.Matricola.value;
    const Anno_di_Produzione = form.elements.Anno.value;
    const Data_Inserimento = form.elements.inserimento.value;
    const Data_di_Intervento = form.elements.intervento.value;
    const Nome_Responsabile = form.elements.responsabile.value;
    const mainContent = form.elements.mainContent.value;

    const postData = {
        Nome_Cognome  ,
        Nome_Rivenditore,
        Modello_Macchina,
        Matricola,
        Anno_di_Produzione,
        Data_Inserimento,
        Data_di_Intervento,
        Nome_Responsabile,
        text: mainContent
    }
    createPost(postData);
});


