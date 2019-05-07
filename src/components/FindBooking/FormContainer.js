import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import styled from 'styled-components';

class FormContainer extends Component {
  state = {
    id: '',
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { id } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Title>Find your own booking by your booking ID.</Title>
          <Input
            type="text"
            name="id"
            value={id}
            onChange={this.handleChange}
            placeholder="Booking ID"
          />
          <Button type="submit">Find</Button>
        </Form>
    </Container>
    );
  }
}

const Container = styled(Col)`
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: { size: 6, offset: 3, }, lg: { size: 4, offset: 4, },
};

const Form = styled.form`
  display: block;
  min-width: 100%; max-width: 100%;
  margin: 0 auto; margin-top: 5rem;
  padding: 1rem;
  border: 1px solid #dc6e78; border-radius: 2rem;
  background-color: #fbcfd2;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  display: block;
  min-width: 100%; max-width: 100%;
  min-height: 3rem; max-height: 3rem;
  margin: 0.5rem auto;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
  outline: none;
  &::placeholder {
    color: white;
    padding-left: 0.5rem;
  }
`;

const Button = styled.button`
  display: block;
  min-width: 100%; max-width: 100%;
  min-height: 3rem; max-height: 3rem;
  margin: 0.5rem auto;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
`;

export default withRouter(FormContainer);
