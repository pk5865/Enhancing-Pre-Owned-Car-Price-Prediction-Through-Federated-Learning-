document.getElementById('car-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const year = document.getElementById('year').value;
    const presentPrice = document.getElementById('present-price').value;
    const kmsDriven = document.getElementById('kms-driven').value;
    const fuelType = document.getElementById('fuel-type').value;
    const sellerType = document.getElementById('seller-type').value;
    const transmission = document.getElementById('transmission').value;

    // Dummy prediction logic
    const predictedPrice = (presentPrice * 0.8) - (kmsDriven * 0.05) + (year * 0.1); // Simplified formula

    // Display the result in Indian Rupees
    document.getElementById('result').innerText = `Federated-Predicted Price: ₹${predictedPrice.toFixed(2)}`;
});

