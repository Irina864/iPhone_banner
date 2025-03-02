const languages = {
  de: '/lang/de.json',
  en: '/lang/en.json',
  es: '/lang/es.json',
  fr: '/lang/fr.json',
  ja: '/lang/ja.json',
  pt: '/lang/pt.json',
};
const defaultLang = 'en';

const params = new URLSearchParams(window.location.search);

const lang =
  params.get('lang') || navigator.language.slice(0, 2) || defaultLang;

const selectedLang = languages[lang] ? languages[lang] : languages[defaultLang];

fetch(selectedLang)
  .then((response) => response.json())
  .then((data) => {
    document.querySelectorAll('.links__href')[0].innerHTML =
      data['Terms of Use'];
    document.querySelectorAll('.links__href')[1].innerHTML =
      data['Privacy Policy'];
    document.querySelectorAll('.links__href')[2].innerHTML = data['Restore'];

    document.querySelector('.access__title').innerHTML =
      data['Get Unlimited <br>Access'];

    document.querySelectorAll('.benefit__text')[0].innerHTML =
      data['Unlimited Art <br>Creation'];
    document.querySelectorAll('.benefit__text')[1].innerHTML =
      data['Exclusive <br>Styles'];
    document.querySelectorAll('.benefit__text')[2].innerHTML =
      data['Magic Avatars <br>With 20% Off'];

    document.querySelectorAll('.form__title')[0].innerHTML =
      data['YEARLY ACCESS'];
    document.querySelector('.form__notification').innerHTML =
      data['BEST OFFER'];
    document.querySelectorAll('.form__note')[0].innerHTML =
      data['Just {{price}} per year'];
    document.querySelectorAll('.form__price')[0].innerHTML =
      data['{{price}} <br>per week'];

    document.querySelectorAll('.form__title')[1].innerHTML =
      data['WEEKLY ACCESS'];
    document.querySelectorAll('.form__price')[1].innerHTML =
      data['{{price}} <br>per week'];

    document.querySelector('.form__link').innerHTML = data['Continue'];
  })
  .catch((error) => {
    console.error('Error loading language file:', error);
  });
