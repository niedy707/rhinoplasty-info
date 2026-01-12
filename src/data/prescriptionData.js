
export const MASTER_DRUGS = [
    {
        id: 'drug_1',
        name: 'ARVELES 25 MG.20 FILM TABLET',
        boxCount: '1',
        method: 'Ağızdan(Oral)',
        dailyAmount: '3',
        dose: '1',
        note: 'İlk 3 gün kullanınız. Ağrı yoksa devam etmeyiniz.',
        active: true
    },
    {
        id: 'drug_2',
        name: 'CEFAKS 500 MG.14 FILM TABLET',
        boxCount: '1',
        method: 'Ağızdan(Oral)',
        dailyAmount: '2',
        dose: '1',
        note: '1 hafta, günde 2 sefer',
        subNote: 'Reçetede 2 adet antibiyotik vardır.',
        active: true
    },
    {
        id: 'drug_cipro',
        name: 'CIPRO 500 MG 14 TABLET',
        boxCount: '1',
        method: 'Ağızdan(Oral)',
        dailyAmount: '2',
        dose: '1',
        note: 'Her ikisi de kullanılacaktır.',
        isSubItem: true,
        active: true
    },
    {
        id: 'drug_3',
        name: 'AERIUS 5 MG FILM KAPLI TABLET (20 TABLET)',
        boxCount: '1',
        method: 'Ağızdan(Oral)',
        dailyAmount: '1',
        dose: '1',
        note: '10 gün, günde 1 adet.',
        active: true
    },
    {
        id: 'drug_4',
        name: 'THIOCILLINE GOZ POMADI',
        boxCount: '1',
        method: 'Cilt',
        dailyAmount: '3',
        dose: '2',
        note: '2 hafta süre ile burun ucundaki dikiş bölgesine sürülecek. (Göze değil)',
        active: true
    },
    {
        id: 'drug_5',
        name: 'OTRIVINE DOZ AYARLI BURUN SPREYI',
        boxCount: '1',
        method: 'Burun',
        dailyAmount: '3',
        dose: '2',
        note: '(5 gün) - Bu 2 sprey 1 ay süre ile kullanılacak.',
        specialTag: '5 gün',
        active: true
    },
    {
        id: 'drug_6',
        name: 'Quixx Acute nazal yıkama spreyi',
        boxCount: 'DIB.',
        method: 'S:5x2. (1 ay süre ile)',
        dailyAmount: '',
        dose: '',
        note: '1 ay sonrasında ise gerekli durumlarda devam edilir.',
        active: true
    },
    {
        id: 'drug_7',
        name: 'Nazalnem burun spreyi',
        boxCount: 'DIB.',
        method: 'S:5x2. (1 ay süre ile)',
        dailyAmount: '',
        dose: '',
        note: '',
        active: true
    },
    {
        id: 'drug_enfla',
        name: 'Enfla-C kapsül',
        boxCount: 'DIB.',
        method: 'S:2x1. (1 ay süre ile)',
        dailyAmount: '',
        dose: '',
        note: 'Bu ilacı ödeminizin daha hızlı geçmesi için kullanmanızı ÖNERİYORUM.',
        isExtra: true,
        active: true
    }
];

export const DEFAULT_TEMPLATE = {
    doctorName: "Uzm. Dr. ibrahim YAGCI",
    doctorTitle: "",
    institution: "Özel Muayenehane",
    department: "KBB Klinik",
    paymentType: "ÜCRETLİ",
    diagnosis: [
        "J34.2 Nazal septum deviasyonu",
        "J30.3 Allerjik rinit, diğer",
        "J34.8 Burun ve nazal sinüslerin diğer tanımlanmış bozuklukları"
    ],
    drugs: [
        'drug_1', 'drug_2', 'drug_cipro', 'drug_3', 'drug_4', 'drug_5', 'drug_6', 'drug_7', 'drug_enfla'
    ],
    footerNotes: [
        { type: 'danger', text: "!!! Tüm ilaçlar (Spreyler dahil) ameliyat sonrası ilk gün sabah kullanılmaya başlanacaktır." },
        { type: 'info', text: "Penisilin allerjiniz ya da başka bir ilaç allerjiniz var ise mutlaka hekiminize ya da Eczacınıza bilgi veriniz." },
        { type: 'info', text: "Burundaki tampon çıktıktan sonra sprey ile yeterli temizlik sağlayamadığınızı hissediyorsanız, isterseniz şişe formunda olan burun yıkama kullanabilirsiniz. (Okyanus suyu yıkama / Nazorinse vb) (Şişe formundaki yıkama ilaçları daha volümlü olduğunda daha etkili temizlik sağlar.) Kullandığınız yıkama ilacının markasının bir önemi yoktur." },
        { type: 'info', text: "Otrivine spreyi 5 günden uzun süre KESİNLİKLE kullanmayınız." },
        { type: 'info', text: "Göz pomadını gözünüze değil ameliyat bölgesindeki dikiş yerine sürünüz." }
    ]
};
