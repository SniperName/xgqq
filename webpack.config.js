/**
 * Created by Admini on 2016/8/22.
 */
module.exports={
    entry:'./dev-entry.js',
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    devtool:'source-map',
    module:{
        loaders:[
            {test: /\.js$/, loader: 'babel'}
        ]
    }
}
