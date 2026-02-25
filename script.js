// Select form
document.getElementById("registrationForm").addEventListener("submit", function(e) {

    e.preventDefault(); // Prevent page reload

    // Get all fields
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let dob = document.getElementById("dob");
    let college = document.getElementById("college");
    let eventSelect = document.getElementById("event");
    let confirm = document.getElementById("confirm");

    let gender = document.querySelector("input[name='gender']:checked");
    let mode = document.querySelector("input[name='mode']:checked");

    let successMessage = document.getElementById("successMessage");

    let isValid = true;

    // Validation function
    function validate(field, condition) {
        if (!condition) {
            field.classList.add("invalid");
            field.classList.remove("valid");
            isValid = false;
        } else {
            field.classList.add("valid");
            field.classList.remove("invalid");
        }
    }

    // Validate fields
    validate(name, name.value.trim() !== "");
    validate(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
    validate(phone, /^[0-9]{10}$/.test(phone.value));
    validate(dob, dob.value !== "");
    validate(college, college.value.trim() !== "");
    validate(eventSelect, eventSelect.value !== "");

    // Check radio buttons & checkbox
    if (!gender) {
        alert("Please select Gender");
        return;
    }

    if (!mode) {
        alert("Please select Mode of Participation");
        return;
    }

    if (!confirm.checked) {
        alert("Please confirm the declaration");
        return;
    }

    if (!isValid) {
        alert("Please correct the highlighted fields.");
        return;
    }

    // Add data to table
    let table = document.getElementById("participantsTable");
    let newRow = table.insertRow(-1);

    newRow.insertCell(0).innerText = name.value;
    newRow.insertCell(1).innerText = email.value;
    newRow.insertCell(2).innerText = phone.value;
    newRow.insertCell(3).innerText = eventSelect.value;
    newRow.insertCell(4).innerText = mode.value;

    // Show success message
    successMessage.innerText = "Registration Successful!";

    setTimeout(function() {
        successMessage.innerText = "";
    }, 3000);

    // Reset form
    document.getElementById("registrationForm").reset();

    // Remove validation styles after reset
    let inputs = document.querySelectorAll("input, select, textarea");
    inputs.forEach(function(input) {
        input.classList.remove("valid");
        input.classList.remove("invalid");
    });

});
