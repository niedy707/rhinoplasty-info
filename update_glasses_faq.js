
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentPath = path.join(__dirname, 'src', 'data', 'content.js');
let content = fs.readFileSync(contentPath, 'utf8');

const updates = {
    "tr": {
        titleMatch: "gözlük",
        newTitle: "<p>Ameliyat sonrası ne zaman <strong>gözlük</strong> kullanabilirim?</p>",
        newText: "<p>En erken 3üncü aydan itibaren, kısa süre olacak şekilde ve ağırlık olarak hafif gözlükler kullanabilirsiniz.</p><p><br></p><blockquote><strong style=\"background-color: rgb(255, 255, 0);\">6ıncı ay</strong> itibarı ile istediğiniz şekilde gözlük kullanabilirsiniz.</blockquote>"
    },
    "en": {
        titleMatch: "glasses",
        newTitle: "<p>When can I use <strong>glasses</strong> after surgery?</p>",
        newText: "<p>You can use lightweight glasses for a short time starting from the 3rd month at the earliest.</p><p><br></p><blockquote>As of the <strong style=\"background-color: rgb(255, 255, 0);\">6th month</strong>, you can use glasses as you wish.</blockquote>"
    },
    "de": {
        titleMatch: "Brille", // Or "glasses" if not translated yet, but it should be translated
        newTitle: "<p>Wann kann ich nach der Operation eine <strong>Brille</strong> tragen?</p>",
        newText: "<p>Ab dem 3. Monat können Sie frühestens leichte Brillen für kurze Zeit tragen.</p><p><br></p><blockquote>Ab dem <strong style=\"background-color: rgb(255, 255, 0);\">6. Monat</strong> können Sie Brillen tragen, wie Sie möchten.</blockquote>"
    },
    "es": {
        titleMatch: "gafas",
        newTitle: "<p>¿Cuándo puedo usar <strong>gafas</strong> después de la cirugía?</p>",
        newText: "<p>Puede usar gafas ligeras por un corto tiempo a partir del 3er mes como muy pronto.</p><p><br></p><blockquote>A partir del <strong style=\"background-color: rgb(255, 255, 0);\">6º mes</strong>, puede usar gafas como desee.</blockquote>"
    },
    "ru": {
        titleMatch: "очки",
        newTitle: "<p>Когда я смогу носить <strong>очки</strong> после операции?</p>",
        newText: "<p>Самое раннее с 3-го месяца вы можете использовать легкие очки в течение короткого времени.</p><p><br></p><blockquote>С <strong style=\"background-color: rgb(255, 255, 0);\">6-го месяца</strong> вы можете использовать очки по своему усмотрению.</blockquote>"
    },
    "fr": {
        titleMatch: "lunettes",
        newTitle: "<p>Quand puis-je porter des <strong>lunettes</strong> après l'opération ?</p>",
        newText: "<p>Vous pouvez utiliser des lunettes légères pendant une courte période à partir du 3ème mois au plus tôt.</p><p><br></p><blockquote>À partir du <strong style=\"background-color: rgb(255, 255, 0);\">6ème mois</strong>, vous pouvez utiliser des lunettes comme vous le souhaitez.</blockquote>"
    },
    "it": {
        titleMatch: "occhiali",
        newTitle: "<p>Quando posso usare gli <strong>occhiali</strong> dopo l'intervento?</p>",
        newText: "<p>È possibile utilizzare occhiali leggeri per un breve periodo a partire dal 3° mese al più presto.</p><p><br></p><blockquote>Dal <strong style=\"background-color: rgb(255, 255, 0);\">6° mese</strong> in poi, è possibile utilizzare gli occhiali come si desidera.</blockquote>"
    },
    "ro": {
        titleMatch: "ochelari",
        newTitle: "<p>Când pot purta <strong>ochelari</strong> după operație?</p>",
        newText: "<p>Puteți folosi ochelari ușori pentru o perioadă scurtă de timp începând cu a 3-a lună cel mai devreme.</p><p><br></p><blockquote>Începând cu <strong style=\"background-color: rgb(255, 255, 0);\">luna a 6-a</strong>, puteți folosi ochelari așa cum doriți.</blockquote>"
    },
    "hu": {
        titleMatch: "szemüveget",
        newTitle: "<p>Mikor hordhatok <strong>szemüveget</strong> műtét után?</p>",
        newText: "<p>A 3. hónaptól kezdve leghamarabb rövid ideig könnyű szemüveget használhat.</p><p><br></p><blockquote>A <strong style=\"background-color: rgb(255, 255, 0);\">6. hónaptól</strong> kezdve tetszés szerint használhat szemüveget.</blockquote>"
    }
};

