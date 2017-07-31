const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");
const sass = require("node-sass");

glob('src/**/*.scss', {}, (err, files) => {
    if (err) {
        console.error(err);
    } else { 
        if (files.length > 0) {
            for (let i=0; i<files.length; i++) {
                let file = files[i];

                // If a partial, don't go any further.
                if(path.basename(file).startsWith("_")) continue;
                    
                let outFile = [
                    'dist',
                    path.dirname(file).slice(3),
                    "/",
                    path.basename(file, path.extname(file)),
                    ".css"
                ].join("");

                // Ensure directory exists
                fs.ensureDirSync(path.dirname(outFile));

                // Compile.               
                sass.render({
                    file,
                    includePaths: [ "node_modules" ],
                    outFile,
                    outputStyle: "compressed",
                    sourceMap: false
                }, (err, result) => {
                    if (err) {
                        console.error("Error compiling Sass: ", err);
                        return;
                    }

                    fs.writeFile(outFile, result.css, (err) => {
                        if (err) {
                            console.error("Error writing compiled CSS file: ", err);
                        }
                    })
                });

            }
        }
    }
});
