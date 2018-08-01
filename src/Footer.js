import React, { Component } from 'react';
var bgColors = { "Default": "white" }
class Footer extends Component {

    render() {
        return (
            <footer className="page-footer center-on-small-only">

                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <h5 className="title font-bold mt-3 mb-4">L'Atelier</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu blandit tortor. Nam id ipsum ligula.
                    Donec eu accumsan felis.</p>
                        </div>

                        <hr className="w-100 clearfix d-sm-none" />

                        <div className="col-lg-2 col-md-6 ml-auto">
                            <h5 className="title font-bold mt-3 mb-4">Partnaires</h5>
                            <ul>
                                <li>
                                    <a href="#!">Lorem ipsum</a>
                                </li>
                                <li>
                                    <a href="#!">Lorem ipsum</a>
                                </li>
                                <li>
                                    <a href="#!">Lorem ipsum</a>
                                </li>
                                <li>
                                    <a href="#!">Lorem ipsum</a>
                                </li>
                            </ul>
                        </div>

                        <hr className="w-100 clearfix d-sm-none" />

                        <div className="col-lg-2 col-md-6 ml-auto">
                            <h5 className="title font-bold mt-3 mb-4">Projets</h5>
                            <ul>
                                <li>
                                    <a href="#!">Lorem ipsum</a>
                                </li>
                                <li>
                                    <a href="#!">Lorem ipsum</a>
                                </li>
                                <li>
                                    <a href="#!">Lorem ipsum</a>
                                </li>
                                <li>
                                    <a href="#!">Lorem ipsum</a>
                                </li>
                            </ul>
                        </div>

                        <hr className="w-100 clearfix d-sm-none" />

                        <div className="col-lg-2 col-md-6 ml-auto">
                            <h5 className="title font-bold mt-3 mb-4">Nos Réseaux</h5>
                            <ul>
                                <li>
                                    <a href="#!">Facebook</a>
                                </li>
                                <li>
                                    <a href="#!">Youtube</a>
                                </li>
                                <li>
                                    <a href="#!">Instagram</a>
                                </li>
                                <li>
                                    <a href="#!">Pinterest</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <hr />



                <div className="footer-copyright">
                    <div className="containter-fluid">
                        © 2018 Copyright: <a href="#"> L'Atelier.com </a>
                    </div>
                </div>

            </footer>
        )
    }
};
export default Footer;