const fs = require("fs-extra");
const sass = require("node-sass");
const outFile = "dist/assets/css/honeycomb.css";
const fonts = [
    "node_modules/honeycomb/src/type/vendor/",
    "node_modules/honeycomb/src/icons/vendor/"
];
const fontsDir = "dist/assets/fonts/";

// Copy fonts.
fonts.map(font => {
    try {
        fs.copySync(font, fontsDir);
        console.log(`${font} copied to ${fontsDir}`);
    } catch (err) {
        console.error("Error copying font: ", err);
    }
});