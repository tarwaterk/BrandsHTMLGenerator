import React, { Component } from 'react';
import './App.css';
import templateObj from './templates';
import editTemplate from './helpers';

class Preview extends Component {

  render() {
    return (
      <div id="bannerPrev"></div>
    );
  }
}

class OptionsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templateChoosen: "natBannerDesktop",
      editedTemplate: '',
      options: templateObj.natBannerDesktop.options,
      bgColor: '',
      textColor: '',
      bannerCopy: '',
      popHeaderCopy: '',
      disclaimerCopy: '',
      linkURL: '',
      codeOutput: ''
    };

    this.handleTemplateChange = this.handleTemplateChange.bind(this);
    this.handleBgColorChange = this.handleBgColorChange.bind(this);
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
    this.handleBannerCopyChange = this.handleBannerCopyChange.bind(this);
    this.handlePopHeaderCopyChange = this.handlePopHeaderCopyChange.bind(this);
    this.handleDisclaimerCopyChange = this.handleDisclaimerCopyChange.bind(this);
    this.handleLinkURLChange = this.handleLinkURLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputValidation(whatToUpdate, value) {
    switch(whatToUpdate) {
      case "templateOutput":
        let bool = true;
        templateObj[this.state.templateChoosen].options.forEach((option)=>{
          if(this.state[option] === '') {
            bool = false;
          }
        });
        return bool;
      case "bgColorChange":
        if(/#[0-9a-f]{6}$/i.test(value)) {
          this.changeCallback();
        }
        break;
      case "textColorChange":
        if(/#[0-9a-f]{6}$/i.test(value)) {
          this.changeCallback();
        }
        break;
      case "bannerCopyChange":
        break;
      case "popHeaderCopyChange":
        break;
      case "disclaimerCopyChange":
        break;
      case "linkURLChange":
        break;
      default:
        break;
    }
  }

  changeCallback() {
    this.setState({editedTemplate: editTemplate(templateObj[this.state.templateChoosen].template, this.state.options, this.state)}, 
                  ()=>{this.setState({codeOutput: ''}); document.getElementById('bannerPrev').innerHTML = templateObj[this.state.templateChoosen].siteStyles + this.state.editedTemplate;});
  }

  handleTemplateChange(event) {
    this.setState({templateChoosen: event.target.value});
    this.setState({options: templateObj[event.target.value].options}, this.changeCallback);
  }

  handleBgColorChange(event) {
    this.setState({bgColor: event.target.value}, ()=>{this.inputValidation("bgColorChange", this.state.bgColor);});
  }

  handleTextColorChange(event) {
    this.setState({textColor: event.target.value}, ()=>{this.inputValidation("textColorChange", this.state.textColor);});
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
    console.log(this.inputValidation("templateOutput", "placeholder"));
    if(this.inputValidation("templateOutput", "placeholder")) {
      this.setState({codeOutput: this.state.editedTemplate});
    } else {
      alert("Please fill all input fields");
    }
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

    if(this.state.options.length > 0) {
      this.state.options.forEach((option)=>{
        switch(option) {
          case "bgColor":
            showOptions.showBgColor = true;
            break;
          case "textColor":
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
    }

    return (
      <div>
        <form>

          <select value={this.state.templateChoosen} onChange={this.handleTemplateChange} >
            <option value="natBannerDesktop" >Naturalizer (no link)</option>
            <option value="natBannerDesktopLinked" >Naturalizer (link)</option>
            <option value="drsBanner" >Dr. Scholl's</option>
          </select><br/>

          {showOptions.showBgColor &&
          <div>
            Background Color:
            <input type="text" value={this.state.bgColor} onChange={this.handleBgColorChange} />
          </div>}
          
          {showOptions.showTextColor &&
          <div>
            Text Color:
            <input type="text" value={this.state.textColor} onChange={this.handleTextColorChange} />
          </div>}
          
          {showOptions.showBannerCopy &&
          <div>
            Banner Copy:
            <input type="text" value={this.state.bannerCopy} onChange={this.handleBannerCopyChange} />
          </div>}

          {showOptions.showPopHeaderCopy &&
          <div>
            Pop Header Copy:
            <input type="text" value={this.state.popHeaderCopy} onChange={this.handlePopHeaderCopyChange} />
          </div>}

          {showOptions.showDisclaimerCopy &&
          <div>
            Disclaimer:
            <input type="text" value={this.state.disclaimerCopy} onChange={this.handleDisclaimerCopyChange} />
          </div>}
          
          {showOptions.showLinkURL && 
          <div>
            Link URL:
            <input type="text" value={this.state.linkURL} onChange={this.handleLinkURLChange} />
          </div>}

        </form>

        <Preview templatePrev={templateObj[this.state.templateChoosen].template} />

        <form onSubmit={this.handleSubmit}>

          <textarea value={this.state.codeOutput} />
          <input type="submit" value="Get Code" />

        </form>

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
