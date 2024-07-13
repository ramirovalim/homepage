document.querySelector("form").addEventListener("submit", function (e) {
  const email = document.querySelector('input[type="email"]');
  const message = document.querySelector("textarea");

  if (!email.value || !message.value) {
    alert("Please fill out all fields.");
    e.preventDefault(); // Prevent form from submitting
  }
});

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

window.addEventListener("resize", function () {
  const screenWidth = window.innerWidth;
  const menu = document.querySelector(".menu");

  if (screenWidth <= 768) {
    menu.classList.add("sandwich-menu");
  } else {
    menu.classList.remove("sandwich-menu");
  }
});

window.addEventListener("load", function () {
  const screenWidth = window.innerWidth;
  const menu = document.querySelector(".menu");

  if (screenWidth <= 768) {
    menu.classList.add("sandwich-menu");
  }
});

// Start the server
app.listen(5500, () => {
  console.log("Server is running on port 5500");
});
