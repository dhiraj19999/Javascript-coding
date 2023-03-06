/*     

The useMemo is a hook used in the functional component of react that returns a memoized value.

useMemo is a hook that is used in the functional component of React that returns a memoized value


The basic purpose of the useMemo hook is related to the fact that we try to avoid the unnecessary
 re-rendering of components and props in our program.

We want to make sure that only the components that witness a change in their values are re-rendered;
 otherwise, there’s no need to re-render the component and slow down the performance.

Only re-rendering certain components will make your program efficient and improve the overall performance 
of your React app.


for stoping or memorizing  unwanted fuction which get calls on event we use usememo
prevent the component from rendering whose state does not changes 


import useMemo  from 'react'
const [count,setcount]=usesate(0)
const [item,setitem]=usesate(0)


function multicount(){

    return count*5;
}

const multicountmemo=useMemo(function multicount(){

    return count*5;
},[count])

//<h2  {multicount()}></h2>
<h2  {multicountmemo}></h2>
<button onclick =()=>setcount(count+1)> update count </button>
<button onclick =()=>setitme(itme+1)> update item  </button>



when we click on either update count or update item then multicount also get invoked  and it effect 
on applications performnce so for that we use usememo to memorize the reuslt usememo accept function and
second one is dependecy which is useful to tell that whenevr we have to invoke multicount function.

*/