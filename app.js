const http = require('node:http'); //!!!без пробілу 'node:http' !!! Цей префікс 'node' вказує розробнику, що це точно вбудована, а не встановлена звідкись бібліотека
const path = require('path'); //може бути і без префіксу 'node'
const readline = require('node:readline/promises'); //промісифікований
const fs = require('node:fs'); //непромісифікований
const fsp = require('node:fs/promises'); //промісифікований
const fscl = require('node:fs'); //fs на колбеках
const os = require('node:os');

const foo = async () => {
    // const {sayHello} = require('./helpers/helper'); //require працює таким чином, що він виконує все, що там лежить, від нього залежить послідовність виконання коду
    //
    // sayHello();
    //
    //
    // console.log('dirname', __dirname);
    // console.log('filename', __filename);
    // console.log('processCwd', process.cwd());


// // HTTP:
//     let server = http.createServer((req, res) => {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Hello world!\nport 3000');
//     });
//     server.listen(3000);


// // Path:
//     console.log(path.basename(__filename));
//     console.log(path.dirname(__filename));
//     console.log(path.extname(__filename));
//     console.log(path.parse(__filename));
//     console.log(path.isAbsolute('/Users/apple/Desktop/OKTEN/node_js_jan2024')); //тут виводить true, тому що він не враховує поточну директорію, з якої ми запускаємо програму у консолі, а дивиться на глобальний рівень
//     console.log(path.isAbsolute('./Users/apple/Desktop/OKTEN/node_js_jan2024')); //намагається в поточній директорії, з якої ми запускаємо програму у консолі, знайти 'Users'
//
//     const joinedPath = path.join('test1', 'test2', 'test3', 'test4');
//     console.log(joinedPath);
//
//     const joinedPathUnix = 'test1/test2/test3/test4';
//     const joinedPathWindows = 'test1\test2\test3\test4'; //у віндовсі шляхи будуються через лівий слеш
//
//     const joinedPathToHelpersDirectory = path.join(__dirname, 'helpers', 'helper.js'); //повноцінний шлях до файлу "helper.js"
//     console.log(joinedPathToHelpersDirectory);
//
//
//     const normalizedPath = path.normalize('////helpers//helpers.js////////'); //забирає зайві слеші зі шляху
//     console.log(normalizedPath);


// // Readline:
//     const readlineInstance = readline.createInterface({
//         input: process.stdin, // тут через process вказуємо на наш термінал, звідки будуть приходити наші дані для input
//         output: process.stdout
//     });
//
//     // await readlineInstance.question('Enter your name: ', (answer) => {
//     //     console.log(`Hello, ${answer}!`);
//     // });
//
//     const name = await readlineInstance.question('Enter your name: ');
//     console.log(`Hello, ${name}!`);
//     const age = await readlineInstance.question('Enter your age: ');
//     console.log(`You are ${age} years old!`);
//
//     process.exit(0); //дефолтний код 0 — процес завершився успішно


// // OS:
//     console.log(os.arch());
//     console.log(os.cpus());
//     console.log(os.totalmem() / 1024 / 1024 / 1024);
//     console.log(os.freemem() / 1024 / 1024 / 1024);
//     console.log(os.hostname());
//     console.log(os.homedir());
//     console.log(os.version());


// // FS (непромісифікований):
//     fs.readFile(path.join(__dirname, 'helpers', 'sometext.txt'), {encoding: 'utf-8'}, (err, data) => {
//         if (err) throw new Error();
//         console.log(data); //отримуємо прочитаний текстовий файл у вигляді Buffer (зрозумілий для нашого компʼютера формат)
//     });
//
//     fs.writeFile(path.join(__dirname, 'helpers', 'sometext2.txt'), 'Hi there!', (err) => {
//         if (err) throw new Error();
//     });
//
//     fs.writeFile(path.join(__dirname, 'helpers', 'sometext3.txt'), 'Hi there!', (err) => {
//         if (err) throw new Error();
//     });
//
//     // FS (промісифікований):
//     const pathToFile = path.join(__dirname, 'test.txt');
//
//     await fsp.writeFile(pathToFile, 'Hi there!');
//
//     const data = await fsp.readFile(pathToFile, 'utf-8');
//     console.log(data);
//     // console.log(data.toString()); // можна також ось таким чином перетворити вміст файлу з Buffer, toString() теж орієнтується на utf-8
//
//     await fsp.appendFile(pathToFile, '\nHi there, again!');
//
//     const stat = await fsp.stat(pathToFile);
//     console.log(stat.isDirectory());
//     console.log(stat.isFile());
//     // await fsp.rename(path.join(__dirname, 'new_dir1', 'new_dir2', 'new_dir3', 'test.txt'), path.join(__dirname, 'helpers', 'test_helpers.txt')); // перейменування файлів під час їхнього переміщення
//     // await fsp.copyFile(path.join(__dirname, 'new_dir1', 'new_dir2', 'new_dir3', 'test.txt'), path.join(__dirname, 'helpers', 'test_copy.txt')); // копіювання (дублювання) файлу + перейменування файлу
//
//     await fsp.mkdir(path.join(__dirname, 'new_dir1', 'new_dir2', 'new_dir3'), {recursive: true});
//     // await fsp.rmdir(path.join(__dirname, 'new_dir1', 'new_dir2', 'new_dir3')); // варіант видалення саме папки
//     await fsp.writeFile(path.join(__dirname, 'new_dir1', 'new_dir2', 'new_dir3', 'test.txt'), 'Hi there!');
//     // await fsp.rm(path.join(__dirname, 'new_dir1', 'new_dir2', 'new_dir3', 'test.txt'));
//     // await fsp.rm(path.join(__dirname, 'new_dir1', 'new_dir2'), {recursive: true});
//     // await fsp.rm(pathToFile); // один із варіантів видалення
//     // await fsp.unlink(pathToFile); // варіант видалення саме файлу
//     // await fsp.rename(path.join(__dirname, 'new_dir1', 'new_dir2'), path.join(__dirname, 'helpers', 'new_dir22')); // перейменування директорій (папок) під час їхнього переміщення

    //FS stream:


};

void foo();
