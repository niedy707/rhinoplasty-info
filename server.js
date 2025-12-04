import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

const CONTENT_FILE_PATH = path.join(__dirname, 'src', 'data', 'content.js');

app.post('/api/save', (req, res) => {
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ error: 'Content is required' });
    }

    // Log the title of the first section of the first tab of 'tr' to verify what we received
    try {
        const trTitle = content.tr.tabs[0].content[0].title;
        console.log('Received save request. TR Tab 1 Section 1 Title:', trTitle);
    } catch (e) {
        console.log('Could not log title:', e.message);
    }

    // Read the existing file to preserve imports/exports structure if needed,
    // but here we are replacing the object.
    // Since content.js exports a const object, we need to reconstruct the file content.

    const fileContent = `export const content = ${JSON.stringify(content, null, 2)};\n`;

    try {
        fs.writeFileSync(CONTENT_FILE_PATH, fileContent, 'utf8');
        console.log('Content saved successfully');
        res.json({ success: true });
    } catch (error) {
        console.error('Error saving content:', error);
        res.status(500).json({ error: 'Failed to save content' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
