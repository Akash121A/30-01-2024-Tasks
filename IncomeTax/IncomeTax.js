// 3. Calculate Income tax based on old regime slabs, with the tax exception claimed, gender and age

const taxSlabs = [
    { min: 0, max: 250000, rate: 0 },
    { min: 250001, max: 500000, rate: 0.05 },
    { min: 500001, max: 1000000, rate: 0.1 },
    { min: 1000001, max: 1500000, rate: 0.15 }
];

function calculateIncomeTax(income, gender, age, exemptions) {
    income -= exemptions;

    let taxAmount = 0;
    taxSlabs.forEach(slab => {
        if (income > 0) {
            const slabAmount = Math.min(income, slab.max - slab.min + 1);
            taxAmount += slabAmount * slab.rate;
            income -= slabAmount;
        }
    });

    if (gender === 'female') {
        taxAmount -= 5000; 
    }

    if (age >= 60) {
        taxAmount -= 10000; 
    }

    return taxAmount;
}


const income = 800000; 
const exemptions = 100000; 
const gender = 'female'; 
const age = 65; 

const taxAmount = calculateIncomeTax(income, gender, age, exemptions);
console.log(`Annual Income: ${income}\nExemptions: ${exemptions}\nGender: ${gender}\nAge: ${age}`);
console.log(`Income Tax: ${taxAmount}`);

