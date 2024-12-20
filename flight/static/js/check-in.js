// script.js
document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step-list ul li");
    const contents = document.querySelectorAll(".step-content .content");
  
    steps.forEach((step) => {
      step.addEventListener("click", () => {
        // Bỏ active khỏi tất cả các bước
        steps.forEach((s) => s.classList.remove("active"));
        // Đánh dấu bước hiện tại
        step.classList.add("active");
  
        // Hiển thị nội dung tương ứng
        const stepNumber = step.getAttribute("data-step");
        contents.forEach((content) => {
          if (content.getAttribute("data-content") === stepNumber) {
            content.classList.add("active");
          } else {
            content.classList.remove("active");
          }
        });
      });
    });
  });
  