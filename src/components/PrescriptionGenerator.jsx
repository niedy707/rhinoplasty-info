
import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { MASTER_DRUGS, DEFAULT_TEMPLATE } from '../data/prescriptionData';

// Global Print Styles
const PrintStyles = createGlobalStyle`
  @media print {
    @page { margin: 0; size: A4; }
    body { padding: 0 !important; background: white !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .print-hide { display: none !important; }
    #root, .app-container { width: 100%; max-width: none; margin: 0; box-shadow: none; }
    .sticky-top-section, .app-header, .tab-navigation, .app-footer, .sticky-bottom-bar, .mobile-tab-select, .language-bar { display: none !important; }
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1400px;
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
  max-width: 400px; /* Keep editor narrow on desktop */
`;

const PreviewPanel = styled.div`
  flex: 2;
  background: #525659; /* Adobe Reader gray */
  padding: 40px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  
  @media print {
    display: block;
    padding: 0;
    margin: 0;
    background: white;
    width: 100%;
    height: 100%;
    position: static;
  }
`;

const A4Page = styled.div`
  width: 210mm;
  min-height: 297mm;
  background: white;
  padding: 5mm 15mm; /* Reduced top/bottom padding from 10mm to 5mm */
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  font-family: 'Times New Roman', serif;
  position: relative;
  box-sizing: border-box;
  color: #000;
  font-size: 11pt;

  @media print {
    box-shadow: none;
    width: 210mm;
    height: 297mm;
    margin: 0;
    padding: 5mm 15mm !important;
    overflow: hidden; /* Force hide overflow */
  }
`;

/* ... intermediate code ... */



const HeaderBox = styled.div`
  border: 2px solid #000;
  padding: 8px 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 10pt;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  
  div {
    display: flex;
    align-items: center;
  }
  span.label { width: 90px; }
  span.dots { margin-right: 5px; }
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    display: flex;
  }
  span.label { margin-right: 5px; width: 80px; text-align: right; }
`;

const DrugTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 8pt;
  
  th {
     text-align: left;
     padding-bottom: 5px;
     border-bottom: 1px solid #000;
     font-weight: bold;
     font-size: 9pt;
  }

  td {
    padding: 2px 0;
    vertical-align: top;
  }

  tr.drug-row td {
    border-bottom: none; 
  }
`;

const NoteArrow = styled.div`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  margin-left: 10px;
  font-size: 8pt;
  border: 1px solid #000;
  padding: 3px;
  background: white;
  z-index: 10;
  
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    height: 1px;
    width: 15px;
    background: #000;
  }
`;

const DiagnosisSection = styled.div`
  margin-bottom: 10px;
  font-size: 10pt;
  line-height: 1.2;
  
  div.title {
    font-weight: bold;
    margin-bottom: 2px;
    text-decoration: underline;
  }
`;

// ...

const InfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
  margin-top: 4px;
  font-size: 8pt;
  font-weight: bold;
  color: ${props => props.type === 'danger' ? 'red' : '#333'};
  line-height: 1.2;
  
  .icon {
    background: #7f8c8d;
    color: white;
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    font-size: 10px;
    flex-shrink: 0;
    margin-top: 2px;
  }
    
  .text {
     text-decoration: ${props => props.type === 'danger' ? 'underline' : 'none'};
  }
`;

const StampBox = styled.div`
  border: 1px dashed #ccc;
  width: 200px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
  margin-left: auto;
  margin-top: 20px;
  font-size: 14pt;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px dotted #ccc;
  font-weight: bold;
  font-family: inherit;
  font-size: inherit;
  width: 200px;
  &:focus { outline: none; border-bottom: 1px solid #000; }
  background: transparent;
`;

// Helper component for arrow notes
const ArrowNote = ({ text, style }) => (
  <div style={{
    position: 'absolute',
    right: '-160px',
    top: '5px',
    width: '150px',
    border: '1px solid #000',
    padding: '4px',
    fontSize: '9pt',
    background: 'white',
    zIndex: 10,
    ...style
  }}>
    <div style={{
      position: 'absolute',
      right: '100%',
      top: '50%',
      width: '15px',
      height: '1px',
      background: 'black',
      transform: 'translateY(-50%)' // Center the line vertically
    }}></div>
    {/* Arrowhead */}
    <div style={{
      position: 'absolute',
      right: '100%',
      top: '50%',
      width: 0,
      height: 0,
      borderTop: '4px solid transparent',
      borderBottom: '4px solid transparent',
      borderRight: '6px solid black',
      marginTop: '-4px',
      marginRight: '15px' // Place at end of line
    }}></div>
    {text}
  </div>
);


