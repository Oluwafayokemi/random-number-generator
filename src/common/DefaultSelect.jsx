/**
 * @file select option
 */

//  Modules
import React from 'react';
import Select from 'react-select';
import Fayokemi from '../God/Grace';

// Const
const OPTIONS = [
    { label: "Angels", value: 1 },
    { label: "Ascending", value: 2 },
    { label: "And", value: 3 },
    { label: "Descending", value: 4 },
    { label: "This is the gate of heaven", value: 5 },
]

const message="The first time I saw you was at Gbagada Stadium during Fire Conference last year but nothing really, I just noticed you part of P.Daniel team. I had come with a hunger to meet the God of Pastor Daniel and Papa Kalejaiye ";
const message2= "But at YMR 2019 Ayaaa, The moment your voice entered my ear. I knew in my heart and I just said She is the one. And I prayed to God even if She is not the one, let my wife be like this";
const message3= "But from that day no way it grew stronger. I love your fire.";
const message4= "I never knew you were a software engineer too";
const message5= "I am someone with a dream to become the voice of God in technology. i.e birthing the realities of God through technology";
const message6= "I dont know how to say this sha but I want you to be my Kathryn Kuhlman.";
const message7= "Well as Paul said I have not come to you with enticing words of man's wisdom, but in demonstration of the Spirit and power of God. So free free to pray about it";
const message8= "but while you are praying about it can we be friends first";
const message9= "can I use this random generator to generate your number?";


/**
 * @function DefaultSelect
 * @param {Object} props 
 * @description displays select button
 */
const DefaultSelect = (props) => {
  const { selectClassName } = props;
  return (
    <React.Fragment>
      <Select
        {...props}
        classNamePrefix='list'
        options={OPTIONS}
        className={selectClassName}
      />
    </React.Fragment>
  )
}

export default DefaultSelect;
