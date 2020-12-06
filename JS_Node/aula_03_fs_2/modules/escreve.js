const fs = require('fs').promises;

module.exports = (local, dados) => {
    fs.writeFile(local, dados, { flag: 'w' });
}