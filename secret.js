
let secretCode = "secret";
let inputBuffer = "";
// let secretSFX = new Audio('./assets/mus_create.wav')
// let secretSelect = new Audio('./assets/snd_buyitem.wav')



document.addEventListener("keydown", (event) => {
    inputBuffer += event.key.toLowerCase();

    if (inputBuffer.length > secretCode.length) {
        inputBuffer = inputBuffer.slice(-secretCode.length);
    }

    if (inputBuffer === secretCode) {
        console.log("SECRET ACTIVATED");
        alert("                   𝗦𝗘𝗚𝗥𝗘𝗗𝗢 𝗔𝗧𝗜𝗩𝗔𝗗𝗢");
        inputBuffer = "";
        SEGREDO()
    }
});


function SEGREDO() {

    secretSFX.play()

    // Check if the button already exists
    if (document.getElementById("secretButton")) return;

    // Create the button
    let button = document.createElement("button");
    button.id = "segredo";
    button.innerText = "segredo";

    // Style the button!!!!!!!!!   >:C



    // Add a click event
    button.addEventListener("click", () => {
        // window.location = './jogoSECRETO.html'
        secretSelect.play()
        alert("Funcionou")

        // alert("AVISO: Esse modo pode causar ataques de epilepsia, se você sofre com isso, aperte 'F5' ou abandone essa página imediatamente.")
    });

    document.body.appendChild(button);
}