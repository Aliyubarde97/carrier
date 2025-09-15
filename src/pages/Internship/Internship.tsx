// App.js
import React, { useState } from 'react';
import InternshipList from './InternshipList';
import InternshipDetail from './InternshipDetail';

function App() {
  const [selectedInternship, setSelectedInternship] = useState(null);

  const handleBackToList = () => {
    setSelectedInternship(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Global Internship Opportunities
      </h1>

      {selectedInternship ? (
        <InternshipDetail
          internship={selectedInternship}
          onBack={handleBackToList}
        />
      ) : (
        <InternshipList onSelectInternship={setSelectedInternship} />
      )}
    </div>
  );
}

export default App;