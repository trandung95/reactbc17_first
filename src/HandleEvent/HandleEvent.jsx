import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = () => {
        alert('xin chào');
    }
    showMess = (name) => {
        alert('Xin chào! ' + name);
    }
    //lưu ý khi gọi hàm ko bỏ dấu () vào để tránh hàm chạy luôn khi vừa mở ra
    render() {
        return (
            <div className="container">
                <h1>HandleEvent</h1>
                <hr />
                <button className="btn btn-primary" onClick={this.handleClick}>Show message</button>
                <hr />
                <button className="btn btn-secondary" onClick={() => {
                    alert('xin chào');
                }}>Show message cách 2</button>
                <hr />
                <h3>Handle event</h3>
                <button className="btn btn-warning" onClick={this.showMess.bind(this,'Dũng')}>nhan</button>
                <button className="btn btn-warning" onClick={()=>{
                    this.showMess('Dung dep trai!!!')
                }}>nhan cach 2</button>
            </div>
        )
    }
}
