import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"


class SearchBooks extends Component {
    //create state
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value.trim() })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
       API.getSearch(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    console.log("Error from getSearch")
                    throw new Error(res.data.items);
                }
                else {
                    // store response in a array
                    let results = res.data.items
                    //map through the array 
                    results = results.map(result => {
                        //Test to see if imageLink exists.  If not, then create a no cover thumbnail. 
                        if (typeof result.volumeInfo.imageLinks == "undefined") {
                            result.volumeInfo.imageLinks = {thumbnail: "https://books.google.com/googlebooks/images/no_cover_thumb.gif"};
                        } 

                        //store each book information in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            authors: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }

                        return result;
                    })
                    // set the state of the books array to the new arrays of objects with properties getting back from the response

                    this.setState({ books: results, error: "" })

                }
            })
            .catch(err => {
                alert("No Books Found, Try a Different Query")
                this.setState({ 
                    books: [],
                    error: "No Books Found, Try a Different Query" 
                })
            });
    }

    handleSavedButton = event => {
        event.preventDefault();
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Book saved") }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">Google Book Search</h1>
                    <br></br>
                    <h2 className="text-white">Search for Books and Save Them</h2>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }


}

export default SearchBooks