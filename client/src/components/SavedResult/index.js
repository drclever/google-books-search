import React from "react";
import "./style.css";
import {Row, Col} from "../Grid";
import Moment from "moment";

const SavedResult = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Saved Books</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Saved Books</h3>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="buttonDiv ">
                                    <Col size="9" className="emptyCol"/>
                                    <Col size="3">
                                        <a href={savedbook.link} target="_blank" rel="noopener noreferrer">
                                        <button className="viewBook btn btn-success">
                                            Preview
                                        </button>
                                        </a>
                                        <button className="deleteBook btn btn-danger" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                            Delete
                                        </button>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook._id}>
                                    <Col size="2" className="bookImage">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    <Col size="9" className="bookInfo">
                                        <Row>
                                            <h2 className="bookTitle">{savedbook.title}</h2>
                                        </Row>
                                        <Row>
                                            <h3 className="bookAuthor">{savedbook.authors}</h3>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription">{savedbook.description}</p>
                                        </Row>
                                        <Row>
                                            <p className="bookDate">Date Saved {Moment(savedbook.date).format('YYYY-MM-DD')}</p>
                                        </Row>
                                    </Col>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SavedResult