
/*



The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need 
to be recalculated. The useMemo Hook only runs when one of its dependencies update. This can improve performance. 
It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations
useMemo will only recompute the memoized value when one of the inputs has changed.








*/

import React from 'react'
import { useState,useMemo } from 'react'
function memo(){

let [counterone,setCounterone]=useState(0)
let [countertwo,setCountertwo]=useState(0)

function Incrementone(){
setCounterone(counterone+1)
}

function Incrementtwo(){
    setCountertwo(countertwo+1)
}


const iseven=useMemo(()=>{
    return counterone%2===0
},[countertwo])

    
/*
here iseven only depend on changing value of counterone but before using of usemomo iseven function also get called with
incrementtwo function there is no such relation bet incrementtwo and iseven as incrementtwo didn't change counterone value
as a result it slow down the perfomance  so to avoid it we use usememo and pass dependencies as counterone
now iseven only invokes when the counterone value changes it also increase the perfomance of application.
usemomo avoid unwanted function calls
*/
return(
        <div>

            <button onClick={Incrementone}>counter {counterone}</button>
            <span>{iseven()?"even":"not even"}</span>
            <button onClick={Incrementtwo}>counter {countertwo}</button>
        </div>
    )
}
