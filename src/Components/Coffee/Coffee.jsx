import "./Coffee.css";
import about from "../../images/about.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import moment from "moment/moment";
import Cardcoffee from "./Cardcoffee";

function Coffee() {
  const BASE_URL = "https://be.scoffee.my.id/api/";
  const [loadPost, setLoadPost] = useState([]);
  const [page, setPage] = useState([]);
  const [pages, setPages] = useState([]);
  const [temp, setTemp] = useState({});
  const [show, setShow] = useState(false);

  const getPost = () => {
    axios
      .get(`${BASE_URL}coffee`, {
        headers: {
          // 'Authorization': `Bearer`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response)
        setLoadPost(response.data.data.data);
        setPage(response.data.data);
        setPages(response.data.data.links);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getPoste = (url) => {
    axios
      .get(`${url}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "aplication/json",
        },
      })
      .then(function (response) {
        setLoadPost(response.data.data.data);
        setPage(response.data.data);
        setPages(response.data.data.links);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div id="bg1">
      <div className="container">
        <div className="row" id="p1">
          <div className="col-8">
            <div className="row">
              {loadPost.map((isipost, index) => {
                return (
                  <>
                  <div
                    className="card col-6"
                    key={index}
                    style={{
                      width: "18rem",
                      margin: "10px",
                      backgroundColor: "#FBFBFB",
                    }}
                    onClick={() => setShow(true) & setTemp(isipost)}
                  >
                    <img
                      src={`https://be.scoffee.my.id/images/coffee/${isipost.image}`}
                      className="card-img-top"
                      alt="..."
                      width="auto"
                      height="200px"
                      style={{ marginTop: "10px" }}
                    />
                    <div className="card-body">
                      <h4>{isipost.name}</h4>
                      <p className="card-text">
                        <small className="text-muted">{isipost.type}</small>
                      </p>
                      <hr />
                      <p className="card-text">{isipost.origin}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          {moment(isipost.created_at).fromNow()}
                        </small>
                      </p>
                      {/* <Link
                        to={`/detailcoffee/${isipost.slug}`}
                        className=" stretched-link"
                      ></Link> */}
                    </div>
                  </div>
                </>
                );
                
              })}
              <Cardcoffee map={temp.id} show={show} close={()=> setShow(false)} name={temp.name} type={temp.type}
              origin={temp.origin} image={temp.image} description={temp.description} />
            </div>
          </div>
          <div className="col-3">
            <img src={about} alt="" style={{ width: "0px", height: "0px" }} />
          </div>
        </div>
        <div className="page mt-5">
          <Pagination>
            <Pagination.First onClick={() => getPoste(page.first_page_url)} />
            <Pagination.Prev onClick={() => getPoste(page.prev_page_url)} />

            {pages.map((isi, index) => {
              if (index !== 0) {
                if (index !== pages.length - 1) {
                  if (!isi.active) {
                    return (
                      <Pagination.Item
                        key={isi.id}
                        onClick={() => getPoste(isi.url)}
                      >
                        {isi.label}
                      </Pagination.Item>
                    );
                  } else {
                    return (
                      <Pagination.Item key={isi.id} active>
                        {isi.label}
                      </Pagination.Item>
                    );
                  }
                }
              }
            })}

            <Pagination.Next onClick={() => getPoste(page.next_page_url)} />
            <Pagination.Last onClick={() => getPoste(page.last_page_url)} />
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default Coffee;
