import React from 'react';
import {ajax} from '../../../utils';
import './detailTab.less';
import {connect} from 'react-redux'
import actions from '../../../store/actions/list'
@connect(//@装饰器  和原来写法一样
    state => state.list,
    actions,
)
class NewsList extends React.Component {

    constructor() {
        super();
        this.state = {
            tabs: [
                {tabName: "商品详情", id: 1},
                {tabName: "评论", id: 2}
            ],
            currentIndex: 1
        };
    }

    tabChange = (id) => {
        //tab切换到方法
        this.setState({
            currentIndex: id
        });
    };

    componentDidMount() {
        ajax({
            url: 'http://localhost:3000/phones/',
            method: 'GET'
        }).then((res) => {
            this.setState({tabInfo: res})
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        let _this = this;
        let {brand,description,price} = this.props.list.phones;
        return (
            <div>
                <ul className="detail-tab">
                    {
                        this.state.tabs.map((res, index) => {
                            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
                            let tabStyle = res.id == this.state.currentIndex ? 'subCtrl active' : 'subCtrl';
                            return <li key={index} onClick={this.tabChange.bind(_this, res.id)} className={tabStyle}>{res.tabName}</li>

                        })
                    }
                </ul>
                {
                    this.props.list.phones.map((item,index)=>(
                        <div className="tabList">
                            <div style={{display: this.state.currentIndex == 1 ? 'block' : 'none'}}>
                                <div>商品名称:  {item.brand}</div>
                                <div>商品全称:  {item.description}</div>
                                <div>商品价格:  {item.price}</div>
                            </div>
                            <div style={{display: this.state.currentIndex == 2 ? 'block' : 'none'}}>
                                体育世界
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default NewsList;