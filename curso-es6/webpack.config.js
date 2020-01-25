module.exports = {
    // Propriedade obrigatória
    // Aponta para o aruivo principal
    entry: './main.js',
    // Aponta para qual lugar e qual arquivo 
    // o código convertido é enviado
    output: {
        path: __dirname, 
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}