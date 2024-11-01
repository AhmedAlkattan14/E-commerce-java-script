// Get modal elements
// let loginModal = document.getElementById("loginModal");
// let closeBtn = document.getElementById("closeBtn");
// let overlay = document.getElementById("overlay");
// let loginForm = document.getElementById("loginForm");
// let signInBtn = document.getElementById("signInBtn");
// // Open the modal on page load (or you can trigger it with a button)
// window.onload = () => {
//   loginModal.style.display = "block";
//   overlay.style.display = "block";
// };

// // Close modal when clicking the close button
// closeBtn.addEventListener("click", () => {
//   loginModal.style.display = "none";
//   overlay.style.display = "none";
// });

// // Close modal when clicking the close button
// closeBtn.addEventListener("click", closeModal());

// // Close modal when clicking outside the modal
// overlay.addEventListener("click", closeModal());
// // Close modal when clicking outside the modal
// function closeModal() {
//   loginModal.style.display = "none";
//   overlay.style.display = "none";
// }
// // login
// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault(); // Prevent page reload on form submission

//   // Capture form data
//   let userName = document.getElementById("username").value;
//   let password = document.getElementById("password").value;

//   let users = JSON.parse(localStorage.getItem("users")) || [];

//   // Add the new user data
//   users.push({ userName: userName, password: password });

//   // Store the updated data back in localStorage
//   localStorage.setItem("users", JSON.stringify(users));

//   // Clear form fields after submission
//   loginForm.reset();

//   //   console.log("User data saved:", users);

//   // Close the modal after login
//   closeModal();
//   window.location.href = "index.html";
// });
