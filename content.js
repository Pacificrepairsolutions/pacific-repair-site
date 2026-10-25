/* =====================================================================
   НАСТРОЙКИ САЙТА PACIFIC REPAIR
   Меняйте только текст внутри кавычек "...". Кавычки и запятые не трогайте.
   После изменений сохраните файл и снова загрузите папку на Netlify.
   ===================================================================== */
window.SITE = {

  // --- О компании (шапка и блок «About») ---
  company: {
    city:    "Sacramento, CA",   // город, где вы находитесь
    address: "",                 // улица и номер, если хотите показать (иначе пусто)
    since:   "2023",             // год основания (показывается под названием)
    aboutTitle: "A young local team that fixes it right the first time",
    aboutText:  "We’re a Sacramento-based home service company. Our technicians repair kitchen and laundry appliances, heating and air conditioning, and home electrical — from everyday brands to luxury built-ins. We show up on time, explain the problem in plain words, give you the price before we start and stand behind every repair."
  },

  // --- Часы работы по дням (время 24ч; выходной: ["Sunday", "", ""]) ---
  // По ним сайт сам пишет «Open now» или «Closed · opens …».
  week: [
    ["Monday",     "8:00", "19:00"],
    ["Tuesday",    "8:00", "19:00"],
    ["Wednesday",  "8:00", "19:00"],
    ["Thursday",   "8:00", "19:00"],
    ["Friday",     "8:00", "19:00"],
    ["Saturday",  "", ""],
    ["Sunday",    "", ""]
  ],

  // --- Куда приходят онлайн-заявки ---
  // 1) Netlify Forms — работает сам (включите Form detection в Netlify).
  // 2) Ваша Google-таблица (диспетчерская): вставьте сюда ссылку Web App
  //    из Google Apps Script (инструкция в ЗАЯВКИ-В-ТАБЛИЦУ.txt).
  sheetWebhook: "",
  // 3) Письмо о каждой заявке прямо на эту почту (сервис FormSubmit).
  //    После ПЕРВОЙ заявки на эту почту придёт письмо «Activate Form» —
  //    нажмите в нём кнопку один раз, и дальше все заявки будут приходить.
  bookingEmail: "pacificrepairsolutions@gmail.com",
  // Копия каждой заявки ещё на эти адреса (диспетчер, мастер и т.д.).
  // Можно добавить SMS-адрес телефона: T-Mobile — 9165551234@tmomail.net,
  // Verizon — 9165551234@vtext.com (у AT&T такая услуга закрыта).
  alsoNotify: [],

  // --- Отзывы на площадках (когда появятся — вставьте ссылки) ---
  googleReviews: "",
  yelp:          "",
  thumbtack:     "",
  nextdoor:      "",
  facebook:      "",

  // --- Контакты ---
  phone1: "916-235-0084",
  phone2: "916-836-7616",
  email:  "pacificrepairsolutions@gmail.com",
  hours:  "Mon–Fri · 8 AM – 7 PM",

  // --- Оплата в приложении ---
  // Ссылка на оплату картой (Square, Stripe, PayPal и т.п.). Пусто — кнопки не будет.
  paymentLink: "",
  // Zelle: телефон или email. Пусто — не показывается.
  zelle: "",

  // --- Лицензии ---
  // Впишите номер в number: "" — лицензия появится на сайте (блок
  // «Licensed for every job we do» и внизу страницы). Пустые не показываются.
  licenses: [
    { label: "Appliance repair · BHGS registration (CA)", number: "" },
    { label: "Electrical · CSLB C-10 license",            number: "" },
    { label: "HVAC · CSLB C-20 license",                  number: "" },
    { label: "EPA 608 refrigerant certification",         number: "" }
  ],

  // --- Ссылки на приложение в магазинах ---
  // Когда приложение появится в App Store / Google Play, вставьте ссылки —
  // на сайте и в приложении появятся кнопки «App Store» и «Google Play».
  appStoreLink:   "",
  // Установочный файл для Android прямо с вашего сайта. Положите файл
  // pacific-repair.apk в папку сайта и впишите его имя сюда.
  androidApk:     "",
  googlePlayLink: "",

  // --- Бренды ---
  // brandStrip — полоска брендов вверху сайта; brands — блок «Brands we service».
  // ЛОГОТИПЫ: положите официальный логотип (PNG, лучше на прозрачном или белом
  // фоне) в папку photos/brands/ с именем бренда маленькими буквами:
  //   lg.png, samsung.png, sub-zero.png, ge-profile.png, fisher-and-paykel.png,
  //   mitsubishi-electric.png … Нет файла — показывается название.
  brandStrip: ["Sub-Zero", "Wolf", "Viking", "Thermador", "Miele", "Samsung", "LG", "Whirlpool"],
  brands: {
    luxury: ["Sub-Zero", "Wolf", "Viking", "Thermador", "Miele", "Dacor", "Monogram", "GE Profile", "JennAir", "Fisher & Paykel", "Bosch"],
    major:  ["Samsung", "LG", "Whirlpool", "Maytag", "KitchenAid", "GE", "Frigidaire", "Electrolux", "InSinkErator"],
    hvac:   ["Carrier", "Trane", "Lennox", "Rheem", "Goodman", "Daikin", "Mitsubishi Electric"]
  },

  // --- Гарантия (сколько дней) ---
  warrantyDays: "30",

  // --- Цифры на сайте ---
  rating:  "4.9",
  repairs: "10,000+",
  years:   "15+",   // больше не используется на сайте (компания с 2023)

  // --- Главный заголовок и текст под ним ---
  heroTitle: "Your local team for | appliance, HVAC & electrical repair",   // знак | = перенос на 2-ю строку
  heroText:  "One call for the fridge, the AC and the breaker that keeps tripping. Licensed technicians, a fixed price before work starts, and a 30-day warranty on every repair.",

  // --- Фото для разных блоков ---
  // Положите файл с таким именем в папку photos, и он заменит стоковое фото.
  photos: {
    hero:       "hero.jpg",        // большое фото на первом экране
    appliance:  "appliance.jpg",   // карточка «Ремонт техники»
    hvac:       "hvac.jpg",        // карточка «Отопление и кондиционеры»
    electrical: "electrical.jpg",  // карточка «Электрика»
    why:        "why.jpg",         // блок «Почему мы»
    booking:    "booking.jpg",     // фон у формы записи
    app:        "app.jpg"          // фото в макете телефона
  },

  // --- Наша команда ---
  // Впишите имена — блок «Meet your technicians» появится сам.
  // Фото: photos/team-1.jpg, photos/team-2.jpg и т.д.
  team: [
    { name: "", role: "Appliance & HVAC technician", photo: "team-1.jpg" },
    { name: "", role: "Appliance & electrical technician", photo: "team-2.jpg" }
  ],

  // --- Наши работы (галерея) ---
  // Добавляйте фото в папку photos и строчки сюда. Пока список пустой,
  // показываются стоковые фото. Чтобы добавить ещё одну работу, скопируйте
  // строчку целиком (с запятой в конце).
  work: [
    // { photo: "work-1.jpg", caption: "Samsung fridge repair · Carmichael" },
    // { photo: "work-2.jpg", caption: "AC repair · Fair Oaks" },
  ],

  // --- Время для записи в форме ---
  bookingTimes: [
    "As soon as possible",
    "Today",
    "Tomorrow morning",
    "Tomorrow afternoon",
    "This week, flexible"
  ],

  // --- Отзывы ---
  reviews: [
    { name: "David Chen", where: "Sacramento · Refrigerator repair",
      text: "Our refrigerator stopped cooling overnight. A technician came the same day, found a faulty start relay, replaced it on the spot, and the fridge was cold again within an hour." },
    { name: "Emily Rodriguez", where: "Natomas · Washer repair",
      text: "My washer wouldn’t drain. The technician explained the drain pump problem and had the part with him. Fixed in one visit, no mess left behind." },
    { name: "Jessica Palmer", where: "Pocket-Greenhaven · Dishwasher repair",
      text: "Dishwasher was leaking from the door. Bad gasket and a cracked spray arm, both replaced the same visit. No more leaks and the dishes come out clean." }
  ],

  // --- Города и ZIP-коды ---
  // region — название района (заголовок группы на сайте)
  // sameDay: true — приезжаем в тот же день, false — «позвоните, назовём время»
  areas: [
    { region: "Sacramento", city: "Sacramento", sameDay: true, zips: "95811 95814 95815 95816 95817 95818 95819 95820 95821 95822 95823 95824 95825 95826 95827 95828 95829 95830 95831 95832 95833 95834 95835 95836 95837 95838 95841 95842 95864" },
    { region: "Sacramento", city: "Carmichael", sameDay: true, zips: "95608" },
    { region: "Sacramento", city: "Fair Oaks", sameDay: true, zips: "95628" },
    { region: "Sacramento", city: "Citrus Heights", sameDay: true, zips: "95610 95621" },
    { region: "Sacramento", city: "Rancho Cordova", sameDay: true, zips: "95670 95742" },
    { region: "Sacramento", city: "Antelope", sameDay: true, zips: "95843" },
    { region: "Sacramento", city: "Orangevale", sameDay: true, zips: "95662" },
    { region: "Sacramento", city: "North Highlands", sameDay: true, zips: "95660" },
    { region: "Sacramento", city: "Rio Linda", sameDay: true, zips: "95673 95626" },
    { region: "Sacramento", city: "Elk Grove", sameDay: true, zips: "95624 95757 95758" },
    { region: "Sacramento", city: "Folsom", sameDay: true, zips: "95630" },
    { region: "Sacramento", city: "Galt", sameDay: true, zips: "95632" },
    { region: "Sacramento", city: "Mather", sameDay: true, zips: "95655" },
    { region: "Placer & El Dorado", city: "Roseville", sameDay: true, zips: "95661 95678 95747" },
    { region: "Placer & El Dorado", city: "Rocklin", sameDay: true, zips: "95677 95765" },
    { region: "Placer & El Dorado", city: "Granite Bay", sameDay: true, zips: "95746" },
    { region: "Placer & El Dorado", city: "Lincoln", sameDay: false, zips: "95648" },
    { region: "Placer & El Dorado", city: "Loomis", sameDay: false, zips: "95650" },
    { region: "Placer & El Dorado", city: "Auburn", sameDay: false, zips: "95602 95603" },
    { region: "Placer & El Dorado", city: "El Dorado Hills", sameDay: true, zips: "95762" },
    { region: "Placer & El Dorado", city: "Cameron Park", sameDay: false, zips: "95682" },
    { region: "Yolo", city: "West Sacramento", sameDay: true, zips: "95605 95691" },
    { region: "Yolo", city: "Davis", sameDay: false, zips: "95616 95618" },
    { region: "Yolo", city: "Woodland", sameDay: false, zips: "95695 95776" },
    { region: "Yuba & Sutter", city: "Yuba City", sameDay: false, zips: "95991 95993" },
    { region: "Yuba & Sutter", city: "Marysville", sameDay: false, zips: "95901" },
    { region: "Yuba & Sutter", city: "Olivehurst", sameDay: false, zips: "95961" },
    { region: "Solano", city: "Fairfield", sameDay: false, zips: "94533 94534" },
    { region: "Solano", city: "Suisun City", sameDay: false, zips: "94585" },
    { region: "Solano", city: "Vacaville", sameDay: false, zips: "95687 95688" },
    { region: "Solano", city: "Dixon", sameDay: false, zips: "95620" },
    { region: "San Joaquin", city: "Stockton", sameDay: false, zips: "95202 95203 95204 95205 95206 95207 95209 95210 95212 95215 95219" },
    { region: "San Joaquin", city: "Lodi", sameDay: false, zips: "95240 95242" },
    { region: "San Joaquin", city: "Manteca", sameDay: false, zips: "95336 95337" },
    { region: "San Joaquin", city: "Tracy", sameDay: false, zips: "95304 95376 95377 95391" },
    { region: "San Joaquin", city: "Lathrop", sameDay: false, zips: "95330" },
    { region: "Stanislaus", city: "Modesto", sameDay: false, zips: "95350 95351 95354 95355 95356 95357 95358" },
    { region: "Stanislaus", city: "Ceres", sameDay: false, zips: "95307" },
    { region: "Stanislaus", city: "Turlock", sameDay: false, zips: "95380 95382" },
    { region: "Stanislaus", city: "Riverbank", sameDay: false, zips: "95367" },
    { region: "Stanislaus", city: "Oakdale", sameDay: false, zips: "95361" },
    { region: "Stanislaus", city: "Salida", sameDay: false, zips: "95368" }
  ]
};
