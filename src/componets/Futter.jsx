import React from 'react'

const Futter = () => {
    return (
        <div>
            <div className="futter __container__main">
                <div className="futter__container __container">
                    <div className="nav futter__nav">
                        <div className="logo">
                            <img src="img/Logo.svg" />
                        </div>
                        <div className="top-nav nav__container">
                            <ul className="nav-list nav__container">
                                <li className="nav-list_item">About</li>
                                <li className="nav-list_item">Products</li>
                                <li className="nav-list_item">Service</li>
                                <li className="nav-list_item">Contact</li>
                            </ul>
                            <div className="icon-nav nav__container">
                                <div>
                                    <img src="img/vk.png" />
                                </div>
                                <div>
                                    <img src="img/instagram.png" />
                                </div>
                                <div>
                                    <img src="img/youtube.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Futter