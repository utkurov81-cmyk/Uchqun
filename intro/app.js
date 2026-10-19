const btn = document.getElementById("btn")


btn.addEventListener("click", () => {
    window.location.href = '../course/index.html';

})


console.log("token", localStorage.getItem("token_access"));
