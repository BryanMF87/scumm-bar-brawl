import { useState } from 'react';
import insultList from './insultList';
import { FaSkull } from 'react-icons/fa';
import { Value } from 'sass';

const DialogueBox = ({message, setMessage}) => {

    let insultArray = [];
    let insultOptions;

    const getInsultOptions = () => {
        while(insultArray.length < 4) {
            // pull random insult from list
            let randomInsult = insultList[Math.floor(Math.random() * insultList.length)];
            // // add insult to array if not in array already
            !insultArray.includes(randomInsult.insult) && insultArray.push(randomInsult.insult);
        }

        console.log(insultArray)

        insultOptions = insultArray.map(option => {
            return <li><FaSkull/>{option}</li>
        })
    }

    getInsultOptions();

    return (
        <div className='dialogue-box'>
            <p>Insult LeChuck</p>
            <ul className='insult-options'>{insultOptions}</ul>
        </div>
    )

    // let randomRetort = randomInsult.retort[Math.floor(Math.random() * randomInsult.retort.length)]
    // console.log(randomRetort)
}

export default DialogueBox