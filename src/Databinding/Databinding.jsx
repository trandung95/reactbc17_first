import React, { Component } from 'react'

export default class DataBinDing extends Component {
    product = {
        id: 1,
        name: 'Phone',
        price: 1000,
        img: 'https://i.pravatar.cc/200'
    }
    renderProdct = () => {
        return (
            <div className="card w-25">
                <img src={this.product.img} alt="..." />
                <div className="card-body">
                    <p>{this.product.name}</p>
                    <p>{this.product.price}</p>
                </div>
            </div>
        )
    }

    render() {
        let title = 'tieu de';
        return (
            <div className="container">
                <p id="txt">{title}</p>
                <hr />
                {this.renderProdct()}
            </div>
        )
    }
}
