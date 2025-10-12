// const blogList = document.querySelector(".blogList");

// export function makehtml(data) {
//   const markup = data
//     .map((item) => {
//       return `
//         <li class="list-group-item bg-dark text-white mb-3 p-3 rounded shadow-sm border border-secondary">
//           <h3 class="fw-bold">${item.Nome_Cognome}</h3>
//           <p class="mb-1"><span class="text-info">Modello Macchina:</span> ${item.Modello_Macchina}</p>
//           <p class="mb-1"><span class="text-info">Date:</span> ${item.date}</p>
//           <p class="mb-3">${item.article.text}</p>
//           <div class="d-flex gap-2">
//             <button class="btn btn-sm btn-outline-danger delete" id="${item.id}">Delete</button>
//           </div>
//         </li>
//       `;
//     })
//     .join(" ");

//   blogList.innerHTML = markup;
//   return markup;
// }

const blogList = document.querySelector(".blogList");
const modal = document.getElementById("infoModal");
const closeModal = document.querySelector(".close");

// elementi della modale
const modalNomeCognome = document.getElementById("modalNomeCognome");
const modalNomeRivenditore = document.getElementById("modalNomeRivenditore");
const modalModel = document.getElementById("modalModel");
const modalMatricolaMacchina = document.getElementById("modalMatricolaMacchina");
const modalAnnoProduziuone = document.getElementById("modalAnnoProduziuone");
const modalDataInserimento = document.getElementById("modalDataInserimento");
const modalProblema = document.getElementById("modalProblema");
const modalIntervento = document.getElementById("modalIntervento");
const modalResponsabile = document.getElementById("modalResponsabile");
const modalText = document.getElementById("modalText");

export function makehtml(data) {
  const markup = data
    .map((item) => {
      return `
        <li class="list-group-item bg-dark text-white mb-3 p-3 rounded shadow-sm border border-secondary">
          <h3 class="fw-bold">${item.Nome_Cognome}</h3>
          <p class="mb-1"><span class="text-info">Modello Macchina:</span> ${item.Modello_Macchina}</p>
          <p class="mb-1"><span class="text-info">Data inserimento:</span> ${item.Data_Inserimento}</p>
          <p class="text-truncate" style="max-width: 400px;">${item.article.text}</p>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-outline-danger delete" id="${item.id}">Delete</button>
            <button class="btn btn-sm btn-outline-info view" data-id="${item.id}">Vedi tutto</button>
          </div>
        </li>
      `;
    })
    .join("");

  blogList.innerHTML = markup;

  // aggiungo i listener ai bottoni "Vedi tutto"
  const viewButtons = blogList.querySelectorAll(".view");

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const selectedItem = data.find((i) => i.id == id);

      if (selectedItem) {
        // Riempi i campi della modale
        modalNomeCognome.textContent = selectedItem.Nome_Cognome || "-";
        modalNomeRivenditore.textContent = selectedItem.Nome_Rivenditore || "-";
        modalModel.textContent = selectedItem.Modello_Macchina || "-";
        modalMatricolaMacchina.textContent = selectedItem.Matricola_Macchina || "-";
        modalAnnoProduziuone.textContent = selectedItem.Anno_Produzione || "-";
        modalDataInserimento.textContent = selectedItem.Data_Inserimento || "-";
        modalProblema.textContent = selectedItem.Problema || "-";
        modalIntervento.textContent = selectedItem.Data_Intervento || "-";
        modalResponsabile.textContent = selectedItem.Responsabile || "-";
        modalText.textContent = selectedItem.article?.text || "-";

        // Mostra la modale
        modal.style.display = "flex";
      }
    });
  });

  // Chiudi la modale cliccando sulla X o fuori dal contenuto
  closeModal.addEventListener("click", () => (modal.style.display = "none"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  return markup;
}
