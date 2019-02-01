import React, { Component } from 'react'

export class Job extends Component {
  render() {
    return (
      <div className="job">
        <div className="profile">
          <span className="avatar">
            {this.props.job.contact_name[0]}
          </span>
          <div className="contact">
            <span className="name">{this.props.job.contact_name}</span>
            <span className="date">{this.props.job.created_at}</span>
          </div>
        </div>
        <div className="info">
          <span className="suburb"><i class="icon fas fa-map-marker-alt"></i>{this.props.job.suburb} {this.props.job.postcode}</span>
          <span className="category"><i class="icon fas fa-briefcase"></i>{this.props.job.category}</span>
          <span className="jobid">Job ID: {this.props.job.job_id}</span>
        </div>
        <div className="desc">{this.props.job.description}</div>
        <div className="action">
          <button className="btn btn-accept">Accept</button>
          <button className="btn btn-decline">Decline</button>
          <span className="price">{this.props.job.price}</span>
        </div>
      </div>
    )
  }
}

export default Job
