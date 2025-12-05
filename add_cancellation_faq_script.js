const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, 'src/data/content.js');
let content = fs.readFileSync(contentPath, 'utf8');

const newFAQ = {
    tr: {
        question: "Hangi durumlarda ameliyatım iptal olabilir/ ertelenebilir?",
        answer: `<p>Ameliyat öncesi yaptığımız görüşmelerde rinoplasti ameliyatı ile ilgili detayların size anlatılması sonrasında karşılıklı onaylar doğrulanarak ameliyat planlaması yapılmış olsa da, ameliyat öncesi bazı durumlarda ameliyatınız ERTELENEBİLİR ya da İPTAL EDİLEBİLİR.</p>
<p>Bu durum aşağıdaki nedenlerle gerçekleşebilir:</p>
<ul>
<li>Ameliyat günü ya da hemen öncesinde bir solunum yolu enfeksiyonunuz var ise.</li>
<li>Ameliyat öncesinde sigarayı bırakamamış iseniz. (Ameliyat sonucu iyileşmeyi kötü etkileyeceğinden dolayı sigara kullanımını bırakamamış hasta ameliyat olmamalıdır.) Bu bilgiyi bizden saklarsanız ortaya çıkacak zararı baştan kabullenmişsiniz demektir.</li>
<li>Ameliyat öncesi yapılan tetkiklerde ameliyatınıza engel olabilecek bir kan değeriniz varsa.</li>
<li>Kan testinde Hemoglobin (HB, Hgb), Trombosit (Plt), aPTT ve INR testleri normal sınırlarda olmalıdır.</li>
<li>Hemoglobin değerinin düşük olması, dokuların oksijenlenmesini bozarak iyileşme sorunu ve kötü sonuca neden olabilmektedir. Sigara kullanımı ile benzer riskler oluşturur. Normal sınırlarda değil ise de hb>10 olmalı ve hasta ameliyat sonrası anemi için gerekli tedaviyi almalıdır.</li>
<li>Tanısı yeni koyulmuş bir bulaşıcı hastalığınız varsa (Hepatit, HIV)</li>
<li>Bu durumda öncelikle bu hastalıkların tedavisi ve bu açıdan değerlendirilmeniz gerekecektir.</li>
</ul>
<p>İsteyen hastalar ameliyatın ertelenme/ iptal olma riskini almak istemiyorlarsa, ameliyat öncesi istedikleri herhangi bir hastanede şu testleri yaptırabilirler:</p>
<p>Hemogram, INR, aPTT, Anti-HIV, Anti-HCV, HbsAg</p>`
    },
    en: {
        question: "In which situations can my surgery be cancelled/postponed?",
        answer: `<p>Although surgery planning is made by confirming mutual approvals after the details regarding rhinoplasty surgery are explained to you in our pre-operative meetings, your surgery may be POSTPONED or CANCELLED in some cases before surgery.</p>
<p>This situation may occur due to the following reasons:</p>
<ul>
<li>If you have a respiratory tract infection on the day of surgery or immediately before.</li>
<li>If you have not been able to quit smoking before surgery. (A patient who has not been able to quit smoking should not be operated on because it will badly affect recovery after surgery.) If you hide this information from us, it means you have accepted the harm that will arise from the beginning.</li>
<li>If you have a blood value that may prevent your surgery in the tests performed before surgery.</li>
<li>Hemoglobin (HB, Hgb), Platelet (Plt), aPTT and INR tests must be within normal limits in the blood test.</li>
<li>Low hemoglobin value may cause healing problems and bad results by impairing oxygenation of tissues. It creates similar risks with smoking. If it is not within normal limits, hb>10 should be and the patient should receive necessary treatment for anemia after surgery.</li>
<li>If you have a newly diagnosed infectious disease (Hepatitis, HIV)</li>
<li>In this case, primarily the treatment of these diseases and your evaluation in this respect will be required.</li>
</ul>
<p>Patients who do not want to take the risk of postponement/cancellation of the surgery can have the following tests done at any hospital they want before surgery:</p>
<p>Hemogram, INR, aPTT, Anti-HIV, Anti-HCV, HbsAg</p>`
    },
    de: {
        question: "In welchen Fällen kann meine Operation abgesagt/verschoben werden?",
        answer: `<p>Obwohl die Operationsplanung durch Bestätigung gegenseitiger Genehmigungen erfolgt, nachdem Ihnen in unseren präoperativen Gesprächen die Details zur Nasenkorrektur erklärt wurden, kann Ihre Operation in einigen Fällen vor der Operation VERSCHOBEN oder ABGESAGT werden.</p>
<p>Diese Situation kann aus folgenden Gründen auftreten:</p>
<ul>
<li>Wenn Sie am Tag der Operation oder unmittelbar davor eine Atemwegsinfektion haben.</li>
<li>Wenn Sie vor der Operation nicht mit dem Rauchen aufhören konnten. (Ein Patient, der nicht mit dem Rauchen aufhören konnte, sollte nicht operiert werden, da dies die Genesung nach der Operation negativ beeinflusst.) Wenn Sie uns diese Informationen verheimlichen, bedeutet dies, dass Sie den entstehenden Schaden von Anfang an akzeptiert haben.</li>
<li>Wenn Sie bei den vor der Operation durchgeführten Tests einen Blutwert haben, der Ihre Operation verhindern könnte.</li>
<li>Hämoglobin (HB, Hgb), Thrombozyten (Plt), aPTT und INR Tests müssen im Bluttest innerhalb der normalen Grenzen liegen.</li>
<li>Ein niedriger Hämoglobinwert kann Heilungsprobleme und schlechte Ergebnisse verursachen, indem er die Sauerstoffversorgung des Gewebes beeinträchtigt. Es birgt ähnliche Risiken wie das Rauchen. Wenn er nicht innerhalb der normalen Grenzen liegt, sollte hb>10 sein und der Patient sollte nach der Operation die notwendige Behandlung gegen Anämie erhalten.</li>
<li>Wenn Sie eine neu diagnostizierte Infektionskrankheit haben (Hepatitis, HIV)</li>
<li>In diesem Fall ist in erster Linie die Behandlung dieser Krankheiten und Ihre diesbezügliche Bewertung erforderlich.</li>
</ul>
<p>Patienten, die das Risiko einer Verschiebung/Absage der Operation nicht eingehen möchten, können vor der Operation in jedem beliebigen Krankenhaus folgende Tests durchführen lassen:</p>
<p>Hämogramm, INR, aPTT, Anti-HIV, Anti-HCV, HbsAg</p>`
    },
    es: {
        question: "¿En qué casos se puede cancelar/posponer mi cirugía?",
        answer: `<p>Aunque la planificación de la cirugía se realiza confirmando las aprobaciones mutuas después de que se le expliquen los detalles sobre la cirugía de rinoplastia en nuestras reuniones preoperatorias, su cirugía puede ser POSPUESTA o CANCELADA en algunos casos antes de la cirugía.</p>
<p>Esta situación puede ocurrir debido a las siguientes razones:</p>
<ul>
<li>Si tiene una infección del tracto respiratorio el día de la cirugía o inmediatamente antes.</li>
<li>Si no ha podido dejar de fumar antes de la cirugía. (Un paciente que no ha podido dejar de fumar no debe ser operado porque afectará negativamente la recuperación después de la cirugía). Si nos oculta esta información, significa que ha aceptado el daño que surgirá desde el principio.</li>
<li>Si tiene un valor sanguíneo que puede impedir su cirugía en las pruebas realizadas antes de la cirugía.</li>
<li>Las pruebas de Hemoglobina (HB, Hgb), Plaquetas (Plt), aPTT e INR deben estar dentro de los límites normales en el análisis de sangre.</li>
<li>Un valor bajo de hemoglobina puede causar problemas de curación y malos resultados al afectar la oxigenación de los tejidos. Crea riesgos similares al tabaquismo. Si no está dentro de los límites normales, hb>10 debe ser y el paciente debe recibir el tratamiento necesario para la anemia después de la cirugía.</li>
<li>Si tiene una enfermedad infecciosa recién diagnosticada (Hepatitis, VIH)</li>
<li>En este caso, se requerirá principalmente el tratamiento de estas enfermedades y su evaluación a este respecto.</li>
</ul>
<p>Los pacientes que no quieran correr el riesgo de aplazamiento/cancelación de la cirugía pueden hacerse las siguientes pruebas en cualquier hospital que deseen antes de la cirugía:</p>
<p>Hemograma, INR, aPTT, Anti-VIH, Anti-VHC, HbsAg</p>`
    },
    ru: {
        question: "В каких случаях моя операция может быть отменена/отложена?",
        answer: `<p>Хотя планирование операции осуществляется путем подтверждения взаимного согласия после того, как вам будут объяснены детали операции ринопластики на наших предоперационных встречах, ваша операция может быть ОТЛОЖЕНА или ОТМЕНЕНА в некоторых случаях перед операцией.</p>
<p>Эта ситуация может возникнуть по следующим причинам:</p>
<ul>
<li>Если у вас инфекция дыхательных путей в день операции или непосредственно перед ней.</li>
<li>Если вы не смогли бросить курить перед операцией. (Пациент, который не смог бросить курить, не должен оперироваться, потому что это плохо скажется на восстановлении после операции.) Если вы скроете от нас эту информацию, это означает, что вы с самого начала приняли вред, который возникнет.</li>
<li>Если у вас есть показатель крови, который может помешать вашей операции в анализах, проведенных перед операцией.</li>
<li>Тесты на гемоглобин (HB, Hgb), тромбоциты (Plt), аЧТВ и МНО должны быть в пределах нормы в анализе крови.</li>
<li>Низкий уровень гемоглобина может вызвать проблемы с заживлением и плохие результаты, нарушая оксигенацию тканей. Это создает риски, аналогичные курению. Если он не в пределах нормы, hb>10 должен быть, и пациент должен получить необходимое лечение анемии после операции.</li>
<li>Если у вас недавно диагностированное инфекционное заболевание (Гепатит, ВИЧ)</li>
<li>В этом случае в первую очередь потребуется лечение этих заболеваний и ваша оценка в этом отношении.</li>
</ul>
<p>Пациенты, которые не хотят рисковать отсрочкой/отменой операции, могут сделать следующие анализы в любой больнице по своему желанию перед операцией:</p>
<p>Гемограмма, МНО, аЧТВ, Анти-ВИЧ, Анти-ВГС, HbsAg</p>`
    },
    fr: {
        question: "Dans quels cas mon opération peut-elle être annulée/reportée ?",
        answer: `<p>Bien que la planification de la chirurgie soit faite en confirmant les approbations mutuelles après que les détails concernant la chirurgie de rhinoplastie vous aient été expliqués lors de nos réunions préopératoires, votre chirurgie peut être REPORTÉE ou ANNULÉE dans certains cas avant la chirurgie.</p>
<p>Cette situation peut survenir pour les raisons suivantes :</p>
<ul>
<li>Si vous avez une infection des voies respiratoires le jour de la chirurgie ou immédiatement avant.</li>
<li>Si vous n'avez pas réussi à arrêter de fumer avant la chirurgie. (Un patient qui n'a pas réussi à arrêter de fumer ne doit pas être opéré car cela affectera négativement la récupération après la chirurgie.) Si vous nous cachez cette information, cela signifie que vous avez accepté le préjudice qui en découlera dès le début.</li>
<li>Si vous avez une valeur sanguine qui peut empêcher votre chirurgie dans les tests effectués avant la chirurgie.</li>
<li>Les tests d'hémoglobine (HB, Hgb), de plaquettes (Plt), d'aPTT et d'INR doivent être dans les limites normales dans le test sanguin.</li>
<li>Une faible valeur d'hémoglobine peut causer des problèmes de guérison et de mauvais résultats en altérant l'oxygénation des tissus. Cela crée des risques similaires au tabagisme. S'il n'est pas dans les limites normales, hb>10 doit être et le patient doit recevoir le traitement nécessaire pour l'anémie après la chirurgie.</li>
<li>Si vous avez une maladie infectieuse nouvellement diagnostiquée (Hépatite, VIH)</li>
<li>Dans ce cas, le traitement de ces maladies et votre évaluation à cet égard seront principalement requis.</li>
</ul>
<p>Les patients qui ne veulent pas prendre le risque de report/annulation de la chirurgie peuvent faire effectuer les tests suivants dans n'importe quel hôpital de leur choix avant la chirurgie :</p>
<p>Hémogramme, INR, aPTT, Anti-VIH, Anti-VHC, HbsAg</p>`
    },
    it: {
        question: "In quali casi il mio intervento può essere annullato/rimandato?",
        answer: `<p>Sebbene la pianificazione dell'intervento venga effettuata confermando le approvazioni reciproche dopo che i dettagli relativi all'intervento di rinoplastica ti sono stati spiegati nei nostri incontri pre-operatori, il tuo intervento potrebbe essere RIMANDATO o ANNULLATO in alcuni casi prima dell'intervento.</p>
<p>Questa situazione può verificarsi per i seguenti motivi:</p>
<ul>
<li>Se hai un'infezione delle vie respiratorie il giorno dell'intervento o immediatamente prima.</li>
<li>Se non sei riuscito a smettere di fumare prima dell'intervento. (Un paziente che non è riuscito a smettere di fumare non dovrebbe essere operato perché influirà negativamente sul recupero dopo l'intervento.) Se ci nascondi queste informazioni, significa che hai accettato il danno che ne deriverà fin dall'inizio.</li>
<li>Se hai un valore ematico che potrebbe impedire il tuo intervento nei test eseguiti prima dell'intervento.</li>
<li>I test di Emoglobina (HB, Hgb), Piastrine (Plt), aPTT e INR devono essere entro i limiti normali nell'esame del sangue.</li>
<li>Un basso valore di emoglobina può causare problemi di guarigione e cattivi risultati compromettendo l'ossigenazione dei tessuti. Crea rischi simili al fumo. Se non è entro i limiti normali, hb>10 dovrebbe essere e il paziente dovrebbe ricevere il trattamento necessario per l'anemia dopo l'intervento.</li>
<li>Se hai una malattia infettiva appena diagnosticata (Epatite, HIV)</li>
<li>In questo caso, sarà richiesto principalmente il trattamento di queste malattie e la tua valutazione a questo riguardo.</li>
</ul>
<p>I pazienti che non vogliono correre il rischio di rinvio/cancellazione dell'intervento possono far eseguire i seguenti test in qualsiasi ospedale desiderino prima dell'intervento:</p>
<p>Emocromo, INR, aPTT, Anti-HIV, Anti-HCV, HbsAg</p>`
    },
    ro: {
        question: "În ce cazuri operația mea poate fi anulată/amânată?",
        answer: `<p>Deși planificarea operației se face prin confirmarea aprobărilor reciproce după ce detaliile privind operația de rinoplastie v-au fost explicate în întâlnirile noastre preoperatorii, operația dumneavoastră poate fi AMÂNATĂ sau ANULATĂ în unele cazuri înainte de operație.</p>
<p>Această situație poate apărea din următoarele motive:</p>
<ul>
<li>Dacă aveți o infecție a tractului respirator în ziua operației sau imediat înainte.</li>
<li>Dacă nu ați reușit să renunțați la fumat înainte de operație. (Un pacient care nu a reușit să renunțe la fumat nu ar trebui operat deoarece va afecta negativ recuperarea după operație.) Dacă ne ascundeți aceste informații, înseamnă că ați acceptat răul care va rezulta de la început.</li>
<li>Dacă aveți o valoare a sângelui care poate împiedica operația în testele efectuate înainte de operație.</li>
<li>Testele de Hemoglobină (HB, Hgb), Trombocite (Plt), aPTT și INR trebuie să fie în limite normale în testul de sânge.</li>
<li>O valoare scăzută a hemoglobinei poate cauza probleme de vindecare și rezultate proaste prin afectarea oxigenării țesuturilor. Creează riscuri similare cu fumatul. Dacă nu este în limite normale, hb>10 ar trebui să fie și pacientul ar trebui să primească tratamentul necesar pentru anemie după operație.</li>
<li>Dacă aveți o boală infecțioasă nou diagnosticată (Hepatită, HIV)</li>
<li>În acest caz, va fi necesar în primul rând tratamentul acestor boli și evaluarea dumneavoastră în acest sens.</li>
</ul>
<p>Pacienții care nu doresc să își asume riscul amânării/anulării operației pot face următoarele teste la orice spital doresc înainte de operație:</p>
<p>Hemogramă, INR, aPTT, Anti-HIV, Anti-HCV, HbsAg</p>`
    },
    hu: {
        question: "Milyen esetekben törölhető/halasztható a műtétem?",
        answer: `<p>Bár a műtét tervezése a kölcsönös jóváhagyások megerősítésével történik, miután a műtét előtti megbeszéléseinken elmagyaráztuk Önnek az orrplasztikai műtéttel kapcsolatos részleteket, a műtétje bizonyos esetekben a műtét előtt ELHALASZTHATÓ vagy TÖRÖLHETŐ.</p>
<p>Ez a helyzet a következő okok miatt fordulhat elő:</p>
<ul>
<li>Ha légúti fertőzése van a műtét napján vagy közvetlenül előtte.</li>
<li>Ha nem sikerült abbahagynia a dohányzást a műtét előtt. (Azt a beteget, aki nem tudta abbahagyni a dohányzást, nem szabad megműteni, mert az rosszul befolyásolja a műtét utáni felépülést.) Ha eltitkolja előlünk ezt az információt, az azt jelenti, hogy a kezdetektől fogva elfogadta az ebből eredő kárt.</li>
<li>Ha olyan vérképe van a műtét előtt végzett vizsgálatok során, amely megakadályozhatja a műtétet.</li>
<li>A Hemoglobin (HB, Hgb), Trombocita (Plt), aPTT és INR teszteknek a normál határértékeken belül kell lenniük a vérvizsgálat során.</li>
<li>Az alacsony hemoglobinérték gyógyulási problémákat és rossz eredményeket okozhat a szövetek oxigénellátásának károsításával. Hasonló kockázatokat jelent, mint a dohányzás. Ha nincs a normál határértékeken belül, a hb>10-nek kell lennie, és a betegnek meg kell kapnia a szükséges kezelést a vérszegénységre a műtét után.</li>
<li>Ha újonnan diagnosztizált fertőző betegsége van (Hepatitis, HIV)</li>
<li>Ebben az esetben elsősorban ezen betegségek kezelésére és az Ön ezzel kapcsolatos értékelésére lesz szükség.</li>
</ul>
<p>Azok a betegek, akik nem akarják vállalni a műtét elhalasztásának/törlésének kockázatát, a műtét előtt bármelyik kórházban elvégeztethetik a következő vizsgálatokat:</p>
<p>Vérkép, INR, aPTT, Anti-HIV, Anti-HCV, HbsAg</p>`
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

            let bracketCount = 1;
            let currentIndex = insertionPoint;
            while (bracketCount > 0 && currentIndex < content.length) {
                if (content[currentIndex] === '[') bracketCount++;
                if (content[currentIndex] === ']') bracketCount--;
                currentIndex++;
            }

            const contentEndIndex = currentIndex - 1; // Index of `]`

            const newItemString = `,
          {
            "subsections": [
              {
                "title": "${newFAQ[lang].question}",
                "text": "${newFAQ[lang].answer.replace(/"/g, '\\"').replace(/\n/g, '')}"
              }
            ]
          }`;

            content = content.slice(0, contentEndIndex) + newItemString + content.slice(contentEndIndex);

            console.log(`Added FAQ to ${lang}`);
        } else {
            console.log(`Could not find tab8 for ${lang}`);
        }
    } else {
        console.log(`Could not find language block for ${lang}`);
    }
});

fs.writeFileSync(contentPath, content, 'utf8');
console.log('Content updated successfully.');
