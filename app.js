const btn = document.querySelector(".formdata");
btn.onclick = (event) => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Check if all fields are filled
  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  ) {
    // Prevent the form from submitting
    event.preventDefault();
    alert("Please fill out all fields before submitting.");
  } else {
    // If all fields are filled, show the alert
    alert("Form has been submitted!");
  }
};
