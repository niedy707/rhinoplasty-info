
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MASTER_DRUGS, DEFAULT_TEMPLATE } from '../data/prescriptionData';
import { useAdmin } from '../context/AdminContext';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const EditorPanel = styled.div`
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media print {
    display: none;
  }
`;

const PreviewPanel = styled.div`
  flex: 1;
  background: #f0f0f0; /* Contrast bg for preview area */
  padding: 20px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  
  @media print {
    display: block;
    padding: 0;
    margin: 0;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
`;

const A4Page = styled.div`
  width: 210mm;
  min-height: 297mm;
  background: white;
  padding: 15mm; /* reduced padding for print */
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  font-family: 'Times New Roman', serif;
  position: relative;
  box-sizing: border-box;

  @media print {
    box-shadow: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 10mm; 
  }

  /* Scale down for mobile view */
  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: top left;
    margin-bottom: -40%; /* Compensate for empty space */
  }
`;

const Header = styled.div`
  text-align: center;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const DoctorName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #000;
  text-transform: uppercase;
`;

const DoctorTitle = styled.h2`
  font-size: 14px;
  margin: 5px 0 0 0;
  font-weight: normal;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 5px;
`;

const PatientInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const InputField = styled.input`
  border: none;
  border-bottom: 1px dotted #999;
  font-family: inherit;
  font-size: 16px;
  width: 200px;
  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
  background: transparent;
`;

const RxSymbol = styled.div`
  font-size: 48px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 10px;
`;

const DrugList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DrugItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding-bottom: 5px;
  border-bottom: 1px dashed #eee;
`;

const DrugNameLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const DrugName = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const DrugCount = styled.span`
  font-size: 14px;
`;

const Instructions = styled.div`
  font-style: italic;
  margin-top: 2px;
`;

const Footer = styled.div`
  margin-top: auto;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SignatureBlock = styled.div`
  text-align: center;
  width: 200px;
  border-top: 1px solid #000;
  padding-top: 5px;
  font-size: 12px;
`;

const Button = styled.button`
  background: ${props => props.$danger ? '#e74c3c' : props.$primary ? '#3498db' : '#f8f9fa'};
  color: ${props => props.$danger || props.$primary ? 'white' : '#333'};
  border: 1px solid rgba(0,0,0,0.1);
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.95);
    transform: translateY(-1px);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const ControlSection = styled.section`
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 8px;

  h3 {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 16px;
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 5px;
    display: inline-block;
  }
`;

const DBList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DBItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #eee;

  &:hover {
    background: #eef2f7;
  }
`;

