import english from './translation/en.json';
import french from './translation/fr.json';

const translations: {[locale: string]: any} = {
  'en-US': english,
  'fr-FR': french
};

const translator = (key: string) => {
  return accessProperty(translations[navigator.language], key);
}

export default translator;

const accessProperty = (data: any, key: string): any => {
  var pathPart = key.split('.');

  if (undefined === data[pathPart[0]]) {
      return '';
  }

  return 1 === pathPart.length ?
      data[pathPart[0]] :
      accessProperty(data[pathPart[0]], pathPart.slice(1).join('.'));
}
