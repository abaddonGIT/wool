wool
====

Крохотный шаблонизатор для js

{{}} - обычные переменные.

Пример:

var tpl = "Привет {{w.bro}}";

var t = Wool.render(tpl);

console.log(t({'bro':'Гриня'}));


{%? test %} {%??%} {%?%} - сравнение.

Пример:

var tpl = "{%?bro%} Привет {{w.bro}}. {%??%} Что-то пошло не так{%?%}";

var t = Wool.render(tpl);

console.log(t({'bro':'Гриня'}));

{% for(var prop in w) { %}<div>{{prop}}</div>{% } %} - цикл

Пример:

var tpl = "{% for(var prop in w) { %}<div>{{prop}}</div>{% } %}";

var t = Wool.render(tpl);

console.log(t({"name":"Jake"}));
