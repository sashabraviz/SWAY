import * as flsFunctions from "./modules/functions.js";
import * as dinam from "./modules/dinamic_adaptive.js";
import * as hed_burger from "./modules/header__burger.js";
import * as hed_show from "./modules/header.show.js";
import * as anim from "./modules/sclorr-anim.js";
import * as swiper from "./modules/swiper.js";
import * as File from "./modules/file.js";
import * as tab from "./modules/tab.js";

flsFunctions.isWebp();

//динамічний адаптив
//dinam.isDinam();

//для кастомного коду
File.isFile();

//header__burger
hed_burger.isBurger();

//header__show
hed_show.isHeader_Show();

//Анімація при скроллі
anim.isScroll_anim();

//swiper
swiper.isSwiper();

//tab
tab.istab();

