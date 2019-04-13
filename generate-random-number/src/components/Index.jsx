/**
 * @file class based that holds all functionality for randomNumbers
 */

//  Modules
import React from 'react';
import styled from 'styled-components';
import { saveAs } from 'file-saver';
import Description from './Description';
import Generate from './Generate';
import Summary from './Summary';
import ActionButton from './Button';
import toastr from 'toastr';
// Const
const MINNUMBER = 99999999;
const MAXNUMBER = 100000000;
class Index extends React.Component {
  state = {
    value: '',
    selectedOption: '',
    list: '',
    maxPhoneNumber: '',
    minPhoneNumber: ''
  }

  /**
   * @method handleChange
   * @description get the value of the amount of number
   */
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  /**
   * @method handleSelectChange
   * @description to get the value of the selected order
   */
  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption })
  }

  /**
   * @method handleSubmit
   * @description submit form when button is clicked
   */
  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    this.generateNumber(MINNUMBER, MAXNUMBER, value)
  }

  /**
   * @method findOrder
   * @params {number[]} list
   * @description find the maximum and minimum onumber in the list
   */
  findOrder = (list) => {
    const largest = list.sort((a, b) => a - b)[list.length - 1]
    const smallest = list.sort((a, b) => b - a)[list.length - 1]
    this.setState({ maxPhoneNumber: largest, minPhoneNumber: smallest })
  }

  /**
   * @method sortList
   * @param {number[]} list
   * @description sort order of lists in either ascending or descending order based on selected order
   */
  sortList = (numberList) => {
    const { list, selectedOption } = this.state;
    const arrayList = numberList || list
    const sortNumber = (a, b) => {
      const isAscending = selectedOption.value === 1
      return isAscending ? a - b : b - a;
    }
    const newList = arrayList.sort(sortNumber)
    console.log(newList, selectedOption, '!!!!!nw')
    return newList
  }

  /**
   * @method generatedNumber
   * @description generate the list of random numbers
   * @param {number} min
   * @param {number} max
   * @param {number} iterate 
   */
  generateNumber = (min, max, iterate) => {
    const { selectedOption } = this.state;
    let newNumber = [];
    let numWithZeroIndex = []
    for (let i = 0; i < iterate; i++) {
      newNumber.push(Math.floor(Math.random() * max) + min);
    }
    // Begin every number with a zero index
    newNumber.map(number => {
      number = '0' + number 
      numWithZeroIndex.push(number);
    })
    this.findOrder(numWithZeroIndex)
    newNumber = !selectedOption ? numWithZeroIndex : this.sortList(numWithZeroIndex)
    this.setState({ list: newNumber })
  }

  /**
   * @method onClickSaveFile
   * @description downloads the list of array to file
   */
  onClickSaveFile = () => {
    const { list } = this.state;
    let file = new File([list], "Random Number.txt", { type: "text/plain;charset=utf-8" });
    if (file.size > 9999) {
      return toastr.error('You can only download a maximum of 1000 file at a time', 'Size too large')
    }
    saveAs(file)
    return toastr.success('Your generated phone numbers are now available in your file', 'Success')
  }

  /**
   * @method reload
   * @description onCLick reloads the page
   */
  reload = () => {
    document.location.reload(true)
  }

  render() {
    const { handleSubmit, handleSelectChange, handleChange, reload, onClickSaveFile } = this;
    const { value, list, maxPhoneNumber, minPhoneNumber } = this.state;
    return (
      <Container>
        <Description />
        <Generate
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
          value={value}
        />
        <Summary
          list={list}
          maxPhoneNumber={maxPhoneNumber}
          minPhoneNumber={minPhoneNumber}
        />
        <ActionButton
          reload={reload}
          onClickSaveFile={onClickSaveFile}
        />
      </Container>
    )
  }
}

const Container = styled.div`
  margin: 1em auto;
  width: 498px;
  padding: 10px;

`;
export default Index;
