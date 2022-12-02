import moment from "moment/moment";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";


const DetailEvent = (props) => {

  return (
    <Modal show={props.show} onHide={props.onHide} size="lg">
      <Modal.Body>
        <Row>
          <Image className="mb-3" src={`https://be.scoffee.my.id/images/events/${props.image}`} />

            <div className="h4 mb-3">{props.title}</div>
            <div><p>Tanggal Event: {moment(props.date).format('DD-MM-YYYY')}</p></div>
            <div><p>Author: {props.author}</p></div>
            <div dangerouslySetInnerHTML={{ __html: props.body }} style={{ textAlign: "justify" }}></div>


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