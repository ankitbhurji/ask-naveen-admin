import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmBox(props) {

    const {isConfirmModelOpen} = props
    const [isShow, setIsShow] = useState(false)

    function handleShow(){
        
    }
    function handleClose(){
        setIsShow(false)
    }
    function handleConfirmDelete(){

    }

    useEffect(()=>{
        if(isConfirmModelOpen){
            setIsShow(isConfirmModelOpen)
        }
    }, [])

    return ( 
        <div>
            <Modal show={isShow} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                <Button onClick={handleConfirmDelete} variant="danger">Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}

export default ConfirmBox;