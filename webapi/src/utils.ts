import fs from "fs";

export const getFileSizeFromFS = (fileName: string) => {
    return new Promise((resolve, reject) => {
        fs.stat(`./${fileName}`, (err, stats) => {
            if (err) {
                reject(err);
            } else {
                resolve(stats.size);
            }
        });
    });
}
