(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, self=this;


  stack1 = depth0;
  stack1 = self.invokePartial(partials.header, 'header', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<div data-role=\"content\">\r\n	";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.list, 'list', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.footer, 'footer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;});
templates['login'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  stack1 = depth0;
  stack1 = self.invokePartial(partials.header, 'header', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<div data-role=\"content\" class=\"login\">			\r\n        <div class=\"ui-body\" >\r\n                \r\n                <form id=\"loginform\">\r\n                <div data-role=\"fieldcontain\" class=\"ui-hide-label\">\r\n                        <input type=\"text\"  class=\"ui-corner-none\" name=\"username\"  value=\"\" placeholder=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "login.username", {hash:{}}) : helperMissing.call(depth0, "t", "login.username", {hash:{}});
  buffer += escapeExpression(stack1) + "\"/>\r\n                </div>\r\n                <div data-role=\"fieldcontain\" data-corners=\"false\" class=\"ui-hide-label\">\r\n                        <input type=\"text\" class=\"ui-corner-none\" name=\"password\" value=\"\" placeholder=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "login.password", {hash:{}}) : helperMissing.call(depth0, "t", "login.password", {hash:{}});
  buffer += escapeExpression(stack1) + "\"/>\r\n                </div>\r\n                </form>\r\n                <button type=\"submit\" data-ajax=\"false\" id=\"login-btn\" data-corners=\"false\" data-theme=\"b\" name=\"submit\" value=\"submit-value\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "login.login_btn", {hash:{}}) : helperMissing.call(depth0, "t", "login.login_btn", {hash:{}});
  buffer += escapeExpression(stack1) + "</button>\r\n                \r\n        </div>\r\n</div>";
  return buffer;});
templates['shared/backbtn'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<button data-role=\"button\" id=\"back-btn\" data-icon=\"arrow-l\" class=\"ui-btn-left\" >";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "shared.backbtn", {hash:{}}) : helperMissing.call(depth0, "t", "shared.backbtn", {hash:{}});
  buffer += escapeExpression(stack1) + "</button>";
  return buffer;});
templates['shared/footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div data-role=\"footer\" data-position=\"fixed\" data-theme=\"b\"><h1>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "shared.footer", {hash:{}}) : helperMissing.call(depth0, "t", "shared.footer", {hash:{}});
  buffer += escapeExpression(stack1) + "</h1></div>";
  return buffer;});
templates['shared/header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        	";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.backbtn, 'backbtn', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		<div class=\"ui-btn-right\">\r\n			";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.language, 'language', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n       	";
  return buffer;}

  buffer += "<div data-role=\"header\" data-position=\"fixed\" data-theme=\"b\" class=\"grid\">\r\n       	";
  stack1 = depth0.isback;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        \r\n        <h1>";
  stack1 = depth0.headertitle;
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "t", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</h1>\r\n        \r\n        ";
  stack1 = depth0.ismenu;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;});
templates['shared/language'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<select  name=\"language\" id=\"language\">\r\n        <option ";
  foundHelper = helpers.selectedlang;
  stack1 = foundHelper ? foundHelper.call(depth0, "en", {hash:{}}) : helperMissing.call(depth0, "selectedlang", "en", {hash:{}});
  buffer += escapeExpression(stack1) + " value=\"en\">English</option>\r\n        <option ";
  foundHelper = helpers.selectedlang;
  stack1 = foundHelper ? foundHelper.call(depth0, "fr", {hash:{}}) : helperMissing.call(depth0, "selectedlang", "fr", {hash:{}});
  buffer += escapeExpression(stack1) + "  value=\"fr\">French</option>\r\n</select>";
  return buffer;});
templates['shared/list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n		<li>\r\n			<img src=\"";
  stack1 = depth0.img;
  foundHelper = helpers.albumimage;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "albumimage", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "\" />\r\n			<h3>";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\r\n			<p>";
  foundHelper = helpers.desc;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.desc; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</p>\r\n		</li>\r\n	";
  return buffer;}

  buffer += "<ul data-role=\"listview\" style=\"margin:0px;\">\r\n	";
  stack1 = depth0.list;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>  ";
  return buffer;});
templates['shared/menubtn'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return " <button data-role=\"button\" id=\"menu-btn\" class=\"ui-btn-right\" data-icon=\"grid\" data-iconpos=\"notext\">Button element</button>";});
})();