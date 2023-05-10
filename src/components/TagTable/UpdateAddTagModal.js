import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'; 
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import { TagQueries } from '../../utils/utils';
import { ToastContainer, toast } from 'react-toastify';
import validator from 'validator';
 


function UpdateAddTagModal(props) {

    const {modalOpenKey,  handleAdd, handleUpdate, tagModelDetails} = props
    const [addDetails, setAddDetails] = useState({
        title:'',
        tags:'',
        link:''
    })
    const [details, setDetails] = useState({})
    // console.log(details);

    const notifyUpdate = () => {
        toast.success('Updated successfuly', 
        {
        autoClose:1500,
        position:toast.POSITION.TOP_CENTER
        }
        )
    };
    const notifyAdd = () => {
        toast.success('Added successfuly', 
        {
        autoClose:1500,
        position:toast.POSITION.TOP_CENTER
        }
        )
    };
    function handleAddModalClose(){
        handleAdd()
        setAddDetails({
            title:'',
            tags:'',
            link:''
        })
    }
    function handleUpdateModalClose(){
        handleUpdate()
    }
    function inputAddDetailsChangeHandler(e){
        setAddDetails({
            ...addDetails, 
            [e.target.name]:e.target.value
        })
    }
    async function handleAddNew(addFields){
        const tagQueries = new TagQueries
        if(!(addDetails.title=='' || addDetails.tags=='' || addDetails.link=='')){
            const isUrl = validator.isURL(addDetails.link);
            if(isUrl){
                const addNewTagModelData = await tagQueries.addNewTagModelData(addFields)
                if(addNewTagModelData){
                    notifyAdd()
                }
                setAddDetails({
                    title:'',
                    tags:'',
                    link:''
                })
                handleAddModalClose()
            }else{
                alert('Enter valid URL')
            }
        }else{
            alert("Fields can't be empty")
        }
    }
    function handleDetails(){
        if(tagModelDetails){
            setDetails(tagModelDetails)
        }
    }
    function inputUpdateDetailsChangeHandler(e){
        setDetails({
            ...details, 
            [e.target.name]: e.target.value
        })
    }   
    async function handleSaveChanges(updatedDetails){
        const tagQueries = new TagQueries
        const isUrl = validator.isURL(updatedDetails.link);
        if(isUrl){
            const updateDetails = await tagQueries.updateTagModelDetails(updatedDetails)
            if(updateDetails){
                notifyUpdate()
            }
            handleUpdateModalClose()
        }else{
            alert('Enter valid URL')
        }

    }

    useEffect(()=>{
        handleDetails()
    }, [tagModelDetails])

    return ( 
        <div>
            <Modal show={modalOpenKey.isAdd} size=""  onHide={handleAddModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tag</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Title
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputAddDetailsChangeHandler} type="text" name='title' placeholder="Title"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Tag
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputAddDetailsChangeHandler} as="textarea" type="text" name='tags' placeholder="Tags" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Link
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputAddDetailsChangeHandler}  as="textarea" type="text" name='link' placeholder="Link" />
                            </Col>
                        </Form.Group>   
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleAddModalClose} variant="secondary">
                    Close
                    </Button>
                    <Button onClick={()=>{handleAddNew(addDetails)}} variant="primary">Add New</Button>
                    {/* <Button
                    //  onClick={()=>{handleSaveChanges(details)}} 
                     variant="primary" 
                    >
                    Add Now
                    </Button> */}
                </Modal.Footer>
            </Modal>

            {
            tagModelDetails &&
            <Modal show={modalOpenKey.isUpdate} size=""  onHide={handleUpdateModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tag</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Title
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputUpdateDetailsChangeHandler} type="text" name='title' value={details.title || ''} placeholder="TItle"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Tags
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputUpdateDetailsChangeHandler} as="textarea" type="text" name='tags' value={details.tags || ''}   placeholder="Tag" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Link
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onChange={inputUpdateDetailsChangeHandler}  as="textarea" type="text" name='link' value={details.link || ''}   placeholder="Link" />
                            </Col>
                        </Form.Group>   
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleUpdateModalClose} variant="secondary">
                    Close
                    </Button>
                    <Button onClick={()=>{handleSaveChanges(details)}} variant="primary">Save Changes</Button>
                    {/* <Button
                    //  onClick={()=>{handleSaveChanges(details)}} 
                     variant="primary" 
                    >
                    Add Now
                    </Button> */}
                </Modal.Footer>
            </Modal>
            }
        </div>
     );
}

export default UpdateAddTagModal;