// 动态计算根元素字体
        var desW = 640; // 设计稿的宽度
        var doc = document.documentElement;

        function refreshRem() {
            var winW = doc.clientWidth; // 获取视口宽度
            if (winW >= desW) { // 视口宽度超过设计稿宽度时 始终 100px 不能再变大了
                doc.style.fontSize = '100px';
                return;
            }
            var radio = desW / winW;
            doc.style.fontSize = 100 / radio + 'px';
        }
        refreshRem();
        window.addEventListener('resize', refreshRem);