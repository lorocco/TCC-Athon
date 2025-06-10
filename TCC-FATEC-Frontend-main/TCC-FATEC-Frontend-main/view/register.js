document.addEventListener("DOMContentLoaded", function() {
  const athleteRadio = document.getElementById("athlete");
  const companyRadio = document.getElementById("company");
  const athleteInfo = document.getElementById("athlete-info");
  const companyInfo = document.getElementById("company-info");

  athleteRadio.addEventListener("change", function() {
    if (athleteRadio.checked) {
      athleteInfo.style.display = "block";
      companyInfo.style.display = "none";
    }
  });

  companyRadio.addEventListener("change", function() {
    if (companyRadio.checked) {
      companyInfo.style.display = "block";
      athleteInfo.style.display = "none";
    }
  });

  athleteRadio.dispatchEvent(new Event('change')); // Exibe as informações do atleta inicialmente
});
