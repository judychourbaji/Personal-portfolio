// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const sidemenu = document.getElementById('sidemenu');

function toggleMenu() {
    hamburger.classList.toggle('active');
    sidemenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

if (sidemenu) {
    sidemenu.addEventListener('click', function(e) {
        const rect = sidemenu.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        if (clickX > rect.width - 65 && clickY < 65) {
            toggleMenu();
        }
    });

    const menuLinks = sidemenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidemenu.classList.contains('active')) {
        toggleMenu();
    }
});

// ========== FONCTION POUR LES ONGLETS (AJOUT) ==========
function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    
    // Supprimer la classe active de tous les onglets
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    
    // Masquer tous les contenus d'onglets
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    // Ajouter la classe active à l'onglet cliqué
    event.target.classList.add("active-link");
    
    // Afficher le contenu correspondant
    document.getElementById(tabname).classList.add("active-tab");
}