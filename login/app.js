const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const btn_login = document.getElementById("btn_login")

const method = new Method();

const loadingOverlay = document.createElement("div")
loadingOverlay.className = "loading-overlay hidden";
loadingOverlay.innerHTML = `<div class="loading-spinner"></div>`;
document.body.appendChild(loadingOverlay);

function showLoader() {
    loadingOverlay.classList.remove("hidden");
}

function hideLoader() {
    loadingOverlay.classList.add("hidden")
}

btn_login.addEventListener("click", () => {
    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()

    if (!email || !password) return;

    const body = {
        email: email,
        password: password,

    }

    showLoader();

    method.postLogin("https://django-production-c898.up.railway.app/api/v1/auth/login/", body)
        .then(response => {
            try {
                console.log("Token", response.access);  
                
                localStorage.setItem("token_access", response.access);
                if (localStorage.getItem("token_access") != "") {

                    console.log("message", response.message);

                    window.location.href = "../intro/index.html"

                }

            } catch (error) {
                console.log("xato", error);

            }

        })
        .catch(err => {
            console.log("Server xatosi:", err);
            alert("Tizim kirishda xatolik yuz beerdi!");
        })
        .finally(() => {
            hideLoader();
        })

})