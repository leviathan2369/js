const connecte = document.getElementById("");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

connecte.addEventListener("cliquer", () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});