//helper functions


let editTemplate = (template, options, templateState) => {
	let editedTemplate = template;
	options.forEach((option)=> {
		let regex = new RegExp("\{{2}"+option+"\}{2}","g");
		editedTemplate = editedTemplate.replace(regex, templateState[option]);
	});

	return (editedTemplate);
}


export default editTemplate;




