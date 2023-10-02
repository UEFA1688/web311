function checkLogin() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const registeredUsername = urlSearchParams.get("username");
    const registeredPassword = urlSearchParams.get("password");

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === registeredUsername && password === registeredPassword) {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}
