// Array storing the contact names
const contacts = ["Arnold", "Sly", "Dwayne", "Vin", "JCVD", "Steven"];

function searchContact() {
  let keepSearching = true;

  while (keepSearching) {
    // Ask the user for the slot number
    let slot = prompt("Enter the Slot Number (0–5) for the name you want to see:");

    // Check if the input is valid
    if (slot === null) {
      alert("Search cancelled.");
      break;
    }

    slot = parseInt(slot);

    // Validate input
    if (isNaN(slot) || slot < 0 || slot >= contacts.length) {
      alert("That name is not found. Please enter a valid slot number (0–5).");
    } else {
      alert("You selected " + contacts[slot] + ".");
    }

    // Ask if they want to search again
    let again = prompt("Dear user would you like to search for another name? (yes or no)");
    if (!again || again.toLowerCase() !== "yes") {
      keepSearching = false;
      alert("Thank you for using the Contacts Database hope to see you soon!");
    }
  }
}