

const DetailEvent = () =>{
    return(
        <>
        <Modal show={props.show} onHide={props.onHide} size="lg">
    <Modal.Header closeButton>
      <Modal.Title></Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row>
        <Col xs={4}>
      <Image className="fluid rounded-start" variant="" src={props.image} />
      </Col>
      <Col xs={4}>
        <div className="h4">{props.name}</div>
        <div>{props.email}</div>
        <div>{props.born}</div>
        <div>{props.academic}</div>
        <div>{props.work}</div>
      </Col>
      <Col xs={4}>
        <div>{props.description}</div>
      </Col>
      </Row>
    </Modal.Body>
    <Modal.Footer>
          <Button variant="secondary" >
            Edit
          </Button>
          {/* <Button variant="danger" onClick={() => {if(window.confirm('Yakin hapus post?')){props.delete(props.id)}}}>
            Delete
          </Button> */}
    </Modal.Footer>
  </Modal>
        </>
    )
}