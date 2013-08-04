/******************************************************
 * Copyright 2013 by Abaddon <abaddongit@gmail.com>
 * @author Abaddon <abaddongit@gmail.com>
 * @version 1.0.0
 * ***************************************************/
/*global window, $, jQuery, document */
(function () {
    "use strict";
    var Wool = {
        temp: undefined,
        render: undefined,
        repDelimeters: /\{\{=([\s\S]+?)\}\}/g,
        ventDelimeters: /\{\{([\s\S]+?)\}\}/g,
        condiDelimeters: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
        name: 'it'
    };

    (function(){
      return this || (0,eval)('this');
    }()).Wool = Wool;

    var startend = {
		append: { start: "'+(",      end: ")+'",      endencode: "||'').toString().encodeHTML()+'" },
		split:  { start: "';out+=(", end: ");out+='", endencode: "||'').toString().encodeHTML();out+='"}
	}, skip = /$^/;

    /*
    * @param tpl {String} код шаблона
    * @param data {Object} данные замены
    */
    Wool.temp = function (tpl, data) {
        var str = tpl, cse = Wool.append ? startend.append : startend.split;

        str = ("var out='" + str
                .replace(Wool.repDelimeters || skip, function (m, code) {
                    console.log(m);
                    return cse.start + unescape(code) + cse.end;
                })
                .replace(Wool.condiDelimeters || skip, function(m, elsecase, code) {
				    return elsecase ?
					(code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") :
					(code ? "';if(" + unescape(code) + "){out+='" : "';}out+='")
			    })
                .replace(Wool.ventDelimeters || skip, function(m, code) {
				    return "';" + unescape(code) + "out+='";
			    }) + "'; return out;");

                try {
			        return new Function(Wool.name, str);
		        } catch (e) {
			        if (typeof console !== 'undefined') console.log("Could not create a template function: " + str);
			        throw e;
		        }

        //return str;


    }
}());