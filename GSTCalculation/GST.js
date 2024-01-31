// 2. Calculate GST tax amount for a products, Each product may have different GST rate

// Method to calculate GST tax amount for a product
function calculateGST(productPrice, gstRate) {
    const gstAmount = (productPrice * gstRate) / 100;
    return gstAmount;
}

const products = [
    { name: 'PC-Computer', price: 100000, gstRate: 14, quantity: 2}, 
    { name: 'Inventer', price: 10200, gstRate: 8, quantity: 3 }, 
    { name: 'Car', price: 1500000, gstRate: 10, quantity: 1 },
    { name: 'Mobile', price: 25000, gstRate: 5, quantity: 5 }, 
    { name: 'Laptop', price: 50000, gstRate: 12, quantity: 2 }, 
    { name: 'NoteBook', price: 1500000, gstRate: 2, quantity: 9 },
    { name: 'Pen', price: 150, gstRate: 0.5, quantity: 50},
    { name: 'Table', price: 2500, gstRate: 1, quantity: 10 }
];

products.forEach(product => {
    const gstAmount = calculateGST(product.price, product.gstRate);
    console.log(`GST for ${product.name}: Rs.${gstAmount} and Quantity: ${product.quantity} Total Price: 
    Rs.${(gstAmount+product.price)*product.quantity}`);

});
