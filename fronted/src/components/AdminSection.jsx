import React, { useState } from 'react';

function AdminSection({ onUpdateCandleAmount }) {
  const [newAmount, setNewAmount] = useState('');

  const handleUpdate = () => {
    const amount = parseInt(newAmount, 10);
    if (isNaN(amount)) {
      alert('הזן מספר תקין.');
    } else {
      onUpdateCandleAmount(amount);
      alert('סכום נר למאור עודכן בהצלחה.');
    }
  };

  return (
    <div id="adminSection">
      <button id="closeButton">X</button>
      <h3>עדכון סכום לנר למאור</h3>
      <input 
        type="number" 
        id="candleAmount" 
        placeholder="סכום חדש" 
        value={newAmount} 
        onChange={(e) => setNewAmount(e.target.value)} 
      />
      <button id="updateCandleAmountBtn" onClick={handleUpdate}>עדכן סכום</button>
    </div>
  );
}

export default AdminSection;

