const fs = require('fs');

const file = './assets/archivo.txt';

/* Cod Sincrono */

console.time('sincrono');

console.log('\nAbriendo Archivo');
let content;
try {
  content = fs.readFileSync(file, 'utf8');
  console.log(content);
} catch (err) {
  console.log(err.message);
}
console.log('\nHaciendo otra cosa\n');
console.log('\nHaciendo otra cosa más\n');
console.timeEnd('sincrono');

console.time('asincrono');
console.log('\nAbriendo Archivo...');

content = fs.readFile(file, 'utf8', (err, content) =>
  err ? console.log(err.message) : console.log(content)
);

console.log('\nHaciendo otra cosa\n');
console.log('\nHaciendo otra cosa más\n');
console.timeEnd('asincrono');
