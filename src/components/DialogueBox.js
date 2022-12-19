import { useState } from 'react';
import insultList from './insultList';
import { FaSkull } from 'react-icons/fa';

const DialogueBox = () => {

    // let insultArray = [];
    // let insultOptions;

    // const getInsultOptions = () => {
    //     while(insultArray.length < 4) {
    //         // pull random insult from list
    //         let randomInsult = insultList[Math.floor(Math.random() * insultList.length)];
    //         // add unique insult to array
    //         !insultArray.includes(randomInsult) && insultArray.push(randomInsult);
    //     }
    //     // map to component
    //     insultOptions = insultArray.map(option => {
    //         return <li key ={option.id}><FaSkull/>{option.insult}</li>
    //     })
    // }

    // getInsultOptions();

    // return (
    //     <div className='dialogue-box'>
    //         <p>Insult LeChuck</p>
    //         <ul className='insult-options'>{insultOptions}</ul>
    //     </div>
    // )

    // // let randomRetort = randomInsult.retort[Math.floor(Math.random() * randomInsult.retort.length)]
    // // console.log(randomRetort)
}

export default DialogueBox