import React, { useState, useEffect } from 'react';
import './PrescriptionApp.css';

const PrescriptionApp = () => {
    const [patientName, setPatientName] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [language, setLanguage] = useState('tr');
    const [antibiotic, setAntibiotic] = useState('cefaks'); // cefaks, cipro, both

    const handlePrint = () => {
        window.print();
    };

    const handlePrevDay = () => {
        const d = new Date(date);
        d.setDate(d.getDate() - 1);
        setDate(d.toISOString().split('T')[0]);
    };

    const handleNextDay = () => {
        const d = new Date(date);
        d.setDate(d.getDate() + 1);
        setDate(d.toISOString().split('T')[0]);
    };

    return (
        <div className="prescription-container">
            <div className="no-print controls-sidebar">
                <h2>Reçete Oluşturucu</h2>

                <div className="form-group">
                    <label>Hasta Adı Soyadı</label>
                    <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="Hasta Adı"
                    />
                </div>

                <div className="form-group">
                    <label>Tarih</label>
                    <div className="date-controls">
                        <button onClick={handlePrevDay}>&lt;</button>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <button onClick={handleNextDay}>&gt;</button>
                    </div>
                </div>

                <div className="form-group">
                    <label>Dil</label>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="tr">Türkçe</option>
                        <option value="en">English</option>
                        <option value="de">Deutsch</option>
                        <option value="es">Español</option>
                        <option value="ru">Русский</option>
                        <option value="fr">Français</option>
                        <option value="it">Italiano</option>
                        <option value="ro">Română</option>
                        <option value="hu">Magyar</option>
                        <option value="pl">Polski</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Antibiyotik</label>
                    <select value={antibiotic} onChange={(e) => setAntibiotic(e.target.value)}>
                        <option value="cefaks">Cefaks (Sadece)</option>
                        <option value="cipro">Cipro (Sadece)</option>
                        <option value="both">Cefaks + Cipro</option>
                    </select>
                </div>

                <button className="print-btn" onClick={handlePrint}>Yazdır / PDF Kaydet</button>
            </div>

            <div className="prescription-preview">
                {/* Header */}
                <div className="rx-header">
                    <div className="dr-info">
                        <h1>Op. Dr. İbrahim YAĞCI</h1>
                        <p>Kulak Burun Boğaz Hastalıkları Uzmanı</p>
                    </div>
                    <div className="rx-meta">
                        <p><strong>Tarih:</strong> {new Date(date).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}</p>
                        <p><strong>Hasta:</strong> {patientName}</p>
                    </div>
                </div>

                <hr className="divider" />

                {/* Body */}
                <div className="rx-body">
                    <h3>Rx</h3>

                    <ul className="medication-list">
                        {/* Logic to display medications based on selection will go here */}
                        <li>
                            <strong>1. {antibiotic === 'cefaks' || antibiotic === 'both' ? 'Cefaks 500mg tb' : 'Cipro 500mg tb'}</strong>
                            <p>S: 2x1 (Sabah - Akşam tok karnına)</p>
                        </li>
                        {antibiotic === 'both' && (
                            <li>
                                <strong>2. Cipro 500mg tb</strong>
                                <p>S: 2x1 (Sabah - Akşam tok karnına)</p>
                            </li>
                        )}
                        <li>
                            <strong>{antibiotic === 'both' ? '3' : '2'}. Arveles / Majezik tb</strong>
                            <p>S: 3x1 (Ağrı durumunda)</p>
                        </li>
                        <li>
                            <strong>{antibiotic === 'both' ? '4' : '3'}. Thiocilline / Terramycin Göz Pomadı</strong>
                            <p>S: 3x1 (Burun dikişlerine sürülecek)</p>
                        </li>
                        <li>
                            <strong>{antibiotic === 'both' ? '5' : '4'}. Okyanus Suyu Sprey / Sinus Rinse Kit</strong>
                            <p>S: 5x1 (Burun içi yıkama)</p>
                        </li>
                    </ul>
                </div>

                {/* Footer */}
                <div className="rx-footer">
                    <div className="signature-box">
                        <p>İmza / Kaşe</p>
                    </div>
                    <div className="contact-info">
                        <p>Tel: +90 551 199 99 63</p>
                        <p>Web: www.ibrahimyagci.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrescriptionApp;
