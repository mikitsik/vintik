function slider() {
  let slider = document.querySelector(".slider"),
    last = slider.lastElementChild,
    first = slider.firstElementChild,
    btn = document.querySelectorAll(".btn");

  slider.insertBefore(last, first);

  btn.forEach(btn => {
    btn.addEventListener("click", movement);
  });
  setInterval(function()
  {
    movement({target:{id:"next"}});
  }, 4000);
  function movement(e) {
    slider = document.querySelector(".slider");
    last = slider.lastElementChild;
    first = slider.firstElementChild;

    const activeSlide = document.querySelector(".active");

    if (e.target.id === "next" || e.target.id === "next_img") {
      slider.insertBefore(first, last.nextSibling);

      activeSlide.classList.remove("active");
      activeSlide.nextElementSibling.classList.add("active");
    } else if (e.target.id === "prev" || e.target.id === "prev_img") {
      slider.insertBefore(last, first);
      activeSlide.classList.remove("active");
      activeSlide.previousElementSibling.classList.add("active");
    }
  }
}
slider();
