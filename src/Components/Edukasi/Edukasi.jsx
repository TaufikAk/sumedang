import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import { Pagination } from "react-bootstrap";

function Edukasi() {
  const BASE_URL = "https://be.scoffee.my.id/api/";
  const [loadPost, setLoadPost] = useState([]);
  const [page, setPage] = useState([]);
  const [pages, setPages] = useState([]);

  const getPost = () => {
    axios
      .get(`${BASE_URL}education`, {
        headers: {
          Authorization: `Bearer`,
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
        console.log(response)
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
    <>
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: "75px" }}
      >
        <div className="col-10">
          {loadPost.map((isipost, index) => {
            return (
              <div
                className="card mb-3"
                style={{
                  maxWidth: "70rem",
                  backgroundColor: "#FBFBFB",
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-4" key={index}>
                    <img
                      src={`https://be.scoffee.my.id/images/education/${isipost.image}`}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{isipost.title}</h5>
                      <p className="card-text">Category: {isipost.category}</p>
                      <p className="card-text">
                        <small className="text-muted">{isipost.author}</small>
                      </p>
                      <hr />
                      <p className="card-text">
                        <small className="text-muted">
                          {moment(isipost.created_at).fromNow()}
                        </small>
                      </p>
                      <Link
                        to={`/petani/${isipost.slug}`}
                        className=" stretched-link"
                      ></Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
    </>
  );
}

export default Edukasi;
