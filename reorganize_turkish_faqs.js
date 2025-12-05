
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { content } from './src/data/content.js';

const contentPath = path.join(__dirname, 'src', 'data', 'content.js');

// Helper to normalize title for matching
function normalize(str) {
    return str.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

// Define the 3 groups
const groups = [
    {
        bgColor: "#fffde7", // Yellow
        titles: [
            "Fotoğraf simülasyonu yapıyor musunuz?",
            "Ameliyat sonucu için garanti verir misiniz?",
            "Alkol ve sigara ile ilgili önerileriniz nedir?",
            "Hangi durumlarda ameliyatım iptal olabilir/ ertelenebilir?",
            "Ameliyat günü için dikkate edilmesi gereken şeyler nelerdir?",
            "Ameliyat günü için (hemen ameliyat sonrası) önerileriniz nelerdir?",
            "Ameliyatta fotoğraf çekiliyor mu? Bu fotoğrafları ne zaman görebilirim?"
        ]
    },
    {
        bgColor: "#e8f5e9", // Green
        titles: [
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
        ]
    },
    {
        bgColor: "#f3e5f5", // Purple
        titles: [
            "Ameliyat sonrası kontrol süreci nasıl olur ve hangi süre ile kontrole gelmeliyim?",
            "Burun ne zaman tam olarak iyileşir? Son şekil ne zaman oluşur?",
            "Revizyon ameliyatı ne zaman yapılabilir?"
        ]
    }
];

// Extract current Turkish FAQs
const trTab8 = content.tr.tabs.find(t => t.id === 'tab8');
if (!trTab8) {
    console.error("Tab8 not found in Turkish content");
    process.exit(1);
}

// Flatten existing subsections
let allFaqs = [];
if (Array.isArray(trTab8.content)) {
    trTab8.content.forEach(group => {
        if (group.subsections) {
            allFaqs = allFaqs.concat(group.subsections);
        }
    });
}

console.log(`Found ${allFaqs.length} existing FAQs.`);

// Reconstruct groups
const newContent = groups.map(group => {
    const subsections = group.titles.map(title => {
        // Find matching FAQ
        const faq = allFaqs.find(f => normalize(f.title) === normalize(title));
        if (!faq) {
            console.warn(`Warning: FAQ with title '${title}' not found in existing content.`);
            // Create a placeholder or skip?
            // Better to keep it if we can't find it? No, we need to find it.
            // Maybe fuzzy match?
            const fuzzy = allFaqs.find(f => normalize(f.title).includes(normalize(title)) || normalize(title).includes(normalize(f.title)));
            if (fuzzy) {
                console.log(`Fuzzy matched '${title}' to '${fuzzy.title}'`);
                return fuzzy;
            }
            return null;
        }
        return faq;
    }).filter(Boolean);

    return {
        bgColor: group.bgColor,
        subsections: subsections
    };
});

// Update content object
trTab8.content = newContent;

// Write back
const newFileContent = `export const content = ${JSON.stringify(content, null, 2)};`;
fs.writeFileSync(contentPath, newFileContent, 'utf8');
console.log("Turkish FAQs reorganized successfully.");
