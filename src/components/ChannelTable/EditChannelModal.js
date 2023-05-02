import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { ChannelQuries } from '../../utils/utils';


function EditChannelModal(props) {
    const {editModal, isEditModalOpen, channelDetails} = props
    const [editableChannelDetails, setEditableChannelChannelDetails] = useState({})
    // console.log(editableChannelDetails);

    function handleEditModalClose(){
        editModal() 
    }
    function inputChangedHandler(e){
        setEditableChannelChannelDetails({
            ...editableChannelDetails,
            [e.target.name]: e.target.value
            })
    }
    function getEditableChannelDetails(){
        if(channelDetails){
            setEditableChannelChannelDetails(channelDetails)
        }
    }
    async function handleSaveChanges(editedChannelDetails){
        const channelQuries = new ChannelQuries
        if(editedChannelDetails){
            const updatedChannelDetails = await channelQuries.updateChannelDetails(editedChannelDetails)
            if(updatedChannelDetails){
                handleEditModalClose()
                alert('Channel Details Updated...!')
            }
        }
    }


    useEffect(()=>{
        getEditableChannelDetails()
    },[channelDetails])

    return (
        channelDetails &&
        <div>
           <Modal show={isEditModalOpen} size="" onHide={handleEditModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Channel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            RollNo
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangedHandler} type="text" name='rollNumber' value={editableChannelDetails.rollNumber || ''} placeholder="Roll Number" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Channel Name
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangedHandler} type="text" name='channelName' value={editableChannelDetails.channelName || ''} placeholder="Channel Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Handle Name
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangedHandler} type="text" name='handleName' value={editableChannelDetails.handleName || ''} placeholder="Handle Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Subscribers
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangedHandler} type="text" name='totalSubscribers' value={editableChannelDetails.totalSubscribers || ''} placeholder="Subscribers" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Videos
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangedHandler} type="text" name='totalVideos' value={editableChannelDetails.totalVideos || ''} placeholder="Videos" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Views
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangedHandler} type="text" name='totalViews' value={editableChannelDetails.totalViews || ''} placeholder="Views" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Level
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangedHandler} type="Text" name='level' value={editableChannelDetails.level || ''} placeholder="Level" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Membership
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputChangedHandler} type="text" name='membership' value={editableChannelDetails.membership || ''} placeholder="Membership" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Monitization Status
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Select onChange={inputChangedHandler} type='text' name='isChannelMonetize' aria-label="Default select example">
                                    {/* <option>{editableChannelDetails.isChannelMonetize && editableChannelDetails.isChannelMonetize.toString().charAt(0).toUpperCase() + editableChannelDetails.isChannelMonetize.toString().slice(1)}</option> */}
                                    <option>{editableChannelDetails.isChannelMonetize==undefined?"": editableChannelDetails.isChannelMonetize.toString()}</option>
                                    <option value='true'>True</option>
                                    <option value='false'>False</option>
                                </Form.Select>   
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                                Verify Status
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Select onChange={inputChangedHandler} type='text' name='isChannelVerified' aria-label="Default select example" placeholder="Verify Status">
                                    <option>{editableChannelDetails.isChannelVerified==undefined? "" :  editableChannelDetails.isChannelVerified.toString()}</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </Form.Select>   
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditModalClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={()=>{handleSaveChanges(editableChannelDetails)}}>
                    Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}

export default EditChannelModal;