import React, { Component } from 'react';
import './App.css';
import templateObj from './templates';
import editTemplate from './helpers';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {prevCode: this.props.templateChoosen};
  }

  render() {
    return (
      <div id="bannerPrev"></div>
    );
  }
}

class OptionsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {templateChoosen: templateObj.natBannerDesktop.template, editedTemplate: '', options: templateObj.natBannerDesktop.options, bgColor: '', textColor: '', bannerCopy: '', popHeaderCopy: '',disclaimerCopy: '', linkURL: ''};

    this.handleBgColorChange = this.handleBgColorChange.bind(this);
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
    this.handleBannerCopyChange = this.handleBannerCopyChange.bind(this);
    this.handlePopHeaderCopyChange = this.handlePopHeaderCopyChange.bind(this);
    this.handleDisclaimerCopyChange = this.handleDisclaimerCopyChange.bind(this);
    this.handleLinkURLChange = this.handleLinkURLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeCallback() {
    this.setState({editedTemplate: editTemplate(this.state.templateChoosen, this.state.options, this.state)}, 
                  ()=>{document.getElementById('bannerPrev').innerHTML = this.state.editedTemplate;});
  }

  handleBgColorChange(event) {
    this.setState({bgColor: event.target.value}, this.changeCallback);
  }

  handleTextColorChange(event) {
    this.setState({textColor: event.target.value}, this.changeCallback);
  }

  handleBannerCopyChange(event) {
    this.setState({bannerCopy: event.target.value}, this.changeCallback);
  }

  handlePopHeaderCopyChange(event) {
    this.setState({popHeaderCopy: event.target.value}, this.changeCallback);
  }

  handleDisclaimerCopyChange(event) {
    this.setState({disclaimerCopy: event.target.value}, this.changeCallback);
  }

  handleLinkURLChange(event) {
    this.setState({linkURL: event.target.value}, this.changeCallback);
  }

  handleSubmit(event) {
    alert("Options submitted: " + this.state.bgColor + " : " + this.state.textColor + " : " + this.state.bannerCopy + " : " + this.state.disclaimerCopy + " : " + this.state.linkURL + " : " + this.state.popHeaderCopy);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Background Color:
          <input type="text" value={this.state.bgColor} onChange={this.handleBgColorChange} />
          Text Color:
          <input type="text" value={this.state.textColor} onChange={this.handleTextColorChange} />
          Banner Copy:
          <input type="text" value={this.state.bannerCopy} onChange={this.handleBannerCopyChange} />
          Pop Header Copy:
          <input type="text" value={this.state.popHeaderCopy} onChange={this.handlePopHeaderCopyChange} />
          Disclaimer:
          <input type="text" value={this.state.disclaimerCopy} onChange={this.handleDisclaimerCopyChange} />
          Link URL:
          <input type="text" value={this.state.linkURL} onChange={this.handleLinkURLChange} />


          <input type="submit" value="Submit" />
        </form>
        <Preview templateChoosen={this.state.templateChoosen} />
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Banner Generator</h1>
        <OptionsForm />
      </div>
    );
  }
}

export default App;
