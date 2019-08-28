import React, {Component} from 'react';

class Editor extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="editors">
            <button id="frontButton" className="editButtons"><strong>Edit</strong></button>
            <button id="middleButton" className="editButtons"><strong>Delete</strong></button>
            <button id="endButton" className="editButtons"><strong>New</strong></button>
            </div>
        )
    }
}

export default Editor