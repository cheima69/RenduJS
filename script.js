// Afficher la navigation



//     Récupérer  le logo
//    Récupérer  les liens :





fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json")
    .then(response => response.json())
    .then(data => {

        const container = document.getElementById("container");
        const menu = document.getElementById("menu");
        const activite = document.getElementById("activite");
        const titre = document.getElementById("titre-activite");
        const texte = document.getElementById("texte-activite");
        const reserverbtn = document.getElementById("btn-reserver");
        const avantages = document.getElementById("avantages");
        const liste = document.getElementById("listeAvantages");
        const footer = document.getElementById("footer");

        titre.textContent = data.nomCommercial;
        texte.textContent = data.phraseAccroche;
        reserverbtn.textContent = data.texteAppelAction;

        data.avantagesClients.forEach(element => {
            const para = document.createElement("p");
            para.textContent = element;
            liste.appendChild(para);
        });

        // Test pour services => 


        const services = document.getElementById("liste-services");

        data.activites.forEach(game => {
            console.log(game);


            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            h3.textContent = game.nom;
            const desc = document.createElement("p");
            desc.textContent = game.description;
            const image = document.createElement("img");
            image.src = game["image-url"];


            services.appendChild(div);
            div.appendChild(h3);
            div.appendChild(desc);
            div.appendChild(image);
        })


        const div = document.getElementById("listeTemoignages");
      
        // const temoin=document.getElementById("temoignages");

        data.temoignages.forEach(element => {
            console.log(element);

            const card = document.createElement("card");
            const h4 = document.createElement("h4");
            h4.textContent = element.prenom;
            const type = document.createElement("typeExperience");
            type.textContent = element.typeExperience;
            const com = document.createElement("commentaire");
            com.textContent = element.commentaire;
            const note = document.createElement("note");
            note.textContent = element.note;


            // const experience= document.createElement("p");
            // p.textContent= element.typeExperience;

            div.appendChild(card);
            card.appendChild(h4);
            card.appendChild(type);
            card.appendChild(com);
            card.appendChild(note);


        });


    });









// Afficher la section d’accueil
//     afficher le titre principal
//     afficher le texte de présentation
//     afficher le bouton "Acheter"
//     afficher le bouton "Explorer"




// Afficher la section avantages
//     afficher le titre ""

//     pour chaque avantage
//         afficher un bloc avec
//             un titre
//             une description






// Afficher la section services
//     afficher le titre "Vos sneakers, votre style"

//     pour chaque service
//         afficher un bloc avec
//             un titre
//             une description






// Afficher la section témoignages
//     afficher le titre "Ils parlent"

//     pour chaque témoignage
//         afficher
//             la note
//             le commentaire
//             le nom du client








// Afficher le pied de page
//     afficher le nom de l’entreprise
//     afficher les liens légaux
//     afficher les réseaux sociaux