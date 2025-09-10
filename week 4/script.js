function convertCurrency() {
  const rupees = document.getElementById("rupees").value;
  const exchangeRate = 0.012;

  if (rupees === "" || isNaN(rupees)) {
    document.getElementById("result").textContent = "Please enter a valid amount.";
    return;
  }

  const dollars = rupees * exchangeRate;
  document.getElementById("result").textContent = `$${dollars.toFixed(2)}`;
}

