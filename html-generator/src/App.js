import React, { Component } from 'react';
import './App.css';
import templateObj from './templates';
import editTemplate from './helpers';

class Preview extends Component {
  constructor(props) {
    super(props);
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
    this.state = {templateChoosen: "natBannerDesktopLinked", editedTemplate: '', options: templateObj.natBannerDesktopLinked.options, bgColor: '', textColor: '', bannerCopy: '', popHeaderCopy: '',disclaimerCopy: '', linkURL: ''};

    this.handleTemplateChange = this.handleTemplateChange.bind(this);
    this.handleBgColorChange = this.handleBgColorChange.bind(this);
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
    this.handleBannerCopyChange = this.handleBannerCopyChange.bind(this);
    this.handlePopHeaderCopyChange = this.handlePopHeaderCopyChange.bind(this);
    this.handleDisclaimerCopyChange = this.handleDisclaimerCopyChange.bind(this);
    this.handleLinkURLChange = this.handleLinkURLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeCallback() {
    this.setState({editedTemplate: editTemplate(templateObj[this.state.templateChoosen].template, this.state.options, this.state)}, 
                  ()=>{document.getElementById('bannerPrev').innerHTML = this.state.editedTemplate;});
  }

  handleTemplateChange(event) {
    console.log(event.target.value);
    this.setState({templateChoosen: event.target.value});
    this.setState({options: templateObj[event.target.value].options});
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

    let showOptions = {
      showBgColor: false,
      showTextColor: false,
      showBannerCopy: false,
      showPopHeaderCopy: false,
      showDisclaimerCopy: false,
      showLinkURL: false
    };
    let inputs = null;

    //console.log(this.state.options);
    this.state.options.forEach((option)=>{
      switch(option) {
        case "bgColor":
          showOptions.showBgColor = true;
          break;
        case "TextColor":
          showOptions.showTextColor = true;
          break;
        case "bannerCopy":
          showOptions.showBannerCopy = true;
          break;
        case "popHeaderCopy":
          showOptions.showPopHeaderCopy = true;
          break;
        case "disclaimerCopy":
          showOptions.showDisclaimerCopy = true;
          break;
        case "linkURL":
          showOptions.showLinkURL = true;
          break;
        default:
          break;
      }
    });

    if(showOptions.showLinkURL) {
      inputs = <div>
                Link URL:
                <input type="text" value={this.state.linkURL} onChange={this.handleLinkURLChange} />
                </div>;
    }


    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <select value={this.state.templateChoosen} onChange={this.handleTemplateChange} >
            <option value="natBannerDesktop" >Naturalizer (no link)</option>
            <option value="natBannerDesktopLinked" >Naturalizer (link)</option>
          </select><br/>

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
          {inputs}


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
