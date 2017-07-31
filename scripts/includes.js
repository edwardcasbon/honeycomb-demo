const glob = require("glob");
const shtml2html = require("shtml2html");

// Loop through all the HTML files and include the includes.
glob('dist/**/*.html', {}, (err, files) => {
    if (err) {
        console.error(err);
    } else { 
        if (files.length > 0) {
            for (let i=0; i<files.length; i++) {
                let file = files[i];
                              
                shtml2html(file, file, 'dist', res => {
                    if(['fail', 'warn'].includes(res[0].type)) {
                        console.error("Error including include file: " . res[0].msg);
                    }
                });
            }
        }
    }

    console.log("Finished including include files");
});
