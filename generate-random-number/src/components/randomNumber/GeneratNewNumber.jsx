import React from 'react';
import styled from 'styled-components';
import NumberInput from '../../common.js/Input';
import ListRandomNumber from './ListRandomNumber';
import DefaultSelect from '../../common.js/defaultSelect';

const NUMBERPLACEHOLDER = "Choose a Number";
const MINNUMBER = 99999999;
const MAXNUMBER = 100000000;
const DEFAULTVALUE = 100
class GenerateNewNumber extends React.Component {
  state = {
    value: '',
    selectedOption: '',
    list: [],
  }

  componentDidMount() {
    this.setState({ value: DEFAULTVALUE })
    this.generateNumber(MINNUMBER, MAXNUMBER, DEFAULTVALUE)
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    this.generateNumber(MINNUMBER, MAXNUMBER, value)
  }

  sortList = (numberList) => {
    const { list, selectedOption } = this.state;
    const arrayList = numberList || list
    const sortNumber = (a, b) => {
      const isAscending = selectedOption.value === 1
      return isAscending ? a - b : b - a;
    }
    const newList = arrayList.sort(sortNumber)
    return newList
  }

  generateNumber = (min, max, iterate) => {
    const {selectedOption} = this.state;
    let newNumber = [];
    for (let i = 0; i < iterate; i++) {
      newNumber.push(Math.floor(Math.random() * max) + min);
    }
    newNumber = !selectedOption ? newNumber : this.sortList(newNumber)
    this.setState({ list: newNumber })
  }

  render() {
    const { list, value } = this.state;
    return (
      <Div>
        <Container>
          <span className="par">Generate Number:</span>
          <Form onSubmit={this.handleSubmit}>
            <FormWrapper>
              <NumberInput
                className="wrapper"
                name="number"
                placeholder={NUMBERPLACEHOLDER}
                onChange={this.handleChange}
                value={value}
              />
              <Selector >
                <DefaultSelect onChange={this.handleSelectChange} placeholder="Select Order" />
              </Selector>
              <Download>
                <Input type="file" />
              </Download>
            </FormWrapper>
            <Input type="submit" />
          </Form>
        </Container>
        <List>
          <Hr />
          <span>Computed Numbers</span>
          <ListRandomNumber list={list} />
        </List>
      </Div>
    )
  }
}

const Hr = styled.hr`
  border: 1px solid #ccc;

 `;
const Container = styled.div`
  height: 250px;
`;
const Div = styled.div`
  padding: 1em;
  max-height: 100%;
  max-width: 100%;
  
`;

const List = styled.div`
    align-items: center;

  span{
    background-color: #fff;
    width: 300px;
    padding: 8px;
    margin-left: 1em;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
const Selector = styled.div`
    width: 20%;
    padding-left:1em;
    
`;
const FormWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 80%;
    .wrapper {
    border-radius: 4px;
    width: auto;
    border: 2px solid blue;
  }
  .wrapper:focus {
    outline: none;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-image:url(https://www.desktopbackground.org/p/2012/11/21/487004_moneymap-calculate-cloud_1920x1080_h.jpg); 
  background-repeat: repeat-x; 
  background-size: cover; /* Resize the background image to cover the entire container */
  border-radius: 5px;
`;
const Input = styled.input`
  cursor: pointer;
  padding: 5px 1px;
  background-color: blue;
  color: white;
  font-weight: bold;
  position: relative;
  margin-left: 1em;
`;
const Download = styled.div`
  width: 10px
`;

export default GenerateNewNumber;