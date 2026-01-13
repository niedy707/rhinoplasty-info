
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentPath = path.join(__dirname, 'src', 'data', 'content.js');

const tab9UrlText = {
    en: "For more detailed information, please visit:",
    de: "Für weitere detaillierte Informationen besuchen Sie bitte:",
    es: "Para obtener información más detallada, visite:",
    ru: "Для получения более подробной информации, пожалуйста, посетите:",
    fr: "Pour plus d'informations détaillées, veuillez visiter :",
    it: "Per informazioni più dettagliate, visitare:",
    ro: "Pentru informații mai detaliate, vă rugăm să vizitați:",
    hu: "További részletes információkért kérjük, látogasson el:",
    pl: "Aby uzyskać bardziej szczegółowe informacje, odwiedź:",
    md: "Pentru informații mai detaliate, vă rugăm să vizitați:"
};

const tab9Content = {
    en: {
        title: "Rhinoplasty | Post-Operative Information",
        intro_Rx: "A prescription containing the medications you need to use upon discharge from the hospital has been given to you.",
        intro_Start: "All medications will be started from the first day after surgery while the silicone stent is in the nose.",
        box_title: "MEDICATION USE:",
        drugs: [
            { name: "Antibiotic pills:", tags: "Cefaks, Cipro, Klindan, Macrol, Augmentin etc.", desc: "Depending on the procedure performed and your medical condition, 1 or 2 of these medications may be prescribed to you. Use these medications regularly twice a day (morning and evening) for 1 week." },
            { name: "Allergy pill:", tags: "Bilaxten, Aerius, Desmont, Levmont", desc: "You should use 1 of these medications. The purpose of this medication is to reduce the feeling of discharge and congestion in the nose, and the sneezing that may occur accordingly. If these complaints are very high, you can take 2 on the first day." },
            { name: "Painkiller:", tags: "Arveles or Mejezik", desc: "Use this pill 3 times a day for 4 days. If you have a lot of pain, you can take up to 4 a day. More pain is not an expected situation. In this case, consult your doctor." },
            { name: "Ointment:", tags: "Thiocilline eye ointment or Terramycin", desc: "Apply the eye ointment to the stitch area at the tip of the nose, not into the eye. Apply 3-4 times a day for 2 weeks with your clean finger or a cotton swab." },
            { name: "Nasal decongestant spray:", tags: "Otrivine", desc: "Use for 5 days. (Into the tampon) Do not continue after 5 days." },
            { name: "Nasal washing:", tags: "SinusRinse, NaosRinse, Sinomarine, Quixx etc.", desc: "You can use ocean water washing medications in spray or bottle form to wash the inside of the nose. While those in bottle form provide a more voluminous and effective cleaning, those in spray form are easy to use and portable, but their cleaning effect is less. The purpose of washing is not to completely clean the inside of the nose, but to ensure the cleaning of accumulated secretions, blood and clots. After the washing process, it is sufficient to blow the breath out through the nose instead of blowing your nose, and wipe the secretions coming out with a napkin." },
            { name: "Nasal moistening spray:", desc: "The purpose of this spray is to reduce dryness in the nose and accelerate the healing of intranasal tissues with its moisturizing effect and vitamin support. It must be sprayed into both nostrils after washing." }
        ],
        control_title: "POST-OPERATIVE CONTROL PROCESS:",
        control_text1: "Your post-operative controls will be done 6-8 days later. The control day and time will be notified to you upon discharge or after discharge.",
        ice_text: "After discharge, as in the hospital (3 days - 72 hours after surgery), keep your head elevated and apply ice for 10-15 minutes every hour.",
        rest_text: "Avoid heavy and strenuous exercises during your rest at home. If possible, spend your time sitting or standing. However, when you want to lie down and rest, you should keep your head up 45 degrees.",
        bath_text: "There are no restrictions on having a bath. Only if you need to take a bath on the first day, get help from a relative. While taking a bath, be careful not to get water on your face, preferably wash your hair backwards.",
        diet_text: "There are no restrictions in your diet other than very hot things.",
        faint_text: "Come to the control examination one week later with a light breakfast. Although the tampon removal process is not painful, a drop in blood pressure and fainting can be seen in some patients due to the effect of anxiety and fear. You should not come hungry to avoid this situation.",
        tape_text: "After the cast-tape-stitch-stent is removed, your nose will be taped again and the tapes will be removed at the end of the second week."
    },
    de: {
        title: "Rhinoplastik | Postoperative Informationen",
        intro_Rx: "Ein Rezept mit den Medikamenten, die Sie nach der Entlassung aus dem Krankenhaus einnehmen müssen, wurde Ihnen ausgehändigt.",
        intro_Start: "Mit der Einnahme aller Medikamente wird ab dem ersten Tag nach der Operation begonnen, solange sich der Silikonstent in der Nase befindet.",
        box_title: "MEDIKAMENTENEINNAHME:",
        drugs: [
            { name: "Antibiotika-Tabletten:", tags: "Cefaks, Cipro, Klindan, Macrol, Augmentin usw.", desc: "Je nach durchgeführtem Eingriff und Ihrem medizinischen Zustand können Ihnen 1 oder 2 dieser Medikamente verschrieben werden. Nehmen Sie diese Medikamente regelmäßig zweimal täglich (morgens und abends) für 1 Woche ein." },
            { name: "Allergietablette:", tags: "Bilaxten, Aerius, Desmont, Levmont", desc: "Sie sollten 1 dieser Medikamente einnehmen. Der Zweck dieses Medikaments besteht darin, das Gefühl von Ausfluss und Verstopfung in der Nase sowie das dementsprechend auftretende Niesen zu reduzieren. Wenn diese Beschwerden sehr stark sind, können Sie am ersten Tag 2 Stück einnehmen." },
            { name: "Schmerzmittel:", tags: "Arveles oder Mejezik", desc: "Nehmen Sie diese Tablette 4 Tage lang 3-mal täglich ein. Bei starken Schmerzen können Sie bis zu 4 Stück täglich einnehmen. Stärkere Schmerzen sind nicht zu erwarten. Wenden Sie sich in diesem Fall an Ihren Arzt." },
            { name: "Salbe:", tags: "Thiocilline Augensalbe oder Terramycin", desc: "Tragen Sie die Augensalbe auf den Nahtbereich an der Nasenspitze auf, nicht in das Auge. 2 Wochen lang 3-4 mal täglich mit dem sauberen Finger oder einem Wattestäbchen auftragen." },
            { name: "Nasenöffnendes Spray:", tags: "Otrivine", desc: "5 Tage lang anwenden. (In den Tampon) Nach 5 Tagen nicht mehr anwenden." },
            { name: "Nasenspülung:", tags: "SinusRinse, NaosRinse, Sinomarine, Quixx usw.", desc: "Sie können Meerwasser-Spüllösungen in Spray- oder Flaschenform verwenden, um das Innere der Nase zu waschen. Während solche in Flaschenform eine voluminösere und effektivere Reinigung bieten, sind solche in Sprayform einfach zu verwenden und tragbar, aber ihre Reinigungswirkung ist geringer. Der Zweck des Waschens besteht nicht darin, das Innere der Nase vollständig zu reinigen, sondern die Reinigung von angesammelten Sekreten, Blut und Gerinnseln sicherzustellen. Nach dem Waschvorgang reicht es aus, den Atem durch die Nase auszublasen, anstatt die Nase zu putzen, und die austretenden Sekrete mit einer Serviette abzuwischen." },
            { name: "Nasenbefeuchtungsspray:", desc: "Der Zweck dieses Sprays ist es, die Trockenheit in der Nase zu reduzieren und die Heilung des intranasalen Gewebes durch seine feuchtigkeitsspendende Wirkung und Vitaminunterstützung zu beschleunigen. Es muss nach dem Waschen in beide Nasenlöcher gesprüht werden." }
        ],
        control_title: "POSTOPERATIVER KONTROLLPROZESS:",
        control_text1: "Ihre postoperativen Kontrollen erfolgen 6-8 Tage später. Tag und Uhrzeit der Kontrolle werden Ihnen bei oder nach der Entlassung mitgeteilt.",
        ice_text: "Halten Sie nach der Entlassung wie im Krankenhaus (3 Tage - 72 Stunden nach der Operation) den Kopf hoch und legen Sie stündlich 10-15 Minuten lang Eis auf.",
        rest_text: "Vermeiden Sie während Ihrer Ruhezeit zu Hause schwere und anstrengende Übungen. Verbringen Sie Ihre Zeit nach Möglichkeit im Sitzen oder Stehen. Wenn Sie sich jedoch hinlegen und ausruhen möchten, sollten Sie Ihren Kopf 45 Grad hoch halten.",
        bath_text: "Es gibt keine Einschränkungen beim Baden. Nur wenn Sie am ersten Tag baden müssen, lassen Sie sich von einem Angehörigen helfen. Achten Sie beim Baden darauf, dass kein Wasser in Ihr Gesicht gelangt, waschen Sie Ihre Haare vorzugsweise nach hinten.",
        diet_text: "Es gibt keine Einschränkungen in Ihrer Ernährung außer sehr heißen Dingen.",
        faint_text: "Kommen Sie eine Woche später zur Kontrolluntersuchung mit einem leichten Frühstück. Obwohl der Tampon-Entfernungsprozess nicht schmerzhaft ist, kann bei einigen Patienten aufgrund von Angst und Furcht ein Blutdruckabfall und Ohnmacht auftreten. Sie sollten nicht hungrig kommen, um diese Situation zu vermeiden.",
        tape_text: "Nachdem der Gips-Band-Naht-Stent entfernt wurde, wird Ihre Nase erneut getapet und die Bänder werden am Ende der zweiten Woche entfernt."
    }
};

