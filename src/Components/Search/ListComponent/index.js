import React, { Component } from 'react';

class ListComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchkey:'',
            name:'',
            id:'',
            gender:'',
         }
    }
        

    render(){
        
        return(
            <div className="wrapper">
           {this.props.searchdata.length > 0 && <table>
               <thead>
                   <tr>
                   <td>ID</td>
                   <td>Name</td>
                   <td>Gender</td>
                
                   </tr>
               </thead>
               <tbody>
                   {this.props.searchdata.map(data=>{
                       return(
                        <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.gender}</td>
                        
                   </tr>
                       )
                   })
                }
               </tbody>
           </table>
           }
           {
               this.props.loading && <div>
                   <p>Fetching Results...!!!</p>
                  <div class="loader"></div>
               </div>
           }
           {
               
              
               this.props.nodata && <div>
                 <b>Sorry No Matches found.</b> 
               </div>
           }
           </div>
        );

        

    }

}
export default ListComponent;