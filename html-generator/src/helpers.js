//helper functions

/*********************

Main function will update the original template with default/inputted values for all fields

**********************/

let editTemplate = (template, options, templateState) => {
	let editedTemplate = template;
	options.forEach((option)=> {
		let regex = new RegExp("\{{2}"+option+"\}{2}","g");
		editedTemplate = editedTemplate.replace(regex, templateState[option]);
	});
	//console.log(newTemplate);

	return (editedTemplate);
}


export default editTemplate;




/*************

let components = {

  testComponent: {
    options: {
      background: {
        value: "#ab688e"
      }
    },
    code: `<div style="width: 500px; height: 50px; background:{{background}};"></div>`
  }
}

//document.getElementById('main').innerHTML = components.testComponent.code;

let inject = (testComponent,property) => {
  console.log(components.testComponent.code.match(/\{{2}background\}{2}/));

  var regex = new RegExp("\{{2}"+property+"\}{2}");
  console.log(regex);

  var propString = testComponent.code.match(regex)[0];
  var prop = propString.match(/\w+/)[0];
  //console.log(prop);

  var code = components.testComponent.code;
  code = code.replace(propString,components.testComponent.options[prop].value);
  //console.log(code);
  document.getElementById('main').innerHTML = code;
}

inject(components.testComponent,"background");

***************/