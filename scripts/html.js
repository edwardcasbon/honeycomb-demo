const fs = require("fs-extra");
const glob = require("glob");

// Loop through all the HTML files and copy them to the dist directory.
glob('src/**/*.html', {}, (err, files) => {
    if (err) {
        console.error(err);
    } else { 
        if (files.length > 0) {
            for (let i=0; i<files.length; i++) {
                let file = files[i];
                let distFile = 'dist' + file.slice(3);
                fs.copy(file, distFile, err => {
                    if (err) {
                        console.error("Error copying html file: " + err);
                    }
                });
            }
        }
    }
});
