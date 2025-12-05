import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { content } from './src/data/content.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const group1Titles = [
    "Fotoğraf simülasyonu yapıyor musunuz?",
    "Ameliyat sonucu için garanti verir misiniz?",
    "Alkol ve sigara ile ilgili önerileriniz nedir?",
    "Hangi durumlarda ameliyatım iptal olabilir/ ertelenebilir?",
    "Ameliyat günü için dikkate edilmesi gereken şeyler nelerdir?",
    "Ameliyat günü için (hemen ameliyat sonrası) önerileriniz nelerdir?",
    "Ameliyatta fotoğraf çekiliyor mu? Bu fotoğrafları ne zaman görebilirim?"
];

const group2Titles = [
    "Ameliyattan sonra ne zaman banyo yapabilirim?",
    "İlaçları ne zaman kullanmaya başlamalıyım?",
    "Burun içi yıkama ve nemlendirme ne kadar süre ile devam edilmelidir?",
    "Burun içi yıkama için hangi ilacı kullanmalıyım? Farkları nelerdir?",
    "Ameliyat sonrası beslenme önerileri nelerdir?",
    "Kahve içebilir miyim?",
    "Burun içindeki tampon ne zaman çıkartılır?",
    "Nostril retainer (burun deliği şekillendirici aparat) nasıl kullanılır?",
    "Nostril retainer (burun deliği şekillendirici) her hastada kullanılır mı?",
    "Burun masajı yapmalı mıyım?",
    "Ameliyat sonrası burun bantlaması ne kadar süre ile yapmalıyım?",
    "Ameliyat sonrası ne zaman yolculuk yapabilirim?",
    "Ne zaman spor yapabilirim?",
    "Ne zaman yüzebilirim?",
    "Ne zaman yan dönerek uyuyabilirim?",
    "Ne zaman işe dönebilirim?",
    "Makyaj ne zaman yapabilirim?",
    "Ameliyat sonrası ne zaman gözlük kullanabilirim?"
];

const group3Titles = [
    "Ameliyat sonrası kontrol süreci nasıl olur ve hangi süre ile kontrole gelmeliyim?",
    "Burun ne zaman tam olarak iyileşir? Son şekil ne zaman oluşur?",
    "Revizyon ameliyatı ne zaman yapılabilir?"
];

// Helper to normalize strings for comparison (remove HTML tags, extra spaces)
function normalize(str) {
    return str.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

// Map Turkish titles to their indices in the original list
const trContent = content.tr.tabs.find(t => t.id === 'tab8').content[0].subsections;
const titleToIndex = {};

trContent.forEach((item, index) => {
    const cleanTitle = normalize(item.title);
    titleToIndex[cleanTitle] = index;
});

// Verify all titles in groups exist
const allGroupTitles = [...group1Titles, ...group2Titles, ...group3Titles];
const missingTitles = [];

allGroupTitles.forEach(title => {
    const cleanTitle = normalize(title);
    if (titleToIndex[cleanTitle] === undefined) {
        missingTitles.push(title);
    }
});

if (missingTitles.length > 0) {
    console.error("Error: The following titles were not found in the Turkish content:");
    missingTitles.forEach(t => console.error(`- ${t}`));
    process.exit(1);
}

// Process each language
const newContent = { ...content };

for (const lang in newContent) {
    const tab8 = newContent[lang].tabs.find(t => t.id === 'tab8');
    if (!tab8) continue;

    const originalSubsections = tab8.content[0].subsections;

    // Helper to get item by Turkish title
    const getItem = (trTitle) => {
        const index = titleToIndex[normalize(trTitle)];
        return originalSubsections[index];
    };

    const group1Items = group1Titles.map(getItem);
    const group2Items = group2Titles.map(getItem);
    const group3Items = group3Titles.map(getItem);

    tab8.content = [
        {
            bgColor: "#fffde7", // Yellow
            subsections: group1Items
        },
        {
            bgColor: "#e8f5e9", // Green
            subsections: group2Items
        },
        {
            bgColor: "#f3e5f5", // Purple
            subsections: group3Items
        }
    ];
}

// Write back to file
const outputPath = path.join(__dirname, 'src/data/content.js');
const fileContent = `export const content = ${JSON.stringify(newContent, null, 2)};`;

fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log('Content reorganized successfully.');
