import React, { useState } from 'react';
import { Button, Input, Card } from 'antd';

function Antd2() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ padding: 24, maxWidth: 400, margin: 'auto' }}>
      <Card title="Ant Design Beginner Example">
        <Input 
          placeholder="Type something..." 
          value={inputValue} 
          onChange={e => setInputValue(e.target.value)} 
          style={{ marginBottom: 16 }}
        />
        <Button 
          type="primary" 
          onClick={() => alert(`You typed: ${inputValue}`)}
        >
          Show Alert
        </Button>
      </Card>
    </div>
  );
}

export default Antd2;
