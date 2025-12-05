import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentPath = path.join(__dirname, 'src/data/content.js');
let content = fs.readFileSync(contentPath, 'utf8');

const newFAQ = {
    id: "taping_duration",
    tr: {
        question: "Ameliyat sonrası burun bantlaması ne kadar süre ile yapmalıyım?",
        answer: `<p>Ameliyat sonrası ilk hafta kontrolde burundaki tampon alınır, burun üzerindeki alçı ve bantlar çıkartılır.</p>
<p>Doktorunuz tarafından burnunuz yeniden bantlanır.</p>
<p>Hasta 2. hafta kontrolüne gelebilecek ise 2. hafta hastanın bantları tamamen çıkartılır ve hastaya nasıl bir bantlama yapması gerektiği anlatılır.</p>
<p>Eğer hasta 2. hafta kontrole fiziki olarak gelemeyecek ise, hastaya nasıl bir bantlama yapması gerektiği anlatılır.</p>
<p>Her koşulda hasta ilk 2 haftalık sürede (14 gün) burundaki bantları çıkartmamalıdır.</p>
<p>Bu 14 günlük sürede banyo sırasında burun ıslanmamalıdır.</p>
<p>Ameliyatın 14. gününde, hasta fiziken kontrole gelebiliyor ise kontrol muayenesi sonrası, kontrole gelemiyor ise evde kendisi burun üzerindeki bantlar dahil yıkar, ıslanan bantları çıkartır ve kendi burun bantlamasına (self-taping) başlar.</p>
<p>Rutin öneri 14. gün sonrası burnun 1 ay süre ile gün boyu (24 sa) bantlanmasıdır.</p>
<p>Burun cildinin üzerindeki bandın 2 ana amacı vardır: 1 ödemin daha hızlı geçmesi, 2 masajın daha rahat ve konforlu yapılması.</p>
<p>Hastanın bu self-taping süresinde her gün bantları yenilemesine gerek yoktur.</p>
<p>Banyo sırasında ıslansa da sonrasında kurulandığında eğer bantlar kirli gözükmüyor ve gevşemiş değil ise sadece kurulanması yeterlidir. Ancak bantlar sıkı durmuyor ya da kirli duruyor ise çıkartılıp yenilenmesi uygundur.</p>
<p>1 aylık bu bantlama sonrasında (Ameliyatın 6. haftası) hastaların +1 ay daha sadece gece bantlaması yapması yararlı olacaktır.</p>
<p>Bu bantlamaların kurallara uygun şekilde ve süre ile yapılması iyileşmeyi daha hızlı gerçekleştirecek ve burnu istenen şekle ulaştıracaktır.</p>`
    },
    en: {
        question: "How long should I tape my nose after surgery?",
        answer: `<p>In the first week check-up after surgery, the packing in the nose is removed, and the cast and tapes on the nose are removed.</p>
<p>Your nose is re-taped by your doctor.</p>
<p>If the patient can come to the 2nd week check-up, the patient's tapes are completely removed in the 2nd week and the patient is told how to tape.</p>
<p>If the patient cannot come to the check-up physically in the 2nd week, the patient is told how to tape.</p>
<p>In any case, the patient should not remove the tapes on the nose in the first 2 weeks (14 days).</p>
<p>During this 14-day period, the nose should not get wet during the bath.</p>
<p>On the 14th day of the surgery, if the patient can come to the check-up physically, after the control examination, if he/she cannot come to the check-up, he/she washes the nose including the tapes on the nose at home, removes the wet tapes and starts his/her own nose taping (self-taping).</p>
<p>The routine recommendation is to tape the nose for 24 hours a day for 1 month after the 14th day.</p>
<p>The tape on the nasal skin has 2 main purposes: 1 edema goes away faster, 2 massage is done more comfortably.</p>
<p>The patient does not need to renew the tapes every day during this self-taping period.</p>
<p>Even if it gets wet during the bath, if the tapes do not look dirty and are not loose when dried afterwards, it is sufficient to just dry them. However, if the tapes do not stand tight or look dirty, it is appropriate to remove and renew them.</p>
<p>After this 1-month taping (6th week of surgery), it will be beneficial for patients to tape only at night for +1 more month.</p>
<p>Performing these tapings in accordance with the rules and for the duration will make the recovery faster and bring the nose to the desired shape.</p>`
    },
    de: {
        question: "Wie lange sollte ich meine Nase nach der Operation tapen?",
        answer: `<p>Bei der ersten Kontrolluntersuchung eine Woche nach der Operation werden die Tamponade in der Nase sowie der Gips und die Tapes auf der Nase entfernt.</p>
<p>Ihre Nase wird von Ihrem Arzt neu getapt.</p>
<p>Wenn der Patient zur Kontrolle in der 2. Woche kommen kann, werden die Tapes des Patienten in der 2. Woche vollständig entfernt und dem Patienten wird erklärt, wie er tapen soll.</p>
<p>Wenn der Patient in der 2. Woche nicht physisch zur Kontrolle kommen kann, wird dem Patienten erklärt, wie er tapen soll.</p>
<p>In jedem Fall sollte der Patient die Tapes auf der Nase in den ersten 2 Wochen (14 Tage) nicht entfernen.</p>
<p>Während dieses Zeitraums von 14 Tagen sollte die Nase beim Baden nicht nass werden.</p>
<p>Am 14. Tag der Operation, wenn der Patient physisch zur Kontrolle kommen kann, nach der Kontrolluntersuchung, wenn er/sie nicht zur Kontrolle kommen kann, wäscht er/sie die Nase einschließlich der Tapes auf der Nase zu Hause, entfernt die nassen Tapes und beginnt mit dem eigenen Nasentaping (Self-Taping).</p>
<p>Die routinemäßige Empfehlung ist, die Nase nach dem 14. Tag 1 Monat lang 24 Stunden am Tag zu tapen.</p>
<p>Das Tape auf der Nasenhaut hat 2 Hauptzwecke: 1. Ödeme gehen schneller zurück, 2. Massage wird bequemer und angenehmer durchgeführt.</p>
<p>Der Patient muss die Tapes während dieser Self-Taping-Phase nicht jeden Tag erneuern.</p>
<p>Auch wenn es beim Baden nass wird, reicht es aus, sie einfach zu trocknen, wenn die Tapes danach nicht schmutzig aussehen und nicht locker sind. Wenn die Tapes jedoch nicht fest sitzen oder schmutzig aussehen, ist es angebracht, sie zu entfernen und zu erneuern.</p>
<p>Nach diesem 1-monatigen Taping (6. Woche der Operation) ist es für Patienten vorteilhaft, für +1 weiteren Monat nur nachts zu tapen.</p>
<p>Die Durchführung dieser Tapings gemäß den Regeln und für die Dauer wird die Genesung beschleunigen und die Nase in die gewünschte Form bringen.</p>`
    },
    es: {
        question: "¿Cuánto tiempo debo vendarme la nariz después de la cirugía?",
        answer: `<p>En el control de la primera semana después de la cirugía, se retira el taponamiento de la nariz y se retiran el yeso y las cintas de la nariz.</p>
<p>Su médico vuelve a vendar su nariz.</p>
<p>Si el paciente puede acudir al control de la segunda semana, las cintas del paciente se retiran por completo en la segunda semana y se le explica al paciente cómo vendarse.</p>
<p>Si el paciente no puede acudir físicamente al control en la segunda semana, se le explica al paciente cómo vendarse.</p>
<p>En cualquier caso, el paciente no debe retirarse las cintas de la nariz en las primeras 2 semanas (14 días).</p>
<p>Durante este período de 14 días, la nariz no debe mojarse durante el baño.</p>
<p>En el día 14 de la cirugía, si el paciente puede acudir físicamente al control, después del examen de control, si no puede acudir al control, se lava la nariz incluyendo las cintas en la nariz en casa, se retira las cintas mojadas y comienza su propio vendaje nasal (auto-vendaje).</p>
<p>La recomendación de rutina es vendar la nariz las 24 horas del día durante 1 mes después del día 14.</p>
<p>La cinta en la piel nasal tiene 2 propósitos principales: 1 el edema desaparece más rápido, 2 el masaje se realiza de manera más cómoda.</p>
<p>El paciente no necesita renovar las cintas todos los días durante este período de auto-vendaje.</p>
<p>Incluso si se moja durante el baño, si las cintas no se ven sucias y no están sueltas cuando se secan después, es suficiente con secarlas. Sin embargo, si las cintas no se mantienen apretadas o se ven sucias, es apropiado retirarlas y renovarlas.</p>
<p>Después de este vendaje de 1 mes (sexta semana de cirugía), será beneficioso para los pacientes vendarse solo por la noche durante +1 mes más.</p>
<p>Realizar estos vendajes de acuerdo con las reglas y durante la duración hará que la recuperación sea más rápida y llevará la nariz a la forma deseada.</p>`
    },
    ru: {
        question: "Как долго я должен клеить пластырь на нос после операции?",
        answer: `<p>На осмотре в первую неделю после операции удаляются тампоны из носа, а также снимаются гипс и пластыри с носа.</p>
<p>Ваш врач снова заклеивает ваш нос пластырем.</p>
<p>Если пациент может прийти на осмотр на 2-й неделе, пластыри пациента полностью снимаются на 2-й неделе, и пациенту объясняют, как клеить пластырь.</p>
<p>Если пациент не может прийти на осмотр физически на 2-й неделе, пациенту объясняют, как клеить пластырь.</p>
<p>В любом случае пациент не должен снимать пластыри с носа в первые 2 недели (14 дней).</p>
<p>В течение этого 14-дневного периода нос не должен намокать во время купания.</p>
<p>На 14-й день операции, если пациент может прийти на осмотр физически, после контрольного осмотра, если он/она не может прийти на осмотр, он/она моет нос, включая пластыри на носу, дома, снимает мокрые пластыри и начинает собственное оклеивание носа (самостоятельное оклеивание).</p>
<p>Обычная рекомендация - клеить пластырь на нос 24 часа в сутки в течение 1 месяца после 14-го дня.</p>
<p>Пластырь на коже носа имеет 2 основные цели: 1 отек проходит быстрее, 2 массаж делается более комфортно.</p>
<p>Пациенту не нужно обновлять пластыри каждый день в этот период самостоятельного оклеивания.</p>
<p>Даже если он намокнет во время купания, если пластыри не выглядят грязными и не отклеились после высыхания, достаточно просто высушить их. Однако, если пластыри не держатся плотно или выглядят грязными, целесообразно снять и обновить их.</p>
<p>После этого 1-месячного оклеивания (6-я неделя операции) пациентам будет полезно клеить пластырь только на ночь еще +1 месяц.</p>
<p>Выполнение этих оклеиваний в соответствии с правилами и в течение указанного времени ускорит выздоровление и придаст носу желаемую форму.</p>`
    },
    fr: {
        question: "Combien de temps dois-je mettre des pansements sur mon nez après l'opération ?",
        answer: `<p>Lors du contrôle de la première semaine après la chirurgie, la mèche dans le nez est retirée, et le plâtre et les pansements sur le nez sont retirés.</p>
<p>Votre nez est de nouveau bandé par votre médecin.</p>
<p>Si le patient peut venir au contrôle de la 2ème semaine, les pansements du patient sont complètement retirés la 2ème semaine et on explique au patient comment faire le pansement.</p>
<p>Si le patient ne peut pas venir physiquement au contrôle la 2ème semaine, on explique au patient comment faire le pansement.</p>
<p>Dans tous les cas, le patient ne doit pas retirer les pansements sur le nez au cours des 2 premières semaines (14 jours).</p>
<p>Pendant cette période de 14 jours, le nez ne doit pas être mouillé pendant le bain.</p>
<p>Le 14ème jour de l'opération, si le patient peut venir physiquement au contrôle, après l'examen de contrôle, s'il ne peut pas venir au contrôle, il lave le nez y compris les pansements sur le nez à la maison, retire les pansements mouillés et commence son propre pansement nasal (auto-pansement).</p>
<p>La recommandation habituelle est de bander le nez 24 heures sur 24 pendant 1 mois après le 14ème jour.</p>
<p>Le pansement sur la peau nasale a 2 objectifs principaux : 1 l'œdème disparaît plus vite, 2 le massage se fait plus confortablement.</p>
<p>Le patient n'a pas besoin de renouveler les pansements tous les jours pendant cette période d'auto-pansement.</p>
<p>Même s'il est mouillé pendant le bain, si les pansements n'ont pas l'air sales et ne sont pas lâches une fois séchés, il suffit de les sécher. Cependant, si les pansements ne tiennent pas bien ou ont l'air sales, il convient de les retirer et de les renouveler.</p>
<p>Après ce pansement d'un mois (6ème semaine de chirurgie), il sera bénéfique pour les patients de ne faire des pansements que la nuit pendant +1 mois supplémentaire.</p>
<p>La réalisation de ces pansements conformément aux règles et pour la durée indiquée rendra la récupération plus rapide et amènera le nez à la forme souhaitée.</p>`
    },
    it: {
        question: "Per quanto tempo devo mettere i cerotti sul naso dopo l'intervento?",
        answer: `<p>Al controllo della prima settimana dopo l'intervento, il tampone nel naso viene rimosso e il gesso e i cerotti sul naso vengono rimossi.</p>
<p>Il naso viene nuovamente incerottato dal medico.</p>
<p>Se il paziente può venire al controllo della 2a settimana, i cerotti del paziente vengono completamente rimossi nella 2a settimana e al paziente viene spiegato come mettere i cerotti.</p>
<p>Se il paziente non può venire fisicamente al controllo nella 2a settimana, al paziente viene spiegato come mettere i cerotti.</p>
<p>In ogni caso, il paziente non deve rimuovere i cerotti sul naso nelle prime 2 settimane (14 giorni).</p>
<p>Durante questo periodo di 14 giorni, il naso non deve bagnarsi durante il bagno.</p>
<p>Il 14° giorno dell'intervento, se il paziente può venire fisicamente al controllo, dopo la visita di controllo, se non può venire al controllo, lava il naso compresi i cerotti sul naso a casa, rimuove i cerotti bagnati e inizia il proprio bendaggio nasale (self-taping).</p>
<p>La raccomandazione di routine è di incerottare il naso 24 ore al giorno per 1 mese dopo il 14° giorno.</p>
<p>Il cerotto sulla pelle nasale ha 2 scopi principali: 1 l'edema scompare più velocemente, 2 il massaggio viene eseguito in modo più comodo.</p>
<p>Il paziente non ha bisogno di rinnovare i cerotti ogni giorno durante questo periodo di self-taping.</p>
<p>Anche se si bagna durante il bagno, se i cerotti non sembrano sporchi e non sono allentati quando vengono asciugati in seguito, è sufficiente asciugarli. Tuttavia, se i cerotti non stanno stretti o sembrano sporchi, è opportuno rimuoverli e rinnovarli.</p>
<p>Dopo questo bendaggio di 1 mese (6a settimana di chirurgia), sarà utile per i pazienti incerottare solo di notte per +1 altro mese.</p>
<p>L'esecuzione di questi bendaggi in conformità con le regole e per la durata renderà il recupero più veloce e porterà il naso alla forma desiderata.</p>`
    },
    ro: {
        question: "Cât timp trebuie să îmi bandajez nasul după operație?",
        answer: `<p>La controlul din prima săptămână după operație, tamponul din nas este îndepărtat, iar ghipsul și benzile de pe nas sunt îndepărtate.</p>
<p>Nasul dumneavoastră este re-bandajat de către medicul dumneavoastră.</p>
<p>Dacă pacientul poate veni la controlul din a 2-a săptămână, benzile pacientului sunt complet îndepărtate în a 2-a săptămână și pacientului i se explică cum să se bandajeze.</p>
<p>Dacă pacientul nu poate veni fizic la control în a 2-a săptămână, pacientului i se explică cum să se bandajeze.</p>
<p>În orice caz, pacientul nu trebuie să îndepărteze benzile de pe nas în primele 2 săptămâni (14 zile).</p>
<p>În această perioadă de 14 zile, nasul nu trebuie să se ude în timpul băii.</p>
<p>În a 14-a zi de la operație, dacă pacientul poate veni fizic la control, după examinarea de control, dacă nu poate veni la control, își spală nasul inclusiv benzile de pe nas acasă, îndepărtează benzile umede și începe propriul bandaj nazal (auto-bandajare).</p>
<p>Recomandarea de rutină este de a bandaja nasul 24 de ore pe zi timp de 1 lună după a 14-a zi.</p>
<p>Banda de pe pielea nazală are 2 scopuri principale: 1 edemul dispare mai repede, 2 masajul se face mai confortabil.</p>
<p>Pacientul nu trebuie să reînnoiască benzile în fiecare zi în această perioadă de auto-bandajare.</p>
<p>Chiar dacă se udă în timpul băii, dacă benzile nu arată murdare și nu sunt slăbite când sunt uscate ulterior, este suficient doar să le uscați. Cu toate acestea, dacă benzile nu stau strânse sau arată murdare, este adecvat să le îndepărtați și să le reînnoiți.</p>
<p>După această bandajare de 1 lună (a 6-a săptămână de operație), va fi benefic pentru pacienți să se bandajeze doar noaptea pentru încă +1 lună.</p>
<p>Efectuarea acestor bandajări în conformitate cu regulile și pe durata indicată va face recuperarea mai rapidă și va aduce nasul la forma dorită.</p>`
    },
    hu: {
        question: "Mennyi ideig kell ragasztanom az orromat műtét után?",
        answer: `<p>A műtét utáni első heti ellenőrzésen eltávolítják az orrból a tampont, valamint leveszik az orrról a gipszet és a ragasztókat.</p>
<p>Az orvos újra leragasztja az orrát.</p>
<p>Ha a beteg el tud jönni a 2. heti ellenőrzésre, a 2. héten teljesen eltávolítják a ragasztókat, és elmagyarázzák a betegnek, hogyan kell ragasztani.</p>
<p>Ha a beteg nem tud fizikailag megjelenni az ellenőrzésen a 2. héten, elmagyarázzák neki, hogyan kell ragasztani.</p>
<p>A betegnek semmilyen esetben sem szabad eltávolítania az orrán lévő ragasztókat az első 2 hétben (14 nap).</p>
<p>Ebben a 14 napos időszakban az orrnak nem szabad vizesnek lennie fürdés közben.</p>
<p>A műtét 14. napján, ha a beteg fizikailag el tud jönni az ellenőrzésre, az ellenőrző vizsgálat után, ha nem tud eljönni, otthon megmossa az orrát, beleértve a ragasztókat is, eltávolítja a nedves ragasztókat, és elkezdi a saját orr-ragasztását (self-taping).</p>
<p>A rutinszerű ajánlás az, hogy a 14. nap után 1 hónapig a nap 24 órájában ragasszák az orrot.</p>
<p>Az orrbőrön lévő ragasztónak 2 fő célja van: 1 az ödéma gyorsabban elmúlik, 2 a masszázs kényelmesebben végezhető.</p>
<p>A betegnek nem kell minden nap megújítania a ragasztókat ebben az önragasztási időszakban.</p>
<p>Még ha fürdés közben vizes is lesz, ha a ragasztók nem tűnnek piszkosnak és nem lazultak meg száradás után, elegendő csak megszárítani őket. Ha azonban a ragasztók nem állnak feszesen vagy piszkosnak tűnnek, célszerű eltávolítani és kicserélni őket.</p>
<p>Ezután az 1 hónapos ragasztás után (a műtét 6. hete) a betegeknek hasznos lesz, ha még +1 hónapig csak éjszaka ragasztanak.</p>
<p>Ezeknek a ragasztásoknak a szabályok szerinti és megfelelő ideig történő elvégzése felgyorsítja a gyógyulást és a kívánt formára hozza az orrot.</p>`
    }
};

