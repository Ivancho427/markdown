import React from 'react';
import marked from 'marked';


const placeholder =` # Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
![React Logo w/ Text](https://goo.gl/Umyytc)`;

 class GeneradorMarkdown extends React.Component {
    constructor() {
        super()
        this.state = {
            text: placeholder
        }
    }

    cambiarValor = (value) => {
        return { __html: marked(value, {sanitize: true, breaks: true})}
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }    

    render () {
        return (
            <div className="container">
                <h2 id="texto-h2">Verificación de Markdown a continuación, <br/> si desea, puede borrar y escribir en el recuadro: </h2>
                <textarea id="editor" type="text" name="text" value={this.state.text} onChange={this.handleChange} cols="60" rows="20">{this.state.text} </textarea>
                <div id="preview" dangerouslySetInnerHTML={this.state.text !== "" ? this.cambiarValor(this.state.text) : {__html: ""}}></div>
            </div>
        )
    }
}

export default GeneradorMarkdown;



