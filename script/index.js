//RUT: 12345678-9 CONTRASEÑA: 123456
const rut = "12345678-9";
const password = "123456";

//login

$("#loginForm").on("submit", function (e) {
  e.preventDefault();

  const rut = $("#rut").val();
  const password = $("#password").val();
  console.log(rut, " ", password);

  if (rut === "12345678-9" && password === "123456") {
    window.location.href = "components/menu.html";
  }

  if (rut !== "12345678-9" || password !== "123456") {
    alert("Rut o contraseña incorrectos");
  }
  
})