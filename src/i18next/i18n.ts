import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
        "PORTFOLIO": "PORTFOLIO",
        "Home": "Home",
        "About": "About",
        "Contact": "Contact",
        "Projects": "Projects",
        "Blog": "Blog",
        "Landing pages": "Landing pages",
        "Landing page": "Landing page",
        "Date not found": "Date not found",
        "Go to the site": "Go to the site",
        "Business card website": "Business card website",
        "Personal website": "Personal website",
        "Corporate website": "Corporate website",
        "Online stores": "Online stores",
        "ERROR": "ERROR",
        "RETURN": "RETURN",
        "Go to projects": "Go to projects",
        "Developed a website using my Gulp assembly based on a ready-made layout in Figma.": "Developed a website using my Gulp assembly based on a ready-made layout in Figma.",
        "I created a website based on an existing design in Figma. The entire project was completed in just two days. The site is fully responsive, ensuring optimal functionality on mobile devices.": "I created a website based on an existing design in Figma. The entire project was completed in just two days. The site is fully responsive, ensuring optimal functionality on mobile devices.",
        "Built using a Figma design, on React, and fully responsive.": "Built using a Figma design, on React, and fully responsive.",
        "Fill in the feedback form": "Fill in the feedback form",
        "Name": "Name",
        "Surname": "Surname",
        "Type Site": "Type Site",
        "Budget": "Budget",
        "Email": "Email",
        "Telegram": "Telegram",
        "Message": "Message",
        "Submit": "Submit",
        "Kostiantyn P.": "Kostiantyn P.",
        "Frontend Developer": "Frontend Developer"
        }
  },
  ua: {
    translation: {
        "PORTFOLIO": "ПОРТФОЛІО",
        "Home": "Головна",
        "About": "Про нас",
        "Contact": "Контакти",
        "Projects": "Проєкти",
        "Blog": "Блог",
        "Landing pages": "Цільові сторінки",
        "Landing page": "Цільова сторінка",
        "Date not found": "Дата не вказана",
        "Go to the site": "Перейти на сайт",
        "Business card website": "Сайт візитка",
        "Personal website": "Персональний сайт",
        "Corporate website": "Корпоративний сайт",
        "Online stores": "Інтернет магазини",
        "ERROR": "Помилка",
        "RETURN": "Повернутися",
        "Go to projects": "Перейти до проектів",
        "Developed a website using my Gulp assembly based on a ready-made layout in Figma.": "Верстав сайт на своїй сборці Gulp, за готовим макетом в Figma.",
        "I created a website based on an existing design in Figma. The entire project was completed in just two days. The site is fully responsive, ensuring optimal functionality on mobile devices.": "Я створив веб-сайт на основі наявного дизайну в Figma. Весь проект був завершений всього за два дні. Сайт повністю адаптивний, забезпечуючи оптимальну функціональність на мобільних пристроях.",
        "Built using a Figma design, on React, and fully responsive.": "Сделанный по макета Figma, на React, полностью адаптивный.",
        "Fill in the feedback form": "Заповніть форму зворотнього зв'язку",
        "Name": "Ім'я",
        "Surname": "Прізвище",
        "Type Site": "Тип сайту",
        "Budget": "Бюджет",
        "Email": "Електронна пошта",
        "Telegram": "Телеграм",
        "Message": "Повідомлення",
        "Submit": "Відправити",
        "Kostiantyn P.": "Костянтин П.",
        "Frontend Developer": "Frontend Розробник"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;