const languages = ['tr', 'en', 'de', 'es', 'ru', 'fr', 'it', 'ro', 'hu'];

languages.forEach(lang => {
    // Find the start of the content for this language
    const langStartRegex = new RegExp(`"${lang}":\\s*{`, 'g');
    const match = langStartRegex.exec(content);

    if (match) {
        const langStartIndex = match.index;
        // Find the tab8 content within this language block
        const tab8Regex = /"id": "tab8",\s*"title": ".*?",\s*"content": \[\s*\{/g;
        tab8Regex.lastIndex = langStartIndex;
        const tab8Match = tab8Regex.exec(content);

        if (tab8Match) {
            const insertionPoint = tab8Match.index + tab8Match[0].length;

            // Find the end of the content array for tab8
            let bracketCount = 1;
            let currentIndex = insertionPoint;
            while (bracketCount > 0 && currentIndex < content.length) {
                if (content[currentIndex] === '[') bracketCount++;
                if (content[currentIndex] === ']') bracketCount--;
                currentIndex++;
            }

            const contentEndIndex = currentIndex - 1; // Index of `]`

            // Construct new items string
            let newItemsString = '';

            const q = newFAQ[lang].question;
            const a = newFAQ[lang].answer.replace(/"/g, '\\"').replace(/\n/g, '');

            newItemsString += `,
          {
            "subsections": [
              {
                "title": "${q}",
                "text": "${a}"
              }
            ]
          }`;

            // Insert the new items
            content = content.slice(0, contentEndIndex) + newItemsString + content.slice(contentEndIndex);

            console.log(`Added Taping Duration FAQ to ${lang}`);
        } else {
            console.log(`Could not find tab8 for ${lang}`);
        }
    } else {
        console.log(`Could not find language block for ${lang}`);
    }
});

fs.writeFileSync(contentPath, content, 'utf8');
console.log('Content updated successfully.');
