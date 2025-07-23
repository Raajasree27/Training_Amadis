// components/Antd/AntdCards.js
import React from 'react';
import { Card, Button, Row, Col } from 'antd';

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

const AntdCards = () => {
  const handleClick = (name) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div style={{ padding: '20px'}}>
      <Row gutter={[16, 16]}>
        {users.map(user => (
          <Col key={user.id} xs={24} sm={12} md={8}>
            <Card title={user.name} style={{border:'1px solid black'}}>
              <p>Email: {user.email}</p>
              <Button type="primary" onClick={() => handleClick(user.name)}>
                Greet
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AntdCards;
