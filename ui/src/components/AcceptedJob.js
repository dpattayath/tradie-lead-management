import React, { Component } from 'react'
import Moment from 'moment';

export class AcceptedJob extends Component {
  
  render() {
  
    return (
  
      <div className="job">
        
        <div className="profile">
        
          <span className="avatar">
          
            {this.props.job.contact_name[0]}
          
          </span>
        
          <div className="contact">
          
            <span className="name">{this.props.job.contact_name}</span>
          
            <span className="date">
          
              {Moment(this.props.job.created_at).format('MMMM d YYYY @ h:mm a')}
          
            </span>
          
          </div>
        
        </div>
        
        <div className="info">
        
          <span className="suburb"><i className="icon fas fa-map-marker-alt"></i>{this.props.job.suburb} {this.props.job.postcode}</span>
        
          <span className="category"><i className="icon fas fa-briefcase"></i>{this.props.job.category}</span>
        
          <span className="jobid">Job ID: {this.props.job.id}</span>
        
          <span className="price-accept">
          
                {new Intl.NumberFormat('en-AU', { 
                    style: 'currency', 
                    currency: 'AUD' 
                }).format(this.props.job.price)}
          
          </span>
        
          <span>Lead Invitation</span>
        
        </div>
        
        <div className="details-accept">
      
            <i className="icon fas fa-phone"></i><span className="phone">{this.props.job.contact_phone}</span>
      
            <i className="icon fas fa-envelope"></i><span className="email">{this.props.job.contact_email}</span>
      
            <div className="desc-accept">{this.props.job.description}</div>
      
        </div>
      
      </div>
    )
  }
}

export default AcceptedJob
