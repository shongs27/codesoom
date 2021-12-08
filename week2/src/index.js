import React, {useState} from 'react'
import ReactDOM from 'react-dom'


function Button ({children}){
    return (
        <button type="button">{children}</button>
    )
}


function Buttons({count = 0, onClick}) {    
  
    return (
        <>
        <button type="button" onClick={onClick}>눌러주세요! {count}</button>
        <div>
        {[1,2,3].map((v) => (
            <Button key={v}>{v}</Button>
        ))}

        </div>
        
        </>
    )
}

function Page({count, onClick}) {
    return (
        <>
            <p>반갑습니다 !!!</p>
            <div>
                <Buttons count = {count} onClick ={onClick} />
            </div>
        </>
    )
}


function App() {
    const [state, setState] = useState({count: 0})

    const {count} = state

    function onClickNumber() {
        setState({count : count+1})
    }

    return (
            <Page count = {count} onClick ={onClickNumber}/>
    )    
}

ReactDOM.render(<App />, document.getElementById('app'))