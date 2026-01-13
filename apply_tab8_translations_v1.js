
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentPath = path.join(__dirname, 'src', 'data', 'content.js');

const translations = {
    "en": {
        q14_btn: "💊 CLICK HERE FOR DETAILED INFO ON HOW TO USE MEDICATIONS",
        q15_items: ["Ocean water sprays:", "Bottle form nasal rinsing medications (Sea water/ ocean water):", "Serum Physiological (isotonic serum):"],
        q16_freq: "After the 2nd week, continue washing 3-5 times a day for another 2-4 weeks. You can increase or decrease the frequency according to your needs.",
        q16_caution: "You are not required to continue these 2 medications when the 1-month period is completed. However, there is no harm in continuing if you feel the need. (Continue if there is still crusting, dryness, etc. in the nose)",
        q20_text: "Do not try to prevent the urge to sneeze. However, it is very important to sneeze <strong>with your mouth open</strong> so that the pressure does not damage your nose.",
        q20_warn: "Sneezing with your mouth closed can increase intranasal pressure and cause bleeding or tissue damage.",
        q22_text_1: "You should <strong>not blow your nose for the first 1 month</strong> after surgery. During this time, you should clean your nose with recommended ocean water sprays or washing kits.",
        q22_text_2: "Blowing your nose can increase intranasal pressure and cause bleeding and damage to healing tissues.",
        q22_text_3: "<strong>You can blow your nose gently after the 1st month.</strong>",
        q31_text_1: "<strong style=\"background-color: rgb(255, 255, 0);\">It is recommended to rest for 7 days after surgery.</strong>",
        q32_text: "You can gently clean your skin after the tapes on the nose are removed. However, it is recommended to wait <strong>at least 2 months</strong> for procedures such as professional skin care, peeling or blackhead cleaning.",
        q33_text: "You should protect your nose from direct sunlight and high heat (solarium, sauna, hammam) for the first <strong>2 months</strong> after surgery.",
        q36_text_1: "Yes, you can have rhinoplasty surgery."
    },
    "de": {
        q14_btn: "💊 KLICKEN SIE HIER FÜR DETAILLIERTE INFOS ZUR ANWENDUNG VON MEDIKAMENTEN",
        q15_items: ["Meerwassersprays:", "Nasenspülmittel in Flaschenform (Meerwasser/Ozeanwasser):", "Physiologisches Serum (isotonisches Serum):"],
        q16_freq: "Fahren Sie nach der 2. Woche weitere 2-4 Wochen lang mit 3-5 Mal täglichem Waschen fort. Sie können die Häufigkeit je nach Bedarf erhöhen oder verringern.",
        q16_caution: "Sie sind nicht verpflichtet, diese 2 Medikamente nach Ablauf der 1-monatigen Frist weiter einzunehmen. Es schadet jedoch nicht, wenn Sie dies tun möchten. (Fahren Sie fort, wenn es immer noch Verkrustungen, Trockenheit usw. in der Nase gibt)",
        q20_text: "Versuchen Sie nicht, den Niesreiz zu unterdrücken. Es ist jedoch sehr wichtig, <strong>mit offenem Mund</strong> zu niesen, damit der Druck Ihre Nase nicht beschädigt.",
        q20_warn: "Niesen mit geschlossenem Mund kann den intranasalen Druck erhöhen und zu Blutungen oder Gewebeschäden führen.",
        q22_text_1: "Sie sollten <strong>Ihre Nase im ersten Monat</strong> nach der Operation nicht schnäuzen. In dieser Zeit sollten Sie Ihre Nase mit empfohlenen Meerwassersprays oder Spülkits reinigen.",
        q22_text_2: "Schnäuzen kann den intranasalen Druck erhöhen und zu Blutungen und Schäden an heilendem Gewebe führen.",
        q22_text_3: "<strong>Nach dem 1. Monat können Sie Ihre Nase sanft schnäuzen.</strong>",
        q31_text_1: "<strong style=\"background-color: rgb(255, 255, 0);\">Es wird empfohlen, sich nach der Operation 7 Tage lang auszuruhen.</strong>",
        q32_text: "Sie können Ihre Haut sanft reinigen, nachdem die Bänder an der Nase entfernt wurden. Es wird jedoch empfohlen, für Verfahren wie professionelle Hautpflege, Peeling oder Mitesserreinigung <strong>mindestens 2 Monate</strong> zu warten.",
        q33_text: "Sie sollten Ihre Nase in den ersten <strong>2 Monaten</strong> nach der Operation vor direkter Sonneneinstrahlung und hoher Hitze (Solarium, Sauna, Hamam) schützen.",
        q36_text_1: "Ja, Sie können eine Nasenkorrektur vornehmen lassen."
    },
    "es": {
        q14_btn: "💊 HAGA CLIC AQUÍ PARA INFORMACIÓN DETALLADA SOBRE EL USO DE MEDICAMENTOS",
        q15_items: ["Aerosoles de agua de mar:", "Medicamentos de lavado nasal en forma de botella (agua de mar/agua de océano):", "Suero Fisiológico (suero isotónico):"],
        q16_freq: "Después de la 2ª semana, continúe lavando 3-5 veces al día durante otras 2-4 semanas. Puede aumentar o disminuir la frecuencia según sus necesidades.",
        q16_caution: "No está obligado a continuar con estos 2 medicamentos cuando se complete el período de 1 mes. Sin embargo, no hay daño en continuar si siente la necesidad. (Continúe si todavía hay costras, sequedad, etc. en la nariz)",
        q20_text: "No intente prevenir el impulso de estornudar. Sin embargo, es muy importante estornudar <strong>con la boca abierta</strong> para que la presión no dañe su nariz.",
        q20_warn: "Estornudar con la boca cerrada puede aumentar la presión intranasal y causar sangrado o daño tisular.",
        q22_text_1: "No debe <strong>sonarse la nariz durante el primer mes</strong> después de la cirugía. Durante este tiempo, debe limpiarse la nariz con aerosoles de agua de mar recomendados o kits de lavado.",
        q22_text_2: "Sonarse la nariz puede aumentar la presión intranasal y causar sangrado y daño a los tejidos en curación.",
        q22_text_3: "<strong>Puede sonarse la nariz suavemente después del 1er mes.</strong>",
        q31_text_1: "<strong style=\"background-color: rgb(255, 255, 0);\">Se recomienda descansar durante 7 días después de la cirugía.</strong>",
        q32_text: "Puede limpiar suavemente su piel después de quitar las cintas de la nariz. Sin embargo, se recomienda esperar <strong>al menos 2 meses</strong> para procedimientos como cuidado profesional de la piel, peeling o limpieza de puntos negros.",
        q33_text: "Debe proteger su nariz de la luz solar directa y del calor intenso (solárium, sauna, hammam) durante los primeros <strong>2 meses</strong> después de la cirugía.",
        q36_text_1: "Sí, puede someterse a una rinoplastia."
    },
    "ru": {
        q14_btn: "💊 НАЖМИТЕ ЗДЕСЬ ДЛЯ ПОДРОБНОЙ ИНФОРМАЦИИ ОБ ИСПОЛЬЗОВАНИИ ЛЕКАРСТВ",
        q15_items: ["Спреи с морской водой:", "Лекарства для промывания носа в бутылках (морская вода/океаническая вода):", "Физиологический раствор (изотонический раствор):"],
        q16_freq: "После 2-й недели продолжайте промывать 3-5 раза в день еще 2-4 недели. Вы можете увеличить или уменьшить частоту в соответствии с вашими потребностями.",
        q16_caution: "Вам не обязательно продолжать принимать эти 2 лекарства после завершения 1-месячного периода. Однако нет никакого вреда в продолжении, если вы чувствуете необходимость. (Продолжайте, если в носу все еще есть корки, сухость и т. д.)",
        q20_text: "Не пытайтесь предотвратить позыв к чиханию. Однако очень важно чихать <strong>с открытым ртом</strong>, чтобы давление не повредило ваш нос.",
        q20_warn: "Чихание с закрытым ртом может повысить внутриносовое давление и вызвать кровотечение или повреждение тканей.",
        q22_text_1: "Вы не должны <strong>сморкаться в течение первого месяца</strong> после операции. В это время вам следует очищать нос рекомендованными спреями с морской водой или наборами для промывания.",
        q22_text_2: "Сморкание может повысить внутриносовое давление и вызвать кровотечение и повреждение заживающих тканей.",
        q22_text_3: "<strong>Вы можете осторожно сморкаться после 1-го месяца.</strong>",
        q31_text_1: "<strong style=\"background-color: rgb(255, 255, 0);\">Рекомендуется отдыхать в течение 7 дней после операции.</strong>",
        q32_text: "Вы можете аккуратно очистить кожу после снятия лент с носа. Тем не менее, рекомендуется подождать <strong>не менее 2 месяцев</strong> для таких процедур, как профессиональный уход за кожей, пилинг или чистка от черных точек.",
        q33_text: "Вы должны защищать свой нос от прямых солнечных лучей и высокой температуры (солярий, сауна, хаммам) в течение первых <strong>2 месяцев</strong> после операции.",
        q36_text_1: "Да, вам можно делать ринопластику."
    },
    "fr": {
        q14_btn: "💊 CLIQUEZ ICI POUR DES INFORMATIONS DÉTAILLÉES SUR L'UTILISATION DES MÉDICAMENTS",
        q15_items: ["Sprays à l'eau de mer :", "Médicaments de lavage nasal en bouteille (eau de mer/eau de l'océan) :", "Sérum Physiologique (sérum isotonique) :"],
        q16_freq: "Après la 2ème semaine, continuez à laver 3 à 5 fois par jour pendant 2 à 4 semaines supplémentaires. Vous pouvez augmenter ou diminuer la fréquence selon vos besoins.",
        q16_caution: "Vous n'êtes pas obligé de continuer ces 2 médicaments lorsque la période d'un mois est terminée. Cependant, il n'y a aucun mal à continuer si vous en ressentez le besoin. (Continuez s'il y a encore des croûtes, de la sécheresse, etc. dans le nez)",
        q20_text: "N'essayez pas d'empêcher l'envie d'éternuer. Cependant, il est très important d'éternuer <strong>la bouche ouverte</strong> afin que la pression n'endommage pas votre nez.",
        q20_warn: "Éternuer la bouche fermée peut augmenter la pression intranasale et provoquer des saignements ou des lésions tissulaires.",
        q22_text_1: "Vous ne devez <strong>pas vous moucher pendant le premier mois</strong> après l'opération. Pendant ce temps, vous devez nettoyer votre nez avec des sprays à l'eau de mer recommandés ou des kits de lavage.",
        q22_text_2: "Se moucher peut augmenter la pression intranasale et provoquer des saignements et des dommages aux tissus en guérison.",
        q22_text_3: "<strong>Vous pouvez vous moucher doucement après le 1er mois.</strong>",
        q31_text_1: "<strong style=\"background-color: rgb(255, 255, 0);\">Il est recommandé de se reposer pendant 7 jours après l'opération.</strong>",
        q32_text: "Vous pouvez nettoyer délicatement votre peau après avoir retiré les bandes sur le nez. Cependant, il est recommandé d'attendre <strong>au moins 2 mois</strong> pour des procédures telles que les soins professionnels de la peau, le peeling ou le nettoyage des points noirs.",
        q33_text: "Vous devez protéger votre nez de la lumière directe du soleil et de la forte chaleur (solarium, sauna, hammam) pendant les <strong>2 premiers mois</strong> après l'opération.",
        q36_text_1: "Oui, vous pouvez subir une rhinoplastie."
    }
};

