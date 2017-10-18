import React from 'react';
import {ajax} from '../../../utils';
import './detailTab.less';
class NewsList extends React.Component {

    constructor() {
        super();
        this.state = {
            tabs: [
                {tabName: "商品详情", id: 1},
                {tabName: "评论", id: 2}
            ],
            currentIndex: 1,
            tabInfo: {
                id:1,
                brand:'sss',
                description:'Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)',
                price:7588
            }
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
        let {brand,description,price} = this.state.tabInfo;
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
                <div className="tabList">
                    <div style={{display: this.state.currentIndex == 1 ? 'block' : 'none'}}>
                        <div>商品名称:  {brand}</div>
                        <div>商品全称:  {description}</div>
                        <div>商品价格:  {price}</div>
                    </div>
                    <div style={{display: this.state.currentIndex == 2 ? 'block' : 'none'}}>
                        体育世界
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsList;