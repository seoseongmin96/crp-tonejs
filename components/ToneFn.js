import * as Tone from "tone"

export function playC4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4","8n");
    }

export function playDb4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Db4","8n");
    }
    
export function playD4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D4","8n");
    }   
    
export function playEb4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Eb4","8n");
    }   

export function playE4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E4","8n");
    }
    
export function playF4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F4","8n");
    }
        
export function playGb4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Gb4","8n");
    }
    
export function playG4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G4","8n");
    } 
    
export function playAb4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Ab4","8n");
    }
    
export function playA4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A4","8n");
    }

export function playBb4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Bb4","8n");
    }
        
export function playB4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B4","8n");
    }

export function playC5(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C5","8n");
    }
    
export function playDb5(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Db5","8n");
    }
    
export function playD5(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D5","8n");
    }
        
export function playEb5(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Eb5","8n");
    }

export function playE5(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E5","8n");
    }

export function playF5(){
     const synth = new Tone.Synth().toDestination();
     synth.triggerAttackRelease("F5","8n");
    }

export function playGb5(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Gb5","8n");
    }

export function playG5(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G5","8n");
    }

export function playAb5(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Ab5","8n");
    }

export function playA5(){
    const synth = new Tone.Synth().toDestination();
     synth.triggerAttackRelease("A5","8n");
    }

export function playBb5(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Bb5","8n");
    }

export function playB5(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B5","8n");
    }

export function playC6(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C6","8n");
    }

export function PlayNote(event){
    if(event.keyCode ===65){
        playC4();
    }
    if(event.keyCode ===87){
        playDb4();
    }
    if(event.keyCode ===69){
        playD4();
    }
    if(event.keyCode ===68){
        playEb4();
    }
    if(event.keyCode ===70){
        playE4();
    }
    if(event.keyCode ===84){
        playF4();
    }
    if(event.keyCode ===71){
        playGb4();
    }
    if(event.keyCode ===89){
        playG4();
    }
    if(event.keyCode ===72){
        playAb4();
    }
    if(event.keyCode ===72){
        playA4();
    }
    if(event.keyCode ===85){
        playBb4();
    }
    if(event.keyCode ===74){
        playB4();
    }


    if(event.keyCode ===75){
        playC5();
    }
    if(event.keyCode ===79){
        playDb5();
    }
    if(event.keyCode ===76){
        playD5();
    }
    if(event.keyCode ===80){
        playEb5();
    }
    if(event.keyCode ===90){
        playE5();
    }
    if(event.keyCode ===88){
        playF5();
    }
    if(event.keyCode ===67){
        playGb5();
    }
    if(event.keyCode ===86){
        playG5();
    }
    if(event.keyCode ===66){
        playAb5();
    }
    if(event.keyCode ===78){
        playA5();
    }
    if(event.keyCode ===77){
        playBb5();
    }
    if(event.keyCode ===82){
        playB5();
    }
    if(event.keyCode ===73){
        playC6();
    }



}    
    




    