const ADMIN_CODE = "halo123";
const ADMIN_PAGE = "admin.html";

const adminAccessBtn = document.getElementById("adminAccessBtn");
const adminLogin = document.getElementById("adminLogin");
const adminLoginBtn = document.getElementById("adminLoginBtn");
const adminError = document.getElementById("adminError");

adminAccessBtn.addEventListener("click", () => {
  adminLogin.style.display = "block";
});

adminLoginBtn.addEventListener("click", () => {
  const input = document.getElementById("adminCodeInput").value;

  if (input === ADMIN_CODE) {
    window.location.href = ADMIN_PAGE;
  } else {
    adminError.textContent = "Hibás kód!";
  }
});
