import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function EditVideoModal(props) {

    const {isEditModalOpen, handleEditModal, videoModelDetails} = props
    const date = videoModelDetails? new Date(videoModelDetails.addDateTime):'';

    function handleEditModalClose(){
        handleEditModal()
    }

    return (
        videoModelDetails && 
        <div> 
           <Modal show={isEditModalOpen} size=""  onHide={handleEditModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Video</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Video Id
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" name='videoId' value={videoModelDetails.videoID || ''} placeholder="Video Id" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Video Title
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control as="textarea" type="text" name='videoTitle' value={videoModelDetails.videoTitle || ''} placeholder="Video Title" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Video Views
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" name='videoViews' value={videoModelDetails.videoViews || ''} placeholder="Video Views" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Video Likes
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" name='videoLikeCount' value={videoModelDetails.videoLikeCount || ''} placeholder="Video Likes" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Video Rating
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" name='ratingCount' value={videoModelDetails.ratingCount || ''} placeholder="Video Rating" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Rating Yes
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" name='ratingYes' value={videoModelDetails.ratingYes || ''} placeholder="Rating Yes" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Rating No
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="Text" name='ratingNo' value={videoModelDetails.ratingNo || ''} placeholder="Rating No" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Video Click Count
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" name='videoClickCount' value={videoModelDetails.videoClickCount || ''} placeholder="Video Click Count" disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Add Data Time
                            </Form.Label>
                            <Col sm={8}>
                                {date && <Form.Control type="text" name='addDateTime' value={date.toDateString() || ''} placeholder="Add Date Time" disabled/>}
                            </Col>
                        </Form.Group>   
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditModalClose}>
                    Close
                    </Button>
                    <Button variant="primary" disabled>
                    Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}

export default EditVideoModal;