// Helper to find the matching FAQ index in a language block
function findFaqIndex(langContent, titleMatch) {
    const tab8 = langContent.tabs.find(t => t.id === 'tab8');
    if (!tab8) return -1;

    // Flatten subsections to find the index
    // Note: The structure in content.js is tab8 -> content array -> object -> subsections array
    // We need to find the specific subsection

    for (let i = 0; i < tab8.content.length; i++) {
        const contentItem = tab8.content[i];
        if (contentItem.subsections) {
            for (let j = 0; j < contentItem.subsections.length; j++) {
                const sub = contentItem.subsections[j];
                // Check if title contains the match keyword (case insensitive)
                if (sub.title.toLowerCase().includes(titleMatch.toLowerCase())) {
                    return { contentIndex: i, subsectionIndex: j };
                }
            }
        }
    }
    return null;
}

// We need to parse the content.js file to a JS object to manipulate it safely, 
// but since it's an export const, we can't just JSON.parse it.
// However, we can use regex to replace the specific strings if we are careful.
// OR, we can try to load it as a module? No, that's async and complex in this context.
// Better to use regex replacement on the file content string.

// Strategy:
// 1. Iterate languages.
// 2. Find the "Glasses" FAQ block in the string for that language.
// 3. Replace the title and text.

let updatedContent = content;

for (const [lang, update] of Object.entries(updates)) {
    console.log(`Processing ${lang}...`);

    // Regex to find the language block
    const langRegex = new RegExp(`"${lang}":\\s*\\{[\\s\\S]*?`, 'g');
    const langMatch = langRegex.exec(updatedContent);

    if (!langMatch) {
        console.error(`Language ${lang} not found.`);
        continue;
    }

    const langStartIndex = langMatch.index;

    // Find tab8 within this language block
    const tab8Regex = /"id":\s*"tab8"[\s\S]*?"content":\s*\[/g;
    tab8Regex.lastIndex = langStartIndex;
    const tab8Match = tab8Regex.exec(updatedContent);

    if (!tab8Match) {
        console.error(`Tab8 not found for ${lang}.`);
        continue;
    }

    const tab8StartIndex = tab8Match.index;

    // Now search for the specific FAQ title keyword within tab8
    // We search for "title": ".*keyword.*"
    // Be careful about HTML tags in title

    const titleKeywordRegex = new RegExp(`"title":\\s*".*?${update.titleMatch}.*?"`, 'gi');
    titleKeywordRegex.lastIndex = tab8StartIndex;
    const titleMatch = titleKeywordRegex.exec(updatedContent);

    if (!titleMatch) {
        console.error(`FAQ with keyword '${update.titleMatch}' not found for ${lang}.`);
        // Fallback: Try searching just for the keyword in case title structure is different
        continue;
    }

    const titleStartIndex = titleMatch.index;
    const fullTitleString = titleMatch[0];

    console.log(`Found title for ${lang}: ${fullTitleString}`);

    // Now find the associated "text" field immediately following
    const textRegex = /"text":\s*"(.*?)"/s; // Non-greedy match for text value
    // We need to match from the end of the title
    const searchFrom = titleStartIndex + fullTitleString.length;

    // Find the next "text": "..."
    // Note: There might be whitespace/newlines
    const textSearchString = updatedContent.substring(searchFrom, searchFrom + 5000); // Look ahead 5000 chars
    const textMatch = textRegex.exec(textSearchString);

    if (!textMatch) {
        console.error(`Text field not found for ${lang} after title.`);
        continue;
    }

    const fullTextString = textMatch[0];
    const textValue = textMatch[1];

    console.log(`Found text for ${lang}`);

    // Perform replacement
    // We replace the specific title and text strings found

    // Escape quotes in new content for JSON string
    const safeNewTitle = update.newTitle.replace(/"/g, '\\"');
    const safeNewText = update.newText.replace(/"/g, '\\"').replace(/\n/g, '\\n');

    const newTitleString = `"title": "${safeNewTitle}"`;
    const newTextString = `"text": "${safeNewText}"`;

    // We need to be careful not to replace other occurrences. 
    // Since we have the exact string and index, we can do string slicing.

    // Calculate absolute indices
    const absTitleStart = titleStartIndex;
    const absTitleEnd = titleStartIndex + fullTitleString.length;

    const absTextStart = searchFrom + textMatch.index;
    const absTextEnd = absTextStart + fullTextString.length;

    // We need to apply replacements from back to front to avoid index shifting issues if we were doing multiple in one pass,
    // but here we are updating `updatedContent` in a loop. 
    // Wait, if we update `updatedContent`, the indices for subsequent languages might shift?
    // YES.
    // So we should re-search for every language?
    // OR, we can just use `updatedContent` for the next iteration, but we need to reset our search regexes to run on the *new* content.
    // My loop structure does exactly that: `langRegex.exec(updatedContent)` runs on the current state of `updatedContent`.
    // So it should be fine.

    // Replace Text first (it's after Title)
    updatedContent = updatedContent.substring(0, absTextStart) + newTextString + updatedContent.substring(absTextEnd);

    // Replace Title
    updatedContent = updatedContent.substring(0, absTitleStart) + newTitleString + updatedContent.substring(absTitleEnd);

    console.log(`Updated ${lang} successfully.`);
}

fs.writeFileSync(contentPath, updatedContent, 'utf8');
console.log('All updates complete.');
