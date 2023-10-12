import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import EventNavBar from './EventNavBar';

const EventPage = () => {
    return (
      /*  <Card>
            <Card.Img variant="top" src={require("../img/event.png")} />
      <Card.Body>
        <Card.Title>출석 이벤트</Card.Title>
        <Card.Text>
          2023.10.09 출석이벤트
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    */
    <div>
      <Nav variant="underline" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1">진행중인 이벤트</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">즐겨찾기</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">당첨 발표</Nav.Link>
          </Nav.Item>
        </Nav>
        <EventNavBar />
        
    </div>
        
    );
};

export default EventPage;