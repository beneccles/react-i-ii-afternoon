import React, {Component} from 'react';

class Display extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.dObject.id,
            name: this.props.dObject.name,
            city: this.props.dObject.city,
            country: this.props.dObject.country,
            employer: this.props.dObject.employer,
            title: this.props.dObject.title,
            favoriteMovies: this.props.dObject.favoriteMovies
        }
    }

    render(){
        // Handles case that user has more than 3 favorite movies.
        let favMovies = this.state.favoriteMovies.map((element, index) => {
            return <li className="listAlign" key={index}>{element}</li>
        })

        return (
            <div className="dataLeft">
            <h1>{`${this.state.name.first} ${this.state.name.last}`}</h1>
            <br />
            <p><strong>From:</strong> {`${this.state.city}, ${this.state.country}`}</p>
            <p><strong>Job Title:</strong>{` ${this.state.title}`}</p>
            <p><strong>Employer:</strong>{` ${this.state.employer}`}</p>
            <br />
            <strong>Favorite Movies:</strong>
            <ol>
                {favMovies}
            </ol>
            <div className="bottomAccent"></div>
            </div>
            
        )
    }

}

export default Display;