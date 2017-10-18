import React, {Component} from 'react';
import Header from "../../components/Header/index";
import {ajax} from "../../utils";
import Carousel from "./Carousel/index";
import './index.less'
import Category from "./Category/index";

export default class Home extends Component{
    constructor(){
        super();
        this.state={
            sliders:[],
            computers:[],


        };
    }
    componentWillMount(){
        const HOST = 'http://localhost:3000';
        //获取轮播图
        ajax({
            method:'GET',
            url:`${HOST}/swiper`,
            async: true,
        }).then(res=>{
            this.setState({sliders:res})
        }).catch((e)=>{
            console.log(e);
        });
        //获取computer
        ajax({
            method:'GET',
            url:`${HOST}/computers`,
            async: true,
        }).then(res=>{
            this.setState({computers:res})
        }).catch((e)=>{
            console.log(e);
        });
        //获取phone
        ajax({
            method:'GET',
            url:`${HOST}/phones`,
            async: true,
        }).then(res=>{
            this.setState({phones:res});
        }).catch((e)=>{
            console.log(e);
        });
        //获取other
        ajax({
            method:'GET',
            url:`${HOST}/other`,
            async: true,
        }).then(res=>{
            this.setState({other:res})
        }).catch((e)=>{
            console.log(e);
        })

    }
    render(){
        return(
            <div>
                <Header icon="iconfont icon-iconfontmoban" title="数码广场"/>
                <div className="container">
                    <Carousel  sliders={this.state.sliders}/>
                    <ul className="navBar">
                        <li><i className="iconfont icon-diannao icon"></i><span>优品电脑</span></li>
                        <li><i className="iconfont icon-shouji icon"></i><span>热销手机</span></li>
                        <li><i className="iconfont icon-zhineng icon"></i><span>智能穿戴</span></li>
                        <li><i className="iconfont icon-huiyuan icon"></i><span>会员服务</span></li>
                        <li><i className="iconfont icon-dingwei icon"></i><span>线下商城</span></li>
                    </ul>
                    <div>搜索框</div>
                    <ul className="link-list">
                        <li>
                            <a href="#">
                                <p>金秋宅着乐</p>
                                <img src="https://img10.360buyimg.com/babel/s400x170_jfs/t10318/9/1613123764/50276/6fd9ebb1/59e429a9Nc2901936.jpg!q90.webp" alt=""/>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <p>3C推荐</p>
                                <img src="https://img13.360buyimg.com/babel/s400x170_jfs/t5575/287/4027177619/174421/bf5b88e1/5947381aN7dd9f758.png!q90.webp" alt=""/>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <p>智能印象馆</p>
                                <img src="https://img10.360buyimg.com/babel/s400x170_jfs/t8719/76/1448096678/24330/235a67ff/59b9e444N3fbecf3b.jpg!q90.webp" alt=""/>
                            </a>
                        </li>
                    </ul>
                    <Category title="热销电脑" list={this.state.computers}/>
                </div>
            </div>
        )
    }
}