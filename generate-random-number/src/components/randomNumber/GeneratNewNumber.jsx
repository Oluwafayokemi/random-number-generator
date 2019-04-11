import React from 'react';
import styled from 'styled-components';
import NumberInput from '../../common.js/Input';
import ListRandomNumber from './ListRandomNumber';
import DefaultSelect from '../../common.js/defaultSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { saveAs } from 'file-saver';

const NUMBERPLACEHOLDER = "Choose a Number";
const MINNUMBER = 99999999;
const MAXNUMBER = 100000000;
const DEFAULTVALUE = 100
const SAVE = "Click here to save numbers";
const SUBMIT = "Generate";
const GENERATE = "Generate Number:";
class GenerateNewNumber extends React.Component {
  state = {
    value: '',
    selectedOption: '',
    list: [],
    isClicked: false,
    reload: false,
  }

  componentDidMount() {
    this.setState({ value: DEFAULTVALUE})
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
    this.setState({ isClicked: true })
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
    const { selectedOption } = this.state;
    let newNumber = [];
    for (let i = 0; i < iterate; i++) {
      newNumber.push(Math.floor(Math.random() * max) + min);
    }
    newNumber = !selectedOption ? newNumber : this.sortList(newNumber)
    this.setState({ list: newNumber })
  }

  onClickSaveFile = () => {
    const { list } = this.state;
    let file = new File([list], "Random Number.txt", { type: "text/plain;charset=utf-8" });
    saveAs(file);
  }

  reload = () => {
    this.setState({reload: true})
    document.location.reload(true)
  }
  render() {
    const { list, value, isClicked, reload } = this.state;
    return (
      <Div>
        <Reload reloaded={reload ? true : false}>
          <input type="button" value="Reload Page" onClick={this.reload} />
        </Reload>
        <Container>
          <span className="par">{GENERATE}</span>
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
            </FormWrapper>
            <Button type="submit" className="btn" isClicked={isClicked ? true : false}>
              <input type="submit" value={SUBMIT} />
              <FontAwesomeIcon icon="sign-in-alt" className="icon-generate" type="submit" />
            </Button>
          </Form>
        </Container>
        <Download>
          <div>
            <FontAwesomeIcon icon="file-download" className="icon-download" />
            <p onClick={this.onClickSaveFile}>{SAVE}</p>
          </div>
        </Download>
        <List>
          <Hr />
          <span>Computed Numbers</span>
          <ListRandomNumber list={list} />
        </List>
      </Div>
    )
  }
}

const Reload = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1em;

  input{
    padding: 1em;
    font-weight: bold;
    color: ${props => props.reloaded ? "red" : "blue"};
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    :focus {
      outline: none;
    }
    :hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;
const Hr = styled.hr`
  border: 1px solid #ccc;

 `;
const Container = styled.div`
  height: 100px;
  padding: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  span.par {
    text-shadow: 2px 2px 4px #eee;
    font-weight: 600;
  }
`;
const Div = styled.div`
  padding: 1em;
  max-height: 100%;
  max-width: 100%;
  
`;

const List = styled.div`
    padding: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;

  span{
    background-color: #fff;
    width: 300px;
    padding: 8px;
    margin-left: 1em;
    font-weight: bold;
    z-index: 1;
    position: relative;
    text-transform: uppercase;
    border-radius: 5px;

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
    border: none;
    padding-left: 1em;
  }
  .wrapper:focus {
    outline: none;
  }
`;
const Form = styled.form`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: rgba(18,82,142, 0.9);
  border-radius: 5px;
`;
const Button = styled.button`
  display: flex;
  width: 150px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 #fff, 0 6px 20px 0 rgba(0, 0, 0, 1);
  color: ${props => !props.isClicked ? "blue" : "red"};
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  :focus {
    outline: none;
  }
  :hover {
    box-shadow: 0 4px 8px 0 #fee, 0 6px 20px 0 rgba(0, 0, 0, 1);
  }
  input {
    cursor: pointer;
    font-weight: bold;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: none;
  }
  input:focus {
    outline: none;
  }
  .icon-generate {
    font-size: 30px;
    margin: 0 auto;
  }
`;
const Download = styled.div`
  display: flex;
  width: auto;
  margin-top: 1em;
  margin-bottom: 2em;
  color: #fff;

  div {
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0), 0 6px 20px 0 rgb(0, 0, 0, 0);
    display: flex;
    flex-flow: column wrap;
    margin: 0 auto;
    background-color: rgba(18,82,142, 0.9);
    border-radius: 5px;
    padding: 1em;
  }
  p {
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: 0 4px 8px 0 #fff, 0 6px 20px 0 #fff;
    background-color: #fff;
    color: rgb(0, 0, 0);
    padding: 3px;
    cursor: pointer;
    border: 2px solid #fff;
    border-radius: 5px;
  }
  p:hover {
    background-color: #eee;
    box-shadow: 0 4px 8px 0 #eee, 0 6px 20px 0 #eee;
  }
  .icon-download{
    width: auto;
   font-size: 50px;
  }
`;

export default GenerateNewNumber;