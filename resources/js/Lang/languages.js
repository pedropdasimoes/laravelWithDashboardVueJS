/* Flags */
import flagBg from "@/Lang/Flags/flagBg";
import flagDe from "@/Lang/Flags/flagDe";
import flagEn from "@/Lang/Flags/flagEn";
import flagFr from "@/Lang/Flags/flagFr";
import flagRu from "@/Lang/Flags/flagRu";
import flagTr from "@/Lang/Flags/flagTr";
import flagpt_br from "@/Lang/Flags/flagpt_br";

const flags = {
    flagBg: flagBg,
    flagDe: flagDe,
    flagEn: flagEn,
    flagFr: flagFr,
    flagRu: flagRu,
    flagTr: flagTr,
    flagpt_br: flagpt_br,
};

/* Languages */
const languages = [
    { id: "en", name: "English", flag: "flagEn" },
    { id: "tr", name: "Türkçe", flag: "flagTr" },
    { id: "bg", name: "български", flag: "flagBg" },
    { id: "de", name: "Deutsch", flag: "flagDe" },
    { id: "fr", name: "Français", flag: "flagFr" },
    { id: "ru", name: "Pусский", flag: "flagRu" },
    { id: "pt_br", name: "Português Brasil", flag: "flagpt_br" },
];

/* Translates */

/* Auth Translates */
import authLangBg from "@/Lang/bg/auth_lang_bg";
import authLangDe from "@/Lang/de/auth_lang_de";
import authLangEn from "@/Lang/en/auth_lang_en";
import authLangFr from "@/Lang/fr/auth_lang_fr";
import authLangRu from "@/Lang/ru/auth_lang_ru";
import authLangTr from "@/Lang/tr/auth_lang_tr";
import authLangpt_br from "@/Lang/pt_br/auth_lang_pt_br";
const authTranslates = {
    bg: authLangBg,
    de: authLangDe,
    en: authLangEn,
    fr: authLangFr,
    ru: authLangRu,
    tr: authLangTr,
    pt_br: authLangpt_br,
};

/*Side Menu Translates*/
import mainMenuLangBg from "@/Lang/bg/main_menu_lang_bg";
import mainMenuLangDe from "@/Lang/de/main_menu_lang_de";
import mainMenuLangEn from "@/Lang/en/main_menu_lang_en";
import mainMenuLangFr from "@/Lang/fr/main_menu_lang_fr";
import mainMenuLangRu from "@/Lang/ru/main_menu_lang_ru";
import mainMenuLangTr from "@/Lang/tr/main_menu_lang_tr";
import mainMenuLangpt_br from "@/Lang/pt_br/main_menu_lang_pt_br";
const mainMenuTranslates = {
    bg: mainMenuLangBg,
    de: mainMenuLangDe,
    en: mainMenuLangEn,
    fr: mainMenuLangFr,
    ru: mainMenuLangRu,
    tr: mainMenuLangTr,
    pt_br: mainMenuLangpt_br,
};

/*User Menu Translates*/
import userMenuLangBg from "@/Lang/bg/user_menu_lang_bg";
import userMenuLangDe from "@/Lang/de/user_menu_lang_de";
import userMenuLangEn from "@/Lang/en/user_menu_lang_en";
import userMenuLangFr from "@/Lang/fr/user_menu_lang_fr";
import userMenuLangRu from "@/Lang/ru/user_menu_lang_ru";
import userMenuLangTr from "@/Lang/tr/user_menu_lang_tr";
import userMenuLangpt_br from "@/Lang/pt_br/user_menu_lang_pt_br";
const userMenuTranslates = {
    bg: userMenuLangBg,
    de: userMenuLangDe,
    en: userMenuLangEn,
    fr: userMenuLangFr,
    ru: userMenuLangRu,
    tr: userMenuLangTr,
    pt_br: userMenuLangpt_br,
};

/*Notification Translates*/
import notificationLangBg from "@/Lang/bg/notification_lang_bg";
import notificationLangDe from "@/Lang/de/notification_lang_de";
import notificationLangEn from "@/Lang/en/notification_lang_en";
import notificationLangFr from "@/Lang/fr/notification_lang_fr";
import notificationLangRu from "@/Lang/ru/notification_lang_ru";
import notificationLangTr from "@/Lang/tr/notification_lang_tr";
import notificationLangpt_br from "@/Lang/pt_br/notification_lang_pt_br";
const notificationTranslates = {
    bg: notificationLangBg,
    de: notificationLangDe,
    en: notificationLangEn,
    fr: notificationLangFr,
    ru: notificationLangRu,
    tr: notificationLangTr,
    pt_br: notificationLangpt_br,
};

export {
    languages,
    flags,
    authTranslates,
    mainMenuTranslates,
    userMenuTranslates,
    notificationTranslates
};
