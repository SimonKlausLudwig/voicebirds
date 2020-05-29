const fs = require("fs")

function getNewValue(object, pKey) {
  Object.keys(object)
    .forEach(key => {
      var translation = getTranslation(object[key], `${pKey || ''}${pKey ? '.' : ''}${key}`);
      if (translation.length === 1) {
        object[key] = translation[0];
      } else {
        object[key] = getNewValue(object[key], `${pKey || ''}${pKey ? '.' : ''}${key}`);
      }
    });

  return object;

  function getTranslation(obj, key) {
    var translations = Object.keys(obj)
      .filter(key => key === ((process.env.LANG || "de")))
      .map(i => obj[i] || obj["de"]);

    if (translations.length <= 0 && Object.keys(obj).length <= 1 && (typeof obj === 'string' || obj instanceof String)) {
      return [obj];
    }

    return translations;

  }

}

exports.onPreBootstrap = () => {
  console.log("Translating to " + (process.env.LANG || "de"));

  var translation = getNewValue(require('./../../src/i18n.json'));

  Object.keys(translation).forEach(page => {
    var jobVal = translation[page];
    fs.writeSync(fs.openSync(`./src/i18n/language_${page}.ts`, 'w+'), `export const i18n_${page} = ${JSON.stringify(jobVal)};`);
  });
}
