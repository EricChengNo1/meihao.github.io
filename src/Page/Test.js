import React from 'react';
import ReactSwipe from "react-swipe";
import './index.css';

export default function Test(){
    const [number, setNumber] = React.useState(0);

    const [title, setTitle] = React.useState("标题");

    React.useEffect(() => {
        console.log(`页面加载会执行； 页面发生更新时也会执行`);
        setTimeout(()=>{setLoading(false)}, 3000)
    });

    React.useEffect(() => {
       console.log(`页面加载、number: ${number}变化时，都会执行`);
    }, [number]);

    React.useEffect(() => {
       console.log("页面加载，number和title变化都会执行");
    },[number, title]);

    React.useEffect(() => {
       console.log("最后，页面加载会执行");
       return () => {
           console.log("组件卸载会执行");
       }
    },[]);

    const addNumber = () => {
        setNumber(number+1);
    };

    const [index, setIndex] = React.useState(0);
    const opts = {
        auto: 3000,
        callback: index => {
            console.log(index);
            setIndex(index);
        }
    };

    const [isLoading, setLoading] = React.useState(true);
    if(isLoading){
        return <div>loading...</div>
    }
    return (
        <div style={{marginTop:"60px"}}>
            <h3>React 16.8版本function组件新增钩子函数（类似class组件的生命周期）</h3>
            <span>You have clicked {number} times.</span>
            <br/>
            <button onClick={addNumber}>+1</button>

            <br/>

            <p>{title}</p>
            <button onClick={() => {setTitle(new Date().getSeconds() +  '随机标题')}}>修改标题</button>

            <div>
                <ReactSwipe swipeOptions={opts}>
                    <div>
                        <span>123</span>
                    </div>
                    <div>
                        <span>abc</span>
                    </div>
                </ReactSwipe>
                <div className="swiper-pagination">
                    <ul className="swiper-pagination-items">
                        <li className={index === 0 ? 'selected' : ''}></li>
                        <li className={index === 1 ? 'selected' : ''}></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}