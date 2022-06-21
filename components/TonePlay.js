import * as React from 'react';
import styles from '../styles/Tone.css'
import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5,
  playDb5,
  playD5,
  playEb5,
  playE5,
  playF5,
  playGb5,
  playG5,
  playAb5,
  playA5,
  playBb5,
  playB5,
  playC6,
  PlayNote
} from "./ToneFn.js"


window.addEventListener("keydown",PlayNote);
export function TonePlay(){
 
    return(<div className='pianoPage'>
    <h1>Enjoy playing on the Tone Piano!</h1> <br/> <br/> <br/> <br/>
    <div className='piano'>
    <div className='white-key' onClick={playC4}>A</div>
    <div className='black-key' onClick={playDb4}></div>
    <div className='white-key' onClick={playD4}></div>
    <div className='black-key' onClick={playEb4}></div>
    <div className='white-key' onClick={playE4}></div>
    <div className='white-key' onClick={playF4}></div>
    <div className='black-key' onClick={playGb4}></div>
    <div className='white-key' onClick={playG4}></div>
    <div className='black-key' onClick={playAb4}></div>
    <div className='white-key' onClick={playA4}></div>
    <div className='black-key' onClick={playBb4}></div>
    <div className='white-key' onClick={playB4}></div>
    <div className='white-key' onClick={playC5}></div>
    <div className='black-key' onClick={playDb5}></div>
    <div className='white-key' onClick={playD5}></div>
    <div className='black-key' onClick={playEb5}></div>
    <div className='white-key' onClick={playE5}></div>
    <div className='white-key' onClick={playF5}></div>
    <div className='black-key' onClick={playGb5}></div>
    <div className='white-key' onClick={playG5}></div>
    <div className='black-key' onClick={playAb5}></div>
    <div className='white-key' onClick={playA5}></div>
    <div className='black-key' onClick={playBb5}></div>
    <div className='white-key' onClick={playB5}></div>
    <div className='white-key' onClick={playC6}></div>
  
    </div>
    </div>)
}