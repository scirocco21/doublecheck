import React, { Component } from 'react';
import Emoji from './Emoji.js'
import { symbolMap } from '../emojis.js';
import { Card, CardImg, CardText, CardFooter, CardImgOverlay,  Popover, PopoverHeader, PopoverBody, Button } from 'reactstrap';
import '../stylesheets/Result.css'

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return(
      <div className="App-header">
          <h2 className='cardTitle'><em>{this.props.project.title}</em></h2>
         <Card body inverse className="card text-center">
           <CardImg className="cardImage" src={require("../images/" + this.props.project.img)} alt="Card image cap" />
           <CardImgOverlay>
                <CardText className="text">
                    <h3>Your Passage</h3>
                    <hr/>
                    <h4>{this.props.project.text}</h4>
                    <Button className="analysisButton" id="Popover1" onClick={this.toggle}>
                      View Detailed Analysis
                    </Button>

                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                      {this.props.project.sentences.map(sentence =>
                        <>
                        <PopoverHeader>{sentence.text}</PopoverHeader>

                        <PopoverBody>
                          <ul>{sentence.tones.map(tone =>
                            <li>
                              <em>{tone.tone_name}</em>
                              <p>Score: {tone.score}</p>
                            </li>
                            )}
                          </ul>
                        </PopoverBody>
                      </>
                      )}

                    </Popover>

               </CardText>
             </CardImgOverlay>
             <CardFooter>
               <div className="summary">
                 <h3>Summary</h3>
                 <hr/>
                 <ul>
                 {this.props.project.tones.map(tone =>
                   <li>
                     <em>{tone.tone_name} </em>
                     <Emoji symbol={symbolMap(tone)} />
                     <p> Score: {tone.score}</p>
                   </li>)}
                 </ul>
               </div>
            </CardFooter>
         </Card>
       </div>
     )
   }
}
