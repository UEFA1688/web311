function validateForm() {
    var password = document.getElementById("password").value;
    var retypePassword = document.getElementById("retypepassword").value;
    var username = document.getElementById("username").value;
    var errorMessage = document.getElementById("errormsg");

    if (password !== retypePassword) {
        errorMessage.innerText = "Passwords do not match.";
        return false;
    } else {
        
        var params = new URLSearchParams();
        params.set("registeredUsername", username);
        params.set("registeredPassword", password);

        alert("Registration successful");
        return true;
    }
}
