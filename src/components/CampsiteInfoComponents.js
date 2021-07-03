import React, { Component } from 'react';
import {
    Button, Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Col, Row
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

function RenderCampsite({ campsite }) {

    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>

                </CardBody>
            </Card>
        </div>
    )
}

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false

        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    handleSubmit(values) {
        alert("Author: " + values.author);

    }

    render() {
        return (
            <div>
                < Button outline onClick={this.toggleModal} > <i className="fa-lg fa fa-pencil" />Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Modal</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">

                                <Col md={10}>
                                    <Label htmlFor="name">Name</Label>
                                    <Control.select model=".rating" id="name" name="name" className="form-control"

                                    >
                                        <option >1</option>
                                        <option >2</option>
                                        <option >3</option>
                                        <option >4</option>
                                        <option >5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={10}>
                                    <Label htmlFor="author">Author</Label>

                                    <Control.text model=".author" id="author" name="author" className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Label htmlFor="text">Text</Label>

                                    <Control.textarea row={6} model=".text" id="text" name="text" className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary" >Submit</Button>

                        </LocalForm>


                    </ModalBody>


                </Modal>


            </div>

        )
    }

}

function RenderComments({ comments }) {
    if (comments) {

        return (
            <div className="col-md-5 m-1">
                <h4>Comments:</h4>
                {
                    comments.map((comment) => (
                        <div>
                            {comment.text}<br></br> --{comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        </div>

                    ))

                }
                <CommentForm />

            </div>


        )
    }
    return <div />


}

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;
