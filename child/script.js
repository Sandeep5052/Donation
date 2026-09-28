
document.getElementById("donationForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;

    const donations = JSON.parse(localStorage.getItem("donations")) || [];
    donations.push({ name, email, amount });
    localStorage.setItem("donations", JSON.stringify(donations));
    const thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.style.display = "block";
    thankYouMessage.textContent = `Thank you, ${name}, for your generous donation of $${amount}!`;


    this.reset();

    
    loadDonationRecords();
});


function loadDonationRecords() {
    const donations = JSON.parse(localStorage.getItem("donations")) || [];
    const donationRecords = document.getElementById("donationRecords");
    donationRecords.innerHTML = ""; 

    donations.forEach((donation) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${donation.name}</td>
            <td>${donation.email}</td>
            <td>${donation.amount}</td>
           
            

        `;
        donationRecords.appendChild(row);
    });
}


document.addEventListener("DOMContentLoaded", loadDonationRecords);

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const type = document.getElementById('registerType').value;
    const donationAmount = document.getElementById('donationAmount').value;
    const volunteerMessage = document.getElementById('volunteerMessage').value;

    const registrationData = { name, email, phone, type, donationAmount, volunteerMessage };

    let registrationRecords = JSON.parse(localStorage.getItem('registrationRecords')) || [];
    registrationRecords.push(registrationData);
    localStorage.setItem('registrationRecords', JSON.stringify(registrationRecords));

    document.getElementById('registrationSuccessMessage').style.display = 'block';

    document.getElementById('registerForm').reset();

    setTimeout(function() {
        document.getElementById('registrationSuccessMessage').style.display = 'none';
    }, 3000);
});
document.getElementById('registerType').addEventListener('change', function() {
    const type = this.value;
    if (type === 'donor') {
        document.getElementById('donationAmountDiv').style.display = 'block';
        document.getElementById('volunteerMessageDiv').style.display = 'none';
    } else {
        document.getElementById('donationAmountDiv').style.display = 'none';
        document.getElementById('volunteerMessageDiv').style.display = 'block';
    }
});
