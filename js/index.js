const slider = document.getElementById("progress")
const price = document.getElementById('price-value')
const min = slider.min
const max = slider.max
const value = slider.value

slider.style.background = `linear-gradient(to right, var(--color-Strong-Cyan) 0%, var(--color-Strong-Cyan) ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`

slider.oninput = function () {
    this.style.background = `linear-gradient(to right, var(--color-Strong-Cyan) 0%, var(--color-Strong-Cyan) ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`
    price.innerText = `$${slider.value}`
};

// const toggle = document.querySelector('.check-box');
// const toggleBtn = document.querySelector('.check-box::after');

// toggle.addEventListener('click', () => {
//     console.log(toggleBtn);
//     toggle.classList.toggle('active')
//     console.log(toggle);
// })
