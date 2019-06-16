import React from 'react';
import {Row, Col, Panel, Carousel, Button} from 'react-bootstrap';

class Body extends React.Component {
  constructor() {
    super()
    this.styles = {
      marginTop: 10
    }
  }

  render() {
    return (
      <div>
        <Row style={this.styles}>
          <Col xs={2}></Col>
          <Col xs={8}>
            <Carousel>
              <Carousel.Item style={{marginTop: 300}}>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{marginTop: 300}}>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{marginTop: 300}}>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={2}></Col>
        </Row>
        <Row style={this.styles}>
          <Col xs={2}></Col>
          <Col xs={8}>
              <Panel>
                <Panel.Heading>Panel heading without a title</Panel.Heading>
                <Panel.Body>
                  <h2>count={this.props.reducer.value}</h2>
                  <Button onClick={this.props.actions.increment}>増加</Button>
                  <Button onClick={this.props.actions.decrement}>減少</Button>
                </Panel.Body>
              </Panel>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </div>
    );
  }
}

export default Body;