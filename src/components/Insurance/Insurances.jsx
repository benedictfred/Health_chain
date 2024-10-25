import React, { useState } from "react";



const  Insurances = () => {
  // Mock medical records data
  const [records] = useState({
    name: "John Doe",
    age: 45,
    bloodType: "O+",
    history: [
      { id: 1, diagnosis: "Diabetes Type 2", treatment: "Insulin", date: "2024-03-10" },
      { id: 2, diagnosis: "Hypertension", treatment: "Blood Pressure Medication", date: "2024-05-12" },
    ],
    labResults: [
      { id: 1, test: "Blood Sugar", result: "7.2 mmol/L", date: "2024-06-01" },
      { id: 2, test: "Cholesterol", result: "200 mg/dL", date: "2024-06-15" },
    ],
    prescriptions: [
      { id: 1, name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
      { id: 2, name: "Amlodipine", dosage: "10mg", frequency: "Once daily" },
    ],
  });

  return (
    <div>
      <h2>Patient Medical Record</h2>
      <div>
        <p><strong>Name:</strong> {records.name}</p>
        <p><strong>Age:</strong> {records.age}</p>
        <p><strong>Blood Type:</strong> {records.bloodType}</p>
      </div>

      <h3>Medical History</h3>
      <ul>
        {records.history.map((item) => (
          <li key={item.id}>
            <p><strong>Diagnosis:</strong> {item.diagnosis}</p>
            <p><strong>Treatment:</strong> {item.treatment}</p>
            <p><strong>Date:</strong> {item.date}</p>
          </li>
        ))}
      </ul>

      <h3>Lab Results</h3>
      <ul>
        {records.labResults.map((result) => (
          <li key={result.id}>
            <p><strong>Test:</strong> {result.test}</p>
            <p><strong>Result:</strong> {result.result}</p>
            <p><strong>Date:</strong> {result.date}</p>
          </li>
        ))}
      </ul>

      <h3>Prescriptions</h3>
      <ul>
        {records.prescriptions.map((prescription) => (
          <li key={prescription.id}>
            <p><strong>Medication:</strong> {prescription.name}</p>
            <p><strong>Dosage:</strong> {prescription.dosage}</p>
            <p><strong>Frequency:</strong> {prescription.frequency}</p>
          </li>
        ))}
      </ul>

      <button className="download-btn">Download Full Record</button>
    </div>
  );
};

export default Insurances;
