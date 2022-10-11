let user = {
  vardas: "Julia",
  pavarde: "Savicke",
};

let sarasas = `
<h2>User Information</h2>
<p> Vartotojo vardas yra ${user.vardas},o pavarde ${user.pavarde}.</p>
`;

const userInfoOutput = document.getElementById("main");
userInfoOutput.innerHTML = sarasas;
