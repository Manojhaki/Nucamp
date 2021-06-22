import React, { Component } from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

export default class CampsiteInfoComponents extends Component {
    renderCampsite(campsite) {  
  
        return(
        <div className="col-md-5 m-1">
            <Card>
                    <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                   <CardImgOverlay>
                       <CardTitle>{campsite.name}</CardTitle>
                   </CardImgOverlay>
                    </Card>
        </div>
        )
    }

    renderComments(comments){
        if(comments){

            return(
                <div className="col-md-5 m-1">
                    <h4>Comments:</h4>
                    {
                        comments.map((comment)=>(
                            <div>
                                {comment.text}<br></br> --{comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </div>

                        ))

                    }

                </div>


            )
        }
        return <div/>
       

    }
        
    render() {
        if (this.props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite.comments)}
                    </div>
                </div>
            );
        }
        return <div />;
    }
}
