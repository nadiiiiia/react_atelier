import React, { Component } from 'react';


class ConfirmTable extends Component {


    render() {

        return (

            <div>
                <h2>Confirmation d'inscription</h2>

                <p> Vous êtes en train de confirmer votre inscription pour participer à l'atelier suivant:</p>

                <table>
                    <tbody>
                        <tr>
                            <th>Titre</th>
                            <td>{this.props.detail.titre}</td>
                        </tr>

                        <tr>
                            <th>Description</th>
                            <td>{this.props.detail.desc}</td>
                        </tr>
                        <tr>
                            <th>Date</th>
                            <td>{this.props.detail.dateDeb}</td>
                        </tr>
                        <tr>
                            <th>Prix total</th>
                            <td>{this.props.detail.prix} €</td>
                        </tr>
                        <tr>
                            <th>Adresse</th>
                            <td>{this.props.detail.adresse}<br />

                            </td>
                        </tr>
                        <tr>
                            <th>Organisateur</th>
                            <td>{this.props.detail.organizer}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </div>


        );
    }
}

export default ConfirmTable;