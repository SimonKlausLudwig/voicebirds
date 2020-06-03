const fs = require("fs")

const pages = [];

exports.onPostBootstrap = () => {
  fs.writeSync(fs.openSync(`./src/i18n/pages.ts`, 'w+'),
    `export const PAGE_PATHS = ${JSON.stringify(pages.map(page => {
      return {
        name: page.path.substr(1)
          .slice(0, -1)
          .replace(/-/g, '_')
          .replace("/", "_").toUpperCase(),
        path: page.path
      }
    }).reduce((obj, item) => (obj[item.name] = {
      path: item.path
    }, obj) ,{}))};`);
}

exports.onCreatePage = ({page, actions}) => {
  const {createPage, deletePage} = actions;

  console.log("ADSD");

  pages.push(page);

  if (page.path === "/blog" && process.env.LANG !== "de") {
    deletePage(page);
  }

  return new Promise(resolve => {
    resolve();
  });
};
