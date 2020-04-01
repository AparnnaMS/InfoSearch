import React, { Component } from 'react';
import InputComponent from './InputComponent';
import ListComponent from './ListComponent';
import SearchData from '../data/search-list.json';
class Search extends Component {
    state = {searchdata: [],loading: false, nodata:false }
    callbackFunction = (searchKey) => {
        this.setState({ searchdata: []});
        this.setState({ nodata: false});
        this.setState({ loading: true });
        setTimeout(()=>{
            let data = SearchData
            .filter(item => {
                return item.name.toLowerCase().indexOf(searchKey.toLowerCase()) >= 0 ||  item.id.indexOf(searchKey) >=0
            });
        console.log(data.length);
        data.length ==0 ? this.setState({ nodata: true}) :  this.setState({ nodata: false}) 
        this.setState({ searchdata: data, loading: false})
        },3000)
        


    }


    render() {
        return (
            <div className="parent-wrapper">
                <InputComponent parentCallback={this.callbackFunction} />
                <ListComponent
                    searchdata={this.state.searchdata}
                    loading={this.state.loading}
                    nodata ={this.state.nodata}
                />
            </div>

        );
    }
}
export default Search;