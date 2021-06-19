import React, { Component } from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

export default class CampsiteInfoComponents extends Component {
    constructor(props){
        super(props);
        this.state = {
           selectedCampsite: null
        };

    }

    onCampsiteSelect(campsite){

        this.setState({selectedCampsite: campsite});
    }
    renderCampsite(campsite) {  
  
        return(
        <div className="col-md-5 m-1">
            <Card onClick={()=> this.onCampsiteSelect(campsite)}>
                    <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                   <CardImgOverlay>
                       <CardTitle>{campsite.name}</CardTitle>
                   </CardImgOverlay>
                    </Card>
        </div>
        )
    }

    renderComments(comments) {
        if (comments) {
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(current=> <div > {current.text}  <br></br> --{current.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(current.date)))}</div>
                    )}
                   
                </div>
            
            )
            return <div/>
        }
      
    
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            )
        } else {
            return (
            <div>
                
            </div>
            )
 
        }
    }
}
