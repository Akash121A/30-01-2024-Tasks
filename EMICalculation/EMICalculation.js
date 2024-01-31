// 1. Calculate EMI value, Rate of interest for the may differ 
//based on the loan amount, tenure, customer credit score

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to determine interest rate based on loan amount, tenure, and credit score
function determineInterestRate(loanAmount, tenureMonths, creditScore) {

    let baseInterestRate = 8.0;

    //Loan Amount Based Interest Rate
    if(loanAmount >= 100000 && loanAmount <= 1000000){
      baseInterestRate += 1.0;
    } else if (loanAmount > 1000000 && loanAmount <= 9000000){
        baseInterestRate += 2.0; 
    } else {
      baseInterestRate += 3.0
    }
    
    //Tenure Months Based Interest Rate
    if (tenureMonths > 50 && tenureMonths < 100) {
        baseInterestRate += 0.5;
    } else if(tenureMonths > 100 && tenureMonths < 200){
      baseInterestRate += 1.0;
    }

    //Credit Score Based Interest Rate
    if (creditScore < 700) {
        baseInterestRate += 0.5; 
    } else if (creditScore >= 750) {
        baseInterestRate -= 0.5; 
    }

    //Final Total Interest Rate is Returned
    return baseInterestRate;
}

// Function to calculate EMI
function calculateEMI(loanAmount, tenureMonths, interestRate) {
    const monthlyInterestRate = (interestRate / 12) / 100;
    const emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths) /
                (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
    return emi;
}

rl.question('Enter Loan Amount(Minimum 100000): ', (loanAmountInput) => {
  rl.question('Enter Tenure in Months: ', (tenureMonthsInput) => {
    rl.question('Enter Credit Score: ', (creditScoreInput) => {
      // Convert inputs to integers
      const loanAmount = parseInt(loanAmountInput);
      const tenureMonths = parseInt(tenureMonthsInput);
      const creditScore = parseInt(creditScoreInput);

      const interestRate = determineInterestRate(loanAmount, tenureMonths, creditScore);
      const emi = calculateEMI(loanAmount, tenureMonths, interestRate);

      console.log(`Loan Amount: Rs. ${loanAmount}`);
      console.log(`Tenure: ${tenureMonths} Months`);
      console.log(`Credit Score: ${creditScore}`);
      console.log(`Interest Rate: ${interestRate.toFixed(2)} %`);
      console.log(`EMI per Month: Rs.${emi.toFixed(2)}`);
      console.log(`Interest Amount Only: Rs.${(emi.toFixed(2)*tenureMonths-loanAmount).toFixed(2)}`);
      console.log(`Total Net Amount: Rs.${emi.toFixed(2)*tenureMonths}`);
      rl.close();
    });
  });
});
