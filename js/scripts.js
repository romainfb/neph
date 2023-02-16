const moisEnLettres = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
const departements = [
    { nom: "Ain", numero: "01" },
  { nom: "Aisne", numero: "02" },
  { nom: "Allier", numero: "03" },
  { nom: "Alpes-de-Haute-Provence", numero: "04" },
  { nom: "Hautes-Alpes", numero: "05" },
  { nom: "Alpes-Maritimes", numero: "06" },
  { nom: "Ardèche", numero: "07" },
  { nom: "Ardennes", numero: "08" },
  { nom: "Ariège", numero: "09" },
  { nom: "Aube", numero: "10" },
  { nom: "Aude", numero: "11" },
  { nom: "Aveyron", numero: "12" },
  { nom: "Bouches-du-Rhône", numero: "13" },
  { nom: "Calvados", numero: "14" },
  { nom: "Cantal", numero: "15" },
  { nom: "Charente", numero: "16" },
  { nom: "Charente-Maritime", numero: "17" },
  { nom: "Cher", numero: "18" },
  { nom: "Corrèze", numero: "19" },
  { nom: "Côte-d'Or", numero: "21" },
  { nom: "Côtes-d'Armor", numero: "22" },
  { nom: "Creuse", numero: "23" },
  { nom: "Dordogne", numero: "24" },
  { nom: "Doubs", numero: "25" },
  { nom: "Drôme", numero: "26" },
  { nom: "Eure", numero: "27" },
  { nom: "Eure-et-Loir", numero: "28" },
  { nom: "Finistère", numero: "29" },
  { nom: "Gard", numero: "30" },
  { nom: "Haute-Garonne", numero: "31" },
  { nom: "Gers", numero: "32" },
  { nom: "Gironde", numero: "33" },
  { nom: "Hérault", numero: "34" },
  { nom: "Ille-et-Vilaine", numero: "35" },
  { nom: "Indre", numero: "36" },
  { nom: "Indre-et-Loire", numero: "37" },
  { nom: "Isère", numero: "38" },
  { nom: "Jura", numero: "39" },
  { nom: "Landes", numero: "40" },
  { nom: "Loir-et-Cher", numero: "41" },
  { nom: "Loire", numero: "42" },
  { nom: "Haute-Loire", numero: "43" },
  { nom: "Loire-Atlantique", numero: "44" },
  { nom: "Loiret", numero: "45" },
  { nom: "Lot", numero: "46" },
  { nom: "Lot-et-Garonne", numero: "47" },
  { nom: "Lozère", numero: "48" },
  { nom: "Maine-et-Loire", numero: "49" },
  { nom: "Manche", numero: "50" },
  { nom: "Marne", numero: "51" },
  { nom: "Haute-Marne", numero: "52" },
  { nom: "Mayenne", numero: "53" },
  { nom: "Meurthe-et-Moselle", numero: "54" },
  { nom: "Meuse", numero: "55" },
  { nom: "Morbihan", numero: "56" },
  { nom: "Moselle", numero: "57" },
  { nom: "Nièvre", numero: "58" },
  { nom: "Nord", numero: "59" },
  { nom: "Oise", numero: "60" },
  { nom: "Orne", numero: "61" },
  { nom: "Pas-de-Calais", numero: "62" },
  { nom: "Puy-de-Dôme", numero: "63" },
  { nom: "Pyrénées-Atlantiques", numero: "64" },
  { nom: "Hautes-Pyrénées", numero: "65" },
  { nom: "Pyrénées-Orientales", numero: "66" },
  { nom: "Bas-Rhin", numero: "67" },
  { nom: "Haut-Rhin", numero: "68" },
  { nom: "Rhône", numero: "69" },
  { nom: "Haute-Saône", numero: "70" },
  { nom: "Saône-et-Loire", numero: "71" },
  { nom: "Sarthe", numero: "72" },
  { nom: "Savoie", numero: "73" },
  { nom: "Haute-Savoie", numero: "74" },
  { nom: "Paris", numero: "75" },
  { nom: "Seine-Maritime", numero: "76" },
  { nom: "Seine-et-Marne", numero: "77" },
  { nom: "Yvelines", numero: "78" },
  { nom: "Deux-Sèvres", numero: "79" },
  { nom: "Somme", numero: "80" },
  { nom: "Tarn", numero: "81" },
  { nom: "Tarn-et-Garonne", numero: "82" },
  { nom: "Var", numero: "83" },
  { nom: "Vaucluse", numero: "84" },
  { nom: "Vendée", numero: "85" },
  { nom: "Vienne", numero: "86" },
  { nom: "Haute-Vienne", numero: "87" },
  { nom: "Vosges", numero: "88" },
  { nom: "Yonne", numero: "89" },
  { nom: "Territoire de Belfort", numero: "90" },
  { nom: "Essonne", numero: "91" },
  { nom: "Hauts-de-Seine", numero: "92" },
  { nom: "Seine-Saint-Denis", numero: "93" },
  { nom: "Val-de-Marne", numero: "94" },
  { nom: "Val-d'Oise", numero: "95" }
];

