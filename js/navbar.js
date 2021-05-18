const $logoSection = document.querySelector('#logoSection')
const $headerContainer = document.querySelector('#header__container');
const $navbarList = document.querySelector('#navbar__list');
const $burgerMenu = document.querySelector('#navbar__burger');
const $logo = document.querySelector('#logo');
const $switchThemeBtn = document.querySelector('#switchTheme');
const $crearGifBtn = document.querySelector('#crateGifBtn');
const $favoritosMenu = document.querySelector('#FavoritosMenu');
const $heroSection = document.querySelector('#heroSection');
const $misGifosMenu = document.querySelector('#misGifosMenu');
const $crearGifosMenu = document.querySelector('#crearGifosMenu');


const displayBurgerMenu = () => {
	if (localStorage.getItem('dark-mode') === 'true') {
		if ($navbarList.classList.contains('hiddenMenu')) {
			$navbarList.classList.remove('hiddenMenu');
			$burgerMenu.src = 'assets/close-modo-noct.svg';
		} else {
			$navbarList.classList.add('hiddenMenu');
			$burgerMenu.src = 'assets/burger-modo-noct.svg';
		}
	} else {
		if ($navbarList.classList.contains('hiddenMenu')) {
			$navbarList.classList.remove('hiddenMenu');
			$burgerMenu.src = 'assets/close.svg';
		} else {
			$navbarList.classList.add('hiddenMenu');
			$burgerMenu.src = 'assets/burger.svg';
		}
	}
};


$burgerMenu.addEventListener('click', displayBurgerMenu);
$favoritosMenu.addEventListener('click', displayBurgerMenu);

const setCrearButton = () => {
	if (localStorage.getItem('dark-mode') == 'true'){
		$crearGifBtn.src = 'assets/CTA-crar-gifo-modo-noc.svg';
		$crearGifBtn.addEventListener('click', () => {
			$crearGifBtn.src = 'assets/CTA-crear-gifo-active.svg';
			}	);
		
			$crearGifBtn.addEventListener('mouseover', () => {
			$crearGifBtn.src = 'assets/CTA-crear-gifo-hover.svg';
				});
		
			$crearGifBtn.addEventListener('mouseout', () => {
			$crearGifBtn.src = 'assets/CTA-crar-gifo-modo-noc.svg';
			});
			}
	else{
	$crearGifBtn.addEventListener('click', () => {
	$crearGifBtn.src = 'assets/CTA-crear-gifo-active.svg';
	});

	$crearGifBtn.addEventListener('mouseover', () => {
	$crearGifBtn.src = 'assets/CTA-crear-gifo-hover.svg';
	});

	$crearGifBtn.addEventListener('mouseout', () => {
	$crearGifBtn.src = 'assets/button-crear-gifo.svg';
	});
	}
}

setCrearButton();


const displayCreateGifSection = (event) => {
	event.preventDefault();
	$createGifSection.classList.remove('hidden');
	$heroSection.classList.add('hidden');
	$favSection.classList.add('hidden');
	$trendingSection.classList.add('hidden');
	$misGifosSection.classList.add('hidden');
	window.scrollTo({ top: 0, behavior: 'smooth' });
};


const displayMainSection = (event) => {
	event.preventDefault();
	$heroSection.classList.remove('hidden');
	$misGifosSection.classList.add('hidden');
	$favSection.classList.add('hidden');
	$createGifSection.classList.add('hidden');
	$trendingSection.classList.remove('hidden');
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

$crearGifosMenu.addEventListener('click', displayCreateGifSection);
$logoSection.addEventListener('click', displayMainSection);


