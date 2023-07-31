window.innerWidth && document.documentElement.clientWidth ? 
Math.min(window.innerWidth, document.documentElement.clientWidth) : 
window.innerWidth || 
document.documentElement.clientWidth || 
document.getElementsByTagName('body')[0].clientWidth;



new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // autoHeight: true,
  // spaceBetween: 10,
});


let menu = [
  "Компания",
  "Портфолио",
  "Проектирование",
  "Ресторанам",
  "Застройщикам",
  "Гос.заказчикам",
  "Таблет-питание",
  "Сервис",
  "Новости",
  "Контакты",
  "<img class='email-icon' src='img/email.png' alt='email' /> info@stolovay.ru",
  "<img class='phone-icon' src='img/phone.png' alt='phone handle' /> 8 495 790-72-05",
];

// Content for class="navbar__list"
let menuUnits = menu.filter( item => item !== "Новости")
const menuList = document.querySelector(".navbar__list");
const mobileMenuList = document.querySelector(".menu-mobile__list");
let menuItems = "";
for (let i = 0; i < menuUnits.length; i++) {
  menuItems += '<li><a href="#!">' + menuUnits[i] + "</a></li>";
}
menuList.innerHTML = menuItems;
mobileMenuList.innerHTML = menuItems;

// Content for class="footer__menu-list"
let footerMenuUnits = menu.slice(0, 10)
const footerMenuList = document.querySelector(".footer__menu-list")
let footerMenuItems = ""
for (let i = 0; i < footerMenuUnits.length; i++) {
  footerMenuItems += '<li><a href="#!">' + footerMenuUnits[i] + "</a></li>";
}
footerMenuList.innerHTML = footerMenuItems

const fullwordProducts = [
  "Тепловое",
  "Холодильное",
  "Электромеханическое",
  "Посудомоечное",
  "Барное",
  "Хлебопекарное",
  "Линии раздачи",
  "Нейтральное",
  "Для фастфуда",
  "Для залов",
  "Весовое",
  "Вспомогательное",
  "Для магазинов",
];
const hyphenProducts = [
  "Тепло&shy;вое",
  "Холо&shy;дильное",
  "Электроме&shy;ханическое",
  "Посудо&shy;моечное",
  "Хлебо&shy;пекарное",
  "Линии раздачи",
  "Нейтраль&shy;ное",
  "Для фастфуда",
  "Для залов",
  "Вспомо&shy;гательное",
  "Для магазинов",
];
let products =[]
// Products for class="equipment__list" depend on window size
if (document.body.offsetWidth < 1280) {
  products = hyphenProducts
} else {
  products = fullwordProducts.filter(i => i !== "Барное" && i !== "Весовое")
}
 // Content for class="equipment__list"
const equipList = document.querySelector(".equipment__list");
products.forEach((item) => {
  let equip = document.createElement("a");
  equip.className = "equip";
  equip.innerHTML = "<p>" + item + "</p>";
  equipList.append(equip);
});
const images = [
  "./img/equips/1.png",
  "./img/equips/2.png",
  "./img/equips/3.png",
  "./img/equips/4.png",
  "./img/equips/5.png",
  "./img/equips/6.png",
  "./img/equips/7.png",
  "./img/equips/8.png",
  "./img/equips/9.png",
  "./img/equips/10.png",
  "./img/equips/11.png",
];
const equips = document.querySelectorAll(".equipment__list a");
equips.forEach((item, index) => {
  let img = document.createElement("img");
  img.className = "equip-img";
  img.src = images[index];
  img.alt = "equip image";
  item.prepend(img);
});

// Event on window size change
const equipListItems = document.querySelectorAll(".equipment__list a p")
window.addEventListener("resize", () => {
  (document.body.offsetWidth < 1280) ? products = hyphenProducts 
  : products = fullwordProducts.filter(i => i !== "Барное" && i !== "Весовое")
  equipListItems.forEach(function(el, index) {
    el.innerHTML = products[index]
  })
   })

//options for input
const appliances = document.getElementById("appliances");
fullwordProducts.forEach((item) => {
  let option = document.createElement("option");
  option.value = item;
  appliances.append(option);
})
// dropdown content
const searchDropdown = document.querySelectorAll(".dropdown-content")[1];
const equipDropdown = document.querySelectorAll(".dropdown-content")[2];
let devices = "";
for (let i = 0; i < fullwordProducts.length; i++) {
  devices += '<li><a href="#!">' + fullwordProducts[i] + "</a></li>";
}
searchDropdown.innerHTML = devices;
equipDropdown.innerHTML = devices;

