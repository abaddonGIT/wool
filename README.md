wool
====

Крохотный шаблонизатор для js

{{}} - обычные переменные.

Пример:
<code>
var tpl = "Привет {{w.bro}}";
var t = Wool.render(tpl);
console.log(t({'bro':'Гриня'}));
</code>

{%? test %} {%??%} {%?%} - сравнение.

Пример:
<code>
var tpl = "{%?bro%} Привет {{w.bro}}. {%??%} Что-то пошло не так{%?%}";
var t = Wool.render(tpl);
console.log(t({'bro':'Гриня'}));
</code>
{% for(var prop in w) { %}<div>{{prop}}</div>{% } %} - цикл

Пример:
<code>
var tpl = "{% for(var prop in w) { %}<div>{{prop}}</div>{% } %}";
var t = Wool.render(tpl);
console.log(t({"name":"Jake"}));
</code>
