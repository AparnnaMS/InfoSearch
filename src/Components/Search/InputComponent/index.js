import React, { Component } from 'react';
import './style.css';
import SearchData from '../../data/search-list.json';
import ListComponent from '../ListComponent';

 class  SearchInput extends Component {
    constructor(props){
       super(props);
      this.state = {
         inputstring:'',
      }
    }
   
   updateSearch=(event)=>{
      this.setState({inputstring:event.target.value})
   }
   sendData = () => {
      this.props.parentCallback(this.state.inputstring);
   }

     render(){
        return(
            <div className="wrapper">
            <input type="text" className="input_text" onChange={this.updateSearch} value={this.state.inputstring}/>
            <button onClick={this.sendData} className="serch-btn">Search</button>
            </div>
        );
     }
   
}
 

export default SearchInput;
