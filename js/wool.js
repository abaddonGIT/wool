/******************************************************
 * Copyright 2013 by Abaddon <abaddongit@gmail.com>
 * @author Abaddon <abaddongit@gmail.com>
 * @version 1.0.0
 * ***************************************************/
/*global window, $, jQuery, document */
(function () {
    var Wool = {
        render: undefined,
        repDelimeters: /\{\{=([\s\S]+?)\}\}/g,
        ventDelimeters: /\{\{([\s\S]+?)\}\}/g
    };
    /*
    * @param tpl {String} код шаблона
    * @param data {Object} данные замены
    */
    Wool.render = function (tpl, data) {
        var str = tpl;
    }
});