import React, {Component} from "react";
import Searchfiled from "./searchfiled";
import Card from "./card"

class App extends Component{
    constructor(){
        super();
        this.state={
            allData:[],
            searchData:''

            
            
        }
    };

    componentDidMount(){
    fetch('https://pixabay.com/api/?key=21413774-ebd619ffdc57eca2cfb4a8e5b&q=yellow+trees&image_type=photo&pretty=true')
          .then(response=>response.json())
          .then(data=> this.setState({allData:data.hits}));
    };
    searchProduct =(e)=>{
        console.log(e.target.value);
        this.setState({searchData:e.target.value});
    };
    render(){
        let searchfilter = this.state.allData
                          .filter(data=> data.user.toLowerCase()
                          .includes(this.state.searchData.toLowerCase()));
          console.log(searchfilter);                
        return(
            
            <div className="container">
                <div className="row">
                    <Searchfiled searchPorductfilter={this.searchProduct}/>
                </div>
                
                <div className="row">
                    
                    {
                       searchfilter.map(data =><Card data={data} key={data.id}/>)
                    }
                </div>
            </div>
            )
    }
}

export default App;