const PrescriptionGenerator = () => {
    // State
    const [patientName, setPatientName] = useState('');
    const [date, setDate] = useState(new Date().toLocaleDateString('tr-TR'));
    const [masterDrugs, setMasterDrugs] = useState([]);
    const [activeDrugs, setActiveDrugs] = useState([]);
    const [showDBModal, setShowDBModal] = useState(false);
    const [newDrug, setNewDrug] = useState({ name: '', form: '', count: '', instructions: '' });

    // Load Database and Default Template
    useEffect(() => {
        // Load Master Database from LocalStorage or Default
        const savedDB = localStorage.getItem('rhino_master_drugs');
        if (savedDB) {
            setMasterDrugs(JSON.parse(savedDB));
        } else {
            setMasterDrugs(MASTER_DRUGS);
            localStorage.setItem('rhino_master_drugs', JSON.stringify(MASTER_DRUGS));
        }

        // Load Default Template
        // We filter master drugs by the IDs in DEFAULT_TEMPLATE
        const defaultList = DEFAULT_TEMPLATE.drugs.map(id =>
            (savedDB ? JSON.parse(savedDB) : MASTER_DRUGS).find(d => d.id === id)
        ).filter(Boolean);
        setActiveDrugs(defaultList);
    }, []);

    // Handlers
    const handlePrint = () => {
        window.print();
    };

    const addDrugToPrescription = (drug) => {
        if (!activeDrugs.find(d => d.id === drug.id)) {
            setActiveDrugs([...activeDrugs, drug]);
        }
    };

    const removeDrug = (id) => {
        setActiveDrugs(activeDrugs.filter(d => d.id !== id));
    };

    const moveDrug = (index, direction) => {
        const newDrugs = [...activeDrugs];
        if (direction === 'up' && index > 0) {
            [newDrugs[index], newDrugs[index - 1]] = [newDrugs[index - 1], newDrugs[index]];
        } else if (direction === 'down' && index < newDrugs.length - 1) {
            [newDrugs[index], newDrugs[index + 1]] = [newDrugs[index + 1], newDrugs[index]];
        }
        setActiveDrugs(newDrugs);
    };

    const handleAddNewDrugToDB = () => {
        if (!newDrug.name) return;
        const newId = `drug_custom_${Date.now()}`;
        const drugToAdd = { ...newDrug, id: newId, active: true };
        const updatedMaster = [...masterDrugs, drugToAdd];
        setMasterDrugs(updatedMaster);
        localStorage.setItem('rhino_master_drugs', JSON.stringify(updatedMaster));
        setNewDrug({ name: '', form: '', count: '', instructions: '' });
        setShowDBModal(false);
    };

    return (
        <Container>
            <EditorPanel>
                <h2>Reçete Düzenleyici</h2>

                <ControlSection>
                    <h3>1. Hasta Bilgileri</h3>
                    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                        <label>
                            Hasta Adı Soyadı:
                            <input
                                type="text"
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                                placeholder="Örn: Ahmet Yılmaz"
                            />
                        </label>
                        <label>
                            Tarih:
                            <input
                                type="text"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                            />
                        </label>
                    </div>
                </ControlSection>

                <ControlSection>
                    <h3>2. Reçetedeki İlaçlar</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {activeDrugs.map((drug, index) => (
                            <div key={drug.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8f9fa', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
                                <div style={{ flex: 1 }}>
                                    <strong>{index + 1}. {drug.name}</strong>
                                    <div style={{ fontSize: '12px', color: '#666' }}>{drug.instructions}</div>
                                </div>
                                <ButtonGroup>
                                    <Button onClick={() => moveDrug(index, 'up')} disabled={index === 0}>↑</Button>
                                    <Button onClick={() => moveDrug(index, 'down')} disabled={index === activeDrugs.length - 1}>↓</Button>
                                    <Button $danger onClick={() => removeDrug(drug.id)}>Sil</Button>
                                </ButtonGroup>
                            </div>
                        ))}
                        {activeDrugs.length === 0 && <div style={{ color: '#999', textAlign: 'center' }}>Listede ilaç yok.</div>}
                    </div>
                </ControlSection>

                <ControlSection>
                    <h3>3. İlaç Veritabanı</h3>
                    <Button $primary onClick={() => setShowDBModal(!showDBModal)} style={{ marginBottom: '10px' }}>+ Yeni İlaç Ekle</Button>

                    {showDBModal && (
                        <div style={{ background: '#eef2f7', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                            <input placeholder="İlaç Adı" value={newDrug.name} onChange={e => setNewDrug({ ...newDrug, name: e.target.value })} style={{ width: '100%', marginBottom: '5px', padding: '5px' }} />
                            <input placeholder="Form (Tablet, Sprey vb.)" value={newDrug.form} onChange={e => setNewDrug({ ...newDrug, form: e.target.value })} style={{ width: '100%', marginBottom: '5px', padding: '5px' }} />
                            <input placeholder="Adet (14 Tablet vb.)" value={newDrug.count} onChange={e => setNewDrug({ ...newDrug, count: e.target.value })} style={{ width: '100%', marginBottom: '5px', padding: '5px' }} />
                            <input placeholder="Kullanım Talimatı" value={newDrug.instructions} onChange={e => setNewDrug({ ...newDrug, instructions: e.target.value })} style={{ width: '100%', marginBottom: '5px', padding: '5px' }} />
                            <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                                <Button $primary onClick={handleAddNewDrugToDB}>Kaydet</Button>
                                <Button onClick={() => setShowDBModal(false)}>İptal</Button>
                            </div>
                        </div>
                    )}

                    <DBList>
                        {masterDrugs.map(drug => (
                            <DBItem key={drug.id}>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>{drug.name}</div>
                                    <div style={{ fontSize: '11px', color: '#666' }}>{drug.instructions}</div>
                                </div>
                                <Button
                                    $primary
                                    size="small"
                                    disabled={activeDrugs.some(d => d.id === drug.id)}
                                    onClick={() => addDrugToPrescription(drug)}
                                >
                                    {activeDrugs.some(d => d.id === drug.id) ? 'Eklendi' : 'Ekle'}
                                </Button>
                            </DBItem>
                        ))}
                    </DBList>
                </ControlSection>

                <Button onClick={handlePrint} $primary style={{ padding: '15px', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}>
                    🖨️ Yazdır (PDF)
                </Button>

            </EditorPanel>

            <PreviewPanel>
                <A4Page id="prescription-preview">
                    <Header>
                        <DoctorName>{DEFAULT_TEMPLATE.doctorName}</DoctorName>
                        <DoctorTitle>{DEFAULT_TEMPLATE.doctorTitle}</DoctorTitle>
                        <InfoRow>
                            <span>Dip. No: {DEFAULT_TEMPLATE.diplomaNo}</span>
                            <span>{DEFAULT_TEMPLATE.institution}</span>
                        </InfoRow>
                    </Header>

                    <PatientInfoSection>
                        <div>
                            <strong>Sayın: </strong>
                            <span>{patientName}</span>
                        </div>
                        <div>
                            <strong>Tarih: </strong>
                            <span>{date}</span>
                        </div>
                    </PatientInfoSection>

                    <RxSymbol>Rx</RxSymbol>

                    <DrugList>
                        {activeDrugs.map((drug, index) => (
                            <DrugItem key={drug.id}>
                                <DrugNameLine>
                                    <DrugName>{index + 1}. {drug.name} {drug.form}</DrugName>
                                    <DrugCount>{drug.count}</DrugCount>
                                </DrugNameLine>
                                <Instructions>S: {drug.instructions}</Instructions>
                            </DrugItem>
                        ))}
                    </DrugList>

                    <Footer>
                        <div style={{ fontSize: '10px', color: '#999' }}>
                            Bu reçete bilgilendirme amaçlıdır. <br />
                            Rinoplasti Sonrası İlaç Kullanım Kılavuzu
                        </div>
                        <SignatureBlock>
                            Kaşe / İmza
                            <br /><br /><br />
                        </SignatureBlock>
                    </Footer>
                </A4Page>
            </PreviewPanel>
        </Container>
    );
};

export default PrescriptionGenerator;
