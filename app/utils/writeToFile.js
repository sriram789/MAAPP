import fs from 'fs';

export const writeToFile = (data, filePath) => {
    fs.writeFile(filePath, data, (err) => {
        if (err) throw err;
    })
}