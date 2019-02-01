import React, { Component } from 'react'
import Moment from 'moment';

export class NewJob extends Component {

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
              {Moment(this.props.job.created_at).format('MMMM d @ h:mm a')}
            </span>
          </div>
        </div>
        <div className="info">
          <span className="suburb"><i className="icon fas fa-map-marker-alt"></i>{this.props.job.suburb} {this.props.job.postcode}</span>
          <span className="category"><i className="icon fas fa-briefcase"></i>{this.props.job.category}</span>
          <span className="jobid">Job ID: {this.props.job.job_id}</span>
        </div>
        <div className="desc">{this.props.job.description}</div>
        <div className="action">
          <button className="btn btn-accept" onClick={this.props.accept.bind(this, this.props.job.job_id)}>Accept</button>
          <button className="btn btn-decline" onClick={this.props.decline.bind(this, this.props.job.job_id)}>Decline</button>
          <span className="price">
              {new Intl.NumberFormat('en-AU', { 
                style: 'currency', 
                currency: 'AUD' 
              }).format(this.props.job.price)}
          </span>
          <span>Lead Invitation</span>
        </div>
      </div>
    )
  }
}

export default NewJob
