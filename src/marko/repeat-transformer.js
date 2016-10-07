'use strict';

module.exports = function transform(el, context) {
    let repeat = el.getAttribute('repeat');
    if (!repeat) {
        return;
    }

    var arg = repeat.argument;
    if (!arg) {
        return;
    }

    el.removeAttribute('repeat');

    var builder = context.builder;
    var toExpression = builder.parseExpression(arg);

    var forRangeNode = builder.forRange('__repeatIndex', builder.literal(1), toExpression);
    el.wrapWith(forRangeNode);
};