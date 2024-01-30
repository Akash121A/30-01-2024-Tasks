// 3. Calculate Income tax based on old regime slabs, with the tax exception claimed, gender and age

function calculateIncomeTax(income, taxExemption, gender, age) {
    let taxAmount = 0;
    // Sample logic:
    if (income > 500000 && income <= 1000000) {
        taxAmount = (income - 500000) * 0.2;
    } else if (income > 1000000) {
        taxAmount = (income - 1000000) * 0.3 + (1000000 - 500000) * 0.2;
    }
    taxAmount -= taxExemption;

    return taxAmount;
}

const income = 1200000; // Annual income
const taxExemption = 100000; // Tax exemption claimed
const gender = 'male'; // Gender (male, female, others)
const age = 35; // Age

// Calculate income tax
const taxAmount = calculateIncomeTax(income, taxExemption, gender, age);
console.log(`Income Tax: Rs. ${taxAmount.toFixed(2)}`);
