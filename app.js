const path = require('node:path');
const fs = require('node:fs/promises');

const creator = async () => {
    const pathToBase = path.join(__dirname, 'baseFolder');
    const dirNames = ['dir_1', 'dir_2', 'dir_3', 'dir_4', 'dir_5'];
    const fileNames = ['test1.txt', 'test2.txt', 'test3.txt', 'test4.txt', 'test5.txt'];

    await fs.mkdir(pathToBase, { recursive: true });

    for (const dirName of dirNames) {
        const pathToDir = path.join(pathToBase, dirName);
        await fs.mkdir(pathToDir, { recursive: true });

        const stat = await fs.stat(pathToBase);
        console.log(`${pathToDir} isDirectory: ${stat.isDirectory()} isFile: ${stat.isFile()}`);

        for (const fileName of fileNames) {
            const pathToFile = path.join(pathToDir, fileName);
            await fs.writeFile(pathToFile, 'Hi there!');

            const stat = await fs.stat(pathToFile);
            console.log(`${pathToFile} isDirectory: ${stat.isDirectory()} isFile: ${stat.isFile()}`);
        }
    }
};

void creator();