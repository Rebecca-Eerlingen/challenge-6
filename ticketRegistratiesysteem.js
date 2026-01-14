// Dit is een variabele die bijhoudt welk ticketnummer het volgende ticket krijgt.
// Hij begint bij 1 en wordt na elk ticket verhoogd.
let ticketNummer = 1;

// Hier wordt het HTML-element met id="opslaan" opgehaald.
// addEventListener wacht en luisterd naar een gebeurtenis (in dit geval klik)
// Als dat gebeurd, wordt de maakTicked functie uitgevoerd.
document.getElementById("opslaan").addEventListener("click", maakTicket);

// Deze functie maakt een nieuw ticket aan.
// Alles hieronder wordt uitgevoerd zodra je op de knop "opslaan" klikt.
function maakTicket() {

  // Deze variabelen halen de waarden op die de gebruiker heeft ingevuld in het formulier.
  // .value betekent: de tekst/waarde die in het invoerveld staat.
  const naam = document.getElementById("naam").value;
  const datum = document.getElementById("datum").value;
  const probleem = document.getElementById("probleem").value;
  const prioriteit = document.getElementById("prioriteit").value;

  // Dit controleert of verplichte velden leeg zijn.
  // Als naam of probleem leeg is, stopt de functie en krijgt de gebruiker een melding.
  if (naam === "" || probleem === "" || datum === "") {
    alert("Vul alle velden in!");
    return; // return zorgt ervoor dat de rest van de functie niet wordt uitgevoerd
  }

  // Dit maakt een nieuw div-element aan.
  // Dit div-element wordt één ticket.
  const ticket = document.createElement("div");

  // classList.add voegt CSS-classes toe aan de ticket.
  // "ticket" is voor de algemene styling
  // prioriteit zorgt ervoor dat het ticket een kleur/stijl krijgt op basis van prioriteit
  ticket.classList.add("ticket", prioriteit);

  // Dit vult de ticket met informatie.
  // De informatie komt uit de variabelen die eerder uit het formulier zijn gehaald.
  // ${} zorgt ervoor dat JavaScript-variabelen in de tekst worden gezet.
  ticket.innerHTML = `
    <strong>Ticket #${ticketNummer}</strong><br>
    <strong>Naam:</strong> ${naam}<br>
    <strong>Datum:</strong> ${datum}<br>
    <strong>Probleem:</strong> ${probleem}<br>
    <strong>Prioriteit:</strong> ${prioriteit}<br>
    <strong>Status:</strong> Open
  `;

  // Hier wordt de nieuwe ticket toegevoegd aan de ticketlijst in HTML.
  // De ticket verschijnt daardoor op het scherm
  document.getElementById("ticketLijst").appendChild(ticket);

  // Dit verhoogd het ticket nummer, zodat ze allemaal een uniek nummer hebben
  ticketNummer++;

  // Dit maakt het formulier weer leeg.
  // Dit zorgt ervoor dat de gebruiker meteen een nieuwe ticket kan invoeren.
  document.getElementById("naam").value = "";
  document.getElementById("probleem").value = "";
  document.getElementById("datum").value = "";
}
