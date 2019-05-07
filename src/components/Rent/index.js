import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SellerContainer from './SellerContainer';
import CarContainer from './CarContainer';
import FormContainer from './FormContainer';

const Rent = () => (
  <Container fluid={true}>
    <Row>
      <SellerContainer />
      <Col xs={12} sm={12} md={8} lg={9}>
        <CarContainer />
        <FormContainer />
      </Col>
    </Row>
  </Container>
);

export default Rent;
