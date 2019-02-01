import React, { Component } from 'react';
import axios from 'axios';
import NewJob from './NewJob';
import AcceptedJob from './AcceptedJob';

import './Jobs.css';

export class Jobs extends Component {

    componentDidMount() {
        axios.get('http://localhost:8080/jobs').then((response) => {
            this.setState({jobs: response.data});
        }, (response) => {
            console.log("Error", response);
        });
    }
    
    state = {
        view: 'new',
        jobs: []
    }

    changeView = (e) => {
        e.preventDefault();
        this.setState({ view: e.target.value});
    }
    
    accept = (id) => {
        axios.post('http://localhost:8080/jobs/' + id + '/accept', {}).then((response) => {
            this.setState({jobs: response.data});
        }, (response) => {
            console.log("Error", response);
        });
    }
  
    decline = (id) => {
        axios.post('http://localhost:8080/jobs/' + id + '/decline', {}).then((response) => {
            this.setState({jobs: response.data});
        }, (response) => {
            console.log("Error", response);
        });
    }

    render() {
        return [
            <div>
                <button className={this.state.view === 'new' ? 'btn-tab selected' : 'btn-tab'} 
                    onClick={this.changeView}
                    value="new">Invited </button>
                
                <button className={this.state.view === 'accepted' ? 'btn-tab selected' : 'btn-tab'} 
                    onClick={this.changeView}
                    value="accepted">Accepted </button>
            </div>,
            
            this.state.jobs.map(job => {
                if (this.state.view === 'new') {
                    if (job.job_status === 'new') {
                        return <NewJob key={job.job_id} job={job} accept={this.accept} decline={this.decline}/>
                    }
                } else {
                    if (job.job_status === 'accepted') {
                        return <AcceptedJob key={job.job_id} job={job}/>
                    }
                }
                return '';
            })
        ]
    }
}

export default Jobs