function remplirListeDepartements() {

  const listeDepartements = document.getElementById("departements");

  for (let i = 0; i < departements.length; i++) {
    const option = document.createElement("option");
    option.value = departements[i].numero;
    option.text = departements[i].nom + " (" + departements[i].numero.substring(0, 3) + ")";
    listeDepartements.add(option);
  }

}

function remplirListeAnnees() {
  // Sélectionne la liste déroulante des années
  const listeAnnees = document.getElementById("annees");

  // Récupère l'année actuelle
  const anneeActuelle = new Date().getFullYear();

  // Ajoute les 30 dernières années à la liste déroulante
  for (let i = 0; i < 30; i++) {
    const annee = anneeActuelle - i;
    const option = document.createElement("option");
    option.value = annee;
    option.text = annee;
    listeAnnees.add(option);
  }
}

function remplirListeMois() {
  // Sélectionne la liste déroulante des mois
  const listeMois = document.getElementById("lesMois");

  // Ajoute les 12 mois de l'année à la liste déroulante
  for (let i = 1; i <= 12; i++) {
    const mois = ("0" + i).slice(-2); // ajoute un zéro devant les mois de 1 à 9
    const option = document.createElement("option");
    option.value = mois;
    option.text = moisEnLettres[i-1]; // utilise le tableau moisEnLettres pour afficher le nom du mois
    listeMois.add(option);
  }
}


function verifierNEPH() {

  const annee = document.getElementById("annees").value;
  const mois = document.getElementById("lesMois").value;
  const departement = document.getElementById("departements").value;
  const nephtocheck = document.getElementById("neph").value;

  const errors = [];

  // Vérification de la longueur et des caractères du NEPH
  if (nephtocheck.length !== 12 || !/^\d+$/.test(nephtocheck)) {
    errors.push("Un numéro NEPH ne peut contenir que 12 caractères !");
  }

  // Vérification de l'année
  const anneeStr = annee.toString();
  if (nephtocheck.substring(0,2) !== anneeStr.slice(-2)) {
    errors.push("Êtes-vous certain(e) de l'année au cours de laquelle ce numéro NEPH a été enregistré ?");
  }

  // Vérification du mois
  if (nephtocheck.substring(2,4) !== mois) {
    errors.push("Êtes-vous certain(e) du mois au cours du quel ce numéro NEPH a été enregistré ?");
  }

  // Vérification du département
  if (nephtocheck.substring(4,6) !== departement) {
    errors.push("Êtes-vous certain(e) du départment dans lequel ce numéro NEPH a été enregistré ?");
  }

  // Affichage des erreurs si nécessaire

  const searchDiv = document.getElementById('searchdiv');
  searchDiv.classList.add('hide');

  if (errors.length > 0) {

    setTimeout(function() {

      document.getElementById("searchtitle").innerHTML = "Résultat de la recherche :";

      document.getElementById("resultat").innerHTML = "<strong>CRRR,</strong> il semblerait que ce numéro NEPH soit invalide !";
      document.getElementById("subresultat").innerHTML = errors.join("<br><br>");
      document.getElementById("logoresult").innerHTML = "<lord-icon src='https://cdn.lordicon.com/nrxxmbbt.json' trigger='loop' delay='2000' colors='primary:#000000,secondary:#c71f16,tertiary:#ebe6ef' style='width:250px;height:250px'> </lord-icon>";
      searchDiv.classList.remove('hide');

    }, 500);

  } else {

    setTimeout(function() {
      document.getElementById("searchtitle").innerHTML = "Résultat de la recherche :";

      document.getElementById("resultat").innerHTML = "<strong>Humm,</strong> il semblerait que ce numéro NEPH soit valide !";
      document.getElementById("subresultat").innerHTML = "";
      document.getElementById("logoresult").innerHTML = "<lord-icon src='https://cdn.lordicon.com/nrxxmbbt.json' trigger='loop' delay='2000' colors='primary:#000000,secondary:#16c72e,tertiary:#ebe6ef' style='width:250px;height:250px'> </lord-icon>";
      searchDiv.classList.remove('hide');

    }, 500);
  }


}


const input = document.getElementById('neph');

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    verifierNEPH();
  }
});