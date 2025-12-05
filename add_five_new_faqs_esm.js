import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentPath = path.join(__dirname, 'src/data/content.js');
let content = fs.readFileSync(contentPath, 'utf8');

const newFAQs = [
    {
        id: "cancellation",
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
    },
    {
        id: "nostril_retainer",
        tr: {
            question: "Nostril retainer (burun deliği şekillendirici) her hastada kullanılır mı?",
            answer: `<p>Bu ürünü kullanmamız gereken hastalar çoğunluktadır. Ancak uygulanan ameliyat ve hastanın durumuna göre kullanılmaması gereken durumlar da olabilir.</p>
<p>Bu nedenle bu ürünü sadece hekiminiz size öneriyorsa, size özel şekilde ve size özel önerilen süre ile kullanmanız gerekmektedir.</p>
<p>Doktorunuza danışmadan kullanmayınız/ kullanmayı bırakmayınız.</p>`
        },
        en: {
            question: "Is a nostril retainer used for every patient?",
            answer: `<p>The majority of patients need to use this product. However, depending on the surgery performed and the patient's condition, there may be cases where it should not be used.</p>
<p>Therefore, you should use this product only if your doctor recommends it to you, in the specific way and for the specific duration recommended for you.</p>
<p>Do not use/stop using it without consulting your doctor.</p>`
        },
        de: {
            question: "Wird bei jedem Patienten ein Nasenlochformer (Nostril Retainer) verwendet?",
            answer: `<p>Die Mehrheit der Patienten muss dieses Produkt verwenden. Je nach durchgeführter Operation und Zustand des Patienten kann es jedoch Fälle geben, in denen es nicht verwendet werden sollte.</p>
<p>Daher sollten Sie dieses Produkt nur verwenden, wenn Ihr Arzt es Ihnen empfiehlt, und zwar auf die für Sie empfohlene Weise und für die empfohlene Dauer.</p>
<p>Verwenden Sie es nicht ohne Rücksprache mit Ihrem Arzt und brechen Sie die Anwendung nicht ab.</p>`
        },
        es: {
            question: "¿Se utiliza un retenedor de fosas nasales (nostril retainer) en todos los pacientes?",
            answer: `<p>La mayoría de los pacientes necesitan usar este producto. Sin embargo, dependiendo de la cirugía realizada y la condición del paciente, puede haber casos en los que no se deba usar.</p>
<p>Por lo tanto, debe usar este producto solo si su médico se lo recomienda, de la manera específica y durante el tiempo específico recomendado para usted.</p>
<p>No lo use ni deje de usarlo sin consultar a su médico.</p>`
        },
        ru: {
            question: "Используется ли ретейнер для ноздрей (nostril retainer) у каждого пациента?",
            answer: `<p>Большинству пациентов необходимо использовать этот продукт. Однако, в зависимости от проведенной операции и состояния пациента, могут быть случаи, когда его не следует использовать.</p>
<p>Поэтому вы должны использовать этот продукт только в том случае, если ваш врач рекомендует его вам, именно так и в течение того времени, которое рекомендовано именно вам.</p>
<p>Не используйте/не прекращайте использование без консультации с врачом.</p>`
        },
        fr: {
            question: "Un conformateur de narine (nostril retainer) est-il utilisé chez chaque patient ?",
            answer: `<p>La majorité des patients doivent utiliser ce produit. Cependant, selon la chirurgie effectuée et l'état du patient, il peut y avoir des cas où il ne doit pas être utilisé.</p>
<p>Par conséquent, vous ne devez utiliser ce produit que si votre médecin vous le recommande, de la manière spécifique et pour la durée spécifique recommandée pour vous.</p>
<p>Ne l'utilisez pas/n'arrêtez pas de l'utiliser sans consulter votre médecin.</p>`
        },
        it: {
            question: "Il nostril retainer (modellatore per narici) viene utilizzato in tutti i pazienti?",
            answer: `<p>La maggior parte dei pazienti deve utilizzare questo prodotto. Tuttavia, a seconda dell'intervento eseguito e delle condizioni del paziente, potrebbero esserci casi in cui non dovrebbe essere utilizzato.</p>
<p>Pertanto, è necessario utilizzare questo prodotto solo se il medico lo raccomanda, nel modo specifico e per la durata specifica raccomandata per te.</p>
<p>Non utilizzarlo/smettere di utilizzarlo senza consultare il medico.</p>`
        },
        ro: {
            question: "Se folosește un conformator nazal (nostril retainer) la fiecare pacient?",
            answer: `<p>Majoritatea pacienților trebuie să utilizeze acest produs. Cu toate acestea, în funcție de operația efectuată și de starea pacientului, pot exista cazuri în care nu ar trebui utilizat.</p>
<p>Prin urmare, ar trebui să utilizați acest produs numai dacă medicul dumneavoastră vi-l recomandă, în modul specific și pentru durata specifică recomandată pentru dumneavoastră.</p>
<p>Nu îl utilizați/nu încetați să îl utilizați fără a consulta medicul.</p>`
        },
        hu: {
            question: "Minden betegnél használnak orrlyukformázót (nostril retainer)?",
            answer: `<p>A betegek többségének használnia kell ezt a terméket. Az elvégzett műtéttől és a beteg állapotától függően azonban előfordulhatnak olyan esetek, amikor nem szabad használni.</p>
<p>Ezért ezt a terméket csak akkor használja, ha orvosa javasolja Önnek, az Ön számára javasolt módon és ideig.</p>
<p>Ne használja/ne hagyja abba a használatát anélkül, hogy konzultálna orvosával.</p>`
        }
    },
    {
        id: "checkup_process",
        tr: {
            question: "Ameliyat sonrası kontrol süreci nasıl olur ve hangi süre ile kontrole gelmeliyim?",
            answer: `<p>Rinoplasti ameliyatı sonrası kontroller çok önemlidir.</p>
<p>Kontrol sürecinde erken saptanabilen bazı sorunlar uygun ilaç tedavisi, masaj ya da benzeri minik müdahaleler ile çözülebilmektedir. Ancak gecikmiş durumlarda daha karmaşık süreçler gerekebilmektedir.</p>
<p>Bu nedenle kontrollerinizi aksatmamanız ve düzenli şekilde takip etmeniz önemlidir.</p>
<p>Kontrol süreçlerinin takibi ve devamlılığın sağlanması bizzat hastanın sorumluluğundadır.</p>
<p>Hastalarımız için rutin kontrol takvimi şu şekildedir.</p>
<ul>
<li>1. hafta (tampon ve alçı alınması)</li>
<li>2. hafta (bantların çıkartılması ve genel değerlendirme)</li>
<li>1,5 ay</li>
<li>3 ay</li>
<li>6 ay</li>
<li>12 ay</li>
<li>24 ay</li>
</ul>
<p>İstanbul dışında olan, il dışı / yurt dışı hastalar için fiziki kontrol mümkün değil ise, hastaların üstte listelenmiş olan süreleri takip edip bu zamanlarda bize mevcut durumlarını yazılı şekilde ve ek olarak fotoğraf ve video ile iletmelerini rica ederiz.</p>
<p>Uzaktan da olsa yapılan bu kontroller iyileşme süreci için oldukça önemlidir.</p>`
        },
        en: {
            question: "How is the post-operative check-up process and how often should I come for a check-up?",
            answer: `<p>Post-operative check-ups after rhinoplasty are very important.</p>
<p>Some problems that can be detected early during the check-up process can be solved with appropriate medication, massage or similar minor interventions. However, more complex processes may be required in delayed cases.</p>
<p>Therefore, it is important not to interrupt your check-ups and to follow them regularly.</p>
<p>Following up on check-up processes and ensuring continuity is the responsibility of the patient.</p>
<p>The routine check-up schedule for our patients is as follows:</p>
<ul>
<li>1st week (removal of tampon and cast)</li>
<li>2nd week (removal of tapes and general evaluation)</li>
<li>1.5 months</li>
<li>3 months</li>
<li>6 months</li>
<li>12 months</li>
<li>24 months</li>
</ul>
<p>If physical check-up is not possible for patients outside of Istanbul or abroad, we ask patients to follow the times listed above and send us their current status in writing and additionally with photos and videos at these times.</p>
<p>These check-ups, even if done remotely, are very important for the healing process.</p>`
        },
        de: {
            question: "Wie verläuft der postoperative Kontrollprozess und wie oft sollte ich zur Kontrolle kommen?",
            answer: `<p>Postoperative Kontrollen nach einer Nasenkorrektur sind sehr wichtig.</p>
<p>Einige Probleme, die während des Kontrollprozesses frühzeitig erkannt werden können, können mit geeigneten Medikamenten, Massagen oder ähnlichen kleinen Eingriffen gelöst werden. In verzögerten Fällen können jedoch komplexere Prozesse erforderlich sein.</p>
<p>Daher ist es wichtig, Ihre Kontrollen nicht zu unterbrechen und sie regelmäßig zu verfolgen.</p>
<p>Die Verfolgung der Kontrollprozesse und die Sicherstellung der Kontinuität liegen in der Verantwortung des Patienten.</p>
<p>Der routinemäßige Kontrollplan für unsere Patienten sieht wie folgt aus:</p>
<ul>
<li>1. Woche (Entfernung von Tampon und Gips)</li>
<li>2. Woche (Entfernung der Tapes und allgemeine Bewertung)</li>
<li>1,5 Monate</li>
<li>3 Monate</li>
<li>6 Monate</li>
<li>12 Monate</li>
<li>24 Monate</li>
</ul>
<p>Wenn eine physische Kontrolle für Patienten außerhalb von Istanbul oder im Ausland nicht möglich ist, bitten wir die Patienten, die oben aufgeführten Zeiten einzuhalten und uns ihren aktuellen Status zu diesen Zeiten schriftlich sowie zusätzlich mit Fotos und Videos zu senden.</p>
<p>Diese Kontrollen, auch wenn sie aus der Ferne durchgeführt werden, sind für den Heilungsprozess sehr wichtig.</p>`
        },
        es: {
            question: "¿Cómo es el proceso de control postoperatorio y con qué frecuencia debo acudir a revisión?",
            answer: `<p>Los controles postoperatorios después de la rinoplastia son muy importantes.</p>
<p>Algunos problemas que se pueden detectar temprano durante el proceso de control se pueden resolver con medicamentos adecuados, masajes o intervenciones menores similares. Sin embargo, pueden requerirse procesos más complejos en casos retrasados.</p>
<p>Por lo tanto, es importante no interrumpir sus controles y seguirlos regularmente.</p>
<p>El seguimiento de los procesos de control y asegurar la continuidad es responsabilidad del paciente.</p>
<p>El calendario de control de rutina para nuestros pacientes es el siguiente:</p>
<ul>
<li>1ra semana (retiro de tapón y yeso)</li>
<li>2da semana (retiro de cintas y evaluación general)</li>
<li>1,5 meses</li>
<li>3 meses</li>
<li>6 meses</li>
<li>12 meses</li>
<li>24 meses</li>
</ul>
<p>Si el control físico no es posible para pacientes fuera de Estambul o en el extranjero, pedimos a los pacientes que sigan los tiempos enumerados anteriormente y nos envíen su estado actual por escrito y adicionalmente con fotos y videos en estos momentos.</p>
<p>Estos controles, incluso si se realizan de forma remota, son muy importantes para el proceso de curación.</p>`
        },
        ru: {
            question: "Как проходит процесс послеоперационного контроля и как часто я должен приходить на осмотр?",
            answer: `<p>Послеоперационные осмотры после ринопластики очень важны.</p>
<p>Некоторые проблемы, которые могут быть выявлены на ранней стадии в процессе контроля, могут быть решены с помощью соответствующих лекарств, массажа или подобных небольших вмешательств. Однако в запущенных случаях могут потребоваться более сложные процессы.</p>
<p>Поэтому важно не прерывать осмотры и регулярно их проходить.</p>
<p>Следить за процессами контроля и обеспечивать непрерывность - это ответственность пациента.</p>
<p>График плановых осмотров для наших пациентов следующий:</p>
<ul>
<li>1-я неделя (снятие тампона и гипса)</li>
<li>2-я неделя (снятие пластырей и общая оценка)</li>
<li>1,5 месяца</li>
<li>3 месяца</li>
<li>6 месяцев</li>
<li>12 месяцев</li>
<li>24 месяца</li>
</ul>
<p>Если физический осмотр невозможен для пациентов за пределами Стамбула или за границей, мы просим пациентов соблюдать указанные выше сроки и присылать нам свое текущее состояние в письменном виде, а также с фотографиями и видео в это время.</p>
<p>Эти осмотры, даже если они проводятся удаленно, очень важны для процесса заживления.</p>`
        },
        fr: {
            question: "Comment se déroule le processus de contrôle postopératoire et à quelle fréquence dois-je venir pour un contrôle ?",
            answer: `<p>Les contrôles postopératoires après une rhinoplastie sont très importants.</p>
<p>Certains problèmes qui peuvent être détectés tôt lors du processus de contrôle peuvent être résolus avec des médicaments appropriés, des massages ou des interventions mineures similaires. Cependant, des processus plus complexes peuvent être nécessaires dans les cas retardés.</p>
<p>Par conséquent, il est important de ne pas interrompre vos contrôles et de les suivre régulièrement.</p>
<p>Le suivi des processus de contrôle et la garantie de la continuité relèvent de la responsabilité du patient.</p>
<p>Le calendrier de contrôle de routine pour nos patients est le suivant :</p>
<ul>
<li>1ère semaine (retrait du tampon et du plâtre)</li>
<li>2ème semaine (retrait des bandes et évaluation générale)</li>
<li>1,5 mois</li>
<li>3 mois</li>
<li>6 mois</li>
<li>12 mois</li>
<li>24 mois</li>
</ul>
<p>Si le contrôle physique n'est pas possible pour les patients en dehors d'Istanbul ou à l'étranger, nous demandons aux patients de suivre les délais indiqués ci-dessus et de nous envoyer leur état actuel par écrit et en plus avec des photos et des vidéos à ces moments-là.</p>
<p>Ces contrôles, même s'ils sont effectués à distance, sont très importants pour le processus de guérison.</p>`
        },
        it: {
            question: "Come si svolge il processo di controllo post-operatorio e quanto spesso devo venire per un controllo?",
            answer: `<p>I controlli post-operatori dopo la rinoplastica sono molto importanti.</p>
<p>Alcuni problemi che possono essere rilevati precocemente durante il processo di controllo possono essere risolti con farmaci appropriati, massaggi o simili interventi minori. Tuttavia, in casi ritardati potrebbero essere necessari processi più complessi.</p>
<p>Pertanto, è importante non interrompere i controlli e seguirli regolarmente.</p>
<p>Seguire i processi di controllo e garantire la continuità è responsabilità del paziente.</p>
<p>Il programma di controllo di routine per i nostri pazienti è il seguente:</p>
<ul>
<li>1a settimana (rimozione del tampone e del gesso)</li>
<li>2a settimana (rimozione dei cerotti e valutazione generale)</li>
<li>1,5 mesi</li>
<li>3 mesi</li>
<li>6 mesi</li>
<li>12 mesi</li>
<li>24 mesi</li>
</ul>
<p>Se il controllo fisico non è possibile per i pazienti fuori Istanbul o all'estero, chiediamo ai pazienti di seguire i tempi sopra elencati e di inviarci il loro stato attuale per iscritto e inoltre con foto e video in questi momenti.</p>
<p>Questi controlli, anche se effettuati a distanza, sono molto importanti per il processo di guarigione.</p>`
        },
        ro: {
            question: "Cum decurge procesul de control postoperator și cât de des ar trebui să vin la control?",
            answer: `<p>Controalele postoperatorii după rinoplastie sunt foarte importante.</p>
<p>Unele probleme care pot fi detectate devreme în timpul procesului de control pot fi rezolvate cu medicamente adecvate, masaj sau intervenții minore similare. Cu toate acestea, pot fi necesare procese mai complexe în cazurile întârziate.</p>
<p>Prin urmare, este important să nu întrerupeți controalele și să le urmați în mod regulat.</p>
<p>Urmărirea proceselor de control și asigurarea continuității este responsabilitatea pacientului.</p>
<p>Programul de control de rutină pentru pacienții noștri este următorul:</p>
<ul>
<li>1 săptămână (îndepărtarea tamponului și a ghipsului)</li>
<li>2 săptămâni (îndepărtarea benzilor și evaluarea generală)</li>
<li>1,5 luni</li>
<li>3 luni</li>
<li>6 luni</li>
<li>12 luni</li>
<li>24 luni</li>
</ul>
<p>Dacă controlul fizic nu este posibil pentru pacienții din afara Istanbulului sau din străinătate, rugăm pacienții să respecte timpii enumerați mai sus și să ne trimită starea lor actuală în scris și suplimentar cu fotografii și videoclipuri în aceste momente.</p>
<p>Aceste controale, chiar dacă sunt efectuate de la distanță, sunt foarte importante pentru procesul de vindecare.</p>`
        },
        hu: {
            question: "Hogyan zajlik a műtét utáni ellenőrzési folyamat, és milyen gyakran kell ellenőrzésre jönnöm?",
            answer: `<p>Az orrplasztika utáni ellenőrzések nagyon fontosak.</p>
<p>Az ellenőrzési folyamat során korán észlelhető problémák megfelelő gyógyszeres kezeléssel, masszázzsal vagy hasonló kisebb beavatkozásokkal megoldhatók. Késedelmes esetekben azonban összetettebb folyamatokra lehet szükség.</p>
<p>Ezért fontos, hogy ne szakítsa meg az ellenőrzéseket, és rendszeresen kövesse azokat.</p>
<p>Az ellenőrzési folyamatok nyomon követése és a folyamatosság biztosítása a beteg felelőssége.</p>
<p>Betegeink rutinszerű ellenőrzési ütemterve a következő:</p>
<ul>
<li>1. hét (tampon és gipsz eltávolítása)</li>
<li>2. hét (szalagok eltávolítása és általános értékelés)</li>
<li>1,5 hónap</li>
<li>3 hónap</li>
<li>6 hónap</li>
<li>12 hónap</li>
<li>24 hónap</li>
</ul>
<p>Ha a fizikai ellenőrzés nem lehetséges Isztambulon kívüli vagy külföldi betegek számára, kérjük a betegeket, hogy kövessék a fent felsorolt időpontokat, és írásban, valamint fényképekkel és videókkal küldjék el nekünk aktuális állapotukat ezekben az időpontokban.</p>
<p>Ezek az ellenőrzések, még ha távolról is történnek, nagyon fontosak a gyógyulási folyamat szempontjából.</p>`
        }
    },
    {
        id: "guarantee",
        tr: {
            question: "Ameliyat sonucu için garanti verir misiniz?",
            answer: `<p>Sadece rinoplasti ameliyatı için değil, hiç bir ameliyat için size sonuç garantisi verilemez.</p>
<p>Ameliyatta yapılan müdahale kadar ameliyat sonrasındaki iyileşme süreci de oldukça önemlidir. Bu süreçte yaşanabilecek, farkedilen ya da farkedilemeyecek bazı sorunlar iyileşme sürecinde olumsuz bir durum ortaya çıkartabilir ve burun istenen sonuca ulaşamayabilir.</p>
<p>Yaklaşık %5 ihtimalle ameliyat sonrasında revizyon cerrahi gerektirebilecek bir durum oluşabilir.</p>
<p>Size garanti verebileceğimiz tek şey, ameliyat sürecinde hekim ve ekibi olarak sizin için en iyisini sağlayabilmek için maksimum gayretin sarfedileceğidir.</p>
<p>Olumsuz senaryoları sizi üzmek ya da ameliyat kararından vazgeçmeniz için değil, bir gerçeklik olduğu için size mutlaka anlatıyoruz.</p>`
        },
        en: {
            question: "Do you give a guarantee for the surgery result?",
            answer: `<p>No result guarantee can be given to you for any surgery, not just for rhinoplasty surgery.</p>
<p>The healing process after surgery is as important as the intervention performed in surgery. Some problems that may be experienced, noticed or unnoticed in this process may cause a negative situation in the healing process and the nose may not reach the desired result.</p>
<p>There is a possibility of approximately 5% that a situation requiring revision surgery may occur after surgery.</p>
<p>The only thing we can guarantee you is that maximum effort will be made to provide the best for you as a physician and his team during the surgery process.</p>
<p>We tell you negative scenarios not to upset you or to make you give up your surgery decision, but because it is a reality.</p>`
        },
        de: {
            question: "Geben Sie eine Garantie für das Operationsergebnis?",
            answer: `<p>Für keine Operation, nicht nur für die Nasenkorrektur, kann Ihnen eine Ergebnisgarantie gegeben werden.</p>
<p>Der Heilungsprozess nach der Operation ist genauso wichtig wie der Eingriff selbst. Einige Probleme, die in diesem Prozess auftreten, bemerkt oder unbemerkt bleiben können, können zu einer negativen Situation im Heilungsprozess führen und die Nase erreicht möglicherweise nicht das gewünschte Ergebnis.</p>
<p>Mit einer Wahrscheinlichkeit von ca. 5% kann nach der Operation eine Situation eintreten, die eine Revisionsoperation erfordert.</p>
<p>Das Einzige, was wir Ihnen garantieren können, ist, dass wir als Arzt und sein Team während des Operationsprozesses maximale Anstrengungen unternehmen werden, um das Beste für Sie zu erreichen.</p>
<p>Wir erzählen Ihnen negative Szenarien nicht, um Sie zu verärgern oder Sie von Ihrer Operationsentscheidung abzubringen, sondern weil es eine Realität ist.</p>`
        },
        es: {
            question: "¿Dan garantía por el resultado de la cirugía?",
            answer: `<p>No se le puede dar garantía de resultado para ninguna cirugía, no solo para la rinoplastia.</p>
<p>El proceso de curación después de la cirugía es tan importante como la intervención realizada en la cirugía. Algunos problemas que pueden experimentarse, notarse o pasar desapercibidos en este proceso pueden causar una situación negativa en el proceso de curación y la nariz puede no alcanzar el resultado deseado.</p>
<p>Existe una posibilidad de aproximadamente el 5% de que ocurra una situación que requiera cirugía de revisión después de la cirugía.</p>
<p>Lo único que podemos garantizarle es que se hará el máximo esfuerzo para brindarle lo mejor como médico y su equipo durante el proceso de cirugía.</p>
<p>Le contamos los escenarios negativos no para molestarlo o para que renuncie a su decisión de cirugía, sino porque es una realidad.</p>`
        },
        ru: {
            question: "Даете ли вы гарантию на результат операции?",
            answer: `<p>Никакой гарантии результата вам не может быть дано ни на одну операцию, не только на ринопластику.</p>
<p>Процесс заживления после операции так же важен, как и вмешательство, выполненное во время операции. Некоторые проблемы, которые могут возникнуть, быть замеченными или незамеченными в этом процессе, могут вызвать негативную ситуацию в процессе заживления, и нос может не достичь желаемого результата.</p>
<p>Существует вероятность около 5%, что после операции может возникнуть ситуация, требующая повторной операции.</p>
<p>Единственное, что мы можем вам гарантировать, это то, что во время операции будут приложены максимальные усилия, чтобы обеспечить для вас наилучшее как врачом, так и его командой.</p>
<p>Мы рассказываем вам негативные сценарии не для того, чтобы расстроить вас или заставить отказаться от решения об операции, а потому, что это реальность.</p>`
        },
        fr: {
            question: "Donnez-vous une garantie pour le résultat de la chirurgie ?",
            answer: `<p>Aucune garantie de résultat ne peut vous être donnée pour aucune chirurgie, pas seulement pour la rhinoplastie.</p>
<p>Le processus de guérison après la chirurgie est aussi important que l'intervention effectuée lors de la chirurgie. Certains problèmes qui peuvent être vécus, remarqués ou inaperçus dans ce processus peuvent provoquer une situation négative dans le processus de guérison et le nez peut ne pas atteindre le résultat souhaité.</p>
<p>Il y a une probabilité d'environ 5% qu'une situation nécessitant une chirurgie de révision puisse survenir après la chirurgie.</p>
<p>La seule chose que nous pouvons vous garantir est qu'un effort maximal sera fait pour vous fournir le meilleur en tant que médecin et son équipe pendant le processus de chirurgie.</p>
<p>Nous vous racontons des scénarios négatifs non pas pour vous contrarier ou pour vous faire renoncer à votre décision de chirurgie, mais parce que c'est une réalité.</p>`
        },
        it: {
            question: "Date una garanzia per il risultato dell'intervento?",
            answer: `<p>Non può essere data alcuna garanzia di risultato per nessun intervento chirurgico, non solo per la rinoplastica.</p>
<p>Il processo di guarigione dopo l'intervento è importante quanto l'intervento eseguito durante l'operazione. Alcuni problemi che possono essere vissuti, notati o inosservati in questo processo possono causare una situazione negativa nel processo di guarigione e il naso potrebbe non raggiungere il risultato desiderato.</p>
<p>C'è una probabilità di circa il 5% che si verifichi una situazione che richieda un intervento di revisione dopo l'operazione.</p>
<p>L'unica cosa che possiamo garantirti è che verrà fatto il massimo sforzo per offrirti il meglio come medico e la sua squadra durante il processo chirurgico.</p>
<p>Ti raccontiamo scenari negativi non per turbarti o per farti rinunciare alla tua decisione di operarti, ma perché è una realtà.</p>`
        },
        ro: {
            question: "Oferiți garanție pentru rezultatul operației?",
            answer: `<p>Nu vi se poate oferi nicio garanție a rezultatului pentru nicio intervenție chirurgicală, nu doar pentru rinoplastie.</p>
<p>Procesul de vindecare după operație este la fel de important ca intervenția efectuată în timpul operației. Unele probleme care pot fi experimentate, observate sau neobservate în acest proces pot cauza o situație negativă în procesul de vindecare, iar nasul poate să nu ajungă la rezultatul dorit.</p>
<p>Există o probabilitate de aproximativ 5% ca o situație care necesită o intervenție chirurgicală de revizie să apară după operație.</p>
<p>Singurul lucru pe care vi-l putem garanta este că se va depune efortul maxim pentru a vă oferi tot ce este mai bun ca medic și echipa sa în timpul procesului chirurgical.</p>
<p>Vă spunem scenarii negative nu pentru a vă supăra sau pentru a vă face să renunțați la decizia de a vă opera, ci pentru că este o realitate.</p>`
        },
        hu: {
            question: "Vállal garanciát a műtét eredményére?",
            answer: `<p>Semmilyen műtétre, nem csak az orrplasztikára, nem adható eredménygarancia.</p>
<p>A műtét utáni gyógyulási folyamat ugyanolyan fontos, mint a műtét során végzett beavatkozás. Ebben a folyamatban tapasztalható, észrevehető vagy észrevétlen problémák negatív helyzetet idézhetnek elő a gyógyulási folyamatban, és az orr nem biztos, hogy eléri a kívánt eredményt.</p>
<p>Körülbelül 5% a valószínűsége annak, hogy a műtét után olyan helyzet áll elő, amely revíziós műtétet igényel.</p>
<p>Az egyetlen dolog, amit garantálni tudunk Önnek, hogy a műtéti folyamat során orvosként és csapataként maximális erőfeszítést teszünk annak érdekében, hogy a legjobbat nyújtsuk Önnek.</p>
<p>A negatív forgatókönyveket nem azért mondjuk el, hogy elszomorítsuk Önt, vagy hogy feladja a műtéti döntését, hanem azért, mert ez a valóság.</p>`
        }
    },
    {
        id: "packing_removal",
        tr: {
            question: "Burun içindeki tampon ne zaman çıkartılır?",
            answer: `<p>Bu işlem için rutin zamanlama ameliyat sonrası ilk kontrol olan 5-7 gündür.</p>
<p>Ancak bazı durumlarda burundaki tamponun daha erken alınması gerekebilir ya da erken alınması uygun olabilir.</p>
<p>Bu durumda sadece tampon alınması için size daha erken bir randevu planlanacaktır.</p>`
        },
        en: {
            question: "When is the packing inside the nose removed?",
            answer: `<p>The routine timing for this procedure is 5-7 days, which is the first check-up after surgery.</p>
<p>However, in some cases, it may be necessary or appropriate to remove the packing in the nose earlier.</p>
<p>In this case, an earlier appointment will be scheduled for you just for packing removal.</p>`
        },
        de: {
            question: "Wann wird die Tamponade in der Nase entfernt?",
            answer: `<p>Der routinemäßige Zeitpunkt für diesen Eingriff beträgt 5-7 Tage, was die erste Kontrolle nach der Operation ist.</p>
<p>In einigen Fällen kann es jedoch notwendig oder angemessen sein, die Tamponade in der Nase früher zu entfernen.</p>
<p>In diesem Fall wird für Sie ein früherer Termin nur zur Entfernung der Tamponade vereinbart.</p>`
        },
        es: {
            question: "¿Cuándo se retira el taponamiento dentro de la nariz?",
            answer: `<p>El momento de rutina para este procedimiento es de 5 a 7 días, que es el primer control después de la cirugía.</p>
<p>Sin embargo, en algunos casos, puede ser necesario o apropiado retirar el taponamiento de la nariz antes.</p>
<p>En este caso, se programará una cita anterior para usted solo para retirar el taponamiento.</p>`
        },
        ru: {
            question: "Когда удаляют тампоны из носа?",
            answer: `<p>Обычное время для этой процедуры составляет 5-7 дней, что является первым осмотром после операции.</p>
<p>Однако в некоторых случаях может потребоваться или быть целесообразным удалить тампоны из носа раньше.</p>
<p>В этом случае вам будет назначена более ранняя встреча только для удаления тампонов.</p>`
        },
        fr: {
            question: "Quand la mèche dans le nez est-elle retirée ?",
            answer: `<p>Le moment habituel pour cette procédure est de 5 à 7 jours, ce qui correspond au premier contrôle après la chirurgie.</p>
<p>Cependant, dans certains cas, il peut être nécessaire ou approprié de retirer la mèche dans le nez plus tôt.</p>
<p>Dans ce cas, un rendez-vous plus tôt sera programmé pour vous juste pour le retrait de la mèche.</p>`
        },
        it: {
            question: "Quando viene rimosso il tampone all'interno del naso?",
            answer: `<p>La tempistica di routine per questa procedura è di 5-7 giorni, che è il primo controllo dopo l'intervento.</p>
<p>Tuttavia, in alcuni casi, potrebbe essere necessario o appropriato rimuovere il tampone nel naso prima.</p>
<p>In questo caso, verrà fissato un appuntamento anticipato solo per la rimozione del tampone.</p>`
        },
        ro: {
            question: "Când se scoate tamponul din nas?",
            answer: `<p>Momentul de rutină pentru această procedură este de 5-7 zile, care este primul control după operație.</p>
<p>Cu toate acestea, în unele cazuri, poate fi necesar sau adecvat să se scoată tamponul din nas mai devreme.</p>
<p>În acest caz, vi se va programa o întâlnire mai devreme doar pentru scoaterea tamponului.</p>`
        },
        hu: {
            question: "Mikor távolítják el az orrban lévő tampont?",
            answer: `<p>Ennek az eljárásnak a rutinszerű időzítése 5-7 nap, ami a műtét utáni első ellenőrzés.</p>
<p>Bizonyos esetekben azonban szükséges vagy helyénvaló lehet az orrban lévő tampon korábbi eltávolítása.</p>
<p>Ebben az esetben korábbi időpontot egyeztetünk Önnel, csak a tampon eltávolítására.</p>`
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

            console.log(`Added ${newFAQs.length} FAQs to ${lang}`);
        } else {
            console.log(`Could not find tab8 for ${lang}`);
        }
    } else {
        console.log(`Could not find language block for ${lang}`);
    }
});

fs.writeFileSync(contentPath, content, 'utf8');
console.log('Content updated successfully.');
