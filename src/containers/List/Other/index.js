import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../../store/actions/list'
@connect(//@装饰器  和原来写法一样
    state => state.list,
    actions,
)

export default class Other extends Component{
    constructor(){
        super();
        // this.state={id:0}
    }
    // componentWillMount(){
    //     let {other}=this.props.list;
    //     other.find((item,index)=>{
    //         this.setState({id:item.id})
    //     })
    //
    // }
    render(){

        return (
            <ul>

                {

                        this.props.list.other.map((item, index) => (

                            <li key={index}>
                                <Link to={{pathname:'/detail',state:{item}}}>
                                <div className="cover">
                                    <img src={item.cover}/>
                                </div>
                                <div className="description">

                                    <p>{item.description}</p>
                                    <span>￥ {item.price}</span>
                                </div>
                                </Link>
                            </li>

                        ))
                }

            </ul>
        )
    }
}