const tab8Trans = {
    en: {
        q14_btn: "💊 CLICK HERE FOR DETAILED INFO ON HOW TO USE MEDICATIONS",
        q16_freq: "After the 2nd week, continue washing 3-5 times a day for another 2-4 weeks. You can increase or decrease the frequency according to your needs.",
        q16_caution: "You are not required to continue these 2 medications when the 1-month period is completed. However, there is no harm in continuing if you feel the need. (Continue if there is still crusting, dryness, etc. in the nose)",
        q20_text: 'Do not try to prevent the urge to sneeze. However, it is very important to sneeze <strong>with your mouth open</strong> so that the pressure does not damage your nose.',
        q20_warn: "Sneezing with your mouth closed can increase intranasal pressure and cause bleeding or tissue damage.",
        q22_text_1: 'You should <strong>not blow your nose for the first 1 month</strong> after surgery. During this time, you should clean your nose with recommended ocean water sprays or washing kits.',
        q22_text_2: "Blowing your nose can increase intranasal pressure and cause bleeding and damage to healing tissues.",
        q22_text_3: '<strong>You can blow your nose gently after the 1st month.</strong>',
        q31_text: '<p><strong style="background-color: rgb(255, 255, 0);">It is recommended to rest for 7 days after surgery.</strong></p><p>A rest report will be issued upon your request. We can help patients who request a longer report for up to 10 days.</p><p><br></p><p>If you have to do desk jobs, paperwork/screen work, you can do them in the first week even with the tampon and cast on your nose. However, we recommend that you rest.</p><p><br></p><p>During this first week, it is important to consume plenty of fluids, take steps, and rest with your head elevated.</p>',
        q32_text: '<p>You can gently clean your skin after the tapes on the nose are removed. However, it is recommended to wait <strong>at least 2 months</strong> for procedures such as professional skin care, peeling or blackhead cleaning.</p><p><br></p><p>These procedures can damage the nasal skin as they may apply pressure, so it is inconvenient to perform them in the early period.</p><p><br></p><p>After the 2nd month, you can have skin care provided that no hard pressure is applied to your nose.</p>',
        q33_text: '<p>You should protect your nose from direct sunlight and high heat (solarium, sauna, hammam) for the first <strong>2 months</strong> after surgery.</p><p><br></p><p>Sunlight can cause increased edema and permanent color changes (staining) in healing tissues.</p><p><br></p><p>If you have to go out in the sun, you must definitely use high factor (50+ SPF) sunscreen and wear a hat.</p>',
        q36_text: '<p>Yes, you can have rhinoplasty surgery.</p><p><br></p><p>The reason we forbid the use of glasses after surgery is that the load on the broken/cut bones may cause healing problems. Therefore, we recommend our patients to use contact lenses for 4-6 months after surgery.</p><p><br></p><p>If there is no solution other than glasses due to the situation you described in the question, only filing and aesthetic procedures for the tip of the nose can be performed without breaking the bone.</p><p><br></p><p>In this case, you can use glasses even while in the hospital immediately after the surgery.</p>'
    },
    de: {
        q14_btn: "💊 KLICKEN SIE HIER FÜR DETAILLIERTE INFOS ZUR ANWENDUNG VON MEDIKAMENTEN",
        q16_freq: "Fahren Sie nach der 2. Woche weitere 2-4 Wochen lang mit 3-5 Mal täglichem Waschen fort. Sie können die Häufigkeit je nach Bedarf erhöhen oder verringern.",
        q16_caution: "Sie sind nicht verpflichtet, diese 2 Medikamente nach Ablauf der 1-monatigen Frist weiter einzunehmen. Es schadet jedoch nicht, wenn Sie dies tun möchten. (Fahren Sie fort, wenn es immer noch Verkrustungen, Trockenheit usw. in der Nase gibt)",
        q20_text: 'Versuchen Sie nicht, den Niesreiz zu unterdrücken. Es ist jedoch sehr wichtig, <strong>mit offenem Mund</strong> zu niesen, damit der Druck Ihre Nase nicht beschädigt.',
        q20_warn: "Niesen mit geschlossenem Mund kann den intranasalen Druck erhöhen und zu Blutungen oder Gewebeschäden führen.",
        q22_text_1: 'Sie sollten <strong>Ihre Nase im ersten Monat</strong> nach der Operation nicht schnäuzen. In dieser Zeit sollten Sie Ihre Nase mit empfohlenen Meerwassersprays oder Spülkits reinigen.',
        q22_text_2: "Schnäuzen kann den intranasalen Druck erhöhen und zu Blutungen und Schäden an heilendem Gewebe führen.",
        q22_text_3: '<strong>Nach dem 1. Monat können Sie Ihre Nase sanft schnäuzen.</strong>',
        q31_text: '<p><strong style="background-color: rgb(255, 255, 0);">Es wird empfohlen, sich nach der Operation 7 Tage lang auszuruhen.</strong></p><p>Auf Anfrage wird ein Ruhebericht ausgestellt. Wir können Patienten, die einen längeren Bericht wünschen, bis zu 10 Tage lang helfen.</p><p><br></p><p>Wenn Sie Schreibtischjobs, Papierkram/Bildschirmarbeit erledigen müssen, können Sie dies in der ersten Woche tun, auch wenn Tampon und Gips auf der Nase sind. Wir empfehlen Ihnen jedoch, sich auszuruhen.</p><p><br></p><p>In dieser ersten Woche ist es wichtig, viel Flüssigkeit zu sich zu nehmen, Schritte zu machen und mit erhöhtem Kopf zu ruhen.</p>',
        q32_text: '<p>Sie können Ihre Haut sanft reinigen, nachdem die Bänder an der Nase entfernt wurden. Es wird jedoch empfohlen, für Verfahren wie professionelle Hautpflege, Peeling oder Mitesserreinigung <strong>mindestens 2 Monate</strong> zu warten.</p><p><br></p><p>Diese Verfahren können die Nasenhaut schädigen, da sie Druck ausüben können, daher ist es unpraktisch, sie in der frühen Phase durchzuführen.</p><p><br></p><p>Nach dem 2. Monat können Sie sich einer Hautpflege unterziehen, sofern kein starker Druck auf Ihre Nase ausgeübt wird.</p>',
        q33_text: '<p>Sie sollten Ihre Nase in den ersten <strong>2 Monaten</strong> nach der Operation vor direkter Sonneneinstrahlung und hoher Hitze (Solarium, Sauna, Hamam) schützen.</p><p><br></p><p>Sonnenlicht kann zu erhöhten Ödemen und dauerhaften Farbveränderungen (Flecken) im heilenden Gewebe führen.</p><p><br></p><p>Wenn Sie in die Sonne gehen müssen, müssen Sie unbedingt Sonnencreme mit hohem Lichtschutzfaktor (50+ SPF) verwenden und einen Hut tragen.</p>',
        q36_text: '<p>Ja, Sie können sich einer Nasenkorrektur unterziehen.</p><p><br></p><p>Der Grund, warum wir das Tragen einer Brille nach der Operation verbieten, ist, dass die Belastung der gebrochenen/geschnittenen Knochen zu Heilungsproblemen führen kann. Daher empfehlen wir unseren Patienten, 4-6 Monate nach der Operation Kontaktlinsen zu tragen.</p><p><br></p><p>Wenn es aufgrund der von Ihnen in der Frage beschriebenen Situation keine andere Lösung als eine Brille gibt, können nur Feilen und ästhetische Eingriffe an der Nasenspitze durchgeführt werden, ohne den Knochen zu brechen.</p><p><br></p><p>In diesem Fall können Sie auch im Krankenhaus direkt nach der Operation eine Brille tragen.</p>'
    }
};

