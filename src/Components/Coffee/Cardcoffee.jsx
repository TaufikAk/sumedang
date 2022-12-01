import { Button, Image, Modal, Row } from "react-bootstrap";

const Cardcoffee = (props) => {
  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Body>
        <Row>
        <Image className="img-fluid rounded rounded-3 mb-3" variant="" src={`https://be.scoffee.my.id/images/coffee/${props.image}`} />
            <div className="h4 mb-3">{props.name}</div>
            <div dangerouslySetInnerHTML={{ __html: props.description }} style={{ textAlign: "justify" }}></div>
            <div><p>Asal kopi: {props.origin}</p></div>
            <div><p>Jenis kopi: {props.type}</p></div>
        <Button className="ms-auto me-3 w-25" variant="secondary" onClick={props.close}>
          Close
        </Button>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default Cardcoffee;
