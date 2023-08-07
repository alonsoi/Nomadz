const path=require("path")
module.exports ={
    mode: "development",
    entry: "./app/assets/Scripts/Apps.js",
    output:{
        filename: "bundled.js",
        path: path.resolve(__dirname,"app")
    }
}