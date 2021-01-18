import React from "react";
import ProductBox from "./ProductBox";
import ProductCard from "./ProductCard";
// import { Container, Row, Col } from "react-bootstrap";
import { Row, Col } from "antd";

import { connect } from "react-redux";
import { fetchReqdata } from "../Actions";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { Card } from "react-bootstrap";
const PF = () => {
  return (
    <ProForm
      onFinish={async (values) => {
        console.log(values);
      }}
    >
      <ProFormText name="name" label="姓名" />
    </ProForm>
  );
};
const Container = ({ data }) => <div>{data}</div>;

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchReqdata();
  }

  render() {
    const { products } = this.props;
    return (
      <React.Fragment>
        <div>
          <Row>
            {products.length > 0 &&
              products.map((product) => {
                const { id } = product;
                return <ProductBox key={id} product={product} />;
              })}
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("this is state", state.products);
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, { fetchReqdata })(ProductList);
