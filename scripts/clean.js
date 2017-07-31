const fs = require('fs-extra');

fs.emptyDir('dist', err => {
    if (err) {
        console.error('Error cleaning dist directory');
        return;
    }

    fs.rmdir('dist');
});
