import React, { Component } from 'react';


class Modal extends Component {



    render() {

        return (
            <div className="modal fade" id="CguModal" tabIndex="-1" role="dialog" aria-labelledby="CguModal" style={{display: "none"}} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="CguModalTitle">Conditions d'utilisation</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary waves-effect waves-light" data-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default Modal;