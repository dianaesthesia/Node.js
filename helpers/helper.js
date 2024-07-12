function sayHello() {
    console.log('Hello from helper.js');

    console.log('dirname', __dirname);
    console.log('filename', __filename);
    console.log('processCwd', process.cwd());
}

console.log('helper.js!!!!!!!');

module.exports = {
    sayHello
}
// module.exports = sayHello;
