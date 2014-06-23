'use strict';

/**
 * Require dependencies
 */
var q = require('q');

/**
 *
 * @param func
 * @param params
 * @param context
 * @returns {q.promise}
 */
function promise(func, params, context) {
    var defer = q.defer();

    function callback() {
        return defer.resolve(Array.prototype.slice.call(arguments, 0));
    }

    func.apply(context, params.concat([callback]));

    return defer.promise;
}

/**
 * Prepare parameters for using it to call
 * @param params
 * @returns {array}
 */
function prepareParameters(params) {
    if (params instanceof Array) {
        return params;
    }

    if (params === undefined) {
        return [];
    }

    return [params];
}

/**
 * Execute array of functions and return all as promises.
 * @param funcs
 * @returns {[q.promise]}
 */
function promiseAll(funcs) {
    if (funcs instanceof Array === false) {
        throw new Error('function objects given to method `all` must be of type array');
    }

    return funcs.map(function(func) {
        return promiseIt(func.func, func.params, func.context);
    });
}

/**
 *
 * @param func
 * @param params
 * @param context
 * @returns {q.promise}
 */
function promiseIt(func, params, context) {
    // If specific context was not given - use global scope
    context = context || null;

    return promise(func, prepareParameters(params), context);
}

/**
 *
 * @param {[{ func: function, params: array|*, context: object }]} functions
 * @returns {[q.promise]}
 */
promiseIt.all = function(functions) {
    return q.allSettled(promiseAll(functions));
};

module.exports = promiseIt;
