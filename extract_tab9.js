
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { content } from './src/data/content.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
    const extractedData = {};

    for (const lang in content) {
        const tabs = content[lang].tabs;
        const tab9 = tabs.find(t => t.id === 'tab9');
        if (tab9) {
            extractedData[lang] = tab9;
        }
    }

    fs.writeFileSync('tab9_content.json', JSON.stringify(extractedData, null, 2));
    console.log('Successfully extracted tab9 content to tab9_content.json');
} catch (error) {
    console.error('Error extracting content:', error);
}
