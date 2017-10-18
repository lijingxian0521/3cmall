import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './slider.less'
import {connect} from 'react-redux';
import {ajax} from '../../../utils';
export default class Slider extends Component {
    constructor() {
        super();
        this.state = {
            myProduct: {
                // id: 3,
                // brand: '',
                // description: '',
                // price: '',
                // cover: '',
                // album: [],
                // comment: {
                //     stars: '',
                //     auther: '',
                //     date: '',
                //     text: ''
                // }
            }
        }
    }

    componentDidMount() {
        ajax({
            url: 'http://localhost:3000/phones/',
            method: 'GET'
        }).then((res) => {
            this.setState({myProduct: res});
        }).catch(error => {
            console.log('报错啦');
        })
    }

    render() {
        // let [...album] = this.state.myProduct;
        let pro = this.state.myProduct;
        console.log(pro);
        // console.log(Object.prototype.toString.call(pro));
        let options = {
            continuous: false, // 无缝轮播
            auto: 1000,
            disableScroll: true, // 禁止手动轮播
            // 每轮播一次会调用此方法并传入最新的索引
            callback: (index) => {
                this.setState({index})
            }
        };
        return (
            <div className="detail-slider">
                <ReactSwipe
                    className="slider"
                    swipeOptions={options}>
                    {/*{
                        this.state.myProduct.album.map((item, index) => (
                            <div key={index}><img src={item}/></div>

                        ))
                    }*/}
                </ReactSwipe>
                <div className="dots">
                    {/*{
                        this.state.product.map((item, index) => (
                            <span className={this.state.index == index ? 'active' : null} key={index}></span>
                        ))
                    }*/}
                </div>
            </div>
        );
    }
}