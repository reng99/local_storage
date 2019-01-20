const rollup = require('rollup');
const path = require('path');

const inputOptions ={
    input: path.join(__dirname, '../index.js')
};

const outputOptions ={
    file: path.join(__dirname, '../dist/localstorage.js'),
    format: "iife",
    name: "r"
};

async function build() {
    const bundle = await rollup.rollup(inputOptions);

    console.log(bundle.watchFiles); 
    const { output } = await bundle.generate(outputOptions);

    for (const chunkOrAsset of output) {
        if (chunkOrAsset.isAsset) {
            console.log('Asset', chunkOrAsset);
        } else {
            console.log('Chunk', chunkOrAsset.modules);
        }
    }

    // or write the bundle to disk
    await bundle.write(outputOptions);
}

build();