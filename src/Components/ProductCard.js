import React from "react";
// import { Card, Button, Col } from "react-bootstrap";
import { Card, Row, Col, Button, List, Table } from "antd";

import "antd/dist/antd.css";
export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pro: ""
    };
  }

  render() {
    const img = this.props.product.variation_values[2].images[0].medium;
    const { title, description } = this.props.product;
    return (
      <div>
        <Card
          title={title}
          description={description}
          footer={<Button>A</Button>}
        >
          {/* <img src={img} />
          <div>{description}</div>
          <button type="primary">Add</button> */}
        </Card>
      </div>
    );
  }
}

/*<React.Fragment>
<Col lg={this.props.lg} md={this.props.md} xs={this.props.xs}>
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src= />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text></Card.Text>
      <Button variant="primary">Add to Cart</Button>
    </Card.Body>
  </Card>
</Col>
</React.Fragment>*/
