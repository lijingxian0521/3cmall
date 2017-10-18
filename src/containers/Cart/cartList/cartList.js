import React,{Component} from 'react';
import './cartList.less';
export default class CartList extends Component{
    constructor(){
        super();
        this.state={isCheckAll: false,isSelected:false,car:[]}
    }
    handleCarData = ()=>{
        if(!this.state.isSelected){
            let tempId = this.props.pro.id;
            this.props.products.map(product=>{
                if(tempId===product.id){
                    this.setState({car:[...this.state.car,product]});
                }
            })
        }
    };
    handleCheckAll = ()=>{
        console.log(12);
        this.setState({checkAll: !this.state.checkAll});
        this.state.checkAll?this.setState({isSelected: false}):this.setState({isSelected:true});
        console.log(this.state.car.length);
        let currentCar = this.state.car;
        if(this.state.checkAll){
            this.props.addToCar(currentCar)
        }else {
            this.props.delFromCar(currentCar);
        }
    };
    handleCheckOne = ()=>{
        this.setState({
            isSelected: !this.state.isSelected
        });
        this.handleCarData();
        let currentCar = this.state.car;
        if(this.state.isSelected){
            this.props.addToCar(currentCar)
        }else {
            this.props.delFromCar(currentCar);
        }
    };
    render(){
        let {pro, listClick} = this.props;
        return (
            <li className="list-li" onClick={()=>listClick(pro)}>
                <h3 className="pro-kind" key={pro.id}>
                    <input className="checkbox" type="checkbox" checked={this.state.isCheckAll} onClick={this.handleCheckAll}/>
                    <span className="kind">{pro.brand}</span>
                </h3>
                <div className="pro-show">
                    <input ref="sel" className="checkbox" type="checkbox" checked={this.state.isSelected} onClick={this.handleCheckOne}/>
                    <img src={pro.cover} alt=""/>
                    <div className="pro-describe">
                        <p className="pro-title">{pro.description}</p>
                        <p className="pro-deal">
                            <span>{`￥${pro.price}`}</span>
                            <span>
                                            <button className="btn" type="button">-</button>
                    <input className="cnt" type="text" placeholder="1"/>
                    <button className="btn" type="button">+</button>
            </span>
                        </p>
                    </div>
                </div>
            </li>
        );
    }
}