import React from "react";
import "./Box.css";
import { Col, Container, Row, Card, Button } from "react-bootstrap";


export default function Box() {
  let weatherData = {
    city: "Tappernøje",
    temperature: 19,
    maxTemp: 19,
    minTemp: 14,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };
  
  return (
    <Container id="Box">
        <h1 id="city-header">
            {weatherData.city}
        </h1>
        <hr />
      <Card border="success" style={{ width: '28rem' }}>
        <Card.Body>
            <Card.Title id="day"> Today </Card.Title>
            
            <Card.Title id="time">    {" "}
            Now{" "} </Card.Title>
           
            <Card.Text>
                <span id="temp"> {weatherData.temperature} </span>
                <span className="tempUnit" id="tempUnit">
                    <a href="/" id="celsius-link" className="active temp">
                        °C
                    </a>{" "}
                    |{" "}
                    <a href="/" id="fahrenheit-link" className="temp">
                        °F
                    </a>
                </span> 
                &#8287;&#8287;&#8287;&#8287;{" "}
                <span>
                    <img
                        src={weatherData.imgUrl}
                        alt={weatherData.description}
                        style={{ width: 60, height: 60 }}
                    />
                </span> 
                
                    <Row id="tempwindhum">
                        <Col md={4}>
                            <strong> Temperatures </strong>
                        </Col>
                        <Col  md={4}>
                            <strong> Wind </strong>
                        </Col>
                        <Col  md={4}>
                            <strong> Humidity </strong>
                        </Col>
                    </Row> 
                        
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
