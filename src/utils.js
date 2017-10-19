/**
 * Created by Weil on 2017/5/23.
 */
let ajax = ({method = '', url = '', async = true, data = {}, headers = {}}) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);

    for (let key in headers) {
        xhr.setRequestHeader(key, headers[key]);
    }
    if (method.toUpperCase() === 'POST') {
        xhr.setRequestHeader('content-type', 'application/json');
    }

    let sendString = typeof data === 'string' ? data : JSON.stringify(data);
    xhr.send(sendString);

    return new Promise((resolve, reject) => {
        xhr.onload = function () {
            resolve(JSON.parse(xhr.responseText));
        };
        xhr.onerror = function () {
            reject(xhr.responseText);
        };
    });
};
// Rem
let setRem = (doc, win) => {
    console.log("dpr:" + win.devicePixelRatio);
    let docEle = doc.documentElement,
        isIos = navigator.userAgent.match(/iphone|ipod|ipad/gi),
        dpr = Math.min(win.devicePixelRatio, 3),
        scale = 1 / dpr,

        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEle.dataset.dpr = dpr;

    let metaEle = doc.createElement('meta');
    metaEle.name = 'viewport';
    metaEle.content = 'initial-scale=' + scale + ',maximum-scale=' + scale;
    docEle.firstElementChild.appendChild(metaEle);

    let recalCulate = function () {
        let width = docEle.clientWidth;
        if (width / dpr > 640) {
            width = 640 * dpr;
        }
        docEle.style.fontSize = 100 * (width / 750) + 'px';
    };

    recalCulate();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);
};
let str = 'abcdafghijklmnopqrstuvwxyz';
let ary = [];
let getFour=()=>{

    if (ary.length >= 4) {
        ary.splice(0);
    }
    let num = Math.round(Math.random() * 25);
    ary.push(num);

    if (ary.length < 4) {
        return getFour()
    } else {
        return ary;
    }
}
let getCode=()=>{
    let ary = getFour();
    let list = '';

    for (let i = 0; i < ary.length; i++) {
        list += str[ary[i]]
    }
    return list;
}
let upLoadMore=(element, callback)=>{
    let timer;
    //增加一个事件处理函数
    element.addEventListener('scroll', (event) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            let scrollTop = element.scrollTop;//向上卷去的高度
            let winHeight = element.clientHeight;//可视区域的高度
            let contentHeight = element.scrollHeight;//内容区域的总高度
            if (winHeight + scrollTop + 10 >= contentHeight) {
                callback();
            }
        }, 300);
    });
}
let downRefresh=(element, callback)=>{
    let body = document.body || document.documentElement;
    body.addEventListener('touchstart', touchStart);
    let startY;//开始触摸的纵坐标
    let touchDistance;//滑动的总距离
    function touchStart(event) {
        if(element.offsetTop == 56&& element.scrollTop==0){
            //取得的是这个点距离顶部的距离
            startY = event.targetTouches[0].pageY;
            touchDistance = 0;
            body.addEventListener('touchmove', touchMove);
            body.addEventListener('touchend', touchEnd);
        }
        function touchMove(event) {
            let pageY = event.targetTouches[0].pageY;
            if (pageY > startY) {//下拉
                element.style.top = (pageY - startY+56)+'px';
                touchDistance = pageY - startY;
            } else {
                body.removeEventListener('touchmove', touchMove);
                body.removeEventListener('touchend', touchEnd);
            }
        }
        function touchEnd(){
            body.removeEventListener('touchmove', touchMove);
            body.removeEventListener('touchend', touchEnd);
            if(touchDistance>0){
                let timer = setInterval(()=>{
                    element.style.top = (element.offsetTop - 1)+'px';
                    if(element.offsetTop == 56){
                        clearInterval(timer);
                    }
                },5);
                if(touchDistance>50)
                    callback();
            }

        }
    }
}
export {ajax};
export {setRem};
export {upLoadMore};
export {downRefresh}
export {getCode}
export default {
    ajax,
    setRem,
    upLoadMore,
    downRefresh,
    getCode
}
