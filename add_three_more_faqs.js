import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentPath = path.join(__dirname, 'src/data/content.js');
let content = fs.readFileSync(contentPath, 'utf8');

const newFAQs = [
    {
        id: "surgery_day_considerations",
        tr: {
            question: "Ameliyat günü için dikkate edilmesi gereken şeyler nelerdir?",
            answer: `<p>Ameliyat günü yüzünüzde kesinlikle makyaj olmamalıdır.</p>
<p>Bu hem sizin yüzünüzü doğru değerlendirmemizi engeller, hem de ameliyat sırasında steril bir ameliyat yapmamızı zorlaştırır. Dolayısı ile ameliyat sırasında makyajsız olmalısınız.</p>
<p>Takma kirpik var ise kalabilir. Ancak oje var ise çıkartılmalıdır.</p>
<p>Üzerinde metal bulunan bir iç çamaşırınız olmamalıdır.</p>
<p>Erkek hastalar, ameliyatın 1 gün öncesinde sinek kaydı şekilde sakal-bıyık tıraşı olmalıdır.</p>`
        },
        en: {
            question: "What should be considered for the day of surgery?",
            answer: `<p>There should absolutely be no makeup on your face on the day of surgery.</p>
<p>This both prevents us from evaluating your face correctly and makes it difficult for us to perform a sterile surgery during the operation. Therefore, you must be without makeup during the surgery.</p>
<p>If there are false eyelashes, they can stay. However, if there is nail polish, it must be removed.</p>
<p>You should not have any underwear with metal on it.</p>
<p>Male patients should shave their beard and mustache cleanly 1 day before the surgery.</p>`
        },
        de: {
            question: "Was sollte am Tag der Operation beachtet werden?",
            answer: `<p>Am Tag der Operation sollte absolut kein Make-up auf Ihrem Gesicht sein.</p>
<p>Dies verhindert sowohl, dass wir Ihr Gesicht richtig beurteilen können, als auch, dass wir während der Operation eine sterile Operation durchführen können. Daher müssen Sie während der Operation ungeschminkt sein.</p>
<p>Wenn falsche Wimpern vorhanden sind, können diese bleiben. Wenn jedoch Nagellack vorhanden ist, muss dieser entfernt werden.</p>
<p>Sie sollten keine Unterwäsche mit Metall daran tragen.</p>
<p>Männliche Patienten sollten sich 1 Tag vor der Operation Bart und Schnurrbart sauber rasieren.</p>`
        },
        es: {
            question: "¿Qué se debe tener en cuenta para el día de la cirugía?",
            answer: `<p>No debe haber absolutamente nada de maquillaje en su cara el día de la cirugía.</p>
<p>Esto nos impide evaluar su cara correctamente y nos dificulta realizar una cirugía estéril durante la operación. Por lo tanto, debe estar sin maquillaje durante la cirugía.</p>
<p>Si hay pestañas postizas, pueden quedarse. Sin embargo, si hay esmalte de uñas, debe retirarse.</p>
<p>No debe tener ropa interior con metal.</p>
<p>Los pacientes masculinos deben afeitarse la barba y el bigote limpiamente 1 día antes de la cirugía.</p>`
        },
        ru: {
            question: "Что следует учитывать в день операции?",
            answer: `<p>В день операции на вашем лице абсолютно не должно быть макияжа.</p>
<p>Это мешает нам правильно оценить ваше лицо, а также затрудняет проведение стерильной операции. Поэтому во время операции вы должны быть без макияжа.</p>
<p>Если есть накладные ресницы, они могут остаться. Однако, если есть лак для ногтей, его необходимо удалить.</p>
<p>На вас не должно быть нижнего белья с металлическими деталями.</p>
<p>Пациенты-мужчины должны чисто выбрить бороду и усы за 1 день до операции.</p>`
        },
        fr: {
            question: "Que faut-il prendre en compte pour le jour de l'opération ?",
            answer: `<p>Il ne doit absolument pas y avoir de maquillage sur votre visage le jour de l'opération.</p>
<p>Cela nous empêche à la fois d'évaluer correctement votre visage et rend difficile la réalisation d'une chirurgie stérile pendant l'opération. Par conséquent, vous devez être sans maquillage pendant l'opération.</p>
<p>S'il y a des faux cils, ils peuvent rester. Cependant, s'il y a du vernis à ongles, il doit être retiré.</p>
<p>Vous ne devez pas porter de sous-vêtements avec du métal.</p>
<p>Les patients masculins doivent se raser la barbe et la moustache proprement 1 jour avant l'opération.</p>`
        },
        it: {
            question: "Cosa bisogna considerare per il giorno dell'intervento?",
            answer: `<p>Non ci deve essere assolutamente trucco sul viso il giorno dell'intervento.</p>
<p>Questo ci impedisce sia di valutare correttamente il tuo viso sia rende difficile eseguire un intervento chirurgico sterile durante l'operazione. Pertanto, devi essere senza trucco durante l'intervento.</p>
<p>Se ci sono ciglia finte, possono rimanere. Tuttavia, se c'è smalto per unghie, deve essere rimosso.</p>
<p>Non dovresti avere biancheria intima con metallo su di essa.</p>
<p>I pazienti maschi devono radersi barba e baffi in modo pulito 1 giorno prima dell'intervento.</p>`
        },
        ro: {
            question: "Ce trebuie luat în considerare pentru ziua operației?",
            answer: `<p>Nu trebuie să existe absolut niciun machiaj pe fața dumneavoastră în ziua operației.</p>
<p>Acest lucru ne împiedică atât să vă evaluăm corect fața, cât și ne îngreunează efectuarea unei intervenții chirurgicale sterile în timpul operației. Prin urmare, trebuie să fiți fără machiaj în timpul operației.</p>
<p>Dacă există gene false, acestea pot rămâne. Cu toate acestea, dacă există ojă, aceasta trebuie îndepărtată.</p>
<p>Nu ar trebui să aveți lenjerie de corp cu metal pe ea.</p>
<p>Pacienții bărbați ar trebui să își radă barba și mustața curat cu 1 zi înainte de operație.</p>`
        },
        hu: {
            question: "Mire kell figyelni a műtét napján?",
            answer: `<p>A műtét napján egyáltalán nem lehet smink az arcán.</p>
<p>Ez megakadályozza, hogy helyesen értékeljük az arcát, és megnehezíti a steril műtét elvégzését az operáció során. Ezért smink nélkül kell lennie a műtét alatt.</p>
<p>Ha van műszempilla, az maradhat. Ha azonban van körömlakk, azt el kell távolítani.</p>
<p>Nem viselhet fémet tartalmazó fehérneműt.</p>
<p>A férfi betegeknek 1 nappal a műtét előtt tisztára kell borotválniuk a szakállukat és a bajuszukat.</p>`
        }
    },
    {
        id: "surgery_day_recommendations",
        tr: {
            question: "Ameliyat günü için (hemen ameliyat sonrası) önerileriniz nelerdir?",
            answer: `<p>Ameliyat bitimi sonrası ameliyathane içinde bulunan uyanma/derlenme odasında yeterli süre bekleyip kendinizi iyi hissetmeniz sonrası odanıza alınacaksınız.</p>
<p>Odanıza geldiğinizde bilinciniz yerinde olacak ve anestezi etkisi geçmiş olacak. Ama biraz sersemlik hissetmeniz normaldir.</p>
<p>Ameliyat süresine göre, ameliyat sonrası uygun zaman geçince yemeğiniz gelecek ve besleneceksiniz.</p>
<p>İlk gün biraz bulantı hissetmeniz normaldir. Sık görülmese de kusabilirsiniz. Bu durumda size bu şikayetleriniz için ek ilaçlar uygulanacak.</p>
<p>Yeterli süre geçip ayağa kalkıp yürümeye başlayınca ve kendinizi iyi hissediyorsanız pıhtı oluşumunu önlemek için size giydirilmiş olan varis çoraplarını çıkartabilirsiniz.</p>
<p>Hastanedeki yatışınız sürecinde rahat edeceğiniz pijama takımı ve terlik bulundurmanız konforunuzu artıracaktır.</p>`
        },
        en: {
            question: "What are your recommendations for the day of surgery (immediately after surgery)?",
            answer: `<p>After the surgery is over, you will be taken to your room after waiting for a sufficient time in the recovery room in the operating room and feeling good.</p>
<p>When you come to your room, you will be conscious and the effect of anesthesia will have passed. But it is normal to feel a little dizzy.</p>
<p>Depending on the duration of the surgery, your food will arrive and you will eat when the appropriate time passes after the surgery.</p>
<p>It is normal to feel a little nausea on the first day. Although not common, you may vomit. In this case, additional medications will be administered to you for these complaints.</p>
<p>When sufficient time has passed and you stand up and start walking and feel good, you can remove the compression stockings that were put on you to prevent clot formation.</p>
<p>Having a pajama set and slippers that you will be comfortable with during your hospitalization will increase your comfort.</p>`
        },
        de: {
            question: "Was sind Ihre Empfehlungen für den Tag der Operation (unmittelbar nach der Operation)?",
            answer: `<p>Nach Beendigung der Operation werden Sie auf Ihr Zimmer gebracht, nachdem Sie eine ausreichende Zeit im Aufwachraum im Operationssaal gewartet haben und sich gut fühlen.</p>
<p>Wenn Sie auf Ihr Zimmer kommen, werden Sie bei Bewusstsein sein und die Wirkung der Anästhesie wird nachgelassen haben. Aber es ist normal, sich ein wenig schwindelig zu fühlen.</p>
<p>Je nach Dauer der Operation kommt Ihr Essen und Sie essen, wenn die angemessene Zeit nach der Operation vergangen ist.</p>
<p>Es ist normal, am ersten Tag etwas Übelkeit zu verspüren. Obwohl nicht häufig, können Sie sich übergeben. In diesem Fall werden Ihnen zusätzliche Medikamente gegen diese Beschwerden verabreicht.</p>
<p>Wenn genügend Zeit vergangen ist und Sie aufstehen und anfangen zu gehen und sich gut fühlen, können Sie die Kompressionsstrümpfe ausziehen, die Ihnen angezogen wurden, um die Bildung von Blutgerinnseln zu verhindern.</p>
<p>Ein Pyjama-Set und Hausschuhe, mit denen Sie sich während Ihres Krankenhausaufenthalts wohlfühlen, erhöhen Ihren Komfort.</p>`
        },
        es: {
            question: "¿Cuáles son sus recomendaciones para el día de la cirugía (inmediatamente después de la cirugía)?",
            answer: `<p>Una vez finalizada la cirugía, lo llevarán a su habitación después de esperar un tiempo suficiente en la sala de recuperación dentro del quirófano y sentirse bien.</p>
<p>Cuando llegue a su habitación, estará consciente y el efecto de la anestesia habrá pasado. Pero es normal sentirse un poco mareado.</p>
<p>Dependiendo de la duración de la cirugía, su comida llegará y comerá cuando pase el tiempo adecuado después de la cirugía.</p>
<p>Es normal sentir un poco de náuseas el primer día. Aunque no es común, puede vomitar. En este caso, se le administrarán medicamentos adicionales para estas molestias.</p>
<p>Cuando haya pasado suficiente tiempo y se levante y comience a caminar y se sienta bien, puede quitarse las medias de compresión que le pusieron para prevenir la formación de coágulos.</p>
<p>Tener un pijama y pantuflas con los que se sienta cómodo durante su hospitalización aumentará su comodidad.</p>`
        },
        ru: {
            question: "Каковы ваши рекомендации на день операции (сразу после операции)?",
            answer: `<p>После окончания операции вас переведут в вашу палату после того, как вы подождете достаточное время в комнате пробуждения/восстановления в операционной и почувствуете себя хорошо.</p>
<p>Когда вы придете в свою палату, вы будете в сознании, и действие анестезии пройдет. Но чувствовать небольшое головокружение - это нормально.</p>
<p>В зависимости от продолжительности операции, вам принесут еду, и вы поедите, когда пройдет соответствующее время после операции.</p>
<p>В первый день нормально чувствовать небольшую тошноту. Хотя это не часто, вас может вырвать. В этом случае вам будут введены дополнительные лекарства от этих жалоб.</p>
<p>Когда пройдет достаточно времени, и вы встанете и начнете ходить и почувствуете себя хорошо, вы можете снять компрессионные чулки, которые были надеты на вас для предотвращения образования тромбов.</p>
<p>Наличие пижамы и тапочек, в которых вам будет удобно во время пребывания в больнице, повысит ваш комфорт.</p>`
        },
        fr: {
            question: "Quelles sont vos recommandations pour le jour de l'opération (immédiatement après l'opération) ?",
            answer: `<p>Une fois l'opération terminée, vous serez emmené dans votre chambre après avoir attendu suffisamment de temps dans la salle de réveil à l'intérieur du bloc opératoire et vous être senti bien.</p>
<p>Lorsque vous arriverez dans votre chambre, vous serez conscient et l'effet de l'anesthésie sera passé. Mais il est normal de se sentir un peu étourdi.</p>
<p>Selon la durée de l'opération, votre repas arrivera et vous mangerez lorsque le temps approprié sera écoulé après l'opération.</p>
<p>Il est normal de ressentir un peu de nausée le premier jour. Bien que ce ne soit pas fréquent, vous pouvez vomir. Dans ce cas, des médicaments supplémentaires vous seront administrés pour ces plaintes.</p>
<p>Lorsque suffisamment de temps s'est écoulé et que vous vous levez et commencez à marcher et que vous vous sentez bien, vous pouvez retirer les bas de contention qui vous ont été mis pour prévenir la formation de caillots.</p>
<p>Avoir un pyjama et des pantoufles avec lesquels vous serez à l'aise pendant votre hospitalisation augmentera votre confort.</p>`
        },
        it: {
            question: "Quali sono le vostre raccomandazioni per il giorno dell'intervento (subito dopo l'intervento)?",
            answer: `<p>Al termine dell'intervento, verrai portato nella tua stanza dopo aver atteso un tempo sufficiente nella sala risveglio all'interno della sala operatoria e sentirti bene.</p>
<p>Quando arriverai nella tua stanza, sarai cosciente e l'effetto dell'anestesia sarà passato. Ma è normale sentirsi un po' storditi.</p>
<p>A seconda della durata dell'intervento, il cibo arriverà e mangerai quando sarà trascorso il tempo appropriato dopo l'intervento.</p>
<p>È normale provare un po' di nausea il primo giorno. Sebbene non sia comune, potresti vomitare. In questo caso, ti verranno somministrati farmaci aggiuntivi per questi disturbi.</p>
<p>Quando è trascorso un tempo sufficiente e ti alzi e inizi a camminare e ti senti bene, puoi togliere le calze a compressione che ti sono state messe per prevenire la formazione di coaguli.</p>
<p>Avere un pigiama e delle pantofole con cui ti sentirai a tuo agio durante il ricovero aumenterà il tuo comfort.</p>`
        },
        ro: {
            question: "Care sunt recomandările dumneavoastră pentru ziua operației (imediat după operație)?",
            answer: `<p>După terminarea operației, veți fi dus în camera dumneavoastră după ce ați așteptat suficient timp în sala de trezire/recuperare din sala de operație și vă simțiți bine.</p>
<p>Când ajungeți în cameră, veți fi conștient și efectul anesteziei va fi trecut. Dar este normal să vă simțiți puțin amețit.</p>
<p>În funcție de durata operației, mâncarea va sosi și veți mânca atunci când va trece timpul corespunzător după operație.</p>
<p>Este normal să simțiți puțină greață în prima zi. Deși nu este frecvent, puteți vomita. În acest caz, vi se vor administra medicamente suplimentare pentru aceste plângeri.</p>
<p>Când a trecut suficient timp și vă ridicați și începeți să mergeți și vă simțiți bine, puteți scoate ciorapii compresivi care v-au fost puși pentru a preveni formarea cheagurilor.</p>
<p>A avea o pijama și papuci cu care vă veți simți confortabil în timpul spitalizării vă va spori confortul.</p>`
        },
        hu: {
            question: "Mik az ajánlásai a műtét napjára (közvetlenül a műtét után)?",
            answer: `<p>A műtét befejezése után a szobájába viszik, miután elegendő időt várt a műtőben lévő ébredő/megfigyelő szobában, és jól érzi magát.</p>
<p>Amikor a szobájába ér, tudatánál lesz, és az érzéstelenítés hatása elmúlik. De normális, ha egy kicsit szédül.</p>
<p>A műtét időtartamától függően megérkezik az étele, és akkor eszik, amikor a műtét után megfelelő idő eltelt.</p>
<p>Normális, ha az első napon egy kis hányingert érez. Bár nem gyakori, hányhat is. Ebben az esetben további gyógyszereket kap ezekre a panaszokra.</p>
<p>Ha elegendő idő telt el, és feláll, elkezd járni, és jól érzi magát, leveheti a kompressziós harisnyát, amelyet a vérrögképződés megelőzésére adtak önre.</p>
<p>Ha van olyan pizsamája és papucsa, amelyben kényelmesen érzi magát a kórházi tartózkodás alatt, az növeli a komfortérzetét.</p>`
        }
    },
    {
        id: "makeup_timing",
        tr: {
            question: "Makyaj ne zaman yapabilirim?",
            answer: `<p>Ameliyat sonrası ilk gün bile, ameliyat bölgesine temas etmeden makyaj yapabilirsiniz.</p>
<p>Ancak ödem nedeni ile zorlanabilirsiniz.</p>
<p>Fakat ilk haftada yapılacak olan kontrolünüze makyaj yaparak gelmenizde sakınca yoktur.</p>`
        },
        en: {
            question: "When can I apply makeup?",
            answer: `<p>You can apply makeup even on the first day after surgery, without touching the surgical area.</p>
<p>However, you may have difficulty due to edema.</p>
<p>But there is no harm in coming to your check-up in the first week with makeup.</p>`
        },
        de: {
            question: "Wann kann ich mich schminken?",
            answer: `<p>Sie können sich sogar am ersten Tag nach der Operation schminken, ohne den Operationsbereich zu berühren.</p>
<p>Aufgrund von Ödemen können Sie jedoch Schwierigkeiten haben.</p>
<p>Es schadet jedoch nicht, wenn Sie geschminkt zu Ihrer Kontrolle in der ersten Woche kommen.</p>`
        },
        es: {
            question: "¿Cuándo puedo maquillarme?",
            answer: `<p>Puede maquillarse incluso el primer día después de la cirugía, sin tocar el área quirúrgica.</p>
<p>Sin embargo, puede tener dificultades debido al edema.</p>
<p>Pero no hay problema en venir a su control en la primera semana maquillada.</p>`
        },
        ru: {
            question: "Когда я могу наносить макияж?",
            answer: `<p>Вы можете наносить макияж даже в первый день после операции, не касаясь области операции.</p>
<p>Однако у вас могут возникнуть трудности из-за отека.</p>
<p>Но нет никакого вреда в том, чтобы прийти на осмотр в первую неделю с макияжем.</p>`
        },
        fr: {
            question: "Quand puis-je me maquiller ?",
            answer: `<p>Vous pouvez vous maquiller même le premier jour après l'opération, sans toucher la zone opérée.</p>
<p>Cependant, vous pouvez avoir des difficultés en raison de l'œdème.</p>
<p>Mais il n'y a aucun mal à venir à votre contrôle de la première semaine maquillée.</p>`
        },
        it: {
            question: "Quando posso truccarmi?",
            answer: `<p>Puoi truccarti anche il primo giorno dopo l'intervento, senza toccare l'area chirurgica.</p>
<p>Tuttavia, potresti avere difficoltà a causa dell'edema.</p>
<p>Ma non c'è nulla di male nel venire al controllo della prima settimana truccata.</p>`
        },
        ro: {
            question: "Când mă pot machia?",
            answer: `<p>Vă puteți machia chiar și în prima zi după operație, fără a atinge zona chirurgicală.</p>
<p>Cu toate acestea, puteți avea dificultăți din cauza edemului.</p>
<p>Dar nu este niciun rău să veniți la controlul din prima săptămână machiată.</p>`
        },
        hu: {
            question: "Mikor sminkelhetem magam?",
            answer: `<p>Akár a műtét utáni első napon is sminkelhet, anélkül, hogy hozzáérne a műtéti területhez.</p>
<p>Az ödéma miatt azonban nehézségei lehetnek.</p>
<p>De nincs akadálya annak, hogy sminkben jöjjön az első heti ellenőrzésre.</p>`
        }
    }
];

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

            newFAQs.forEach(faq => {
                const q = faq[lang].question;
                const a = faq[lang].answer.replace(/"/g, '\\"').replace(/\n/g, '');

                newItemsString += `,
          {
            "subsections": [
              {
                "title": "${q}",
                "text": "${a}"
              }
            ]
          }`;
            });

            // Insert the new items
            content = content.slice(0, contentEndIndex) + newItemsString + content.slice(contentEndIndex);

            console.log(`Added 3 new FAQs to ${lang}`);
        } else {
            console.log(`Could not find tab8 for ${lang}`);
        }
    } else {
        console.log(`Could not find language block for ${lang}`);
    }
});

fs.writeFileSync(contentPath, content, 'utf8');
console.log('Content updated successfully.');
