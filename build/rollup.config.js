module.exports = (options) => {
    const { input, fileName, name} = options;
    return {
        input: {
            input
        },
        output: {
            file: fileName,
            format: "iife",
            name: name || 'localstoragejs'
        }
    };
};