fs.readFile(contentPath, 'utf8', (err, data) => {
    if (err) throw err;

    const contentStr = data.replace('export const content = ', '').trim().replace(/;$/, '');
    let content = JSON.parse(contentStr);

    ['en', 'de', 'es', 'ru', 'fr', 'it', 'ro', 'hu', 'pl', 'md'].forEach(lang => {
        if (!content[lang]) return;
        const langTabs = content[lang].tabs;

        const lTab9 = langTabs.find(t => t.id === 'tab9');
        if (lTab9 && lTab9.content.length > 0) {
            const tData = tab9Content[lang] || tab9Content['en'];

            let newHtml = \`<p>\${lang === 'tr' ? 'Daha detaylı bilgiler için lütfen:' : (tab9UrlText[lang] || tab9UrlText['en'])} <a href="https://r.ibrahimyagci.com" target="_blank">r.ibrahimyagci.com</a> \${(lang !== 'tr') ? 'or <a href="https://rhinoplasty.ibrahimyagci.com" target="_blank">rhinoplasty.ibrahimyagci.com</a>' : ''}</p><p><br></p>\`;
          newHtml += \`<p>\${tData.intro_Rx}</p><p>\${tData.intro_Start}</p><p><br></p>\`;
          
          newHtml += \`<div class='modern-green-box'><p><strong>\${tData.box_title}</strong></p><ul>\`;
          tData.drugs.forEach(d => {
             newHtml += \`<li><div><strong>\${d.name}</strong> \${d.tags ? \`<span class='drug-tag'>\${d.tags}</span>\` : ''}</div>\${d.desc}</li>\`; 
          });
          newHtml += \`</ul></div><p><br></p>\`;
          
          newHtml += \`<p><strong>\${tData.control_title}</strong></p><p>\${tData.control_text1}</p><p><br></p>\`;
          newHtml += \`<p>\${tData.ice_text}</p><p>\${tData.rest_text}</p><p><br></p>\`;
          newHtml += \`<p>\${tData.bath_text}</p><p><br></p><p>\${tData.diet_text}</p><p><br></p>\`;
          newHtml += \`<p>\${tData.faint_text}</p><p><br></p><p>\${tData.tape_text}</p>\`;

          lTab9.content[0].text = newHtml;
      }
      
      const lTab8 = langTabs.find(t => t.id === 'tab8');
      if (lTab8) {
         const subs = lTab8.content[0].subsections;
         const qTrans = tab8Trans[lang] || tab8Trans['en'];
         
         if (subs[13]) {
             subs[13].text = subs[13].text.replace(/<a href="\?tab=tab7".*?<\/a>/, 
                \`<a href="?tab=tab7" target="_blank" style="display: block; width: 100%; padding: 15px; margin: 15px 0; text-align: center; background: linear-gradient(135deg, #00b09b, #96c93d); color: white; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 1.1em; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.2s;">\${qTrans.q14_btn}</a>\`
             );
         }
         if (subs[14]) {
             subs[14].text = subs[14].text.replaceAll('<ol>', '<ul>').replaceAll('</ol>', '</ul>').replaceAll('data-list="ordered"', 'data-list="bullet"');
         }
         
         if (subs[15]) {
             subs[15].text = \`<p>This routine suggests washing and moisturizing for 1 month...</p><p>\${qTrans.q16_freq}</p><p><br></p><blockquote>\${qTrans.q16_caution}</blockquote>\`;
         }
         
         if (subs[19]) {
             subs[19].text = \`<p>\${qTrans.q20_text}</p><blockquote>\${qTrans.q20_warn}</blockquote>\`;
         }
         
         if (subs[21]) {
             subs[21].text = \`<p>\${qTrans.q22_text_1}</p><p><br></p><p>\${qTrans.q22_text_2}</p><p><br></p><p>\${qTrans.q22_text_3}</p>\`;
         }
         
         if (subs[30]) {
             subs[30].text = qTrans.q31_text;
         }

          if (subs[31]) {
             subs[31].text = qTrans.q32_text;
         }
         
          if (subs[32]) {
             subs[32].text = qTrans.q33_text;
         }
         
          if (subs[35]) {
             subs[35].text = qTrans.q36_text;
         }
      }
  });

  const newContent = 'export const content = ' + JSON.stringify(content, null, 2) + ';';
  fs.writeFileSync(contentPath, newContent);
  console.log('Successfully updated content.js with Tab 8 & 9 translations.');
});
