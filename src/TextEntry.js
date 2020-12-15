import React from 'react';
let marked = require("marked");

export class TextEntry extends React.Component{

    constructor(props){
        super(props);

        this.getText = this.getText.bind(this); 

        this.state = {
            text: ""
        };
    }

    getText(event){
        this.setState({
            text: event.target.value
        });
    }

    render(){
        return(
            <div className="container">
                <div className="editor-header"> 
                    <span className="header-text">Editor</span> 
                </div>
                <textarea onChange={this.getText}> </textarea>

                <Preview text={this.state.text}/>
                
            </div>
        );
    }

}


export class Preview extends React.Component{

    constructor(props){
        super(props); 
    }

    
    render(){
        return(
            <>
            <div className="preview-header">
                <span className="preview-text">Preview</span>
            </div>
            <div className="preview" dangerouslySetInnerHTML={{__html:marked(this.props.text)}}>
            </div>
            </>
        );
    }
}