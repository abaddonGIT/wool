/******************************************************
 * Copyright 2013 by Abaddon <abaddongit@gmail.com>
 * @author Abaddon <abaddongit@gmail.com>
 * @version 1.0.0
 * ***************************************************/

(function () {
    "use strict";
    var Wool = {
        config: {
            repDelimeters: /\{\{([\s\S]+?)\}\}/g,
            ventDelimeters: /\{\%([\s\S]+?)\%\}/g,
            condiDelimeters: /\{\%\?(\?)?\s*([\s\S]*?)\s*\%\}/g,
            st: "'+(",
            en: ")+'",
            skip: /$^/
        }
    };
    //Это черная магия (делаем объект глобальным)
    (function () {
        return this || (0, eval)('this');
    } ()).Wool = Wool;

    /*
    * @param tpl {String} код шаблона
    * @param data {Object} данные замены
    */
    Wool.render = function (tpl, c) {
        var str = tpl, c = c || Wool.config;

        str = ("var out='" + str
                .replace(c.repDelimeters || c.skip, function (m, code) {//обработка обычных переменных
                    return c.st + unescape(code) + c.en;
                })
                .replace(c.condiDelimeters || c.skip, function (m, elsecase, code) {//обработка условий
                    return elsecase ?
					(code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") :
					(code ? "';if(" + unescape(code) + "){out+='" : "';}out+='")
                })
                .replace(c.ventDelimeters || c.skip, function (m, code) {//обработка цикла
                    return "';" + unescape(code) + "out+='";
                }) + "'; return out;");

        //тут создаем новую функцию в качестве переменных которой выступает преобразованный шаблон и объект параметров для замены
        try {
            return new Function('w', str);
        } catch (e) {
            if (typeof console !== 'undefined') console.log("Произошла печалька. Не могу создать ф-ю из строки" + str);
            throw e;
        }
    }
} ());