var toggle_menu=document.querySelector('.responsive-menu');
var menu=document.querySelector('.menu');
toggle_menu.onclick=function(){
    toggle_menu.classList.toggle('active');
    menu.classList.toggle('responsive')
}



// Sélectionne le button telecherger par son class
document.querySelector('.button_telecharger_cv').addEventListener('click', function() {
    // Ouvre le cv dans un nouvel onglet
    window.open('./documents/mon_cv.pdf', '_blank');
});

// Sélectionne l'icône Github par son ID
document.getElementById('openGithub').addEventListener('click', function() {
// Ouvre le profil Github dans un nouvel onglet
        window.open('https://github.com/Rania-Cherif', '_blank');
    });

// Sélectionne l'icône LinkedIn par son ID
document.getElementById('openLinkedIn').addEventListener('click', function() {
// Ouvre le profil LinkedIn dans un nouvel onglet
    window.open('https://www.linkedin.com/in/cherif-rania-0224a5282/', '_blank');
});



document.querySelector('.button_projet_Github').addEventListener('click', function() {
    window.open('https://github.com/Rania-Cherif/gestion-de-personnel', '_blank');
});

document.querySelector('.LinkedIN').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/cherif-rania-0224a5282/', '_blank');
});









