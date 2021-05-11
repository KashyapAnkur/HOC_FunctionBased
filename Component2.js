import React,{useRef} from 'react';
import HOC from './HOC';

function Component2(props) {
    const myref = useRef();
    return (
        <>
            Name coming from HOC: {props.state.name}<br />
            <input type="text" ref={myref} placeholder="Enter name to change in HOC" />
            <button onClick={() => props.changeName(myref.current.value)}>Change Name in HOC</button>
        </>
    )
}

export default HOC(Component2);