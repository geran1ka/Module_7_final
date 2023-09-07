export const loanCalculation = (sum) => {
  const interestRate = 15;
  const creditTerm = 18;

  const monthlyInterestRate = interestRate / 12 / 100;
  const annuityRatio = (monthlyInterestRate * (1 + monthlyInterestRate) ** creditTerm) /
    ((1 + monthlyInterestRate) ** creditTerm - 1);

  return Math.round(sum * annuityRatio);
};
