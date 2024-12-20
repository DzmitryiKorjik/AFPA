"use strict";

const galleries = {
    picasso: [
        {src: 'img/picasso/Autoportrait_Picasso.png', alt: 'picasso', text: 'Autoportrait Picasso'},
        {src: 'img/picasso/La_Laitière.png', alt: 'La Laitière', text: 'La Laitière'},
        {src: 'img/picasso/La_Liseuse_à_la_fenêtre.png', alt: 'Liseuse', text: 'La Liseuse à la fenêtre'},
        {src: 'img/picasso/La_nuit_étoilée-1889.png', alt: 'La_nuit_étoilée-1889', text: 'La nuit étoilée (1889)'},
        {src: 'img/picasso/La_Promenade.png', alt: 'La Promenade', text: 'La Promenade'},
    ],
    caillebotle: [
        {src: 'img/caillebotle/Jour_de_pluie_à_Paris.png', alt: 'Jour_de_pluie_à_Paris', text: 'Jour de pluie à Paris (1877)'},
        {src: 'img/caillebotle/Peintres_en_batiment.png', alt: 'Peintres_en_batiment', text: 'Les Peintres en batiment (1877)'},
        {src: 'img/caillebotle/Raboteurs_de_parquet.png', alt: 'Raboteurs_de_parquet', text: 'Les Raboteurs de parquet (1877)'},
        {src: 'img/caillebotle/Périssoires_sur_l’Yerres.png', alt: 'Périssoires_sur_l’Yerres', text: "Périssoires sur l'Yerres (1877)"},
        {src: 'img/caillebotle/Autoportrait_Caillebotte.png', alt: 'Autoportrait_Caillebotte', text: 'Autoportrait (1877)'},
    ],
    vermeer: [
        {src: 'img/vermeer/Les_Iris-1889.png', alt: 'Les_Iris-1889', text: 'Les Iris (1889)'},
        {src: 'img/vermeer/Marie_Therese.png', alt: 'Marie_Therese', text: 'Marie Therese'},
        {src: 'img/vermeer/Moscou-1916.png', alt: 'Moscou-1916', text: 'Moscou-1916'},
        {src: 'img/vermeer/Noir-et-violet-1923.png', alt: 'Noir-et-violet-1923', text: "Noir et violet (1923)"},
        {src: 'img/vermeer/tableau-en-bleu-1925-.png', alt: 'tableau-en-bleu-1925', text: 'Tableau en bleu (1925)'},
    ],
    kandinsky: [
        {src: 'img/kandinsky/Campagne_Montagneuse-1889.jpg', alt: 'Campagne_Montagneuse-1889', text: 'Campagne Montagneuse (1889)'},
        {src: 'img/kandinsky/Composition-1939.png', alt: 'Composition-1939', text: 'Composition (1939)'},
        {src: 'img/kandinsky/Composition-VI-1913.png', alt: 'Composition-VI-1913', text: 'Composition VI (1913)'},
        {src: 'img/kandinsky/Demoiselles_Avignon.png', alt: 'Demoiselles Avignon', text: "Demoiselles Avignon"},
        {src: 'img/kandinsky/Femme_qui_pleure.png', alt: 'Femme_qui_pleure', text: 'Femme qui pleure'},
    ],
    monet: [
        {src: 'img/monet/fille_a_la-perle.png', alt: 'fille_a_la-perle', text: 'Fille a la perle'},
        {src: 'img/monet/guernica.png', alt: 'guernica', text: 'Guernica'},
        {src: 'img/monet/Impression_soleil_levant-1872.png', alt: 'Impression_soleil_levant-1872', text: 'Impression soleil levant (1872)'},
        {src: 'img/monet/Jaune_rouge_bleu.png', alt: 'Jaune_rouge_bleu', text: "Jaune rouge bleu"},
        {src: 'img/monet/Madame_Monet_et_Enfant-1875.png', alt: 'Madame_Monet_et_Enfant-1875', text: 'Madame Monet et Enfant (1875)'},
    ],
    van: [
        {src: 'img/van/La_Chambre_de_van_gogh-1889-.png', alt: 'La_Chambre_de_van_gogh', text: 'La Chambr de van gogh (1889)'},
        {src: 'img/van/La_Sieste.png', alt: 'Peintres_en_batiment', text: 'Les Peintres en batiment (1877)'},
        {src: 'img/van/Le_déjeuner-1873.png', alt: 'Le_déjeuner-1873', text: 'Le déjeuner (1873)'},
        {src: 'img/van/Le_Peintre_et_son_Modele.png', alt: 'Le_Peintre_et_son_Modele', text: "Le Peintre et son Modele"},
        {src: 'img/van/Les_Coquelicots.png', alt: 'Les_Coquelicots', text: 'Les Coquelicots'},
    ]
};

const galleryContainer = document.querySelector('.items');
const menuItems = document.querySelectorAll('.nav-link');


document.addEventListener('DOMContentLoaded', () => {
    const firstMenuItem = menuItems[0];
    firstMenuItem.classList.add('active');
    const firstGalleryKey = firstMenuItem.dataset.gallery;

    if (galleries[firstGalleryKey]) {
        galleries[firstGalleryKey].forEach((item) => {
            const card = `
                <div class="card border-0 overflow-hidden w-100 h-100">
                    <img src="${item.src}" class="card-img-top" alt="${item.alt}">
                    <div class="card-body m-0 p-0 bg-black">
                        <p class="card-text text-light text-center m-1">${item.text}</p>
                    </div>
                </div>
            `;
            galleryContainer.innerHTML += card;
        });
    }
});

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
        event.preventDefault();
        const galleryKey = menuItem.dataset.gallery;

        galleryContainer.innerHTML = '';

        if (galleries[galleryKey]) {
            galleries[galleryKey].forEach((item) => {
                const card = `
                    <div class="card border-0 overflow-hidden w-100 h-100">
                        <img src="${item.src}" class="card-img-top" alt="${item.alt}">
                        <div class="card-body m-0 p-0 bg-black">
                            <p class="card-text text-light text-center m-1">${item.text}</p>
                        </div>
                    </div>
                `;
                galleryContainer.innerHTML += card;
            });
        }
    });
})


