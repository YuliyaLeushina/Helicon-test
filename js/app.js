const data = [
   {
      id: 1,
      name: 'Коптильня 10л',
      price: 1200
   },
   {
      id: 2,
      name: 'Коптильня 20л',
      price: 1400
   },
   {
      id: 3,
      name: 'Коптильня 30л',
      price: 1600
   },
]

const title = document.querySelectorAll('.row__title');
const price = document.querySelectorAll('.row__price');
const btn = document.querySelectorAll('.row__btn');
const totalPrice = document.querySelector('.page__cart-number');

// render карточек

for (let i = 0; i < data.length; i++) {
   title[i].innerHTML = data[i].name
   price[i].innerHTML = data[i].price.toLocaleString()
}

btn.forEach((el, index) => {
   el.addEventListener("click", function (e) {
      // Получаем объект на который кликнули
      const targetElement = e.target;
      // Проверяем не наш ли это объект?
      targetElement.closest('.row__btn').classList.add('row__btn_active');
      targetElement.closest('.row__btn').innerHTML = 'ДОБАВЛЕНО';
      targetElement.closest('.row__btn').setAttribute('disabled', true);
      totalPrice.innerHTML = (parseInt(totalPrice.innerHTML.replace(/[^0-9,\s]/g, "")) + parseInt(data[index].price)).toLocaleString()


   });
})
