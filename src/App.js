import React from 'react'


function Square(props) {
    return <button className="square">{props.num}</button>;
}
export default function Board() {

    return (
        <div>
            <div className="board-row">
                <Square num={1}/>
                <Square num={2}/>
                <Square num={3}/>
            </div>
            <div className="board-row">
                <Square num={4}/>
                <Square num={5}/>
                <Square num={6}/>
            </div>
            <div className="board-row">
                <Square num={7}/>
                <Square num={8}/>
                <Square num={9}/>
            </div>
        </div>
    );
}