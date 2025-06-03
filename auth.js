javascript
const validUser = { username: "admin", password: "1234" };

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUser.username && password === validUser.password) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "admin.html";
    } else {
        document.getElementById("error").textContent = "Погрешно корисничко име или лозинка!";
    }
}
