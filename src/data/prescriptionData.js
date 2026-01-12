
export const MASTER_DRUGS = [
    {
        id: 'drug_1',
        name: 'CEFAKS 500 MG',
        form: 'Tablet',
        count: '14 Tablet',
        instructions: 'Sabah - Akşam (Günde 2 tane)',
        active: true
    },
    {
        id: 'drug_2',
        name: 'ARVELES 25 MG',
        form: 'Tablet',
        count: '20 Tablet',
        instructions: 'Günde 3 tane (Ağrı olursa)',
        active: true
    },
    {
        id: 'drug_3',
        name: 'BILAXTEN 20 MG',
        form: 'Tablet',
        count: '20 Tablet',
        instructions: 'Günde 1 tane',
        active: true
    },
    {
        id: 'drug_4',
        name: 'THIOCILLINE',
        form: 'Göz Pomadı',
        count: '1 Adet',
        instructions: 'Günde 3 defa dikişlerin üzerine',
        active: true
    },
    {
        id: 'drug_5',
        name: 'OTRIVINE MENTHOL',
        form: 'Burun Spreyi',
        count: '1 Adet',
        instructions: 'Günde 3 defa (Sadece 5 gün)',
        active: true
    },
    {
        id: 'drug_6',
        name: 'STERİMAR (DENİZ SUYU)',
        form: 'Sprey',
        count: '1 Adet',
        instructions: 'Günde 5 defa (Yıkama için)',
        active: true
    },
    {
        id: 'drug_7',
        name: 'NAZALNEM',
        form: 'Damla',
        count: '1 Adet',
        instructions: 'Günde 5 defa (Nemlendirici)',
        active: true
    }
];

export const DEFAULT_TEMPLATE = {
    doctorName: "Op. Dr. İbrahim YAĞCI",
    doctorTitle: "Kulak, Burun, Boğaz Hastalıkları Uzmanı",
    diplomaNo: "155375",
    institution: "Özel Muayenehane",
    drugs: [
        'drug_1', 'drug_2', 'drug_3', 'drug_4', 'drug_5', 'drug_6', 'drug_7'
    ]
};
