import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="bannerPrev">This is here now</div>
    );
  }
}

class OptionsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {bgColor: '', textColor: '', bannerCopy: '', disclaimerCopy: '', linkURL: ''};

    this.handleBgColorChange = this.handleBgColorChange.bind(this);
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
    this.handleBannerCopyChange = this.handleBannerCopyChange.bind(this);
    this.handleDisclaimerCopyChange = this.handleDisclaimerCopyChange.bind(this);
    this.handleLinkURLChange = this.handleLinkURLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBgColorChange(event) {
    this.setState({bgColor: event.target.value});
  }

  handleTextColorChange(event) {
    this.setState({textColor: event.target.value});
  }

  handleBannerCopyChange(event) {
    this.setState({bannerCopy: event.target.value});
  }

  handleDisclaimerCopyChange(event) {
    this.setState({disclaimerCopy: event.target.value});
  }

  handleLinkURLChange(event) {
    this.setState({linkURL: event.target.value});
  }

  handleSubmit(event) {
    alert("Options submitted: " + this.state.bgColor + " : " + this.state.textColor + " : " + this.state.bannerCopy + " : " + this.state.disclaimerCopy + " : " + this.state.linkURL);
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
          Disclaimer:
          <input type="text" value={this.state.disclaimerCopy} onChange={this.handleDisclaimerCopyChange} />
          Link URL:
          <input type="text" value={this.state.linkURL} onChange={this.handleLinkURLChange} />


          <input type="submit" value="Submit" />
        </form>
        <Preview />
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
