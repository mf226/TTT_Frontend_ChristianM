import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ProfileContainer from './ProfileContainer';
import RentContainer from './RentContainer';
import OrderContainer from './OrderContainer';

class Profile extends Component {
  state = {
    editable: false,
  };

  toggleEditable = event => {
    this.setState({ editable: !this.state.editable });
  }

  render() {
    const { toggleEditable } = this;
    const { editable } = this.state;
    return (
      <Container fluid={true}>
        <Row>
          <ProfileContainer editable={editable} toggleEditable={toggleEditable} />
          <Col xs={12} sm={12} md={8} lg={9}>
            <RentContainer />
            <OrderContainer editable={editable} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
