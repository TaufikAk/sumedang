import axios from "axios"
import { useEffect, useState } from "react"
import { Pagination, Spinner } from "react-bootstrap"
import { useSearchParams } from "react-router-dom"
import CardEvent from "./Card/CardEvent"


const Event = () => {

    const BASE_URL = 'https://scoffe.masuk.web.id/api/'

    const [loadPost, addLoadPost] = useState([]);
    const [page, addPage] = useState([]);
    const [pages, addPages] = useState([]);
    const [search, addSearch] = useSearchParams();
    const [loading, isLoading] = useState(false);

    // const getPost = () => {
    //     axios.defaults.withCredentials = true
    //     axios.get(`${BASE_URL}events`, {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(function (response) {
    //             console.log(response)
    //             addPage(response.data.data)
    //             addLoadPost(response.data.data.data)
    //             addPages(response.data.data.links)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // }

    const getPost = async () => {
        isLoading(true)
        try {
            // axios.defaults.withCredentials = true
            const response = await axios.get(`${BASE_URL}events`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            addPage(response.data.data)
            addLoadPost(response.data.data.data)
            addPages(response.data.data.links)
            isLoading(false);

        } catch (err) {
            console.error(err)
        }

    }

    const getPoste = async (url) => {
        isLoading(true)
        try{

            // axios.defaults.withCredentials = true
            const response = await axios.get(`${url}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
                    console.log(response)
                    addPage(response.data.data)
                    addLoadPost(response.data.data.data)
                    addPages(response.data.data.links)
                    isLoading(false)
        }
            catch(err) {
                console.log(err)
            }
    }

    useEffect(() => {
        getPost();
        // console.log(loadPost);
        // console.log(page)
        // console.log(page.label)
        // console.log(page.active)
    }, [])

    return (
        <>
            {loading ? <div className="bg-event-loading">
                <div><Spinner animation="border" size="lg" /></div>
                <div>Loading
                    <Spinner animation="grow" size="sm" />
                    <Spinner animation="grow" size="sm" />
                    <Spinner animation="grow" size="sm" />
                </div>
            </div> :
                <div className="bg-event">
                    <h1 className="m-5 text-white"> Event </h1>
                    <div className="row gap-3 d-flex justify-content-evenly">
                        {
                            loadPost.map((isiPost, index) => {
                                return <CardEvent key={isiPost.id} index={index} id={isiPost.id} title={isiPost.title} date={isiPost.date} author={isiPost.author}
                                    body={isiPost.body} image={isiPost.image} />
                            })
                        }
                    </div>

                    <div className="page">
                        <Pagination>
                            <Pagination.First onClick={() => getPoste(page.first_page_url)} />
                            <Pagination.Prev onClick={() => getPoste(page.next_page_url)} />

                            {
                                pages.map((isi, index) => {
                                    if (index !== 0) {
                                        if (index !== pages.length - 1) {
                                            if (!isi.active) {
                                                return <Pagination.Item key={isi.id} onClick={() => getPoste(isi.url)}>{isi.label}</Pagination.Item>
                                            } else {
                                                return <Pagination.Item key={isi.id} active>{isi.label}</Pagination.Item>
                                            }
                                        }

                                    }

                                })
                            }
                            <Pagination.Next onClick={() => getPoste(page.next_page_url)} />
                            <Pagination.Last onClick={() => getPoste(page.last_page_url)} />
                        </Pagination>
                    </div>
                </div>
            }
        </>
    )
}

export default Event;