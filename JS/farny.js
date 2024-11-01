document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get values from input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate inputs
    if (username === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Save data to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password); // Avoid saving passwords in real apps!

    // Close the modal using Bootstrap
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("exampleModal")
    );
    modal.hide();

    // Optional: Alert success message
    alert("Logged in successfully!");
  });
// document.getElementById("loginForm").addEventListener("submit", function (e) {
//   e.preventDefault(); // منع إعادة تحميل الصفحة عند تقديم النموذج

//   let username = document.getElementById("username").value;

//   let password = document.getElementById("password").value;

//   if (username === "" || password === "") {
//     alert("Please fill in both fields."); // تحقق من أن الحقول ليست فارغة

//     return;
//   }
//   localStorage.setItem("username", username);
//   localStorage.setItem("password", password); // Avoid saving passwords in real apps!

//   // Close the modal using Bootstrap
//   const modal = bootstrap.Modal.getInstance(
//     document.getElementById("exampleModal")
//   );
//   modal.hide();
//   // التحقق من صحة تسجيل الدخول (يمكن تعديل هذا القسم ليتناسب مع الخادم الفعلي)

//   if (username === "username" && password === "password") {
//     localStorage.setItem("loggedIn", "true"); // تخزين حالة تسجيل الدخول

//     alert("Logged in successfully!");

//     $("#exampleModal").modal("hide"); // إغلاق الـ Modal بعد النجاح
//   } else {
//     alert("Invalid username or password");
//   }
// });

// document.querySelector(".bag-icon").addEventListener("click", function () {
//   let isLoggedIn = localStorage.getItem("loggedIn");

//   // التحقق من حالة تسجيل الدخول

//   if (!isLoggedIn) {
//     $("#exampleModal").modal("show"); // فتح نافذة تسجيل الدخول إذا لم يكن مسجلاً
//   } else {
//     window.location.href = "cart.html"; // الانتقال إلى صفحة السلة إذا كان مسجلاً الدخول
//   }
// });

// document.querySelector(".bag-icon").addEventListener("click", function () {
//   let isLoggedIn = localStorage.getItem("loggedIn"); // التحقق من حالة تسجيل الدخول

//   // إذا لم يكن مسجلاً الدخول، فتح نافذة الـ Modal لتسجيل الدخول

//   if (!isLoggedIn) {
//     $("#exampleModal").modal("show"); // إظهار الـ Modal الخاص بتسجيل الدخول
//   } else {
//     window.location.href = "cart.html"; // الانتقال إلى صفحة السلة إذا كان مسجلاً
//   }
// });

// //   move pages
// // اختار كل روابط الـ navbar
// // document.querySelectorAll(".nav-link").forEach(function (link) {
// //   // اضف حدث 'click' لكل رابط
// //   link.addEventListener("click", function (event) {
// //     event.preventDefault(); // امنع الانتقال الافتراضي

// //     // احصل على اسم الصفحة من data-target
// //     const targetPage = this.getAttribute("data-target");

// //     // انقل للصفحة باستخدام window.location
// //     window.location.href = targetPage;
// //   });
// // });
// document.getElementById("shopping").addEventListener("click", (event) => {
//   window.location.assign("cart.html");
//   console.log(event);
// });

$(document).ready(function () {
  // اختار كل روابط الـ nav-link
  $(".nav-link").on("click", function (event) {
    event.preventDefault(); // امنع الانتقال الافتراضي

    // احصل على اسم الصفحة من data-target
    const targetPage = $(this).data("target");

    // انقل للصفحة باستخدام window.location
    window.location.href = targetPage;
  });
});
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// document.getElementById("loginForm").addEventListener("submit", function (e) {
//   e.preventDefault(); // منع إعادة تحميل الصفحة عند تقديم النموذج

//   let username = document.getElementById("username").value;

//   let password = document.getElementById("password").value;

//   if (username === "" || password === "") {
//     alert("Please fill in both fields."); // تحقق من أن الحقول ليست فارغة

//     return;
//   }

//   // التحقق من صحة تسجيل الدخول (يمكن تعديل هذا القسم ليتناسب مع الخادم الفعلي)

//   if (username === "username" && password === "password") {
//     localStorage.setItem("loggedIn", "true"); // تخزين حالة تسجيل الدخول

//     alert("Logged in successfully!");

//     $("#exampleModal").modal("hide"); // إغلاق الـ Modal بعد النجاح
//   } else {
//     alert("Invalid username or password");
//   }
// });

// document.querySelector(".bag-icon").addEventListener("click", function () {
//   let isLoggedIn = localStorage.getItem("loggedIn");

//   // التحقق من حالة تسجيل الدخول

//   if (!isLoggedIn) {
//     $("#exampleModal").modal("show"); // فتح نافذة تسجيل الدخول إذا لم يكن مسجلاً
//   } else {
//     window.location.href = "cart.html"; // الانتقال إلى صفحة السلة إذا كان مسجلاً الدخول
//   }
// });
// دالة لإضافة المنتج إلى السلة
// function addToCart(productName, productPrice, productImage) {
//   let isLoggedIn = localStorage.getItem("loggedIn");

//   if (!isLoggedIn) {
//     alert("يرجى تسجيل الدخول لإضافة المنتج إلى السلة.");
//     localStorage.setItem("redirectToCart", true); // تخزين نية الذهاب للسلة
//   } else {
//     // متابعة إضافة المنتج إذا كان مسجلاً الدخول
//     let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     cartItems.push({
//       name: productName,
//       price: productPrice,
//       image: productImage,
//       quantity: 1,
//     });
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     window.location.href = "../cart.html"; // تحويل للصفحة
//   }
// }
