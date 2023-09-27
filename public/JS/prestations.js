const prestationFemmes = [
{
    "service": "Shampoing, Coupe, Coiffage",
    "temps": 45,
    "prix": 35,
    "image": "Shampoing, Coupe, Coiffage.jpeg",
},
{
    "service": "Shampoing, Coupe, Brushing",
    "temps": 60,
    "prix": 40,
    "image": "Shampoing, Coupe Brushing.jpeg",
},
{
    "service": "Shampoing, Brushing",
    "temps": 45,
    "prix": 25,
    "image": "Brushing.webp",
},
{
    "service": "Shampoing, Mis en plis",
    "temps": 45,
    "prix": 25,
    "image": "Mis en plis.jpeg",
},
{
    "service": "Coupe",
    "temps": 30,
    "prix": 20,
    "image": "coupe.jpeg",
},
{
    "service": "Coloration cheveux court",
    "temps": 45,
    "prix": 40,
    "image": "coloration_court.jpeg",
},
{
    "service": "Coloration cheveux long",
    "temps": 75,
    "prix": 60,
    "image": "colloration_long.jpeg",
},
{
    "service": "Permanente",
    "temps": 60,
    "prix": 45,
    "image": "permanente.jpeg",
},
{
    "service": "Mèches",
    "temps": 60,
    "prix": "A partir de 30",
    "image": "mèches.jpeg",
},
{
    "service": "Balayage",
    "temps": 90,
    "prix": "A partir de 40",
    "image": "balayage.jpeg",
},
{
    "service": "Chignons / Coiffures évènementielles",
    "temps": 90,
    "prix": "A partir de 70",
    "image": "chignong.jpeg",
},
]

//On peut maintenant incorporer ça dans notre html à l'aide d'une boucle pour parcourir notre tableau.
for (prestation of prestationFemmes) {

    // On créé toutes les variables que l'on souhaite implanter dans notre html.
    let div = document.createElement('div');
    const title = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const div2 = document.createElement('div');
    const buttonKM = document.createElement('button');
    const buttonB = document.createElement('button');
    const aKM = document.createElement('a');
    const aB = document.createElement('a');

    //console.log(divFemmes);
    
    //On créé des classes pour chaque élément :
    div.classList.add("prestation_block");
    title.classList.add("prestation__titre");
    img.classList.add("prestation__img");
    p.classList.add("prestation__price");
    div2.classList.add("prestation__button");
    buttonKM.classList.add("know-more");
    buttonB.classList.add("book");
    

    // On rajoute un lien à nos boutons
    aKM.setAttribute("href", "../Pages/Prestation_femmes.html")
    aB.setAttribute("href", "../Pages/Prendrerdv.html")

    //On insère les éléments qui nous intéresse de notre tableau
    title.textContent = `${prestation.service}`;
    img.src = `../Images/Prestations/Femmes/${prestation.image}`;
    p.textContent = `${prestation.prix}€`;
    aKM.textContent = 'En savoir plus';
    aB.textContent = 'Réserver';
    
    //On sélectionne notre grande section où les autres éléments seront exportés
    const section = document.querySelector(".prestations__femmes")
    //console.log(section);
    
    // on appendChild
    section.appendChild(div);
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(div2);
    div2.appendChild(buttonKM);
    div2.appendChild(buttonB);
    buttonKM.appendChild(aKM);
    buttonB.appendChild(aB);

}


// Maintenant on fait la même chose avec les prestations hommes :
const prestationHommes = [
{
    "service": "Shampoing, Coupe, Coiffage",
    "temps": 45,
    "prix": 30,
    "image": "SHampoing, Coupe, Coiffage.jpg",
},
{
    "service": "Shampoing, Coupe",
    "temps": 30,
    "prix": 25,
    "image": "Shampoing, coupe.jpeg",
},
{
    "service": "Coupe",
    "temps": 25,
    "prix": 20,
    "image": "coupe_homme.jpeg",
},
{
    "service": "Coupe, Coiffage",
    "temps": 35,
    "prix": 25,
    "image": "Coupe, coiffage.jpeg",
},
{
    "service": "Shampoing, Coupe dégradé, zéro",
    "temps": 45,
    "prix": 30,
    "image": "Dégradé zéro.jpeg",
},
{
    "service": "Coloration",
    "temps": 60,
    "prix": "A partir de 40",
    "image": "coloration.jpeg",
},
{
    "service": "Barbe",
    "temps": 15,
    "prix": 10,
    "image": "barbe.webp",
},
{
    "service": "Shampoing, coupe, coiffage, barbe",
    "temps": 60,
    "prix": 36,
    "image": "Shampoing, coupe, coiffage, barbe.jpeg",
},
]

//On peut maintenant incorporer ça dans notre html à l'aide d'une boucle pour parcourir notre tableau.
for (prestation of prestationHommes) {

    // On créé toutes les variables que l'on souhaite implanter dans notre html.
    let div = document.createElement('div');
    const title = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const div2 = document.createElement('div');
    const buttonKM = document.createElement('button');
    const buttonB = document.createElement('button');
    const aKM = document.createElement('a');
    const aB = document.createElement('a');

    //console.log(divFemmes);
    
    //On créé des classes pour chaque élément :
    div.classList.add("prestation_block");
    title.classList.add("prestation__titre");
    img.classList.add("prestation__img");
    p.classList.add("prestation__price");
    div2.classList.add("prestation__button");
    buttonKM.classList.add("know-more");
    buttonB.classList.add("book");
    

    // On rajoute un lien à nos boutons
    aKM.setAttribute("href", "../Pages/Prestation_hommes.html")
    aB.setAttribute("href", "../Pages/Prendrerdv.html")

    //On insère les éléments qui nous intéresse de notre tableau
    title.textContent = `${prestation.service}`;
    img.src = `../Images/Prestations/Hommes/${prestation.image}`;
    p.textContent = `${prestation.prix}€`;
    aKM.textContent = 'En savoir plus';
    aB.textContent = 'Réserver';
    
    //On sélectionne notre grande section où les autres éléments seront exportés
    const section = document.querySelector(".prestations__hommes")
    //console.log(section);
    
    // on appendChild
    section.appendChild(div);
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(div2);
    div2.appendChild(buttonKM);
    div2.appendChild(buttonB);
    buttonKM.appendChild(aKM);
    buttonB.appendChild(aB);
    
    }

