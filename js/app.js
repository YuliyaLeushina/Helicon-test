(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  const t = [
      { id: 1, name: "Коптильня 10л", price: 1200 },
      { id: 2, name: "Коптильня 20л", price: 1400 },
      { id: 3, name: "Коптильня 30л", price: 1600 },
    ],
    n = document.querySelectorAll(".row__title"),
    o = document.querySelectorAll(".row__price"),
    r = document.querySelectorAll(".row__btn"),
    c = document.querySelector(".page__cart-number");
  for (let e = 0; e < t.length; e++)
    (n[e].innerHTML = t[e].name),
      (o[e].innerHTML = t[e].price.toLocaleString());
  r.forEach((e, n) => {
    e.addEventListener("click", function (e) {
      const o = e.target;
      o.closest(".row__btn").classList.add("row__btn_active"),
        (o.closest(".row__btn").innerHTML = "ДОБАВЛЕНО"),
        o.closest(".row__btn").setAttribute("disabled", !0),
        (c.innerHTML = (
          parseInt(c.innerHTML.replace(/[^0-9,\s]/g, "")) + parseInt(t[n].price)
        ).toLocaleString());
    });
  }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();