import React from 'react';
import { Container, Row } from 'reactstrap';

import RecieptContainer from './RecieptContainer';

const RentOut = () => (
  <Container fluid={true}>
    <Row>
      <RecieptContainer />
    </Row>
  </Container>
);

export default RentOut;
