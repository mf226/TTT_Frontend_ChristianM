import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import styled from 'styled-components';

class FormContainer extends Component {
  state = {
    car: '',
    'model': '',
    'seatNumber': '',
    'registration': '',
    'drivingDistance': '',
    'productionYear': '',
    'drive': '',
    'fuelType': '',
    'address': '',
    'streetNumber': '',
    'zipCode': '',
    'city': '',
    'country': '',
    fromDate: '',
    toDate: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push('/result');
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      car,
      model,
      seatNumber,
      registration,
      drivingDistance,
      productionYear,
      drive,
      fuelType,
      address,
      streetNumber,
      zipCode,
      city,
      country,
      fromDate,
      toDate,
    } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Title>Here you can rent out your own Car</Title>
          <Input
            type="text"
            name="car"
            value={car}
            onChange={this.handleChange}
            placeholder="What is your car?"
          />
          <Input
            type="text"
            name="model"
            value={model}
            onChange={this.handleChange}
            placeholder="What model do you own?"
          />
          <Input
            type="number"
            name="seatNumber"
            value={seatNumber}
            onChange={this.handleChange}
            placeholder="Number of seats"
          />
          <Input
            type="text"
            name="registration"
            value={registration}
            onChange={this.handleChange}
            placeholder="Registraion no."
          />
          <Input
            type="text"
            name="drivingDistance"
            value={drivingDistance}
            onChange={this.handleChange}
            placeholder="Driving distance (km)"
          />
          <Input
            type="text"
            name="productionYear"
            value={productionYear}
            onChange={this.handleChange}
            placeholder="Production year"
          />
          <Input
            type="text"
            name="drive"
            value={drive}
            onChange={this.handleChange}
            placeholder="Drive"
          />
          <Input
            type="text"
            name="fuelType"
            value={fuelType}
            onChange={this.handleChange}
            placeholder="Fuel Type"
          />
          <Input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
            placeholder="Address"
          />
          <Input
            type="text"
            name="streetNumber"
            value={streetNumber}
            onChange={this.handleChange}
            placeholder="Street number"
          />
          <Input
            type="number"
            name="zipCode"
            value={zipCode}
            onChange={this.handleChange}
            placeholder="zipcode"
          />
          <Input
            type="text"
            name="city"
            value={city}
            onChange={this.handleChange}
            placeholder="City"
          />
          <Input
            type="text"
            name="country"
            value={country}
            onChange={this.handleChange}
            placeholder="Country"
          />
          <Input
            type="date"
            name="fromDate"
            value={fromDate}
            onChange={this.handleChange}
          />
          <Input
            type="date"
            name="toDate"
            value={toDate}
            onChange={this.handleChange}
          />
          <Submit type="submit">Submit</Submit>
        </Form>
    </Container>
    );
  }
}

const Container = styled(Col)`
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 12, lg: 12,
};

const Form = styled.form`
  min-height: calc(100vh - 4rem);
`;

const Title = styled.h1`
  text-align: center;
  margin: 1rem 0;
`;

const Input = styled.input`
  display: inline-block;
  min-width: 32%; max-width: 32%;
  min-height: 3rem; max-height: 3rem;
  margin: 1rem 0.5rem;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
  &::placeholder {
    color: #dddddd;
  }
`;

const Submit = styled.button`
  position: absolute; bottom: 1rem; right: 2rem;
  min-width: 10rem; max-width: 10rem;
  min-height: 3rem; max-height: 3rem;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
`;

export default withRouter(FormContainer);
