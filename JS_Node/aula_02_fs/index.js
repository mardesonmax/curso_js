const fs = require('fs').promises;
const path = require('path');

const readdir = async rootDir => {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

const walk = async(files, rootDir) => {
    for (let file of files) {
        const fileFullPah = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPah);

        if (/\.git/g.test(fileFullPah)) continue;
        if (/node_modules/g.test(fileFullPah)) continue;

        if (stats.isDirectory()) {
            readdir(fileFullPah);
            continue;
        }

        if (!/\.html/g.test(fileFullPah)) {
            continue;
        }

        console.log(file);
    }
}

readdir('c:/Users/MAX/Desktop/Curso_JS/');