import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import { AdminVideoQuries } from '../../utils/utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditAdminVideoModal(props) {

    const {isEditModalOpen, handleEditModal, adminVideoModeDetails} = props
    const date = adminVideoModeDetails? new Date(adminVideoModeDetails.addDateTime):'';
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
    function inputChangedHandler(e){
        setDetails({
            ...details, 
            [e.target.name]:e.target.value
        })
    }
    function handlePage(){
        if(adminVideoModeDetails){
            setDetails(adminVideoModeDetails)
        }
    }
    async function handleSaveChanges(details){
        const adminVideoModel = new AdminVideoQuries
        const updateDetails = await adminVideoModel.updateAdminVideoModelDetails(details)
        if(updateDetails){
            notify()
        }
        handleEditModalClose()
    }

    useEffect(()=>{
        handlePage()
    },[adminVideoModeDetails])

    return ( 
        adminVideoModeDetails &&
        <div>
             <Modal show={isEditModalOpen} size=""  onHide={handleEditModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Admin Video</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Video Id
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" name='videoId' value={details.videoID || ''} placeholder="Video Id" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Video Title
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangedHandler} as="textarea" type="text" name='videoTitle' value={details.videoTitle || ''}  placeholder="Video Title" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Video Category
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangedHandler} type="text" name='videoCategory' value={details.videoCategory || ''}  placeholder="Video Views" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Views Count
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" name='viewsCount' value={details.viewsCount || ''}  placeholder="Video Likes" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Like Count
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" name='likesCount' value={details.likesCount || ''} placeholder="Video Rating" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Add Data Time
                            </Form.Label>
                            <Col sm={8}>
                                {date && <Form.Control type="text" name='addDateTime' value={date.toDateString() || ''}  placeholder="Add Date Time" disabled/>}
                            </Col>
                        </Form.Group>   
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditModalClose} >
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

export default EditAdminVideoModal;