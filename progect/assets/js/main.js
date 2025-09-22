// ====== تحديث سنة الحقوق تلقائيًا في الفوتر ======
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ====== التحقق من صحة نموذج احجز موعد ======
const appointmentForm = document.getElementById("appointmentForm");
if (appointmentForm) {
  appointmentForm.addEventListener("submit", function (event) {
    if (!appointmentForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert("✅ تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.");
      appointmentForm.reset();
    }
    appointmentForm.classList.add("was-validated");
  });
}

// ====== دالة عامة للتحقق من صحة النماذج ======
function validateForm(form, successMessage) {
  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert(successMessage);
      form.reset();
    }
    form.classList.add("was-validated");
  });
}

// ====== التحقق من نموذج تسجيل الدخول ======
const loginForm = document.getElementById("loginForm");
if (loginForm) validateForm(loginForm, "✅ تم تسجيل الدخول بنجاح!");

// ====== التحقق من نموذج إنشاء الحساب ======
const signupForm = document.getElementById("signupForm");
if (signupForm) validateForm(signupForm, "✅ تم إنشاء الحساب بنجاح!");

// ====== سلايدر Fade ======
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".fade-slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    current = (current + 1) % slides.length; // دوران لا نهائي
    showSlide(current);
  }

  // عرض أول صورة
  showSlide(current);

  // تغيير الصورة كل 3 ثواني
  setInterval(nextSlide, 5000);
});