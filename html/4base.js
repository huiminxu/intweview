//HTML
    block
        div
        p
        ol

    inline
        span
        a
        textarea
    
    inline-block
        img
        input
        button
// CSS
    display:inline/inline-block/block
    display:flex;  // 响应式布局  @media(min-width:720px & max-width:920px) vw vh  100% rem
    
    float: left;
    clear:both;

    position: relative/ absolute/ fixed /sticky;


    rem / em /px / 百分比 / vw/vh



    // width:
    // height:
    // padding:
    // border:
    // border-radius:
    // margin:
    // font-size
    // line-height
    // color
    // background

    

// JS
    // 字符串常用操作
        trim()
        length
        replace(reg/str,str/func)  // 不改变原始字符串
        concat(str,str,str) // 连接多个字符串，不改变原字符串
        indexOf()
        includes()  //该字符串是否包含指定的字符串
        match(reg)  // 不改变

    // 数组常用操作
        length
        concat(arr) // 返回新数组，不改变
        join()  // 转字符串
        map(func(curValue,index, arr)) // 返回新数组，不改变
        slice(start,end)  //截取数组
        some(func(curValue,index,arr))  //如果有一个条件符合则返回 true
        every(func(curValue,index,arr)) // 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测，全部符合返回 true

        //改变
        push()
        pop()
        shift() // 从头删除
        unshift() // 从头添加
        splice(index,howmany,item1,item2,...item) // 改变数组

    // DOM 常用操作
        document.getElementsByTagName("p");
        document.getElementById("id");