import React,{Component} from"react";


class Searchfiled extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="search" placeholder="Enter Anything"  className="form-control"
                        onChange={(e)=> this.props.searchPorductfilter(e)}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    
    }
    
};
export default Searchfiled;