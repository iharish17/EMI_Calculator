function calculateEMI() {
      const amount = parseFloat(document.getElementById('amount').value);
      const rate = parseFloat(document.getElementById('rate').value);
      const tenureYears = parseInt(document.getElementById('tenure').value);
  
      if (isNaN(amount) || isNaN(rate) || isNaN(tenureYears) || amount <= 0 || rate <= 0 || tenureYears <= 0) {
        emiResults.textContent='Please enter valid values.';
        return;
      }
      const principal = amount;
      const annualInterest = rate;
      const months = tenureYears * 12;
      const monthlyRate = annualInterest / 12 / 100;
      const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
      const totalPayment = emi * months;
      const totalInterest = totalPayment - principal;

      document.getElementById('emiOut').textContent = "Monthly EMI: ₹ " + emi.toLocaleString(undefined, {maximumFractionDigits:2});
      document.getElementById('totalOut').textContent = "Total Payment: ₹ " + totalPayment.toLocaleString(undefined, {maximumFractionDigits:2});
      document.getElementById('interestOut').textContent = "Total Interest: ₹ " + totalInterest.toLocaleString(undefined, {maximumFractionDigits:2});
      document.getElementById('emiResults').style.display = 'block';
    }
