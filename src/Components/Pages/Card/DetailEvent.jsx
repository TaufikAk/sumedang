import { Button, Col, Image, Modal, Row } from "react-bootstrap";


const DetailEvent = (props) => {

  return (
    <Modal show={props.show} onHide={props.onHide} size="lg">
      <Modal.Body>
        <Row>
          <Image className="fluid rounded-start mb-3" variant="" src={`https://be.scoffee.my.id/images/events/${props.image}`} />
          <Col xs={7}>
            <div className="h4 mb-3">{props.title}</div>
            <div dangerouslySetInnerHTML={{ __html: props.body }} style={{ textAlign: "justify" }}></div>
          </Col>
          <Col xs={5}>
            <div><p>Tanggal Event: {props.date}</p></div>
            <div><p>Author: {props.author}</p></div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DetailEvent;