fs.readFile(contentPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Remove export const content = ... ; to parse JSON
    const jsonStart = data.indexOf('{');
    // const jsonEnd = data.lastIndexOf(';'); // might be unreliable if comments
    // Safer: just match strictly
    const contentStr = data.replace('export const content = ', '').trim();
    const jsonEnd = contentStr.lastIndexOf(';');
    const cleanJson = contentStr.substring(0, jsonEnd);

    let contentObj;
    try {
        contentObj = JSON.parse(cleanJson);
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
        // console.log('Partial data:', cleanJson.substring(0, 500));
        return;
    }

    const supportedLangs = Object.keys(translations);

    supportedLangs.forEach(lang => {
        if (!contentObj[lang]) return;
        const tab8 = contentObj[lang].tabs.find(t => t.id === 'tab8');
        if (!tab8) return;

        // Helper functions for updating
        const updateQ14 = (sub) => {
            // Keep first part text, update link to button
            // Actually rewriting the whole HTML structure is safer to match TR
            const t = translations[lang];
            if (!t) return;
            // We need to keep the translated first paragraph presumably? Or just update button?
            // The TR structure has a specific text in first paragraph.
            // TR: <p><strong>Tüm ilaçların...</strong> ... <em>(Burun yıkama...) </em></p> ... BUTTON ... <p><br></p><blockquote>...</blockquote><blockquote>...</blockquote>
            // We should preserve the existing translation for p1/blockquotes if possible, OR replace if we have full translation.
            // Since I only have the "Button Text", I will try to splice it in.
            // BUT TR changed structure significantly.
            // I will assume for now I should only update the BUTTON style and Q15 Q16 Q20 Q22 Q31-36 text/style.

            // Let's replace the link with button style in Q14.
            // Search for <a href="?tab=tab7" ...>...</a>
            let newText = sub.text.replace(/<a href="\?tab=tab7".*?<\/a>/,
                `<a href="?tab=tab7" target="_blank" style="display: block; width: 100%; padding: 15px; margin: 15px 0; text-align: center; background: linear-gradient(135deg, #00b09b, #96c93d); color: white; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 1.1em; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.2s;">${t.q14_btn}</a>`
            );
            sub.text = newText;
        };

        const updateQ15 = (sub) => {
            // Replace <ol> ... </ol> with <ul>...</ul> and bullets
            // And update the bullet item titles if needed, but the user said "Use translations".
            // I will just change <ol> to <ul> and <li data-list="ordered"> to <li data-list="bullet">
            // And remove numbering.
            let newText = sub.text.replaceAll('<ol>', '<ul>').replaceAll('</ol>', '</ul>');
            newText = newText.replaceAll('data-list="ordered"', 'data-list="bullet"');
            // This is a structural change, preserves text.
            sub.text = newText;
        };

        // ... logic for other questions ...
        // Since I promised to match TR structure exactly, I should actually use the TR HTML template and inject localized text.
        // That is safer for layout.
    });

    // Actually, rewriting completely with templates is better to ensure "highlight kısımları aynı şekilde".
    // I will write a better logic in the next file write for the full loop.
});
