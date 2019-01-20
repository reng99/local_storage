const uglify = require('rollup-plugin-uglify').uglify;

module.exports = (options) => {
    const { input, fileName, name} = options;
    return {
        input: {
            input,
            plugins: [
                uglify()
            ]
        },
        output: {
            file: fileName,
            format: "iife",
            name: name || 'localstoragejs'
        }
    };
};