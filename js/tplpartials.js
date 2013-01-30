define(['handlebars', "i18n"],function(hbs, i18next){
	hbs.registerPartial("header", hbs.getTemplate('shared/header'));
	hbs.registerPartial("menubtn", hbs.getTemplate('shared/menubtn'));
	hbs.registerPartial("backbtn", hbs.getTemplate('shared/backbtn'));
	hbs.registerPartial("footer", hbs.getTemplate('shared/footer'));
	hbs.registerPartial("list", hbs.getTemplate('shared/list'));
	hbs.registerPartial("language", hbs.getTemplate('shared/language'));
	
	/**
	 * Alternative for partials using helper concept 
	 */
	Handlebars.registerHelper('partials', function(templateName, backbtn, menubtn){
		var html = hbs.getTemplate(templateName,  backbtn, menubtn)(this);
		return new hbs.SafeString(html);
	});
	
	Handlebars.registerHelper('t', function(i18n_key) {
		var result = i18next.t(i18n_key);
		return new Handlebars.SafeString(result);
	});
	
});
