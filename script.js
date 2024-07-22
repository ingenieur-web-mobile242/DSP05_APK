// Fonction pour renvoyer "Bonjour, [nom de l'utilisateur]"
function direBonjour(nom) {
    return `Bonjour, ${nom}`;
}

// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
    // Récupérer le bouton, l'input et le paragraphe
    const greetButton = document.getElementById("greetButton");
    const usernameInput = document.getElementById("username");
    const greetingParagraph = document.getElementById("greeting");

    // Ajouter un écouteur d'événement au bouton
    greetButton.addEventListener("click", function () {
        // Récupérer la valeur de l'input
        const nomUtilisateur = usernameInput.value;
        // Afficher "Bonjour, [nom de l'utilisateur]" dans le paragraphe
        greetingParagraph.textContent = direBonjour(nomUtilisateur);
    });
});
