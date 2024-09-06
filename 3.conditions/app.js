const language = prompt("Entrer une langue : ");
// language = language.toLowerCase();

if (language === "french") {
  alert("Bonjour");
} else if (language === "english") {
  alert("Hello");
} else if (language === "german") {
  alert("Guten tag");
} else if (language === "spanish") {
  alert("Hola");
} else {
  alert("Langue non supportée");
}

// 1. Réecrire le code en utilisant le switch-case
// 2. Faire des tests case insentitive
switch (language.toLowerCase()) {
  case "french":
    alert("Bonjour");
    break;
  case "english":
    alert("Hello");
    break;
  case "german":
    alert("Guten tag");
    break;
  case "spanish":
    alert("Hola");
    break;
  default:
    alert("Langue non supportée");
}
