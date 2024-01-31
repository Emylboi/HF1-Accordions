/* 

- lav et array med objekter (et objekt for hver accordion - flyt accordions fra html til js) 
- for at få dem udskrevet, skal der loopes over array'et med objekter (brug forEach)
- Gem container-div'en fra HTML filen ned i en variabel. Udskriv accordions her
- Hver accordion har class'en '.accordion'. gem dem ned i en variabel (querySelectorAll), og foreach over dem, så hver enkel kan trykkes på
    - brug e.target
- husk 'classList.toggle' istedet for 'add'

*/

let accordionArray = [
  {
    title: "Overskrift 1",
    text: "Brødtekst 1",
  },
  {
    title: "Overskrift 2",
    text: "Brødtekst 2",
  },
  {
    title: "Overskrift 3",
    text: "Brødtekst 3",
  },
];

let container = document.querySelector(".container");
let accordion = document.querySelectorAll(".accordion");

accordionArray.forEach((accordion) => {
  container.innerHTML += `
        <div class="accordion">${accordion.title}</p>
            <div class="panel">
                <p>${accordion.text}</p>
            </div>
        </div>
    `;
});

/* Gammel kode: */

const acc = document.querySelectorAll(".accordion");

acc.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active"); //currentTarget er den yderste div af det der rammes, hvor target er selve elementet der rammes
  });
});
