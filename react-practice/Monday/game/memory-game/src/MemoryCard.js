import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {

    constructor(){
        super()
        this.state = { isFlipped: false };
    }
    clickHandler(){
        this.setState({ 
            isFlipped: !this.state.isFlipped 
        })
    }
    render () {
        var memoryCardInnerClass = 'MemoryCardInner'
        if(this.state.isFlipped){
            memoryCardInnerClass += ' flipped';
        }
        return(
        <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
            <div className={memoryCardInnerClass}>
                <div className="MemoryCardBack">
                    <img className="img" src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt=""></img>
                </div>
                <div className="MemoryCardFront">
                    ∆
                </div>
            </div>
        </div>
        )
    }
}




export default MemoryCard;