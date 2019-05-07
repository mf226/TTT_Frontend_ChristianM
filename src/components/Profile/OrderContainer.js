import React, { Component } from 'react';
import { Row } from 'reactstrap';
import styled from 'styled-components';

import OrderCard from './OrderCard';

class OrderContainer extends Component {
  state = {
    selected: 0,
    data: [],
  };

  componentDidMount() {
    // TODO:

    const data = fetchOrders();
    this.setState({ data });
  }

  render() {
    const { editable } = this.props;
    const { data } = this.state;
    const orderItems = data.map((order, i) =>
      <OrderCard key={i} {...order} editable={editable} />
    );
    return (
      <Container>
        {orderItems}
      </Container>
    );
  }
}

const fetchOrders = () => {
  // TODO:

  return [
    {
      created: '01-01-2001',
      start: '01-01-2001',
      end: '01-01-2001',
      rating: 4,
    },
    {
      created: '01-01-2001',
      start: '01-01-2001',
      end: '01-01-2001',
      rating: 4,
    },
    {
      created: '01-01-2001',
      start: '01-01-2001',
      end: '01-01-2001',
      rating: 4,
    },
    {
      created: '01-01-2001',
      start: '01-01-2001',
      end: '01-01-2001',
      rating: 4,
    },
  ];
};

const Container = styled(Row)`
  min-height: 20rem;
  margin: 1rem 0;
  border: 0 solid transparent;
  background-color: white;
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 12, lg: 12,
};

export default OrderContainer;
