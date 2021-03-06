import React from "react";
import "./Weather.css";
import { Col, Container, Row } from "react-bootstrap";


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
      <div id="weather-now"  style={{ width: '35rem' }} >
        
            <h2 id="day"> Today </h2>
            
            <h4 id="time">    {" "}
            Now{" "} </h4>
           
            <div>
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
                
                    <Row md={3} id="tempwindhum">
                        <Col >
                            <strong> Temperatures </strong>
                        </Col>
                        <Col  >
                            <strong> Wind </strong>
                        </Col>
                        <Col  >
                            <strong> Humidity </strong>
                        </Col>
                    </Row> 
                    <Row md={3} id="weathervalues">
                        <Col >
                            <span id="maxTemp"> {weatherData.maxTemp}</span>
                            <span>°</span> |{" "}
                            <span id="minTemp"> {weatherData.minTemp} </span>
                            <span>°</span>
                        </Col>
                        <Col  >
                            <span id="wind"> {weatherData.wind} </span> <span> m/s</span>
                        </Col>
                        <Col  >
                            <span id="humidity"> {weatherData.humidity} </span>{" "}
                            <span> %</span>
                        </Col>
                    </Row> 
            </div>
            {/* <Button variant="primary">Go somewhere</Button>  */}
        
      </div>
      <div id="forecast">
           <Row md={5} >
                <Col >
                    Monday
                </Col>
                <Col  >
                     Tuesday
                </Col>
                <Col  >
                     Wednesday
                </Col>
                <Col >
                    Thursday
                   </Col>
                <Col >
                    Friday
                </Col>
            </Row> 
            <Row md={5}>
                <Col >
                    temp
                </Col>
                <Col  >
                     temp
                </Col>
                <Col  >
                     temp
                </Col>
                <Col >
                    temp
                   </Col>
                <Col >
                    temp
                </Col>
            </Row>  
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </Container>
  );
}
