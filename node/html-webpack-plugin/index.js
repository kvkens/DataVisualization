{
    entry: 'index.js',
        output: {
        path: 'dist',
            filename: 'index_bundle.js',
                hash: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'assets/admin.html'
        })
    ]
}