const prestationEnfants = [
{
    "service": "Coupe –10 ans",
    "temps": 30,
    "prix": 15,
    "image": "Coupe -10ans.jpeg",
},
{
    "service": "Coupe –15 ans",
    "temps": 30,
    "prix": 17,
    "image": "coupe -15ans.webp",
},
{
    "service": "Supplément shampoing",
    "temps": 10,
    "prix": 5,
    "image": "shampoing.jpeg",
},
{
    "service": "Coupe frange",
    "temps": 30,
    "prix": 7,
    "image": "frange.jpeg",
},
{
    "service": "Coupe et coiffage fillette évènement",
    "temps": 60,
    "prix": "A partir de 25",
    "image": "Event.jpeg",
    // ajouter lien en savoir +
    // ajouter détail pour la page d'après
},
]

//On peut maintenant incorporer ça dans notre html à l'aide d'une boucle pour parcourir notre tableau.
for (prestation of prestationEnfants) {

    // On créé toutes les variables que l'on souhaite implanter dans notre html.
    let div = document.createElement('div');
    const title = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const div2 = document.createElement('div');
    const buttonKM = document.createElement('button');
    const buttonB = document.createElement('button');
    const aKM = document.createElement('a');
    const aB = document.createElement('a');
    
    //On créé des classes pour chaque élément :
    div.classList.add("prestation_block");
    title.classList.add("prestation__titre");
    img.classList.add("prestation__img");
    p.classList.add("prestation__price");
    div2.classList.add("prestation__button");
    buttonKM.classList.add("know-more");
    buttonB.classList.add("book");

    // On rajoute un lien à nos boutons
    aKM.setAttribute("href", "../Pages/Prestation_enfants.html")
    aB.setAttribute("href", "../Pages/Prendrerdv.html")

    //On insère les éléments qui nous intéresse de notre tableau
    title.textContent = `${prestation.service}`;
    img.src = `../Images/Prestations/Enfants/${prestation.image}`;
    p.textContent = `${prestation.prix}€`;
    aKM.textContent = 'En savoir plus';
    aB.textContent = 'Réserver';
    
    //On sélectionne notre grande section où les autres éléments seront exportés
    const section = document.querySelector(".prestations__enfants")
    //console.log(section);
    
    // on appendChild
    section.appendChild(div);
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(div2);
    div2.appendChild(buttonKM);
    div2.appendChild(buttonB);
    buttonKM.appendChild(aKM);
    buttonB.appendChild(aB);
    }

const prestationOnglerie = [
{
    "service": "Manucure",
    "temps": 60,
    "prix": 37,
    "image": "Manucure.avif",
},
{
    "service": "Pose capsules avec  gel de couleur ou non",
    "temps": 90,
    "prix": 57,
    "image": "pose capsule avec gel de couleur.jpeg",
},
{
    "service": "Pose capsules avec gel simple transparent",
    "temps": 75,
    "prix": 52,
    "image": "pose capsules avec gel simple.jpeg",
},
{
    "service": "Nail art",
    "temps": "+20",
    "prix": "+5",
    "image": "nail art.webp",
},
{
    "service": "Pedicure : Beauté des pieds",
    "temps": 60,
    "prix": 40,
    "image": "pedicure.webp",
},
]

//On peut maintenant incorporer ça dans notre html à l'aide d'une boucle pour parcourir notre tableau.
for (prestation of prestationOnglerie) {

    // On créé toutes les variables que l'on souhaite implanter dans notre html.
    let div = document.createElement('div');
    const title = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const div2 = document.createElement('div');
    const buttonKM = document.createElement('button');
    const buttonB = document.createElement('button');
    const aKM = document.createElement('a');
    const aB = document.createElement('a');
    
    //On créé des classes pour chaque élément :
    div.classList.add("prestation_block");
    title.classList.add("prestation__titre");
    img.classList.add("prestation__img");
    p.classList.add("prestation__price");
    div2.classList.add("prestation__button");
    buttonKM.classList.add("know-more");
    buttonB.classList.add("book");

    // On rajoute un lien à nos boutons
    aKM.setAttribute("href", "../Pages/Prestation_onglerie.html")
    aB.setAttribute("href", "../Pages/Prendrerdv.html")

    //On insère les éléments qui nous intéresse de notre tableau
    title.textContent = `${prestation.service}`;
    img.src = `../Images/Prestations/Onglerie/${prestation.image}`;
    p.textContent = `${prestation.prix}€`;
    aKM.textContent = 'En savoir plus';
    aB.textContent = 'Réserver';
    
    //On sélectionne notre grande section où les autres éléments seront exportés
    const section = document.querySelector(".prestations__onglerie")
    //console.log(section);
    
    // on appendChild
    section.appendChild(div);
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(div2);
    div2.appendChild(buttonKM);
    div2.appendChild(buttonB);
    buttonKM.appendChild(aKM);
    buttonB.appendChild(aB);
    
    }