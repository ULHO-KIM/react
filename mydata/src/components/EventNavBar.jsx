import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const EventNavBar = () => {
    return (
     
    <div>
       <Card>
            <Card.Img variant="top" src={require("../img/event.png")} />
      <Card.Body>
        <Card.Title>출석 이벤트</Card.Title>
        <Card.Text>
          2023.10.09 출석이벤트
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
        
    );
};

export default EventNavBar;