import { Button, Image, Modal, Row } from "react-bootstrap";


const Detailedukasi = (props) =>{
    return(
        <Modal show={props.show} onHide={props.close} size="lg">
        <Modal.Body>
          <Row>
            <Image className="mb-3" src={`https://be.scoffee.my.id/images/education/${props.image}`} />
              <div className="h4 mb-3">{props.title}</div>
              <div><p className="mb-1"><small className="text-muted">Kategori: {props.category}</small></p></div>
              <div dangerouslySetInnerHTML={{ __html: props.body }} style={{ textAlign: "justify" }}></div>
              <div><p>Author: {props.author}</p></div>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Detailedukasi;