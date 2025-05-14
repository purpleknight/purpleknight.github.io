document.querySelectorAll(".news-item").forEach(article => {
    article.addEventListener("mouseover", function() {
        article.style.backgroundColor = "#F9AB33"; 
        article.style.transform = "scale(1.05)";
    });

    article.addEventListener("mouseleave", function() {
        article.style.backgroundColor = "#F6F3ED";
        article.style.transform = "scale(1)";
    });
});

function highlight(button) {
    button.style.backgroundColor = "#F6F3ED";
    button.style.color = "#783F27";
    button.style.transform = "scale(1.2)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 300);
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Name validation
    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email validation
    let email = document.getElementById("email").value;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Message validation
    let message = document.getElementById("message").value;
    if (message.trim().length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters long.";
        isValid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    // Prevent form submission if invalid
    if (!isValid) {
        event.preventDefault();
    }
});