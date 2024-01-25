document.addEventListener('click', e => {
	const isDropDownButton = e.target.matches("[data-dropdown-button]")

	if (!isDropDownButton && e.target.closest('[data-dropdown]') != null) return

	let currentDropdown
	if (isDropDownButton) {
		currentDropdown = e.target.closest('[data-dropdown]')
		currentDropdown.classList.toggle('dropdown__active')
	}

	document.querySelectorAll("[data-dropdown].dropdown__active").forEach(dropdown => {
		if (dropdown === currentDropdown) return
		dropdown.classList.remove("dropdown__active")
	})
})