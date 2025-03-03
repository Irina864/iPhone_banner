const defaultLang = 'en';

const params = new URLSearchParams(window.location.search);
const lang =
  params.get('lang') || navigator.language.slice(0, 2) || defaultLang;

function resizeFont(element, container, ratioElems) {
  if (!element || !container || lang === 'en') {
    return;
  }

  element.style.fontSize = '';

  const availableWidth = container.getBoundingClientRect().width;

  const testElement = element.cloneNode(true);
  testElement.style.position = 'absolute';
  testElement.style.left = '-9999px';
  testElement.style.whiteSpace = 'nowrap';
  testElement.style.visibility = 'hidden';
  testElement.style.width = 'auto';
  testElement.style.height = 'auto';

  document.body.appendChild(testElement);

  let fontSize = parseFloat(window.getComputedStyle(element).fontSize);

  let testWidth = testElement.getBoundingClientRect().width;

  while (
    (testWidth / availableWidth > ratioElems || testWidth > availableWidth) &&
    fontSize > 10
  ) {
    fontSize -= 1;
    testElement.style.fontSize = fontSize + 'px';
    testWidth = testElement.getBoundingClientRect().width;
    console.log(
      'после',
      testWidth,
      availableWidth,
      fontSize,
      testWidth > availableWidth && fontSize > 10
    );
  }

  element.style.fontSize = fontSize + 'px';

  document.body.removeChild(testElement);
}

function safeResize(texts, boxs, ratioElems) {
  if (!texts || !boxs) return;

  const textArray = Array.from(texts);
  const boxArray = Array.from(boxs);

  textArray.forEach((textElement, index) => {
    if (index < boxArray.length) {
      resizeFont(textElement, boxArray[index], ratioElems);
    }
  });
}

export function processAll() {
  try {
    safeResize(
      document.querySelectorAll('.form__note'),
      document.querySelectorAll('.form__title-wrap'),
      0.8
    );
    safeResize(
      document.querySelectorAll('.form__title'),
      document.querySelectorAll('.form__title-wrap'),
      0.8
    );
    safeResize(
      document.querySelectorAll('.form__price'),
      document.querySelectorAll('.form__label'),
      0.3
    );
    safeResize(
      document.querySelectorAll('.form__notification'),
      document.querySelectorAll('.form__notification-wrap'),
      0.3
    );
    safeResize(
      document.querySelectorAll('.links__href'),
      document.querySelectorAll('.links__item'),
      1 / 3
    );
  } catch (e) {
    console.error('Error while resizing fonts:', e);
  }
}

document.addEventListener('DOMContentLoaded', processAll);
window.addEventListener('resize', processAll);
window.addEventListener('load', processAll);
