const accordionHeaders = document.querySelectorAll(".accordian-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", (e) => {
    const accordionItem = e.target.parentElement;
    accordionItem.classList.toggle("active");
  });
});
