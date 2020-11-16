module.exports = {
    plugins: {

        // 因为vue中默认就开启了这个插件，如果这里再写，就会报错
        // 'autoprefixer': {
        //     browsers: ['Android >= 4.0', 'iOS >= 8']
        // },
        'postcss-pxtorem': {
            rootValue({ file }) {
                return file.indexOf('vant') != -1 ? 37.5 : 75
            },
            propList: ['*']
        }
    }
}