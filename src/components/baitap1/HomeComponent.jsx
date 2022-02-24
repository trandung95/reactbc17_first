import React, { Component } from 'react'
import ContentComponent from './ContentComponent'
import NavigationComponent from './NavigationComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'

export default class HomeComponent extends Component {
    render() { //nội dung component luôn bao phủ bởi 1 thẻ
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0 m-0">
                        <HeaderComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 p-0 m-0">
                        <NavigationComponent />
                    </div>
                    <div className="col-8 p-0 m-0">
                        <ContentComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0 m-0">
                        <FooterComponent />
                    </div>
                </div>
            </div>
        )
    }
}
