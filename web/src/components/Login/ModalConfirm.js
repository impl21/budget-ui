import * as React from 'react'

export default class ModalConfirm extends React.Component {
    render() {

        return (
           UIkit.modal.confirm("Are you sure you want to delete your account?", () => {
               console.log("confirmed");
           })
        )
    }
}