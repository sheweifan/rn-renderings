const path = require('path');
const fs = require('fs');

const defaultVars = require('antd-mobile/lib/style/themes/default.native');
// const customVars = require('../theme');
const customVars = {
  brand_primary: '#000000',
  color_link: '#000000',
  border_color_base: '#e6e6e6',
};
const themePath = path.resolve(require.resolve('antd-mobile'), '../style/themes/default.native.js');
const themeVars = Object.assign({}, defaultVars, customVars);

if (fs.statSync(themePath).isFile()) {
  fs.writeFileSync(
    themePath,
    'var brandPrimary = "#000000"; var brandPrimaryTap = "#cccccc";module.exports = ' + JSON.stringify(themeVars)
  );
}