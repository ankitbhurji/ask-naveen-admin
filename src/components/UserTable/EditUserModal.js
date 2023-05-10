import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';
import {Quries} from '../../utils/utils';
import { ToastContainer, toast } from 'react-toastify';


function EditUserModal(props) {

    const {showEditPage} = props
    const {userData} = props
    const [userDetails, setUserDetails] = useState({})
    const [userDetailsDateTime, setUserDetailsDateTime] = useState({
        createdAt:'',
        updatedAt:''
    })
    // console.log(userDetailsDateTime);

    const notifyUpdate = () => {
        toast.success('Updated successfuly', 
        {
        autoClose:1500,
        position:toast.POSITION.TOP_CENTER
        }
        )
    };
    function handleClose(){
        props.handleEdit()
    }
    function handlePage(){
        if(userData){
            setUserDetails(userData)
            setUserDetailsDateTime({
                ...userDetailsDateTime,
                createdAt: new Date(userData.createdAt).toDateString(),
                updatedAt:new Date(userData.updatedAt).toDateString()
            })
        }
    }

    async function handleSaveChanges(editedUserDetails){
        let quries = new Quries
        if(editedUserDetails){
            const updatedUserDetails = await quries.updateUserDetails(editedUserDetails)
            if(updatedUserDetails){
                notifyUpdate()
            }
            handleClose()
        }
    }

    function inputChangedHandler(e){
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
            })
    }

    useEffect(()=>{
        handlePage()
    },[userData])

    return (
        userData && 
        <>
            <Modal show={showEditPage} size="" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            UserId
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} type="text" name='id' value={userDetails.id || ''} placeholder="Name" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} type="text" name='name' value={userDetails.name || ''} placeholder="Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Gender
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Select onChange={inputChangedHandler} name='gender' aria-label="Default select example">
                                <option>{userDetails.gender}Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                </Form.Select>   
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} name='email' value={userDetails.email || ''} type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Mobile
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} name='mobileNumber' value={userDetails.mobileNumber || ''} type="text" placeholder="Mobile" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            City
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} name='cityName' value={userDetails.cityName || ''} type="text" placeholder="City" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            State
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} name='stateName' value={userDetails.stateName || ''} type="Text" placeholder="State" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Country
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} name='countryName' value={userDetails.countryName || ''} type="text" placeholder="Country" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Position
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} name='userType' value={userDetails.userType || ''} type="text" placeholder="Position" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            LastLogin
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} name='_lastChangedAt' value={userDetails._lastChangedAt || ''} type="text" placeholder="Last Login" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Status
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} name='status' value={userDetails.status || ''} type="text" placeholder="Status" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Job
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} name='job' value={userDetails.job || ''} type="text" placeholder="Job" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            CreatedAt
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} name='createdAt' value={userDetailsDateTime.createdAt || ''} type="text" placeholder="Created At" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            UpdatedAt
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onChange={inputChangedHandler} name='updatedAt' value={userDetailsDateTime.updatedAt || ''} type="text" placeholder="Updated At" disabled/>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={()=>{handleSaveChanges(userDetails)}}>
                    Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
     );
}

export default EditUserModal;