const PrescriptionGenerator = () => {
  const [patientName, setPatientName] = useState('');
  const [tcNo, setTcNo] = useState('');
  const [activeDrugs, setActiveDrugs] = useState([]);

  // Load data
  useEffect(() => {
    // Reconstruct default drugs
    const loadedDrugs = DEFAULT_TEMPLATE.drugs.map(id => MASTER_DRUGS.find(d => d.id === id)).filter(Boolean);
    setActiveDrugs(loadedDrugs);
  }, []);

  const handlePrint = () => window.print();

  const toggleDrug = (id) => {
    // If present remove, if absent add (from master)
    if (activeDrugs.find(d => d.id === id)) {
      setActiveDrugs(activeDrugs.filter(d => d.id !== id));
    } else {
      const drug = MASTER_DRUGS.find(d => d.id === id);
      if (drug) setActiveDrugs([...activeDrugs, drug]);
    }
  };

  const moveDrug = (index, dir) => {
    const copy = [...activeDrugs];
    if (dir === 'up' && index > 0) {
      [copy[index], copy[index - 1]] = [copy[index - 1], copy[index]];
    } else if (dir === 'down' && index < copy.length - 1) {
      [copy[index], copy[index + 1]] = [copy[index + 1], copy[index]];
    }
    setActiveDrugs(copy);
  };

  // Filter notes that correspond to active drugs? Or show static?
  // The footer notes seem general.

  return (
    <Container>
      <PrintStyles />

      {/* EDITOR */}
      <EditorPanel className="print-hide">
        <h3>Reçete Ayarları</h3>

        <div>
          <label>Hasta Adı:</label>
          <input className="input-field" style={{ width: '100%', padding: '8px' }} value={patientName} onChange={e => setPatientName(e.target.value)} placeholder="Ad Soyad" />
        </div>


        <h4>İlaç Listesi (Sıralama)</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', maxHeight: '400px', overflowY: 'auto' }}>
          {activeDrugs.map((drug, idx) => (
            <div key={drug.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px', background: '#f8f9fa', border: '1px solid #ddd' }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{idx + 1}. {drug.name.substring(0, 20)}...</span>
              <div>
                <button onClick={() => moveDrug(idx, 'up')}>↑</button>
                <button onClick={() => moveDrug(idx, 'down')}>↓</button>
                <button onClick={() => toggleDrug(drug.id)} style={{ color: 'red', marginLeft: '5px' }}>X</button>
              </div>
            </div>
          ))}
        </div>

        <h4>Eklenebilir İlaçlar</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {MASTER_DRUGS.filter(d => !activeDrugs.find(ad => ad.id === d.id)).map(drug => (
            <button key={drug.id} onClick={() => toggleDrug(drug.id)} style={{ fontSize: '11px', padding: '5px' }}>
              + {drug.name.substring(0, 10)}...
            </button>
          ))}
        </div>

        <button onClick={handlePrint} style={{ marginTop: '20px', padding: '15px', background: '#3498db', color: 'white', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
          🖨️ YAZDIR
        </button>
      </EditorPanel>


      {/* PREVIEW */}
      <PreviewPanel>
        <A4Page>
          {/* Header Box */}
          <HeaderBox>
            <HeaderLeft>

              {/* Barcode Area: Approx 2cm height */}
              <div style={{
                height: '2.2cm',
                width: '6cm',
                border: '1px dashed #e0e0e0',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ccc',
                fontSize: '8pt',
                gap: '2px'
              }}>
                <span style={{ fontWeight: 'bold', color: 'black' }}>Hasta Adı Soyadı:</span>
                <span>(Barkod Alanı)</span>
              </div>
            </HeaderLeft>
            <HeaderRight>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#555', fontStyle: 'italic', fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif", gap: '1px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '10pt' }}>Op. Dr. İbrahim YAĞCI</div>
                <div style={{ fontSize: '9pt' }}>KBB Uzmanı</div>
                <div style={{ fontSize: '8pt' }}>Dip No: 162657</div>
              </div>
            </HeaderRight>
          </HeaderBox>

          <DiagnosisSection>
            <div className="title">Tanı :</div>
            {DEFAULT_TEMPLATE.diagnosis.map((d, i) => <div key={i}>{d}</div>)}
          </DiagnosisSection>

          {/* Divider */}
          <div style={{ height: '1px', background: '#000', margin: '0 0 10px 0' }}></div>

          {/* DRUG TABLE */}
          <DrugTable>
            <thead>
              <tr>
                <th style={{ width: '40%' }}>İlaç</th>
                <th style={{ width: '10%' }}>Kutu</th>
                <th style={{ textAlign: 'center', width: '30%' }}>İlaçların kullanım şekli</th>
                <th style={{ textAlign: 'center', width: '20%' }}>Kullanım Süresi</th>
              </tr>
            </thead>
            <tbody>
              {activeDrugs.map((drug, index) => {
                // Group Styling Logic
                const group1 = ['drug_2', 'drug_cipro']; // Antibiotics
                const group2 = ['drug_5', 'drug_6', 'drug_7']; // Sprays

                let rowBg = 'transparent';
                let borderColor = 'transparent';

                if (group1.includes(drug.id)) {
                  rowBg = 'rgba(236, 253, 245, 1)'; // Emerald-50
                  borderColor = '#059669'; // Emerald-600
                } else if (group2.includes(drug.id)) {
                  rowBg = 'rgba(239, 246, 255, 1)'; // Blue-50
                  borderColor = '#2563eb'; // Blue-600
                }

                return (
                  <tr key={drug.id} className="drug-row" style={{ backgroundColor: rowBg }}>
                    <td style={{
                      paddingRight: '10px',
                      paddingLeft: '5px',
                      borderLeft: `5px solid ${borderColor !== 'transparent' ? borderColor : 'transparent'}`
                    }}>
                      <div style={{ fontWeight: 'bold' }}>{index + 1}- {drug.name}</div>
                      {/* Notes now appear directly under the drug name */}
                      {!drug.isSubItem && !drug.isExtra && drug.note && (
                        <div style={{ fontSize: '8pt', fontStyle: 'italic', marginTop: '2px', color: '#444' }}>
                          {drug.note}
                        </div>
                      )}
                      {drug.subNote && <div style={{ color: 'red', fontSize: '8pt', fontStyle: 'italic' }}>{drug.subNote}</div>}
                      {drug.isSubItem && <div style={{ paddingLeft: '15px', fontSize: '8pt', fontStyle: 'italic' }}>{drug.note}</div>}
                    </td>
                    <td style={{ fontSize: '8pt', textAlign: 'center' }}>
                      {drug.boxCount == 1 ? 'DI(Bir)B' : drug.boxCount}
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: 'bold' }}>
                      {/* If dailyAmount is present, likely regular format. If method is specific (like S:5x2), use method directly?
                          Wait, checking my data update: I cleared dailyAmount for sprays and put usage in method 'S:5x2'.
                          For pills, I used dailyAmount '3' and dose '1'.
                          So logic needs to handle both.
                      */}
                      {drug.dailyAmount && drug.dose
                        ? `${drug.dailyAmount} x ${drug.dose}`
                        : drug.method.replace('S:', '') /* Cleanup S: prefix if present in method */
                      }
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: 'bold' }}>
                      {drug.duration}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </DrugTable>



          <div style={{ display: 'flex', marginTop: '10px' }}>
            <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '10pt', color: '#eaeaea', fontWeight: 'bold' }}>Doktor</div>
              <div style={{ fontSize: '14pt', color: '#eaeaea', fontWeight: 'bold', borderTop: '1px solid #eee', marginTop: '2px', padding: '5px' }}>Kaşe -İmza</div>
            </div>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {DEFAULT_TEMPLATE.footerNotes.map((note, i) => (
              <InfoBox key={i} type={note.type}>
                <div className="icon">i</div>
                <div className="text">{note.text}</div>
              </InfoBox>
            ))}
          </div>

          <div style={{ borderTop: '2px solid #000', marginTop: '10px', paddingTop: '5px', fontSize: '9pt', textAlign: 'center', fontWeight: 'bold' }}>
            Op. Dr. İbrahim YAĞCI | instagram: @dribrahimyagci | Hekim koordinatörü Tel: +90 (551) 199 9963
          </div>

        </A4Page>
      </PreviewPanel>
    </Container>
  );
};

export default PrescriptionGenerator;
