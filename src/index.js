const getType = params => {
    return Object.prototype.toString.call(params).slice(8, -1).toLowerCase();
};

const isString = value => {
    return getType(value) === 'string';
};

const isNumber = value => {
    return getType(value) === 'number';
};

const isBoolean = value => {
    return getType(value) === 'boolean';
};

const isNull = value => {
    return getType(value) === 'null';
};

const isUndefined = value => {
    return getType(value) === 'undefined';
};

const isObject = value => {
    return getType(value) === 'object';
};

const isArray = value => {
    return getType(value) === 'array';
};

const isFunction = value => {
    return getType(value) === 'function';
};

module.exports = {
    getType,
    isString,
    isNumber,
    isBoolean,
    isNull,
    isUndefined,
    isObject,
    isArray,
    isFunction
};