// Content for class="footer__equip-list"
const footerEquipProducts = fullwordProducts.slice(0, 11)
const footerEquipList = document.querySelector(".footer__equip-list")
let footerDevices = ""
for (let i =0; i < footerEquipProducts.length; i++) {
  footerDevices += '<li><a href="#!">' + footerEquipProducts[i] + "</a></li>";
}
footerEquipList.innerHTML = footerDevices;


const targets = [
  "Кафе, барам, ресторанам",
  "Детским садам и школам",
  "Таблет-питание",
  "Для столовых",
  "Для пищеблоков", 
  "Государственным заказчикам",
  "Для кондитерских",
  "Для пиццерий",
  "Для магазинов",
  "Для войсковых частей",
  "Для воинских частей",
  "Все предложения",
]
// Content for class="targeted-offers__items"
const suggestionTargets = targets.filter((i, index) => index !== 6 &&  index !== 7 && index !== 10)
const offers = document.querySelector(".targeted-offers__items");
suggestionTargets.forEach(item => {
  let offer = document.createElement("div")
  offer.className = "targeted-offers__item"
  offer.innerHTML = '<div class="dropdown"><div><span>' + item + '</span><span>&#707;</span></div><div class="dropdown-content"></div></div>'
  offers.append(offer)
})

const targetedOffers =document.querySelector(".targeted-offers")
const stateCustomer = document.querySelector(".targeted-offers__item:nth-child(6) .dropdown div span")

if (targetedOffers.offsetWidth < 238) {
  stateCustomer.innerHTML = "Гос. заказчикам"
} 
window.addEventListener("resize", () => {
 (targetedOffers.offsetWidth > 238) ? 
    stateCustomer.innerHTML = "Государственным заказчикам"
   : stateCustomer.innerHTML = "Гос. заказчикам"
  })

  // Content for class="footer__offers"
  const footerTargets = targets.filter((i, index) => index !== 3 &&  index !== 4 && index !== 5 && index !== 9)
  const footerOffers = document.querySelector(".footer__offers");
  let footerProposals = "";
for (let i = 0; i < footerTargets.length; i++) {
  footerProposals += '<li><a href="#!">' + footerTargets[i] + "</a></li>";
}
footerOffers.innerHTML = footerProposals;


// Content for class="brands"
const brandImages = [
  "./img/brands/simeco.png",
  "./img/brands/rational.png",
  "./img/brands/hicold.png",
  "./img/brands/atesy.png",
  "./img/brands/abat.png",
]
const brands = document.querySelector(".brands")
brandImages.forEach(item => {
  let brand = document.createElement("div")
  brand.className = "brands__item"
  let brandInner = document.createElement("div")
  let brandInsideInner = document.createElement("div")
  let brandImage = document.createElement("img")
  brandImage.src = item;
  brandImage.alt = item.slice(6,-4);
  brandInsideInner.append(brandImage)
  brandInner.append(brandInsideInner)
  brand.append(brandInner)
  brands.prepend(brand)
})

// Content for class="news__item"
  const abatImages = [
    "./img/abat1.png",
    "./img/abat2.png",
    "./img/abat1.png",
  ];
const newsItems = document.querySelectorAll(".news__item")
newsItems.forEach((item, index) => {
  let imgDiv = document.createElement("div")
  imgDiv.className = "news__item_img"
  let img = document.createElement("img");
  img.className = "abat-img";
  img.src = abatImages[index];
  img.alt = "abat image";
  imgDiv.append(img);
  item.append(imgDiv)
  
  let text = document.createElement("div")
  
  let trademarkAndDate = document.createElement("div")
  trademarkAndDate.className = "trademark-and-date"
  let trademark = document.createElement("p")
  trademark.className = "trademark"
  trademark.innerHTML = "Abat"
  trademarkAndDate.append(trademark)
  let date = document.createElement("p")
  date.className = "date"
  date.innerHTML = "22.06.17"
  trademarkAndDate.append(date)
  text.append(trademarkAndDate)

  let h3 = document.createElement("h3");
  h3.innerHTML = "Повышение энергоэффективности туннельных посудомоечных машин МПТ торговой марки Abat"
  text.append(h3);
  let p = document.createElement("p");
  p.innerHTML = "С целью снижения нагрузки на электрическую сеть и для повышения энергоэффективности изделий с 1 июня 2017 года был изменен алгоритм работы туннельных посудомоечных машин МПТ торговой марки Abat всех моделей..."
  text.append(p);
  item.append(text);
});
shortItem = document.querySelectorAll(".item_short div p")[2]
shortText = shortItem.innerHTML.slice(0, 138)
shortItem.innerHTML = shortText

