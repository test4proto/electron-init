const path = require("path");

const defaultConf = env => ({
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
});

module.exports = (env = {}) => {
    return [
        {
            name: "renderer",
            target: "electron-renderer",
            ...defaultConf(env),
            entry: "./src/renderer",
            mode: "development",
            devtool: "source-map",
            output: {
                path: path.join(__dirname, "public"),
                filename: "renderer.js",
            },
        },
        {
            name: "main",
            target: "electron-main",
            ...defaultConf(env),
            entry: "./src/main",
            mode: "development",
            devtool: "source-map",
            output: {
                path: path.join(__dirname),
                filename: "main.js",
            },
        },
    ];
};
