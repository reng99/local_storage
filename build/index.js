const rollup = require("rollup");
const path = require("path");
const configFactory = require("./rollup.config");

async function build(options){
    const bundle = await rollup.rollup(options.input);
    await bundle.write(options.output);
    console.log("build end");
}

(async () => {
    try {
        let inputFilePath = path.join(__dirname, '../index.js');
        let fileNamePath = path.join(__dirname, '../dist/localstorage.js');
        build(configFactory({
            input: inputFilePath,
            fileName: fileNamePath,
            name: 'r'
        }));
    } catch(e){
        console.log(e);
    }
})();