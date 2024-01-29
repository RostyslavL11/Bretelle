// document.addEventListener('click', e => {
// 	const isDropDownButton = e.target.matches("[data-dropdown-button]")

// 	if (!isDropDownButton && e.target.closest('[data-dropdown]') != null) return

// 	let currentDropdown
// 	if (isDropDownButton) {
// 		currentDropdown = e.target.closest('[data-dropdown]')
// 		currentDropdown.classList.toggle('dropdown__active')
// 	}

// 	document.querySelectorAll("[data-dropdown].dropdown__active").forEach(dropdown => {
// 		if (dropdown === currentDropdown) return
// 		dropdown.classList.remove("dropdown__active")
// 	})
// })



document.addEventListener('click', e => {
	const isDropDown = e.target.closest("[data-dropdown]");

	if (!isDropDown) {
		// Закриття всіх випадаючих меню при кліку за межі області dropdown
		document.querySelectorAll("[data-dropdown].dropdown__active").forEach(dropdown => {
			dropdown.classList.remove("dropdown__active");
		});
		return;
	}

	const currentDropdown = isDropDown.closest('[data-dropdown]');
	currentDropdown.classList.toggle('dropdown__active');

	document.querySelectorAll("[data-dropdown].dropdown__active").forEach(dropdown => {
		if (dropdown === currentDropdown) return;
		dropdown.classList.remove("dropdown__active");
	});
});


// swiper
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true // Дозволяє взаємодію з пагінацією

	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-promo-next',
		prevEl: '.swiper-promo-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	}

	// autoplay: {
	// 	delay: 5000, // Затримка між автоматичними змінами слайдів у мілісекундах
	// 	disableOnInteraction: true, // Заборона автозміни слайду при взаємодії користувача (клік, свайп і т.д.)
	// }
});