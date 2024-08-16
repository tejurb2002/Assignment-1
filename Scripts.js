// Get the modal
var modal = document.getElementById("createAccountModal");

// Get the button that opens the modal
var btn = document.getElementById("createAccountBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission (example)
document.getElementById("createAccountForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Account created!");
    modal.style.display = "none";
});

// window.onload = function() {
//     // You can also handle the Google Sign-In event manually here
//     google.accounts.id.initialize({
//         client_id: "16153802962-m7laohsclv1n9o7moeq850d10ge0pihe.apps.googleusercontent.com",
//         callback: handleCredentialResponse
//     });
//     google.accounts.id.renderButton(
//         document.getElementById("g_id_signin"),
//         { theme: "outline", size: "large" }
//     );
//     google.accounts.id.prompt(); // Optional, to prompt automatically
// };

// function handleCredentialResponse(response) {
//     console.log("Encoded JWT ID token: " + response.credential);
//     // Send the response to your backend for verification
//     // Redirect or process further based on response
// }