document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");
  
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const item = header.parentElement;
  
        // Đóng các mục khác
        document.querySelectorAll(".accordion-item").forEach(i => {
          if (i !== item) {
            i.classList.remove("active");
          }
        });
  
        // Mở hoặc đóng mục hiện tại
        item.classList.toggle("active");
      });
    });
  });