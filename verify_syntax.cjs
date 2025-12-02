const fs = require('fs');
const path = '/Users/ibrahimyagci/.gemini/antigravity/scratch/rhinoplasty-info/src/data/content.js';

try {
    const content = fs.readFileSync(path, 'utf8');
    // Remove "export const content = " and ";" at the end to get just the object
    const objectStr = content.replace('export const content = ', '').replace(/;\s*$/, '');

    // Try to parse it using eval (since it's JS object, not strict JSON)
    // We use eval because the file contains backticks and other JS features not in JSON
    eval('(' + objectStr + ')');
    console.log('Syntax is valid.');
} catch (e) {
    console.error('Syntax error:', e.message);
    // Try to find line number
    if (e.stack) {
        console.error(e.stack.split('\n')[0]);
    }
}
