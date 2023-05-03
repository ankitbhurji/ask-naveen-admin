import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'; 
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import { SettingQueries } from '../../utils/utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditSettingModal(props) {

    const {isEditModalOpen, handleEditModal, settingModelDetails} = props
    const [details, setDetails] = useState({})

    // console.log(details);
    const notify = () => {
        toast.success('Updated successfuly', 
        {
        autoClose:1500,
        position:toast.POSITION.TOP_CENTER
        }
        )
    };
    function handleEditModalClose(){
        handleEditModal()
    }
    function handlePage(){
        if(settingModelDetails){
            setDetails(settingModelDetails)
        }
    }
    function inputChangeHandler(e){
        setDetails({
            ...details, 
            [e.target.name]:e.target.value
        })
    }
    async function handleSaveChanges(details){
        const settingQueries = new SettingQueries
        const updateDetails = await settingQueries.updateSettingModelDetails(details)
        if(updateDetails){
            notify()
        }
        handleEditModalClose()
    }

    useEffect(()=>{
        handlePage()
    },[settingModelDetails])
    
    return ( 
        settingModelDetails &&
        <div>
             <Modal show={isEditModalOpen} size=""  onHide={handleEditModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Channel</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            DisplayName
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangeHandler} value={details.displayName || ''} type="text" name='displayName' placeholder="DisplayName"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            SettingKey
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangeHandler} value={details.settingKey || ''} as="textarea" type="text" name='settingKey'   placeholder="SettingKey" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            SettingValue
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangeHandler} value={details.settingValue || ''} as="textarea" type="text" name='settingValue'   placeholder="SettingValue" />
                            </Col>
                        </Form.Group>   
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleEditModalClose} variant="secondary">
                    Close
                    </Button>
                    <Button onClick={()=>{handleSaveChanges(details)}} variant="primary" >
                    Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </div>
     );
}

export default EditSettingModal;