import babel from 'rollup-plugin-babel';

export default { // eslint-disable-line import/no-default-export
    input: 'build/es2018/module.js',
    output: {
        file: 'build/es5/bundle.js',
        format: 'umd',
        name: 'workerTimersWorker'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            plugins: [
                '@babel/plugin-external-helpers',
                '@babel/plugin-transform-runtime'
            ],
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false
                    }
                ]
            ],
            runtimeHelpers: true
        })
    ]
};
