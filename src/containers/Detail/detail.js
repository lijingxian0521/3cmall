import React, {Component} from 'react';
import './detail.less';
import Header from "../../components/Header/index";
import DetailTab from "./DetailTab/detailTab";
import Slider from "./Slider/slider";
import {connect} from 'react-redux';
import DetailNav from "./DetailNav/detailNav";
export default class Detail extends Component {
    constructor() {
        super();
        this.state = {liked: false}
    }

    handleClick = () => {
        this.setState({liked: !this.state.liked})
    };

    render() {
        return (
            <div>
                <Header title="商品详情" icon="iconfont icon-18fanhui"/>
                <div className="container detail">
                    <Slider/>
                    <div className="detail-price">
                        <span className="price">

                        </span>
                        <div className="liked">
                            <i onClick={this.handleClick}
                               className={this.state.liked ? 'iconfont icon-shoucang1' : 'iconfont icon-shoucang'}> </i>
                        </div>
                    </div>
                    <DetailTab/>
                    <DetailNav/>
                </div>
            </div>

        )
    }
}