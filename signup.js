document.getElementById("signupForm").addEventListener("submit", function(event){
    event.preventDefault(); //Prevent form submission


    // Retrieve form field values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var gmail = document.getElementById("gmail").value;

    // Display the person's informationin the pop-up message
    var popupInfo = document.getElementById("popupInfo");
    popupInfo.innerHTML = "First Name: " + firstName + "<br>" +
                          "Last Name: " + lastName + "<br>" +
                          "Address: " + address +  "<br>" +
                          "Phone Number: " + phone + "<br>" +
                          "Gmail: " + gmail;
    
    // Show the pop-up message
    document.getElementById("popup").style.display = "block";
});

function closePopup() {
    // Hide the popup message
    document.getElementById("popup").style.display = "none"
}