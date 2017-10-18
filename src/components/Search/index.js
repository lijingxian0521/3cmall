import React, {Component} from 'react';
import './index.less'
export default class Search extends Component{
    constructor(){
        super();
        this.state={val:''}
    }
    handleChange=(e)=>{
        let val=e.target.value;
        this.setState({val});
        this.props.searchProduct(val);

    };


    render(){
        return(
            <div className="search-wrap">
                <input value={this.state.val} onChange={this.handleChange} type="text" placeholder=" 热搜商品"  />
                <i className="iconfont icon-fangdajing"></i>
            </div>
        )
    }
}