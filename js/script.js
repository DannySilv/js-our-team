// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede
// BONUS 3:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

//OBJECT TEAM - It contains names, roles and images of the team members
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

//MILESTONE 1
for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    console.log(teamMember.name, teamMember);
}

// MILESTONE 2
const teamContainer = document.querySelector(".team-container");
teamContainer.innerHTML = "";
console.log(teamContainer);

for (let i = 0; i < team.length; i++) {
    const thisMember = team[i];
    const domElement = genCard(thisMember);
    teamContainer.append(domElement);
}



// DOM FUNCTION - CARD-GENERATOR
/**
 * Description -> It generates the Card HTML element (For MILESTONE 2)
 * @param {any} teamMember -> The team member for which we are generating a card
 * @returns {any} -> HTML element
 */
 function genCard(teamMember) {
    const genCard = document.createElement("div");

    genCard.innerHTML = 
    `<div class="card-image">
    <img
      src="img/${teamMember.image}"
      alt="${teamMember.name}"
    />
    </div>
    <div class="card-text">
        <h3>${teamMember.name}</h3>
        <p>${teamMember.role}</p>
    </div>`

    genCard.classList.add("team-card");

    return genCard;
}