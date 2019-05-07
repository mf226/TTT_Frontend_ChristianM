import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

class ProfileContainer extends Component {
  state = {
    avatar: '',
    name: '',
    email: '',
    phone: '',
    driverLicences: ''
  };

  componentDidMount() {
    const data = fetchUserData();
    this.setState({...data});
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { editable, toggleEditable } = this.props;
    const { avatar, name, email, phone, driverLicences } = this.state;
    return (
      <Container>
        <Avatar src={avatar} />
        <Edit onClick={toggleEditable}>
          {editable
          ? <i className="fa fa-save"></i>
          :<i className="fa fa-pencil-alt"></i>}
        </Edit>
        <Form onSubmit={this.handleSubmit}>
          <Label>Name: {editable || name}</Label>
          <Input
            visible={editable}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <Label>Email: {editable || email}</Label>
          <Input
            visible={editable}
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Label>Phone: {editable || phone}</Label>
          <Input
            visible={editable}
            type="phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
          <Label>driverLicences: {editable || driverLicences}</Label>
          <Input
            visible={editable}
            type="text"
            name="name"
            value={driverLicences}
            onChange={this.handleChange}
          />
          <Submit onClick={this.handleEditSave} visible={editable} type="submit">
            Save Changes
          </Submit>
        </Form>
      </Container>
    );
  }
}

const fetchUserData = () => {
  // TODO:

  return {
    profile: '',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+xx xxxxxx',
    driverLicences: 'xxxxxxxxxx',
  };
};

const Container = styled(Col)`
  border-right: 1px solid #ccc;
  background-color: white;
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 4, lg: 3,
};

const Avatar = styled.img`
  min-width: 100%; max-width: 100%;
  margin: 0.5rem auto;
  padding-top: 100%;
  border: 1px solid black; border-radius: 50%;
  background-size: cover;
  background-image: url('https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg');
`;

const Edit = styled.span`
  position: absolute; top: 0.5rem; right: 0.5rem;
  font-size: 120%;
  cursor: pointer;
`;

const Form = styled.form`
  min-width: 95%; max-width: 95%;
  margin: 0.5rem auto;
`;

const Label = styled.label`
  display: block;
  font-size: 120%;
  font-weight: bold;
  margin-left: 0.5rem 0.25rem;
`;

const Input = styled.input`
  display: ${props => props.visible ? 'block' : 'none'};
  min-width: 100%; max-width: 100%;
  min-height: 2.5rem; max-height: 2.5rem;
  margin: 0.5rem auto;
  border: 1px solid white; border-radius: 3px;
  font-size: 120%;
  color: white; background-color: #304f5f;
`;

const Submit = styled.button`
  display: ${props => props.visible ? 'block' : 'none'};
  min-width: 100%; max-width: 100%;
  min-height: 2.5rem; max-height: 2.5rem;
  margin: 0.5rem auto;
  border: 1px solid white; border-radius: 3px;
  font-size: 120%;
  color: white; background-color: green;
  outline: none;
  &:active {
    color: green; background-color: white;
  }
`;

export default ProfileContainer;
