import React from "react";
import "./Box.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
    <div className="Box">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title id="city-header">{weatherData.city}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
